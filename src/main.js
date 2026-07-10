/* ============================================================================
 * SAMSEN-45 — Cinematic 3D Audio-Reactive Music Visualizer
 * Three.js + GSAP.  All modules are local ESM (no CDN / <script> tags).
 *
 * Pipeline:  audio input (mic | file) -> AnalyserNode -> band split (Hz-derived)
 *            -> GSAP-smoothed vectors -> particle vortex + logo + camera
 *            -> EffectComposer (afterimage trails + neon bloom).
 * ==========================================================================*/

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { gsap } from 'gsap';

/* ---------------------------------------------------------------------------
 * 0. Theme constants (mirrors styles.css)
 * ------------------------------------------------------------------------- */
const VOID = new THREE.Color('#0a051b');
const ACCENT_A = new THREE.Color('#ff007f'); // electric crimson / hot pink
const ACCENT_B = new THREE.Color('#66ff33'); // electric neon green
const WHITE = new THREE.Color('#ffffff');

const PARTICLE_COUNT = 40000;
const LOGO_URL = '/resource/logo.png'; // pulled from Vite public/ at build time

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

/* Root group we spin as the "vortex" host. */
const world = new THREE.Group();
scene.add(world);

/* ---------------------------------------------------------------------------
 * 2. Post-processing — motion-blur trails + neon bloom
 *    RenderPass -> AfterimagePass (feedback trails) -> Bloom -> OutputPass
 * ------------------------------------------------------------------------- */
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const afterimagePass = new AfterimagePass();
afterimagePass.uniforms['damp'].value = 0.8; // how long light-trails persist
composer.addPass(afterimagePass);

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.7,  // strength (base — pulses on kicks)
  0.6,  // radius
  0.18  // threshold (only bright cores bloom -> neon colour survives, no white-out)
);
const BLOOM_BASE = bloomPass.strength;
composer.addPass(bloomPass);

composer.addPass(new OutputPass());

/* ---------------------------------------------------------------------------
 * 3. Canvas-generated textures (zero external image deps)
 * ------------------------------------------------------------------------- */
