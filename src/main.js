/* ============================================================================
 * SAMSEN-45 — Cinematic 3D Audio-Reactive Music Visualizer
 * Three.js + GSAP.  All modules are local ESM (no CDN / <script> tags).
 *
 * Pipeline:  audio input (mic | file) -> AnalyserNode -> band split (Hz-derived)
 *            -> GSAP-smoothed vectors -> style director (16 formations, morphs
 *            on song/beat changes) -> particle engine + logo stack + camera
 *            -> EffectComposer (afterimage trails + neon bloom).
 *            In parallel, audioAnalysis.js runs a dedicated beat/BPM/mood
 *            engine (meyda + realtime-bpm-analyzer) that drives the fast
 *            kick trigger and tempo-grid classification below.
 * ==========================================================================*/

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { gsap } from 'gsap';
import { FORMATIONS } from './formations.js';
import { createAudioAnalysis } from './audioAnalysis.js';
import '@fontsource/orbitron/900.css'; // self-hosted (no CDN) — futuristic display face for the word satellite

const WORD_FONT_SIZE = 160;
const WORD_FONT = `900 ${WORD_FONT_SIZE}px "Orbitron", Impact, "Arial Black", sans-serif`;

/* ---------------------------------------------------------------------------
 * 0. Theme constants (mirrors styles.css)
 * ------------------------------------------------------------------------- */
const VOID = new THREE.Color('#0a051b');
const ACCENT_A = new THREE.Color('#ff007f'); // electric crimson / hot pink
const ACCENT_B = new THREE.Color('#66ff33'); // electric neon green
const WHITE = new THREE.Color('#ffffff');

const PARTICLE_COUNT = 40000;
// Base-aware asset paths: BASE_URL is '/' in dev and './' in the production
// build (vite base './'), so these resolve correctly on a GitHub Pages
// subpath (/repo/) as well as a domain root. Absolute '/resource/...' paths
// 404 on Pages — the site does not live at the domain root there.
const RES = import.meta.env.BASE_URL;
const LOGO_PINK_URL = RES + 'resource/logo.png';
const LOGO_GREEN_URL = RES + 'resource/logo-green.png';
const WORD_LIST = [
  'REBOOT', 'REUNITE', 'RESTART', 'REVOLUTION',
  'REBIRTH', 'RESONATE', 'REWIRE', 'RENEW',
  'RECYCLE', 'AWAKEN', 'PULSE', 'INFINITE', 'DJ MELLOW',
  'REUNION', 'REPLAY', 'REMEMBER', 'RECONNECT',
  'COLLECT THE DOTS', 'RECHARGE', 'SAMSEN45 FOREVER',
];

/* ---------------------------------------------------------------------------
 * 1. Renderer / scene / camera
 * ------------------------------------------------------------------------- */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(VOID, 1);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(VOID, 0.018);

const camera = new THREE.PerspectiveCamera(
  62,
  window.innerWidth / window.innerHeight,
  0.1,
  400
);
camera.position.set(0, 0, 46);
camera.lookAt(0, 0, 0);

/* Root group we spin slowly for extra depth. */
const world = new THREE.Group();
scene.add(world);

/* ---------------------------------------------------------------------------
 * 2. Post-processing — motion-blur trails + neon bloom
 * ------------------------------------------------------------------------- */
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const afterimagePass = new AfterimagePass();
afterimagePass.uniforms['damp'].value = 0.6; // how long light-trails persist (lowered
                                              // from 0.8 — every-beat flashing left the
                                              // trails overlapping into a persistent blur)
composer.addPass(afterimagePass);

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.55, // strength (base — pulses on kicks; lowered from 0.7 to calm the baseline
        //          glow now that beats flash continuously)
  0.6,  // radius
  0.22  // threshold (only bright cores bloom -> neon colour survives, no white-out)
);
const BLOOM_BASE = bloomPass.strength;
composer.addPass(bloomPass);

composer.addPass(new OutputPass());

/* ---------------------------------------------------------------------------
 * 3. Canvas-generated textures (zero external image deps)
 * ------------------------------------------------------------------------- */
