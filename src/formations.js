/* ============================================================================
 * SAMSEN-45 — 16 particle formations ("styles")
 *
 * Every formation writes rest positions + palette mix for the ONE shared
 * 40k-particle buffer; main.js morphs between them and runs the motion engine.
 *
 * Formation contract:
 *   name      display name (flashed on the brand caption)
 *   hue       'pink' | 'green'  — colour dominating the CENTRE zone; the logo
 *             swaps to the OPPOSITE variant so it never blends in
 *   camZ      camera dolly distance for this style
 *   tiltX/Z   static rotation of the particle system
 *   spinAxis  'y' | 'z'        — axis the swirl engine rotates around
 *   spinSpeed swirl multiplier (audio-scaled in main.js)
 *   turbAmp   turbulence amplitude multiplier
 *   turbFreq  turbulence frequency multiplier
 *   flow      null | { speed, min, max } — particle stream along spinAxis
 *   eq        true → bar heights driven per-band (aux packs band+heightFrac)
 *   sizeScale optional >1 — multiplies particle size for SPARSE formations
 *             (thin spiral / column / outline) whose dots read too small once a
 *             wide screen surrounds them with empty space. Absent → 1 (unchanged).
 *   generate(i, N, o, r1, r2, r3) — fill `o` for particle i.
 *       o.x/y/z  rest position
 *       o.t      0 = pink … 1 = green (palette mix)
 *       o.bright 0..1 brightness
 *       o.spin   signed per-particle swirl multiplier (negative = counter-spin)
 *       o.phase  turbulence phase (null → random; set for spatially coherent waves)
 *       o.freq   turbulence frequency (null → random)
 *       o.aux    eq styles: band (0|1|2) + heightFrac*0.9
 * ==========================================================================*/

const TAU = Math.PI * 2;

