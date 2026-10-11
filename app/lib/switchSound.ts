/**
 * A synthesised switch click — no audio file to ship, and the pitch can follow
 * the direction of the toggle.
 *
 * Two layers, the way a real switch sounds:
 *   1. a very short band-passed noise burst — the contact "tick"
 *   2. a fast pitched blip under it — the housing "thock"
 *
 * Going dark drops the pitch, going light lifts it.
 */

type WebkitWindow = Window & { webkitAudioContext?: typeof AudioContext };

let context: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (context) return context;

  const Ctor = window.AudioContext ?? (window as WebkitWindow).webkitAudioContext;
  if (!Ctor) return null;
  try {
    context = new Ctor();
  } catch {
    // Some privacy modes refuse to construct one; the toggle still works.
    return null;
  }
  return context;
}

const NOISE_SECONDS = 0.03;
const BODY_SECONDS = 0.11;

/** Builds the click graph onto `destination`. Shared with the offline test. */
export function renderSwitchClick(
  ac: BaseAudioContext,
  destination: AudioNode,
  toDark: boolean,
  startAt = 0,
) {
  const out = ac.createGain();
  // ~-16 dBFS at peak: clearly present, still well under the content.
  out.gain.value = 0.32;
  out.connect(destination);

  // 1 — contact tick
  const frames = Math.max(1, Math.floor(ac.sampleRate * NOISE_SECONDS));
  const buffer = ac.createBuffer(1, frames, ac.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let i = 0; i < frames; i += 1) {
    // Decay across the burst so it reads as a tick rather than a hiss.
    samples[i] = (Math.random() * 2 - 1) * (1 - i / frames);
  }
  const noise = ac.createBufferSource();
  noise.buffer = buffer;

  const band = ac.createBiquadFilter();
  band.type = "bandpass";
  band.frequency.value = toDark ? 1800 : 2500;
  band.Q.value = 0.8;

  const noiseGain = ac.createGain();
  noiseGain.gain.setValueAtTime(0.9, startAt);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, startAt + NOISE_SECONDS);

  noise.connect(band).connect(noiseGain).connect(out);

  // 2 — pitched body, falling slightly so it sounds sprung
  const osc = ac.createOscillator();
  osc.type = "triangle";
  const base = toDark ? 620 : 880;
  osc.frequency.setValueAtTime(base, startAt);
  osc.frequency.exponentialRampToValueAtTime(base * 0.6, startAt + 0.05);

  const bodyGain = ac.createGain();
  bodyGain.gain.setValueAtTime(0.0001, startAt);
  bodyGain.gain.exponentialRampToValueAtTime(0.5, startAt + 0.004);
  bodyGain.gain.exponentialRampToValueAtTime(0.0001, startAt + BODY_SECONDS);

  // Rounds the triangle's upper harmonics off so the tail reads warm, not buzzy.
  const warmth = ac.createBiquadFilter();
  warmth.type = "lowpass";
  warmth.frequency.value = 2200;

  osc.connect(bodyGain).connect(warmth).connect(out);

  noise.start(startAt);
  noise.stop(startAt + NOISE_SECONDS);
  osc.start(startAt);
  osc.stop(startAt + BODY_SECONDS + 0.02);

  return { out, osc };
}

/** Plays the click. Safe to call from a click handler; never throws. */
export function playSwitchClick(toDark: boolean) {
  const ac = getContext();
  if (!ac) return;

  // Created inside a gesture it starts running; resume covers a later suspend.
  if (ac.state === "suspended") void ac.resume();

  try {
    const { out, osc } = renderSwitchClick(ac, ac.destination, toDark, ac.currentTime);
    osc.onended = () => out.disconnect();
  } catch {
    // A failed click should never break the toggle.
  }
}