function makeRadialSprite(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)', mid = 0.25) {
  const size = 128;
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0.0, inner);
  g.addColorStop(mid, inner);
  g.addColorStop(1.0, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const particleSprite = makeRadialSprite();
const glowSprite = makeRadialSprite('rgba(255,255,255,0.9)', 'rgba(255,255,255,0)');
// Dark contrast disc — the "do not blend the logo away" guarantee.
const haloSprite = makeRadialSprite('rgba(10,5,27,1)', 'rgba(10,5,27,0)', 0.52);

/**
 * Render a word as a white, tintable alpha-mask texture (opaque glyphs on a
 * transparent canvas) — same contract loadInkTexture used to produce from a
 * PNG, but drawn straight from a string so the orbiting satellite word list
 * is plain text instead of external word-art image assets.
 */
function makeTextTexture(text) {
  const measureCtx = document.createElement('canvas').getContext('2d');
  measureCtx.font = WORD_FONT;
  const padX = WORD_FONT_SIZE * 0.3;
  const width = Math.ceil(measureCtx.measureText(text).width) + padX * 2;
  const height = Math.ceil(WORD_FONT_SIZE * 1.35);
  const cv = document.createElement('canvas');
  cv.width = width; cv.height = height;
  const ctx = cv.getContext('2d');
  ctx.font = WORD_FONT;
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.userData.aspect = width / height;
  return tex;
}

/* ---------------------------------------------------------------------------
 * 4. Particle engine — one shared 40k buffer, morphable between formations
 * ------------------------------------------------------------------------- */
const N = PARTICLE_COUNT;
const positions = new Float32Array(N * 3);
const colors = new Float32Array(N * 3);

// Stable per-particle randomness (formations regenerate deterministically).
const rnd1 = new Float32Array(N);
const rnd2 = new Float32Array(N);
const rnd3 = new Float32Array(N);
for (let i = 0; i < N; i++) { rnd1[i] = Math.random(); rnd2[i] = Math.random(); rnd3[i] = Math.random(); }

// Motion caches for the ACTIVE formation (cylindrical around its spin axis).
const basePos = new Float32Array(N * 3);
const baseRadius = new Float32Array(N);
const baseAngle = new Float32Array(N);
const baseAxis = new Float32Array(N);
const spinMul = new Float32Array(N);
const turbPhase = new Float32Array(N);
const turbFreq = new Float32Array(N);
const auxA = new Float32Array(N);

// Morph scratch: where we're coming from / going to.
const fromPos = new Float32Array(N * 3);
const fromCol = new Float32Array(N * 3);
const targetPos = new Float32Array(N * 3);
const targetCol = new Float32Array(N * 3);
const pendSpin = new Float32Array(N);
const pendPhase = new Float32Array(N);
const pendFreq = new Float32Array(N);
const pendAux = new Float32Array(N);

const particleGeo = new THREE.BufferGeometry();
particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const PARTICLE_SIZE = 0.34;
// Sparse formations (Double Helix / Geyser / Phoenix) carry an optional
// `sizeScale`; the applied factor eases toward it through morphs so dots don't
// pop-resize on a style switch. See formations.js contract.
// The boost is ramped in by aspect ratio — sparse dots only get lost in the
// empty sides of a WIDE frame, so full sizeScale applies on wide screens and
// tapers to 1x on a narrow/portrait window (where big dots would overwhelm).
const SIZE_ASPECT_NARROW = 1.0; // aspect <= this -> no boost (1x)
const SIZE_ASPECT_WIDE = 1.6;   // aspect >= this -> full sizeScale (16:9=1.78 already counts)
let particleSizeScale = 1;
const particleMat = new THREE.PointsMaterial({
  size: PARTICLE_SIZE,
  map: particleSprite,
  vertexColors: true,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  sizeAttenuation: true,
});

const particles = new THREE.Points(particleGeo, particleMat);
world.add(particles);

const _out = { x: 0, y: 0, z: 0, t: 0, bright: 1, spin: 1, phase: null, freq: null, aux: 0 };
const _c = new THREE.Color();

/** Generate a formation into the target arrays (positions, dimmed colours, caches). */
function bakeTargets(def) {
  for (let i = 0; i < N; i++) {
    _out.x = 0; _out.y = 0; _out.z = 0;
    _out.t = 0.5; _out.bright = 1; _out.spin = 1; _out.phase = null; _out.freq = null; _out.aux = 0;
    def.generate(i, N, _out, rnd1[i], rnd2[i], rnd3[i]);

    const i3 = i * 3;
    targetPos[i3] = _out.x;
    targetPos[i3 + 1] = _out.y;
    targetPos[i3 + 2] = _out.z;

    // Centre dimming: particles crossing the logo zone stay quiet so the
    // logo never blends in, whatever the formation does.
    const d = Math.sqrt(_out.x * _out.x + _out.y * _out.y + _out.z * _out.z);
    const dim = Math.min(Math.max((d - 5) / 7, 0.12), 1) * _out.bright;

    _c.copy(ACCENT_A).lerp(ACCENT_B, _out.t).multiplyScalar(dim);
    targetCol[i3] = _c.r;
    targetCol[i3 + 1] = _c.g;
    targetCol[i3 + 2] = _c.b;

    pendSpin[i] = _out.spin;
    pendPhase[i] = _out.phase == null ? rnd2[i] * Math.PI * 2 : _out.phase;
    pendFreq[i] = _out.freq == null ? 0.6 + rnd3[i] * 1.4 : _out.freq;
    pendAux[i] = _out.aux;
  }
}

/** Commit baked targets as the live formation (rebuild cylindrical caches). */
function commitTargets(def) {
  basePos.set(targetPos);
  spinMul.set(pendSpin);
  turbPhase.set(pendPhase);
  turbFreq.set(pendFreq);
  auxA.set(pendAux);
  const axisZ = def.spinAxis === 'z';
  for (let i = 0; i < N; i++) {
    const i3 = i * 3;
    const x = basePos[i3], y = basePos[i3 + 1], z = basePos[i3 + 2];
    if (axisZ) {
      baseRadius[i] = Math.sqrt(x * x + y * y);
      baseAngle[i] = Math.atan2(y, x);
      baseAxis[i] = z;
    } else {
      baseRadius[i] = Math.sqrt(x * x + z * z);
      baseAngle[i] = Math.atan2(z, x);
      baseAxis[i] = y;
    }
  }
  colors.set(targetCol);
  particleGeo.attributes.color.needsUpdate = true;
  spinAccum = 0;
  flowAccum = 0;
}

/* ---------------------------------------------------------------------------
 * 5. Centre stack — dark halo, glow aura, pink & green logos (auto-contrast)
 * ------------------------------------------------------------------------- */
// In the SCENE root (not `world`): the world group slowly tumbles, and a
// billboarded plane inside a rotating parent drifts edge-on and vanishes.
// At the origin the tumble adds nothing — parenting to the scene keeps the
// logo facing the camera permanently.
const logoGroup = new THREE.Group();
scene.add(logoGroup);

// 5a. Dark halo disc: guarantees contrast behind the logo, always.
const haloMat = new THREE.SpriteMaterial({
  map: haloSprite,
  transparent: true,
  depthWrite: false,
  depthTest: false,
  opacity: 0.85,
  fog: false,
});
const halo = new THREE.Sprite(haloMat);
halo.scale.set(34, 34, 1);
halo.renderOrder = 14;
logoGroup.add(halo);

// 5b. Additive glow aura (bass-reactive, tinted to the active logo variant).
const glowMat = new THREE.SpriteMaterial({
  map: glowSprite,
  color: ACCENT_B.clone(),
  transparent: true,
  depthWrite: false,
  depthTest: false,
  blending: THREE.AdditiveBlending,
  opacity: 0.16,
  fog: false,
});
const GLOW_BASE = 18;
const glow = new THREE.Sprite(glowMat);
glow.scale.set(GLOW_BASE, GLOW_BASE, 1);
glow.renderOrder = 15;
logoGroup.add(glow);

// 5c. Two logo variants; the director crossfades to whichever CONTRASTS with
// the style's centre hue (pink centre -> green logo, and vice versa).
const logos = { pink: null, green: null }; // { mesh, back } (or null if load failed)
let activeVariant = 'green';

/**
 * Bake a dark outline silhouette of the logo art (union of 12 offset stamps,
 * filled void-dark). Rendered just behind the logo it guarantees stroke-level
 * edge contrast on ANY background, however bright the particles get.
 */
function makeOutlineTexture(img) {
  const m = Math.round(Math.max(img.width, img.height) * 0.03);
  const cv = document.createElement('canvas');
  cv.width = img.width + m * 2;
  cv.height = img.height + m * 2;
  const ctx = cv.getContext('2d');
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * Math.PI * 2;
    ctx.drawImage(img, m + Math.cos(a) * m, m + Math.sin(a) * m);
  }
  ctx.globalCompositeOperation = 'source-in';
  ctx.fillStyle = 'rgb(6,3,16)';
  ctx.fillRect(0, 0, cv.width, cv.height);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return { tex, growW: cv.width / img.width, growH: cv.height / img.height };
}