/* Rotate helpers used to bake static tilts into per-particle coords. */
function rotX(o, ang) {
  const c = Math.cos(ang), s = Math.sin(ang);
  const y = o.y * c - o.z * s, z = o.y * s + o.z * c;
  o.y = y; o.z = z;
}
function rotZ(o, ang) {
  const c = Math.cos(ang), s = Math.sin(ang);
  const x = o.x * c - o.y * s, y = o.x * s + o.y * c;
  o.x = x; o.y = y;
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

export const FORMATIONS = [

  /* 1 — the original sweeping spiral galaxy, pink core -> green rim */
  {
    name: 'Vortex Bloom', hue: 'pink', camZ: 46, tiltX: -0.62, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 1, turbAmp: 1, turbFreq: 1, flow: null, eq: false,
    generate(i, N, o, r1, r2, r3) {
      const r = Math.pow(r1, 0.65) * 30;
      const arm = (i % 5) / 5 * TAU;
      const a = arm + r * 0.16 + (r2 - 0.5) * 0.55 * (1 + r * 0.04);
      o.x = Math.cos(a) * r;
      o.y = (r3 - 0.5) * (2.5 + r * 0.18);
      o.z = Math.sin(a) * r;
      o.t = clamp01(r / 30 + (r2 - 0.5) * 0.15);
    },
  },

  /* 2 — mirrored galaxy: green core -> pink rim, counter-rotating */
  {
    name: 'Verdant Spiral', hue: 'green', camZ: 48, tiltX: 0.55, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 0.95, turbAmp: 1, turbFreq: 1, flow: null, eq: false,
    generate(i, N, o, r1, r2, r3) {
      const r = Math.pow(r1, 0.65) * 30;
      const arm = (i % 4) / 4 * TAU;
      const a = arm + r * 0.19 + (r2 - 0.5) * 0.5 * (1 + r * 0.04);
      o.x = Math.cos(a) * r;
      o.y = (r3 - 0.5) * (2.5 + r * 0.16);
      o.z = Math.sin(a) * r;
      o.t = clamp01(1 - (r / 30 + (r2 - 0.5) * 0.15));
      o.spin = -1;
    },
  },

  /* 3 — two intertwined strands, pink vs green, with connecting rungs */
  {
    name: 'Double Helix', hue: 'pink', camZ: 44, tiltX: 0, tiltZ: 0.16,
    spinAxis: 'y', spinSpeed: 0.8, turbAmp: 0.7, turbFreq: 1, flow: null, eq: false,
    sizeScale: 1.7,
    generate(i, N, o, r1, r2, r3) {
      const s = i % 2;
      const f = i / N;
      const theta = f * Math.PI * 10;
      const R = 15 + (r2 - 0.5) * 2; // wider spiral (was 9) + camZ 52->44 + taller column
                                     // below, so the helix spreads across / overflows screen
      if (r3 < 0.11) { // rung particle bridging the strands
        const u = r1 * 2 - 1;
        o.x = Math.cos(theta) * R * u;
        o.z = Math.sin(theta) * R * u;
        o.t = 0.5;
      } else {
        const a = theta + s * Math.PI;
        o.x = Math.cos(a) * R;
        o.z = Math.sin(a) * R;
        o.t = s;
      }
      o.y = -27 + f * 54 + (r1 - 0.5) * 1.4;
    },
  },

  /* 4 — glowing ring encircling the logo, banded pink/green */
  {
    name: 'Neon Halo', hue: 'green', camZ: 44, tiltX: -0.5, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 1.1, turbAmp: 0.9, turbFreq: 1, flow: null, eq: false,
    generate(i, N, o, r1, r2, r3) {
      const u = r1 * TAU, v = r2 * TAU;
      const r = 4.2 * Math.sqrt(r3);
      const R = 20 + r * Math.cos(v);
      o.x = Math.cos(u) * R;
      o.z = Math.sin(u) * R;
      o.y = r * Math.sin(v);
      o.t = 0.5 + 0.5 * Math.sin(u * 3);
    },
  },

  /* 5 — (2,3) trefoil torus knot wrapped around the centre */
  {
    name: 'Trefoil Knot', hue: 'pink', camZ: 46, tiltX: -0.4, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 0.9, turbAmp: 1, turbFreq: 1, flow: null, eq: false,
    generate(i, N, o, r1, r2, r3) {
      const u = r1 * TAU, s = 7.5;
      const w = 2 + Math.cos(3 * u);
      o.x = Math.cos(2 * u) * w * s + (r2 - 0.5) * 2.4;
      o.y = Math.sin(3 * u) * s + (r3 - 0.5) * 2.4;
      o.z = Math.sin(2 * u) * w * s + (r2 + r3 - 1) * 1.2;
      o.t = 0.5 + 0.5 * Math.sin(u * 2 + 1);
    },
  },

  /* 6 — hollow breathing sphere, pole-to-pole gradient */
  {
    name: 'Pulse Sphere', hue: 'green', camZ: 50, tiltX: 0, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 0.5, turbAmp: 1.6, turbFreq: 0.9, flow: null, eq: false,
    generate(i, N, o, r1, r2, r3) {
      const cosPhi = 2 * r1 - 1;
      const sinPhi = Math.sqrt(1 - cosPhi * cosPhi);
      const th = r2 * TAU;
      const R = 19 + (r3 - 0.5) * 2.5;
      o.x = sinPhi * Math.cos(th) * R;
      o.y = cosPhi * R;
      o.z = sinPhi * Math.sin(th) * R;
      o.t = clamp01(r1);
    },
  },

  /* 7 — four concentric counter-rotating shells, alternating colour */
  {
    name: 'Supernova', hue: 'pink', camZ: 52, tiltX: 0, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 1, turbAmp: 1.8, turbFreq: 1, flow: null, eq: false,
    generate(i, N, o, r1, r2, r3) {
      const k = i % 4;
      const R = [9, 15, 21, 27][k] + (r1 - 0.5) * 1.8;
      const cosPhi = 2 * r2 - 1;
      const sinPhi = Math.sqrt(1 - cosPhi * cosPhi);
      const th = r3 * TAU;
      o.x = sinPhi * Math.cos(th) * R;
      o.y = cosPhi * R;
      o.z = sinPhi * Math.sin(th) * R;
      o.t = k % 2;
      o.bright = 0.9;
      o.spin = k % 2 ? -0.7 : 1;
    },
  },

  /* 8 — camera-immersed cylinder streaming past, colour-ringed */
  {
    name: 'Warp Tunnel', hue: 'green', camZ: 46, tiltX: 0, tiltZ: 0,
    spinAxis: 'z', spinSpeed: 0.6, turbAmp: 0.8, turbFreq: 1,
    flow: { speed: 26, min: -85, max: 35 }, eq: false,
    generate(i, N, o, r1, r2, r3) {
      const R = 13 + r1 * 5;
      const a = r2 * TAU;
      const zc = -85 + r3 * 120;
      o.x = Math.cos(a) * R;
      o.y = Math.sin(a) * R;
      o.z = zc;
      o.t = 0.5 + 0.5 * Math.sin(zc * 0.25);
    },
  },

  /* 9 — undulating sea of light below the logo (spatially coherent waves) */
  {
    name: 'Neon Tide', hue: 'green', camZ: 50, tiltX: -0.15, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 0.05, turbAmp: 2.2, turbFreq: 0.8, flow: null, eq: false,
    generate(i, N, o, r1, r2, r3) {
      const ix = i % 200, iz = (i / 200) | 0;
      o.x = -33 + ix * (66 / 199);
      o.z = -34 + iz * (56 / 199);
      o.y = -9 + (r1 - 0.5) * 0.6;
      o.t = 0.5 + 0.5 * Math.sin(o.x * 0.12);
      o.bright = 0.9;
      o.phase = o.x * 0.32 + o.z * 0.45; // travelling wavefronts
      o.freq = 1;
    },
  },

  /* 10 — radial explosion, pink core to green tips, bass-breathing */
  {
    name: 'Star Burst', hue: 'pink', camZ: 54, tiltX: 0, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 0.3, turbAmp: 1.5, turbFreq: 1.1, flow: null, eq: false,
    generate(i, N, o, r1, r2, r3) {
      const cosPhi = 2 * r1 - 1;
      const sinPhi = Math.sqrt(1 - cosPhi * cosPhi);
      const th = r2 * TAU;
      const R = 7 + Math.pow(r3, 1.6) * 32;
      o.x = sinPhi * Math.cos(th) * R;
      o.y = cosPhi * R;
      o.z = sinPhi * Math.sin(th) * R;
      o.t = clamp01((R - 7) / 32);
    },
  },

  /* 11 — two tilted counter-rotating discs, one pink one green */
  {
    name: 'Gemini Discs', hue: 'pink', camZ: 50, tiltX: 0, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 1, turbAmp: 0.8, turbFreq: 1, flow: null, eq: false,
    generate(i, N, o, r1, r2, r3) {
      const s = i % 2;
      const R = Math.pow(r1, 0.6) * 17;
      const a = r2 * TAU;
      o.x = Math.cos(a) * R;
      o.y = (r3 - 0.5) * 1.2;
      o.z = Math.sin(a) * R;
      rotX(o, s ? 0.55 : -0.55);
      o.y += s ? 5.5 : -5.5;
      o.t = s;
      o.spin = s ? -1 : 1;
    },
  },

  /* 12 — a family of tilted orbital rings, alternating spin + colour */
  {
    name: 'Orbitals', hue: 'green', camZ: 52, tiltX: 0, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 0.9, turbAmp: 0.5, turbFreq: 1, flow: null, eq: false,
    generate(i, N, o, r1, r2, r3) {
      const k = i % 8;
      const R = 10 + k * 2.3 + (r2 - 0.5) * 0.9;
      const a = r1 * TAU;
      o.x = Math.cos(a) * R;
      o.y = (r3 - 0.5) * 0.9;
      o.z = Math.sin(a) * R;
      rotX(o, k * 0.4 - 1.4);
      rotZ(o, k * 0.77);
      o.t = k % 2;
      o.spin = k % 2 ? -0.8 : 0.8;
    },
  },

  /* 13 — 64 audio-reactive bars in a circle: bass/mid/high interleaved */
  {
    name: 'Pulse Array', hue: 'pink', camZ: 48, tiltX: -0.35, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 0.35, turbAmp: 0.4, turbFreq: 1, flow: null, eq: true,
    generate(i, N, o, r1, r2, r3) {
      const bar = i % 64;
      const band = bar % 3;
      const a = (bar / 64) * TAU + (r3 - 0.5) * 0.04;
      const R = 19 + (r1 - 0.5) * 1.6;
      o.x = Math.cos(a) * R;
      o.z = Math.sin(a) * R;
      o.y = -7 + r2 * 10; // rest height; eq drive overrides per frame
      o.t = band === 0 ? 0 : band === 1 ? 0.5 : 1;
      o.aux = band + r2 * 0.9;
    },
  },

  /* 14 — butterfly-curve wings spread behind the logo */
  {
    name: 'Phoenix Wings', hue: 'pink', camZ: 38, tiltX: 0, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 0.25, turbAmp: 1.1, turbFreq: 1, flow: null, eq: false,
    sizeScale: 1.55,
    generate(i, N, o, r1, r2, r3) {
      const th = r1 * TAU * 2;
      const r = Math.exp(Math.sin(th)) - 2 * Math.cos(4 * th)
        + Math.pow(Math.sin((2 * th - Math.PI) / 24), 5);
      const s = 8.6; // wing-spread scale — big enough that the wings fill the frame
                     // and overflow the screen edges (was 4.6); camZ pulled in to 38
      o.x = Math.sin(th) * r * s + (r2 - 0.5) * 0.9;
      o.y = (Math.cos(th) * r * s) * 0.92 + (r3 - 0.5) * 0.9;
      o.z = (r2 - 0.5) * 3;
      o.t = clamp01(Math.abs(o.x) / 26); // scaled with s (was /14) so the pink->green
                                          // wing gradient stays proportional to the bigger span
    },
  },

  /* 15 — rising geyser column: pink base erupting to green spray */
  {
    name: 'Geyser', hue: 'pink', camZ: 42, tiltX: 0, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 0.6, turbAmp: 1.2, turbFreq: 1.1,
    flow: { speed: 12, min: -14, max: 16 }, eq: false, sizeScale: 1.6,
    generate(i, N, o, r1, r2, r3) {
      const f = r1;
      const R = 1.2 + Math.pow(f, 2.2) * 20 + (r2 - 0.5) * 2; // wider spray (was 14) +
      const a = r3 * TAU;                                     // camZ 50->42 so it spreads
      o.x = Math.cos(a) * R;                                  // larger across the screen
      o.y = -14 + f * 30;
      o.z = Math.sin(a) * R;
      o.t = clamp01(f);
    },
  },

  /* 16 — pulsing checkerboard cube lattice */
  {
    name: 'Cube Matrix', hue: 'green', camZ: 56, tiltX: -0.3, tiltZ: 0,
    spinAxis: 'y', spinSpeed: 0.4, turbAmp: 0.9, turbFreq: 0.9, flow: null, eq: false,
    generate(i, N, o, r1, r2, r3) {
      const side = 34, sp = 1.55, half = (side - 1) * sp / 2;
      if (i < side * side * side) {
        const ix = i % side, iy = ((i / side) | 0) % side, iz = (i / (side * side)) | 0;
        o.x = ix * sp - half;
        o.y = iy * sp - half;
        o.z = iz * sp - half;
        o.t = (ix + iy + iz) % 2;
      } else { // remainder scattered inside the cube
        o.x = (r1 - 0.5) * 2 * half;
        o.y = (r2 - 0.5) * 2 * half;
        o.z = (r3 - 0.5) * 2 * half;
        o.t = 0.5;
      }
      o.bright = 0.85;
    },
  },
];