function makeRadialSprite(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const size = 128;
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0.0, inner);
  g.addColorStop(0.25, inner);
  g.addColorStop(1.0, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const particleSprite = makeRadialSprite();
const glowSprite = makeRadialSprite('rgba(255,255,255,0.9)', 'rgba(255,255,255,0)');

/* ---------------------------------------------------------------------------
 * 4. Particle vortex — BufferGeometry + PointsMaterial (spiral galaxy)
 *    Each particle keeps cylindrical "base" coords; per frame we swirl the
 *    angle (bass-driven) and add a layered-sine turbulence field (mids-driven).
 *    This turbulence is allocation-free -> a solid 60fps at 40k points.
 * ------------------------------------------------------------------------- */
const ARMS = 5;
const GALAXY_RADIUS = 30;

const positions = new Float32Array(PARTICLE_COUNT * 3);
const colors = new Float32Array(PARTICLE_COUNT * 3);

// Per-particle base state (kept out of the render buffer, no per-frame allocs).
const baseRadius = new Float32Array(PARTICLE_COUNT);
const baseAngle = new Float32Array(PARTICLE_COUNT);
const baseY = new Float32Array(PARTICLE_COUNT);
const spinSeed = new Float32Array(PARTICLE_COUNT); // inner particles spin faster
const turbPhase = new Float32Array(PARTICLE_COUNT);
const turbFreq = new Float32Array(PARTICLE_COUNT);
const hueT = new Float32Array(PARTICLE_COUNT); // 0=crimson .. 1=green (static gradient)

const _c = new THREE.Color();
for (let i = 0; i < PARTICLE_COUNT; i++) {
  // Radius biased toward the centre for a dense core, sparse outer sweep.
  const r = Math.pow(Math.random(), 0.65) * GALAXY_RADIUS;
  const arm = (i % ARMS) / ARMS * Math.PI * 2;
  const spin = r * 0.16;                       // spiral tightening with radius
  const scatter = (Math.random() - 0.5) * 0.55 * (1 + r * 0.04);
  const angle = arm + spin + scatter;

  baseRadius[i] = r;
  baseAngle[i] = angle;
  baseY[i] = (Math.random() - 0.5) * (2.5 + r * 0.18); // disc thickens outward
  spinSeed[i] = 0.4 + Math.random() * 0.6;
  turbPhase[i] = Math.random() * Math.PI * 2;
  turbFreq[i] = 0.6 + Math.random() * 1.4;

  const i3 = i * 3;
  positions[i3] = Math.cos(angle) * r;
  positions[i3 + 1] = baseY[i];
  positions[i3 + 2] = Math.sin(angle) * r;

  // Static radial gradient crimson (core) -> green (rim), with slight noise.
  const t = THREE.MathUtils.clamp(r / GALAXY_RADIUS + (Math.random() - 0.5) * 0.15, 0, 1);
  hueT[i] = t;
  _c.copy(ACCENT_A).lerp(ACCENT_B, t);
  colors[i3] = _c.r;
  colors[i3 + 1] = _c.g;
  colors[i3 + 2] = _c.b;
}

const particleGeo = new THREE.BufferGeometry();
particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const PARTICLE_SIZE = 0.34;
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
// Base tilt so the spiral is seen at a dramatic 3/4 angle (not edge-on).
particles.rotation.x = -0.62;
world.add(particles);

/* ---------------------------------------------------------------------------
 * 5. Central logo — 3D additive plane + glow aura (graceful if PNG missing)
 * ------------------------------------------------------------------------- */
const logoGroup = new THREE.Group();
world.add(logoGroup);

// Glow aura sits behind the logo; tint sits between the two accents.
const glowMat = new THREE.SpriteMaterial({
  map: glowSprite,
  color: ACCENT_A.clone().lerp(ACCENT_B, 0.5),
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  opacity: 0.35,
});
const GLOW_BASE = 18;
const glow = new THREE.Sprite(glowMat);
glow.scale.set(GLOW_BASE, GLOW_BASE, 1);
logoGroup.add(glow);

let logo = null;          // THREE.Mesh once (if) the texture loads
let logoBaseScale = 12;   // set from the image aspect ratio on load

new THREE.TextureLoader().load(
  LOGO_URL,
  (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const aspect = (tex.image && tex.image.width / tex.image.height) || 1;
    const h = 11;
    const w = h * aspect;
    logoBaseScale = 1; // the geometry already carries physical size; scale is a multiplier
    const geo = new THREE.PlaneGeometry(w, h);
    // Normal alpha blend + no depth test so the crisp wordmark reads cleanly
    // ON TOP of the bright additive vortex (additive would wash it out); the
    // separate glow sprite behind it still provides the additive aura.
    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.NormalBlending,
    });
    logo = new THREE.Mesh(geo, mat);
    logo.renderOrder = 20; // draw after the particles
    logoGroup.add(logo);
    gsap.fromTo(
      logo.scale,
      { x: 0.001, y: 0.001, z: 0.001 },
      { x: 1, y: 1, z: 1, duration: 1.4, ease: 'expo.out' }
    );
  },
  undefined,
  () => {
    // No logo present — the aura alone marks the centre. App keeps running.
    console.info('[SAMSEN-45] No /resource/logo.png found — running vortex only.');
    glowMat.opacity = 0.16;
  }
);

/* Keep the logo/glow always facing the camera (billboard the plane too). */
function faceCamera() {
  if (logo) logo.quaternion.copy(camera.quaternion);
}

/* ---------------------------------------------------------------------------
 * 6. Audio architecture — mic OR file, one AnalyserNode, Hz-derived bands
 * ------------------------------------------------------------------------- */