function makeLogoMesh(tex, initialOpacity) {
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const aspect = (tex.image && tex.image.width / tex.image.height) || 1;
  const h = 11;

  // Dark outline silhouette behind the artwork.
  const o = makeOutlineTexture(tex.image);
  const back = new THREE.Mesh(
    new THREE.PlaneGeometry(h * aspect * o.growW, h * o.growH),
    new THREE.MeshBasicMaterial({
      map: o.tex, transparent: true, depthWrite: false, depthTest: false,
      blending: THREE.NormalBlending, opacity: initialOpacity * 0.95, fog: false,
    })
  );
  back.renderOrder = 19;
  logoGroup.add(back);

  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    transparent: true,
    depthWrite: false,
    depthTest: false,
    blending: THREE.NormalBlending,
    opacity: initialOpacity,
    fog: false,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(h * aspect, h), mat);
  mesh.renderOrder = 20;
  logoGroup.add(mesh);
  return { mesh, back };
}

const texLoader = new THREE.TextureLoader();
texLoader.load(LOGO_PINK_URL,
  (t) => { logos.pink = makeLogoMesh(t, activeVariant === 'pink' ? 1 : 0); },
  undefined,
  () => console.info('[SAMSEN-45] pink logo missing — continuing without it.'));
texLoader.load(LOGO_GREEN_URL,
  (t) => { logos.green = makeLogoMesh(t, activeVariant === 'green' ? 1 : 0); },
  undefined,
  () => console.info('[SAMSEN-45] green logo missing — continuing without it.'));

function setLogoVariant(variant) {
  activeVariant = variant;
  const show = logos[variant] || logos[variant === 'pink' ? 'green' : 'pink'];
  for (const key of ['pink', 'green']) {
    const pair = logos[key];
    if (!pair) continue;
    const on = pair === show;
    gsap.to(pair.mesh.material, { opacity: on ? 1 : 0, duration: 1.2, ease: 'power2.inOut', overwrite: 'auto' });
    gsap.to(pair.back.material, { opacity: on ? 0.95 : 0, duration: 1.2, ease: 'power2.inOut', overwrite: 'auto' });
  }
  // Aura tint = the FIELD's colour (opposite of the logo variant) so the logo
  // contrasts with its own glow pocket instead of blending into it.
  const accent = variant === 'pink' ? ACCENT_B : ACCENT_A;
  const tint = accent.clone().lerp(WHITE, 0.25);
  gsap.to(glowMat.color, { r: tint.r, g: tint.g, b: tint.b, duration: 1.2, overwrite: 'auto' });
}

/* 5d. Theme-word satellite (REBOOT / REUNITE / ... orbiting outside the logo zone) */
const wordTextures = new Array(WORD_LIST.length).fill(null);
// Draw with the system fallback immediately (never block boot on a font fetch),
// then redraw in Orbitron once it's actually loaded — @font-face fonts pulled in
// via CSS import aren't fetched until something requests them.
WORD_LIST.forEach((w, k) => { wordTextures[k] = makeTextTexture(w); });
document.fonts.load(WORD_FONT).then(() => document.fonts.ready).then(() => {
  WORD_LIST.forEach((w, k) => { wordTextures[k] = makeTextTexture(w); });
  setWord(director.idx, activeVariant); // refresh the currently-shown word onto the new glyphs
});

const wordMat = new THREE.SpriteMaterial({
  transparent: true,
  depthWrite: false,
  depthTest: false,
  opacity: 0,
  color: ACCENT_B.clone(),
  fog: false,
});
const wordSprite = new THREE.Sprite(wordMat);
wordSprite.renderOrder = 13;
wordSprite.visible = false;
scene.add(wordSprite); // in scene root so the world tumble never skews it

