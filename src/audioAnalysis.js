/* ============================================================================
 * SAMSEN-45 — Beat / BPM / mood analysis engine
 *
 * Independent, composable audio signals built on top of the Web Audio API:
 *   - beatEvent        fast onset trigger (kick/bass spike), via a dedicated
 *                       fftSize-2048 AnalyserNode isolating the ~20-150Hz band
 *   - intensity         slow 0..1 "mood" level, smoothed RMS (meyda)
 *   - spectralCentroid  slow 0..1 "brightness" level, smoothed (meyda)
 *   - bpm / bpmStable   continuous tempo estimate (realtime-bpm-analyzer)
 *
 * These are exposed separately (not blended) so callers can wire fast
 * triggers (flashes, pulses) to beatEvent while driving slow-moving visuals
 * (palette, particle density, background motion) off intensity/centroid.
 *
 * Usage (see main.js):
 *   const engine = await createAudioAnalysis(audioCtx);
 *   engine.connectSource(someAudioNode);   // call again on mic<->file swaps
 *   engine.onBeat((strength, t) => { ... });
 *   // each animation frame:
 *   engine.update(dt, t);
 *   engine.intensity / engine.bpm / engine.bpmStable / engine.spectralCentroid
 * ==========================================================================*/

import Meyda from 'meyda';
import { createRealtimeBpmAnalyzer, getBiquadFilter } from 'realtime-bpm-analyzer';

/* ---------------------------------------------------------------------------
 * Tunable constants — retune feel here, nowhere else.
 * ------------------------------------------------------------------------- */

// Fast beat/onset detector (dedicated analyser, isolates the kick/bass band).
const BEAT_FFT_SIZE = 2048;          // finer bins than the main 512-fft analyser
                                       // -> ~21.5Hz/bin @44.1kHz, enough to isolate 20-150Hz cleanly
const BEAT_SMOOTHING = 0.35;          // low smoothing so transients aren't smeared (matches main analyser)
const BEAT_BAND_LO_HZ = 20;
const BEAT_BAND_HI_HZ = 150;
const BEAT_ROLLING_WINDOW_SEC = 1.0;  // "recent average" window the spike is compared against
const BEAT_SPIKE_THRESHOLD = 1.3;     // instant energy must exceed rollingAvg * this to fire
const BEAT_ABS_FLOOR = 0.05;          // absolute energy floor — stops room-noise firing when rollingAvg ~ 0
const BEAT_MIN_INTERVAL_SEC = 0.15;   // debounce: one hit can't fire twice inside this window (~400bpm ceiling)

// Mood/energy tracking (meyda RMS + spectral centroid on the full spectrum).
const MEYDA_BUFFER_SIZE = 1024;       // power of 2; ~43 callbacks/sec @44.1kHz
const INTENSITY_SMOOTH_SEC = 4;       // slow smoothing window for the 0..1 intensity signal
const SPECTRAL_CENTROID_SMOOTH_SEC = 4;
const SPECTRAL_CENTROID_NORMALIZE_HZ = 6000; // divides raw centroid Hz into a rough 0..1 "brightness"

// BPM tracking (realtime-bpm-analyzer, AudioWorklet-based).
const BPM_OPTIONS = {
  continuousAnalysis: true,   // keep tracking through a whole set, not just one drop
  stabilizationTime: 15000,   // ms of history before a lock is called "stable" (electronic-music default)
  muteTimeInIndexes: 10000,   // min samples between accepted peaks, avoids double-counting one hit
};

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/**
 * Creates one audio-analysis engine bound to an AudioContext. Async because
 * the BPM analyzer's AudioWorklet module has to load before it can be wired
 * into the graph.
 */