const splash = document.getElementById('splash');
const statusEl = document.getElementById('splash-status');
const btnMic = document.getElementById('btn-mic');
const btnFile = document.getElementById('btn-file');
const fileInput = document.getElementById('file-input');

let audioCtx = null;
let analyser = null;
let freqData = null;   // Uint8Array frequency bins
let binHz = 0;         // Hz per FFT bin (derived from real sampleRate)
let currentSource = null; // active source node (so file re-loads can stop it)
let running = false;

// Smoothed, normalised audio state (0..1). GSAP eases raw values into these.
const audio = { bass: 0, mids: 0, highs: 0 };
const setBass = gsap.quickTo(audio, 'bass', { duration: 0.16, ease: 'power2.out' });
const setMids = gsap.quickTo(audio, 'mids', { duration: 0.2, ease: 'power2.out' });
const setHighs = gsap.quickTo(audio, 'highs', { duration: 0.14, ease: 'power2.out' });

function ensureContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;             // -> 256 frequency bins
    analyser.smoothingTimeConstant = 0.8;
    freqData = new Uint8Array(analyser.frequencyBinCount);
    // Hz per bin = nyquist / binCount = sampleRate / fftSize (~86 Hz @ 44.1k/512).
    binHz = audioCtx.sampleRate / 2 / analyser.frequencyBinCount;
  }
  return audioCtx.resume();
}

/** Average the (normalised) magnitude across a frequency window in Hz. */
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
}