function setWord(styleIdx, variant) {
  const tex = wordTextures[styleIdx % wordTextures.length];
  const accent = variant === 'pink' ? ACCENT_A : ACCENT_B;
  gsap.to(wordMat, {
    opacity: 0, duration: 0.5, overwrite: 'auto',
    onComplete: () => {
      if (!tex) { wordSprite.visible = false; return; }
      wordMat.map = tex;
      wordMat.needsUpdate = true;
      wordMat.color.copy(accent).lerp(WHITE, 0.3);
      const h = 3.4;
      wordSprite.scale.set(h * (tex.userData.aspect || 3), h, 1);
      wordSprite.visible = true;
      gsap.to(wordMat, { opacity: 0.42, duration: 1.2 });
    },
  });
}

/* ---------------------------------------------------------------------------
 * 6. Audio architecture — mic OR file, one AnalyserNode, Hz-derived bands
 * ------------------------------------------------------------------------- */
const splash = document.getElementById('splash');
const statusEl = document.getElementById('splash-status');
const brandEl = document.getElementById('brand');
const btnMic = document.getElementById('btn-mic');
const btnFile = document.getElementById('btn-file');
const fileInput = document.getElementById('file-input');
const BRAND_TEXT = brandEl.textContent;

let audioCtx = null;
let analyser = null;
let freqData = null;
let binHz = 0;
let currentSource = null;
let running = false;
let beatEngine = null; // audioAnalysis.js — beat/BPM/mood engine, set once ensureContext() resolves

// Smoothed, normalised audio state (0..1). GSAP eases raw values into these.
const audio = { bass: 0, mids: 0, highs: 0 };
const setBass = gsap.quickTo(audio, 'bass', { duration: 0.09, ease: 'power2.out' });
const setMids = gsap.quickTo(audio, 'mids', { duration: 0.14, ease: 'power2.out' });
const setHighs = gsap.quickTo(audio, 'highs', { duration: 0.1, ease: 'power2.out' });
let energyRaw = 0; // instantaneous, for song-change detection
// Duty cycle of broadband energy over ~1.2s: music holds ~1 (pads/hats fill
// the gaps between kicks); speech and ambient thuds are bursty and stay low.
// This is the "is music actually playing?" signal that gates all flashing.
let musicActivity = 0;

async function ensureContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;             // -> 256 frequency bins
    // Minimal smoothing so kick TRANSIENTS hit the detector within a frame
    // or two of the drum itself (higher values smear the attack and add
    // 50ms+ of lag). GSAP smooths the level signals downstream.
    analyser.smoothingTimeConstant = 0.35;
    freqData = new Uint8Array(analyser.frequencyBinCount);
    // Hz per bin = nyquist / binCount = sampleRate / fftSize (~86 Hz @ 44.1k/512).
    binHz = audioCtx.sampleRate / 2 / analyser.frequencyBinCount;
    // Beat/BPM/mood engine — separate fftSize-2048 analyser + meyda +
    // realtime-bpm-analyzer. Async: the BPM analyzer's AudioWorklet has to
    // load before connectSource() can be called on it.
    beatEngine = await createAudioAnalysis(audioCtx);
    wireBeatEngine(beatEngine);
  }
  return audioCtx.resume();
}

function bandAvg(loHz, hiHz) {
  const lo = Math.max(0, Math.floor(loHz / binHz));
  const hi = Math.min(freqData.length - 1, Math.ceil(hiHz / binHz));
  let sum = 0, n = 0;
  for (let i = lo; i <= hi; i++) { sum += freqData[i]; n++; }
  return n ? sum / n / 255 : 0;
}

function connectSource(node) {
  if (currentSource) {
    try { currentSource.disconnect(); } catch (_) {}
  }
  currentSource = node;
  node.connect(analyser);
  if (beatEngine) beatEngine.connectSource(node);
}

async function startMic() {
  try {
    setStatus('Requesting microphone…');
    await ensureContext();
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, autoGainControl: false, noiseSuppression: false },
    });
    const src = audioCtx.createMediaStreamSource(stream);
    connectSource(src); // NB: mic is not routed to destination (avoids feedback)
    launch('Microphone live · feed the void.');
  } catch (err) {
    setStatus('Mic unavailable — try “Load Audio File”. (' + (err.name || err) + ')', 'error');
  }
}

async function startFile(file) {
  try {
    setStatus('Decoding “' + file.name + '”…');
    await ensureContext();
    const buf = await file.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(buf);
    const src = audioCtx.createBufferSource();
    src.buffer = audioBuffer;
    src.loop = true;
    connectSource(src);
    src.connect(audioCtx.destination); // file playback is audible
    src.start(0);
    launch('Now playing · ' + file.name);
  } catch (err) {
    setStatus('Could not decode that file. Try another. (' + (err.name || err) + ')', 'error');
  }
}

function launch(message) {
  setStatus(message, 'ok');
  running = true;
  director.lastSwitch = clock.elapsedTime;
  gsap.to(splash, {
    duration: 0.9,
    ease: 'power2.inOut',
    onStart: () => splash.classList.add('hidden'),
  });
  gsap.fromTo(camera.position, { z: 90 },
    { z: FORMATIONS[director.idx].camZ, duration: 2.4, ease: 'expo.out' });
}

function setStatus(msg, cls = '') {
  statusEl.textContent = msg;
  statusEl.className = 'splash__status' + (cls ? ' ' + cls : '');
}

btnMic.addEventListener('click', startMic);
btnFile.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => {
  const file = e.target.files && e.target.files[0];
  if (file) startFile(file);
});

/* ---------------------------------------------------------------------------
 * 7. Kick detection — driven by audioAnalysis.js's beat/BPM engine.
 *    beatEngine.onBeat fires on every low-band (20-150Hz) energy spike; we
 *    classify each one against the engine's BPM as ON- or OFF- the tempo
 *    grid, and only let on-grid hits fire the big flashes — stray bassline
 *    hits between beats move the field but never strobe the logo.
 * ------------------------------------------------------------------------- */