export async function createAudioAnalysis(audioCtx) {
  // --- fast beat/onset detector -------------------------------------------
  const beatAnalyser = audioCtx.createAnalyser();
  beatAnalyser.fftSize = BEAT_FFT_SIZE;
  beatAnalyser.smoothingTimeConstant = BEAT_SMOOTHING;
  const freqData = new Uint8Array(beatAnalyser.frequencyBinCount);
  const binHz = audioCtx.sampleRate / 2 / beatAnalyser.frequencyBinCount;

  let rollingAvg = 0;
  let lastBeatAt = -10;
  const beatListeners = [];

  function bandAvg(loHz, hiHz) {
    const lo = Math.max(0, Math.floor(loHz / binHz));
    const hi = Math.min(freqData.length - 1, Math.ceil(hiHz / binHz));
    let sum = 0, n = 0;
    for (let i = lo; i <= hi; i++) { sum += freqData[i]; n++; }
    return n ? sum / n / 255 : 0;
  }

  // --- mood/energy tracking (meyda) ---------------------------------------
  let meydaAnalyzer = null;
  let rms = 0;
  let intensity = 0;
  let spectralCentroidHz = 0;
  let spectralCentroid = 0;
  let lastMeydaT = audioCtx.currentTime;

  function onMeydaFeatures(features) {
    const t = audioCtx.currentTime;
    const dt = Math.max(0, t - lastMeydaT);
    lastMeydaT = t;
    rms = features.rms || 0;
    const intensityAlpha = Math.min(dt / INTENSITY_SMOOTH_SEC, 1);
    intensity += (clamp(rms, 0, 1) - intensity) * intensityAlpha;
    spectralCentroidHz = features.spectralCentroid || 0;
    const centroidTarget = clamp(spectralCentroidHz / SPECTRAL_CENTROID_NORMALIZE_HZ, 0, 1);
    const centroidAlpha = Math.min(dt / SPECTRAL_CENTROID_SMOOTH_SEC, 1);
    spectralCentroid += (centroidTarget - spectralCentroid) * centroidAlpha;
  }

  // --- BPM tracking (realtime-bpm-analyzer) -------------------------------
  const bpmAnalyzer = await createRealtimeBpmAnalyzer(audioCtx, BPM_OPTIONS);
  const bpmLowpass = getBiquadFilter(audioCtx); // isolates the beat-carrying low end for the worklet
  let bpm = 0;
  let bpmStable = false;

  bpmAnalyzer.on('bpm', ({ bpm: candidates }) => {
    if (candidates && candidates.length) {
      bpm = candidates[0].tempo;
      bpmStable = false;
    }
  });
  bpmAnalyzer.on('bpmStable', ({ bpm: candidates }) => {
    if (candidates && candidates.length) {
      bpm = candidates[0].tempo;
      bpmStable = true;
    }
  });

  /** (Re)connect the live audio source — call again whenever main.js swaps
   *  between mic and file input. Fans the same node out to every analyser;
   *  none of this is destructive to other connections the caller makes. */
  function connectSource(node) {
    node.connect(beatAnalyser);
    node.connect(bpmLowpass);
    bpmLowpass.connect(bpmAnalyzer.node);
    if (meydaAnalyzer) {
      meydaAnalyzer.setSource(node);
    } else {
      meydaAnalyzer = Meyda.createMeydaAnalyzer({
        audioContext: audioCtx,
        source: node,
        bufferSize: MEYDA_BUFFER_SIZE,
        featureExtractors: ['rms', 'spectralCentroid'],
        callback: onMeydaFeatures,
      });
      meydaAnalyzer.start();
    }
  }

  /** Call once per animation frame. Polls the beat analyser and fires
   *  onBeat listeners; meyda/bpm update themselves via their own callbacks. */
  function update(dt, t) {
    beatAnalyser.getByteFrequencyData(freqData);
    const instant = bandAvg(BEAT_BAND_LO_HZ, BEAT_BAND_HI_HZ);
    rollingAvg += (instant - rollingAvg) * Math.min(dt / BEAT_ROLLING_WINDOW_SEC, 1);
    const threshold = Math.max(BEAT_ABS_FLOOR, rollingAvg * BEAT_SPIKE_THRESHOLD);
    if (instant > threshold && t - lastBeatAt > BEAT_MIN_INTERVAL_SEC) {
      lastBeatAt = t;
      const strength = clamp(0.35 + (instant / threshold - 1) * 0.65, 0.35, 1);
      for (const cb of beatListeners) cb(strength, t);
    }
  }

  /** Register a fast-beat callback: cb(strength 0..1, t). Returns an
   *  unsubscribe function. */
  function onBeat(cb) {
    beatListeners.push(cb);
    return () => {
      const i = beatListeners.indexOf(cb);
      if (i >= 0) beatListeners.splice(i, 1);
    };
  }

  return {
    connectSource,
    update,
    onBeat,
    get rms() { return rms; },
    get intensity() { return intensity; },
    get spectralCentroid() { return spectralCentroid; },
    get bpm() { return bpm; },
    get bpmStable() { return bpmStable; },
  };
}