async function startMic() {
  try {
    setStatus('Requesting microphone…');
    await ensureContext();
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        autoGainControl: false,
        noiseSuppression: false,
      },
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
  gsap.to(splash, {
    duration: 0.9,
    ease: 'power2.inOut',
    onStart: () => splash.classList.add('hidden'),
  });
  // Cinematic entry push.
  gsap.fromTo(
    camera.position,
    { z: 90 },
    { z: 46, duration: 2.4, ease: 'expo.out' }
  );
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
 * 7. Kick detection — fast-attack envelope on the bass band -> "drop" reaction
 * ------------------------------------------------------------------------- */
let bassBaseline = 0;      // slowly-tracked floor to measure spikes against
let lastKick = 0;
const kickState = { pulse: 0 };  // 0..1, GSAP-driven flash amount
const colorState = { mix: 0 };   // 0..1, crimson-field -> green-flash on drops
let swirlBoost = 0;              // transient extra angular velocity

function onKick(strength) {
  // Bloom flare.
  gsap.to(bloomPass, {
    strength: BLOOM_BASE + 1.6 * strength,
    duration: 0.09,
    ease: 'power3.out',
    yoyo: true,
    repeat: 1,
    overwrite: 'auto',
  });
  // Crimson -> green colour shift across the whole field.
  gsap.to(colorState, {
    mix: 1,
    duration: 0.11,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: 1,
    overwrite: 'auto',
  });
  // Logo / aura punch.
  gsap.to(kickState, {
    pulse: 1,
    duration: 0.1,
    ease: 'power3.out',
    yoyo: true,
    repeat: 1,
    overwrite: 'auto',
  });
  // Vortex explodes into hyper-speed swirl, then decays each frame.
  swirlBoost = Math.min(swirlBoost + 2.4 * strength, 5);
  // Camera dolly kick.
  gsap.to(camera.position, {
    z: '-=2.2',
    duration: 0.12,
    ease: 'power2.out',
    yoyo: true,
    repeat: 1,
    overwrite: false,
  });
}

function detectKick(rawBass, t) {
  // Track a slow baseline; a kick is a sharp excursion above it.
  bassBaseline += (rawBass - bassBaseline) * 0.05;
  const excess = rawBass - bassBaseline;
  if (rawBass > 0.5 && excess > 0.11 && t - lastKick > 0.16) {
    lastKick = t;
    onKick(THREE.MathUtils.clamp(excess * 2.5, 0.3, 1));
  }
}

/* ---------------------------------------------------------------------------
 * 8. Debounced resize (ultrawide / projector safe)
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
 * 9. Render loop — delta-timed for a smooth, frame-rate-independent 60fps
 * ------------------------------------------------------------------------- */
const clock = new THREE.Clock();
let spinAccum = 0;
const _pos = particleGeo.attributes.position.array;

function updateAudio(t) {
  if (!running || !analyser) return;
  analyser.getByteFrequencyData(freqData);
  const rawBass = bandAvg(0, 150);
  const rawMids = bandAvg(150, 2000);
  const rawHighs = bandAvg(2000, binHz * freqData.length);
  setBass(rawBass);
  setMids(rawMids);
  setHighs(rawHighs);
  detectKick(rawBass, t);
}

function updateVortex(dt, time) {
  const { bass, mids } = audio;

  // Angular velocity: lazy drift when quiet, hyper-swirl on bass + kick boost.
  const angVel = (0.06 + bass * 0.9 + swirlBoost) * dt;
  spinAccum += angVel;
  swirlBoost *= Math.pow(0.02, dt); // fast exponential decay of the kick burst

  // Turbulence amplitude/frequency scale with mids (and a touch of bass).
  const turbAmp = 0.6 + mids * 4.2 + bass * 1.2;
  const turbSpeed = 0.5 + mids * 2.5;
  const tt = time * turbSpeed;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    const r = baseRadius[i];
    const a = baseAngle[i] + spinAccum * spinSeed[i];

    // Layered-sine turbulence field (allocation-free "noise" displacement).
    const ph = turbPhase[i];
    const f = turbFreq[i];
    const wobR = Math.sin(tt * f + ph) * turbAmp * (0.25 + r * 0.02);
    const wobY = Math.cos(tt * f * 0.7 + ph * 1.3) * turbAmp * 0.5;

    const rr = r + wobR;
    _pos[i3] = Math.cos(a) * rr;
    _pos[i3 + 1] = baseY[i] + wobY;
    _pos[i3 + 2] = Math.sin(a) * rr;
  }
  particleGeo.attributes.position.needsUpdate = true;

  // Global crimson-field -> green-flash multiplier (kick-driven).
  particleMat.color.copy(WHITE).lerp(ACCENT_B, colorState.mix * 0.85);
  particleMat.size = PARTICLE_SIZE + bass * 0.5 + kickState.pulse * 0.3;

  // Whole-system slow tumble for depth.
  world.rotation.y += dt * 0.05;
  world.rotation.z = Math.sin(time * 0.1) * 0.06;
}

function updateLogo() {
  const { bass } = audio;
  const s = 1 + bass * 0.4 + kickState.pulse * 0.35;
  if (logo) logo.scale.setScalar(s);
  // Aura expands on heavy bass / drops.
  const gs = GLOW_BASE * (1 + bass * 0.55 + kickState.pulse * 0.7);
  glow.scale.set(gs, gs, 1);
  glowMat.opacity = 0.16 + bass * 0.45 + kickState.pulse * 0.4;
  faceCamera();
}

// Smooth procedural camera drift; damp-lerp toward it so trails sweep gently.
const camTarget = new THREE.Vector3();
function updateCamera(time) {
  camTarget.set(
    Math.sin(time * 0.13) * 6,
    Math.cos(time * 0.17) * 3,
    camera.position.z // z owned by launch/kick tweens
  );
  camera.position.x += (camTarget.x - camera.position.x) * 0.02;
  camera.position.y += (camTarget.y - camera.position.y) * 0.02;
  camera.lookAt(0, 0, 0);
}

function tick() {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05); // clamp to avoid tab-switch jumps
  const time = clock.elapsedTime;

  updateAudio(time);
  updateVortex(dt, time);
  updateLogo();
  updateCamera(time);

  composer.render();
}

applyResize();
tick();