const kickState = { pulse: 0 };  // field motion pulse — every detected kick
const orbState = { pulse: 0 };   // orb/bloom FLASH — tempo-locked beats only
const colorState = { mix: 0 };   // 0..1, kick colour-flash amount

let lastStrongBeat = -10;   // phase anchor for the grid — set by on-grid detections AND predictions
let lastDetectedKick = -10; // liveness only — ANY raw onset, on- or off-grid
let nextBeatAt = 0;   // predicted time of the next beat (predictive flashing)
let avgKickStrength = 0.6;
let lastFlashAt = -10;

function classifyOnGrid(t, beatPeriod) {
  if (!beatPeriod) return true; // no BPM lock yet -> treat as on-beat
  const phase = (t - lastStrongBeat) / beatPeriod;
  const nearest = Math.round(phase);
  return nearest >= 1 && Math.abs(phase - nearest) < 0.18;
}

/**
 * Predictive flashing: once beatEngine has a stable BPM lock, fire the flash
 * AT the predicted beat time — zero effective latency, and soft kicks the
 * onset detector misses still flash on the grid. Detections re-anchor the
 * phase. Guards: suspends the moment kicks drop out (breakdown) or energy
 * dies (silence).
 */
function updateBeatPredictor(t) {
  if (!running || !beatEngine || !beatEngine.bpm || !beatEngine.bpmStable) return;
  const beatPeriod = 60 / beatEngine.bpm;
  // Liveness uses ANY raw onset, not just on-grid ones: a live mic reliably
  // MISSES the odd on-grid kick but still emits onsets throughout the music, so
  // gating on on-grid detections alone stalled the grid. Real breakdowns stop
  // ALL onsets (and drop the energy/bass below their floors) — that's what quiets it.
  if (t - lastDetectedKick > beatPeriod * 4) return;
  if (energyRaw < 0.08) return;                    // near-silence
  if (audio.bass < 0.12) return; // no real bass recently -> ambience can't strobe
  if (nextBeatAt <= 0) nextBeatAt = (lastStrongBeat > 0 ? lastStrongBeat : t) + beatPeriod;
  if (t >= nextBeatAt) {
    if (t - nextBeatAt < 0.08) {
      fireBeat(avgKickStrength * 0.9, t); // on time only
      lastStrongBeat = t; // predictions keep the phase anchor fresh so the grid
                          // self-sustains; on-grid detections still re-anchor to the drum
    }
    while (nextBeatAt <= t) nextBeatAt += beatPeriod; // advance, never burst
  }
}
let flashColor = ACCENT_B.clone(); // per style: the accent OPPOSITE its centre
let swirlBoost = 0;

function onKick(strength, onBeat, beatPeriod) {
  const t = clock.elapsedTime;
  lastDetectedKick = t; // any onset (on- or off-grid) proves the music's still running
  // Field motion reacts to every detected kick (musical energy)…
  gsap.to(kickState, {
    keyframes: [
      { pulse: 1, duration: 0.028, ease: 'power4.out' }, // hit NOW
      { pulse: 0, duration: 0.3, ease: 'power2.out' },   // decay
    ],
    overwrite: 'auto',
  });
  swirlBoost = Math.min(swirlBoost + 3.0 * strength, 6);

  // …but the FLASHES fire only on the tempo grid — and each on-grid
  // detection re-anchors the predictor's phase to the actual drum.
  if (!onBeat) return;
  lastStrongBeat = t;
  if (beatPeriod) nextBeatAt = t + beatPeriod;
  fireBeat(strength, t);
}

/** Hook the beat engine's fast onset event into the show's kick pipeline. */
function wireBeatEngine(engine) {
  engine.onBeat((strength, t) => {
    avgKickStrength += (strength - avgKickStrength) * 0.3;
    const beatPeriod = engine.bpm ? 60 / engine.bpm : 0;
    onKick(strength, classifyOnGrid(t, beatPeriod), beatPeriod);
  });
}

/** The beat-flash group (orb, bloom, colour, recoil, dolly, style counter).
 *  Reached from BOTH real detections and the predictor; the gap guard makes
 *  sure one beat slot only ever flashes once. */
function fireBeat(strength, t) {
  // Flashing requires actual MUSIC — sustained broadband energy. Speech,
  // thuds and room ambience are bursty and never reach this duty cycle,
  // so they can trigger nothing here no matter how bass-heavy they are.
  if (musicActivity < 0.65) return;
  const minGap = (beatEngine && beatEngine.bpm) ? (60 / beatEngine.bpm) * 0.45 : 0.2;
  if (t - lastFlashAt < minGap) return;
  lastFlashAt = t;
  gsap.to(orbState, {
    keyframes: [
      { pulse: 1, duration: 0.028, ease: 'power4.out' },
      { pulse: 0, duration: 0.32, ease: 'power2.out' },
    ],
    overwrite: 'auto',
  });
  gsap.to(bloomPass, {
    strength: BLOOM_BASE + 0.3 * strength, // gentler per-flash swell (was 0.6) — every
                                           // beat flashing made the full boost overbearing
    duration: 0.055, ease: 'power4.out', yoyo: true, repeat: 1, overwrite: 'auto',
  });
  gsap.to(colorState, {
    mix: 0.6, duration: 0.07, ease: 'power1.inOut', yoyo: true, repeat: 1, overwrite: 'auto',
  });
  // Centre-orb recoil: a quick twist that ALWAYS settles back to dead level
  // (fromTo + yoyo ends at 0 — the logo can never drift off-angle).
  gsap.fromTo(logoGroup.rotation, { z: 0 }, {
    z: (Math.random() < 0.5 ? -1 : 1) * 0.045 * strength,
    duration: 0.06, ease: 'power3.out', yoyo: true, repeat: 1, overwrite: 'auto',
  });
  gsap.to(camera.position, {
    z: '-=2.2', duration: 0.08, ease: 'power3.out', yoyo: true, repeat: 1, overwrite: false,
  });
  director.onKick(strength);
}

