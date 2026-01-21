import { presets } from './presets';

let ctx;

// Lazy load AudioContext
const getCtx = () => {
    if (!ctx) {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return ctx;
};

// Generic synth function
// t: type (0=sine, 1=square, 2=sawtooth, 3=triangle)
// f: frequency
// d: duration
// vol: volume
// sliding: if true, slide frequency down (for pew/pop sounds)
const tone = (t, f, d, vol = 0.1, sliding = false) => {
    const c = getCtx();
    const osc = c.createOscillator();
    const gain = c.createGain();

    // Map integer types to strings to save bytes in presets
    osc.type = ['sine', 'square', 'sawtooth', 'triangle'][t] || 'sine';

    osc.frequency.setValueAtTime(f, c.currentTime);
    if (sliding) {
        osc.frequency.exponentialRampToValueAtTime(0.01, c.currentTime + d);
    }

    gain.gain.setValueAtTime(vol, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, c.currentTime + d);

    osc.connect(gain);
    gain.connect(c.destination);

    osc.start();
    osc.stop(c.currentTime + d);
};

export const play = (name) => {
    const p = presets[name];
    if (p) {
        // Resume context if suspended (browser autoplay policy)
        if (getCtx().state === 'suspended') {
            getCtx().resume();
        }
        // p is array of args for tone: [type, freq, duration, vol, sliding]
        tone(...p);
    } else {
        console.warn('Sound not found:', name);
    }
};

export * from './presets';