/* ---------------------------------------------------------------------------
 * 8. Style director — auto-switching between the 16 formations
 *    Primary trigger: every 4 bars of beats (16 detected kicks in 4/4).
 *    Also: new-song (>=2s silence then sound) and a 60s no-beat fallback.
 *    Transitions are 1.65s particle morphs.
 * ------------------------------------------------------------------------- */
const morph = { active: false, mix: 0 };
const motion = { ramp: 1 }; // turbulence ramps back in after each morph
let morphTween = null;     // kept so tests/VJs can jump-cut (SAMSEN.skip)

const BEATS_PER_SWITCH = 16; // 4 bars of 4/4

const director = {
  idx: 0,
  bag: [],
  lastSwitch: 0,
  silentFor: 0,
  beats: 0,
  captionTimer: null,

  next() {
    if (this.bag.length === 0) {
      this.bag = FORMATIONS.map((_, k) => k).filter((k) => k !== this.idx);
      for (let i = this.bag.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [this.bag[i], this.bag[j]] = [this.bag[j], this.bag[i]];
      }
    }
    return this.bag.pop();
  },

  dwell(t) { return t - this.lastSwitch; },

  onKick() {
    if (!running || morph.active) return;
    // Count beats; a new style every 4 bars keeps the show phrased to the music.
    this.beats++;
    if (this.beats >= BEATS_PER_SWITCH && this.dwell(clock.elapsedTime) > 4) {
      this.switch('4-bars');
    }
  },

  update(dt, t) {
    if (!running || morph.active) return;
    // New-song detection: sustained near-silence, then the music returns.
    if (energyRaw < 0.035) {
      this.silentFor += dt;
    } else {
      if (this.silentFor >= 2 && this.dwell(t) > 6) this.switch('song');
      this.silentFor = 0;
    }
    // Fallback for beat-less material: never let one style overstay.
    if (this.dwell(t) > 60) this.switch('timer');
  },

  switch(reason, forcedIdx = null) {
    if (morph.active) return;
    const idx = forcedIdx == null ? this.next() : forcedIdx;
    const def = FORMATIONS[idx];
    this.idx = idx;
    this.lastSwitch = clock.elapsedTime;
    this.silentFor = 0;
    this.beats = 0;
    startMorph(def);
    // Branding reacts: contrasting logo variant + next theme word.
    const variant = def.hue === 'pink' ? 'green' : 'pink';
    setLogoVariant(variant);
    setWord(idx, variant);
    // Kick flash pushes the field toward its OWN hue — never the logo's colour,
    // so beats can't blend the logo into the particles.
    flashColor = (def.hue === 'pink' ? ACCENT_A : ACCENT_B).clone();
    this.caption(def.name);
    console.info(`[SAMSEN-45] style -> ${def.name} (${reason})`);
  },

  caption(name) {
    brandEl.textContent = name.toUpperCase();
    if (this.captionTimer) this.captionTimer.kill();
    this.captionTimer = gsap.delayedCall(3, () => { brandEl.textContent = BRAND_TEXT; });
  },
};

function startMorph(def) {
  bakeTargets(def);
  fromPos.set(positions);
  fromCol.set(colors);
  morph.active = true;
  morph.mix = 0;
  motion.ramp = 0;
  morphTween = gsap.to(morph, {
    mix: 1, duration: 1.65, ease: 'power3.inOut', overwrite: 'auto',
    onComplete: () => {
      morph.active = false;
      commitTargets(def);
      gsap.to(motion, { ramp: 1, duration: 0.7, ease: 'power1.out', overwrite: 'auto' });
    },
  });
  // Re-frame the shape: tilt, camera distance, and a bloom swell mid-morph.
  gsap.to(particles.rotation, { x: def.tiltX, z: def.tiltZ, duration: 1.65, ease: 'power2.inOut', overwrite: 'auto' });
  if (running) gsap.to(camera.position, { z: def.camZ, duration: 2, ease: 'power2.inOut', overwrite: 'auto' });
  gsap.to(bloomPass, {
    strength: BLOOM_BASE + 0.55, duration: 0.82, ease: 'power2.in',
    yoyo: true, repeat: 1, overwrite: 'auto',
  });
}

/** Boot: apply style 0 instantly (no morph). */
function applyStyleInstant(idx) {
  const def = FORMATIONS[idx];
  director.idx = idx;
  bakeTargets(def);
  commitTargets(def);
  positions.set(targetPos);
  particleGeo.attributes.position.needsUpdate = true;
  particles.rotation.x = def.tiltX;
  particles.rotation.z = def.tiltZ;
  camera.position.z = def.camZ;
  const variant = def.hue === 'pink' ? 'green' : 'pink';
  activeVariant = variant;
  setWord(idx, variant);
  flashColor = (def.hue === 'pink' ? ACCENT_A : ACCENT_B).clone();
  glowMat.color.copy(variant === 'pink' ? ACCENT_B : ACCENT_A).lerp(WHITE, 0.25);
}

// Manual override (VJ / testing): arrow key or window.SAMSEN.next()
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') director.switch('manual');
});
window.SAMSEN = {
  next: (i) => director.switch('manual', typeof i === 'number' ? i : null),
  skip: () => { if (morphTween) morphTween.progress(1); }, // jump-cut a morph
  fx: { afterimage: afterimagePass, bloom: bloomPass, world, logoGroup, kickState, orbState },
  styles: FORMATIONS.map((f) => f.name),
  audio, // exposed for live tuning / test simulation
  // Independent, composable signals from audioAnalysis.js — wire whichever
  // ones a new visual needs. onBeat is separate from the show's internal
  // tempo-grid classifier (see wireBeatEngine): it fires on every raw onset.
  audioAnalysis: {
    onBeat: (cb) => (beatEngine ? beatEngine.onBeat(cb) : () => {}),
    get intensity() { return beatEngine ? beatEngine.intensity : 0; },
    get rms() { return beatEngine ? beatEngine.rms : 0; },
    get spectralCentroid() { return beatEngine ? beatEngine.spectralCentroid : 0; },
    get bpm() { return beatEngine ? beatEngine.bpm : 0; },
    get bpmStable() { return beatEngine ? beatEngine.bpmStable : false; },
    get _diag() { return beatEngine ? beatEngine._diag : null; }, // onset detector tuning: instant/threshold/rollingAvg + fire count
    traceSummary: () => (beatEngine ? beatEngine.getTraceSummary() : null), // which band actually carries kick-synced modulation
  },
  debug: () => ({
    active: morph.active, mix: +morph.mix.toFixed(3), ramp: +motion.ramp.toFixed(3),
    idx: director.idx, beats: director.beats,
    t: +clock.elapsedTime.toFixed(1), gsapTime: +gsap.ticker.time.toFixed(1),
    bpm: beatEngine ? +beatEngine.bpm.toFixed(1) : 0,
    bpmStable: beatEngine ? beatEngine.bpmStable : false,
    intensity: beatEngine ? +beatEngine.intensity.toFixed(3) : 0,
    spectralCentroid: beatEngine ? +beatEngine.spectralCentroid.toFixed(3) : 0,
    musicActivity: +musicActivity.toFixed(3), // gates fireBeat at >= 0.65
    energyRaw: +energyRaw.toFixed(3),
    diag: beatEngine ? beatEngine._diag : null, // onset detector tuning
  }),
};

/* ---------------------------------------------------------------------------
 * 9. Debounced resize (ultrawide / projector safe)
 * ------------------------------------------------------------------------- */
let resizeTimer = null;
function applyResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  composer.setSize(w, h);
  bloomPass.setSize(w, h);
}
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(applyResize, 150);
});

/* ---------------------------------------------------------------------------
 * 10. Render loop — delta-timed for a smooth, frame-rate-independent 60fps
 * ------------------------------------------------------------------------- */
const clock = new THREE.Clock();
let spinAccum = 0;
let flowAccum = 0;
let turbTime = 0; // accumulated turbulence clock (rate varies with the beat)
const bandVals = [0, 0, 0];

function updateAudio(t, dt) {
  if (!running || !analyser) return;
  analyser.getByteFrequencyData(freqData);
  const rawBass = bandAvg(0, 150);
  const rawMids = bandAvg(150, 2000);
  const rawHighs = bandAvg(2000, binHz * freqData.length);
  energyRaw = (rawBass + rawMids + rawHighs) / 3;
  musicActivity += ((energyRaw > 0.1 ? 1 : 0) - musicActivity) * Math.min(dt / 1.2, 1);
  setBass(rawBass);
  setMids(rawMids);
  setHighs(rawHighs);
  if (beatEngine) beatEngine.update(dt, t);
}

function updateMorph() {
  const m = morph.mix;
  const burst = Math.sin(m * Math.PI) * 7;
  for (let i = 0; i < N; i++) {
    const i3 = i * 3;
    let x = fromPos[i3] + (targetPos[i3] - fromPos[i3]) * m;
    let y = fromPos[i3 + 1] + (targetPos[i3 + 1] - fromPos[i3 + 1]) * m;
    let z = fromPos[i3 + 2] + (targetPos[i3 + 2] - fromPos[i3 + 2]) * m;
    const len = Math.sqrt(x * x + y * y + z * z) + 1e-4;
    const push = burst * rnd1[i] / len;
    positions[i3] = x + x * push;
    positions[i3 + 1] = y + y * push;
    positions[i3 + 2] = z + z * push;
    colors[i3] = fromCol[i3] + (targetCol[i3] - fromCol[i3]) * m;
    colors[i3 + 1] = fromCol[i3 + 1] + (targetCol[i3 + 1] - fromCol[i3 + 1]) * m;
    colors[i3 + 2] = fromCol[i3 + 2] + (targetCol[i3 + 2] - fromCol[i3 + 2]) * m;
  }
  particleGeo.attributes.position.needsUpdate = true;
  particleGeo.attributes.color.needsUpdate = true;
}

function updateFormation(dt, time) {
  const def = FORMATIONS[director.idx];
  const { bass, mids } = audio;

  // Movement is BEAT-driven: the per-kick pulse carries the show, and the
  // bass LEVEL is only a floor — so continuous loud music still pumps
  // visibly on every beat instead of parking at a bright plateau.
  const pump = kickState.pulse;
  const angVel = def.spinSpeed * (0.05 + bass * 0.45 + pump * 1.5 + swirlBoost) * dt;
  spinAccum += angVel;
  swirlBoost *= Math.pow(0.02, dt);
  if (def.flow) {
    flowAccum += def.flow.speed * (0.3 + bass * 0.5 + pump * 1.7) * dt;
  }

  // Whole-formation radial THUMP on each kick (plus a light breath with bass).
  const beatPunch = 1 + pump * 0.2 + bass * 0.03;

  const turbAmp = def.turbAmp
    * (0.35 + bass * 1.3 + pump * 3.6 + mids * 0.5) * motion.ramp;
  // Accumulated clock: the turbulence SPEEDS UP through each beat without
  // the phase-warp a time*factor product would cause.
  turbTime += dt * (0.4 + bass * 0.9 + pump * 1.6);
  const tt = turbTime * def.turbFreq;
  const axisZ = def.spinAxis === 'z';
  const flowMin = def.flow ? def.flow.min : 0;
  const flowRange = def.flow ? def.flow.max - def.flow.min : 0;
  bandVals[0] = audio.bass; bandVals[1] = audio.mids; bandVals[2] = audio.highs;

  for (let i = 0; i < N; i++) {
    const i3 = i * 3;
    const a = baseAngle[i] + spinAccum * spinMul[i];
    const f = turbFreq[i], ph = turbPhase[i];
    const wobR = Math.sin(tt * f + ph) * turbAmp * (0.25 + baseRadius[i] * 0.02);
    const rr = baseRadius[i] * beatPunch + wobR;

    let ax = baseAxis[i];
    let wobY = Math.cos(tt * f * 0.7 + ph * 1.3) * turbAmp * 0.5;
    if (def.flow) {
      const off = (ax - flowMin + flowAccum * (0.6 + 0.4 * Math.abs(spinMul[i]))) % flowRange;
      ax = flowMin + (off < 0 ? off + flowRange : off);
    }
    if (def.eq) {
      const band = auxA[i] | 0;
      const frac = (auxA[i] - band) / 0.9;
      ax = -7 + frac * (2 + bandVals[band] * 16);
      wobY = 0;
    }

    if (axisZ) {
      positions[i3] = Math.cos(a) * rr;
      positions[i3 + 1] = Math.sin(a) * rr;
      positions[i3 + 2] = ax + wobY;
    } else {
      positions[i3] = Math.cos(a) * rr;
      positions[i3 + 1] = ax + wobY;
      positions[i3 + 2] = Math.sin(a) * rr;
    }
  }
  particleGeo.attributes.position.needsUpdate = true;

  // Kick colour flash toward the style's contrast accent.
  particleMat.color.copy(WHITE).lerp(flashColor, colorState.mix * 0.85);
  // Sparse styles enlarge their dots (eased through the morph) so they read on
  // a wide screen; the boost fades out on narrow screens, and dense galaxy
  // styles stay at 1 regardless.
  const sizeScale = FORMATIONS[director.idx].sizeScale || 1;
  const wide = Math.max(0, Math.min(1,
    (camera.aspect - SIZE_ASPECT_NARROW) / (SIZE_ASPECT_WIDE - SIZE_ASPECT_NARROW)));
  const targetSizeScale = 1 + (sizeScale - 1) * wide;
  particleSizeScale += (targetSizeScale - particleSizeScale) * Math.min(dt * 3, 1);
  particleMat.size = (PARTICLE_SIZE + bass * 0.1 + pump * 0.24) * particleSizeScale;

  // Whole-system slow tumble for depth (skip for camera-axis styles).
  if (!axisZ) {
    world.rotation.y += dt * 0.05;
    world.rotation.z = Math.sin(time * 0.1) * 0.06;
  } else {
    world.rotation.y *= 0.98;
    world.rotation.z *= 0.98;
  }
}

function updateCenterStack() {
  const { bass, mids } = audio;
  // Auto-iris: pull exposure down as energy rises so loud passages keep their
  // neon colour instead of saturating to white.
  renderer.toneMappingExposure = Math.max(1.05 - bass * 0.22 - mids * 0.1, 0.78);
  // The centre orb pulses on TEMPO-LOCKED beats only (orbState), with
  // restrained gains — in time with the music, never a random strobe.
  const pump = orbState.pulse;
  const s = 1 + bass * 0.2 + pump * 0.45;
  logoGroup.scale.setScalar(s);
  const gs = GLOW_BASE * (1 + bass * 0.25 + pump * 0.55);
  glow.scale.set(gs, gs, 1);
  glowMat.opacity = 0.12 + bass * 0.12 + pump * 0.2;
  haloMat.opacity = Math.min(0.88 + bass * 0.12, 1);
  for (const key of ['pink', 'green']) {
    const pair = logos[key];
    if (!pair) continue;
    pair.mesh.quaternion.copy(camera.quaternion);
    pair.back.quaternion.copy(camera.quaternion);
  }
}

function updateSatellite(time) {
  if (!wordSprite.visible) return;
  const a = time * 0.12;
  wordSprite.position.set(
    Math.cos(a) * 24,
    9 + Math.sin(time * 0.4) * 2,
    Math.sin(a) * 24
  );
  // Mids make the word shimmer (base opacity owned by the GSAP fades).
  wordSprite.material.rotation = Math.sin(time * 0.5) * 0.04;
}

// Smooth procedural camera drift; damp-lerp toward it so trails sweep gently.
const camTarget = new THREE.Vector3();
function updateCamera(time) {
  camTarget.set(
    Math.sin(time * 0.13) * 6,
    Math.cos(time * 0.17) * 3,
    camera.position.z // z owned by launch/kick/style tweens
  );
  camera.position.x += (camTarget.x - camera.position.x) * 0.02;
  camera.position.y += (camTarget.y - camera.position.y) * 0.02;
  camera.lookAt(0, 0, 0);
}

function tick() {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05);
  const time = clock.elapsedTime;

  updateAudio(time, dt);
  updateBeatPredictor(time);
  director.update(dt, time);
  if (morph.active) updateMorph();
  else updateFormation(dt, time);
  updateCenterStack();
  updateSatellite(time);
  updateCamera(time);

  composer.render();
}

applyStyleInstant(0);
applyResize();
tick();
console.info('[SAMSEN-45] 16 styles loaded:', window.SAMSEN.styles.join(' · '),
  '\nAuto-switching: every 4 bars of beats / new-song / 60s fallback. Manual: ArrowRight or SAMSEN.next(i).');
