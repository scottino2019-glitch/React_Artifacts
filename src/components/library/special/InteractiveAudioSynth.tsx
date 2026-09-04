import React, { useState, useRef } from 'react';
import { Volume2, Music, Waves, Sparkles, Activity } from 'lucide-react';

export default function InteractiveAudioSynth() {
  const [waveform, setWaveform] = useState<OscillatorType>('sine');
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const notes = [
    { note: 'DO', freq: 261.63, color: 'bg-rose-500 text-white shadow-rose-500/30' },
    { note: 'RE', freq: 293.66, color: 'bg-orange-400 text-stone-950 shadow-orange-400/30' },
    { note: 'MI', freq: 329.63, color: 'bg-amber-300 text-stone-950 shadow-amber-300/30' },
    { note: 'SOL', freq: 392.00, color: 'bg-emerald-400 text-stone-950 shadow-emerald-400/30' },
    { note: 'LA', freq: 440.00, color: 'bg-cyan-400 text-stone-950 shadow-cyan-400/30' },
    { note: 'DO+', freq: 523.25, color: 'bg-violet-500 text-white shadow-violet-500/30' },
  ];

  const playFrequency = (freq: number, noteName: string) => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = waveform;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Envelope: fast attack, smooth decay
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.65);

      setActiveNote(noteName);
      setTimeout(() => setActiveNote(null), 300);
    } catch {
      // Audio context might require explicit interaction
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-2">
      <div className="bg-stone-950 border-3 border-stone-800 rounded-[2.5rem] p-6 text-white shadow-2xl space-y-6">
        {/* Synth Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg">
              <Music className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-black text-lg tracking-tight bg-gradient-to-r from-cyan-300 to-amber-300 bg-clip-text text-transparent">
                Mini Sintetizzatore Pentagonale
              </h3>
              <span className="text-[10px] font-mono text-stone-400">Generatore Audio WebAPI Nativo</span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-stone-900 p-1 rounded-xl border border-stone-800">
            {(['sine', 'triangle', 'square'] as OscillatorType[]).map((wf) => (
              <button
                key={wf}
                onClick={() => setWaveform(wf)}
                className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all ${
                  waveform === wf ? 'bg-amber-400 text-stone-950' : 'text-stone-400 hover:text-white'
                }`}
              >
                {wf}
              </button>
            ))}
          </div>
        </div>

        {/* Live Visualizer Status */}
        <div className="bg-stone-900/90 rounded-2xl p-4 border border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-stone-300">
              {activeNote ? `Nota Attiva: ${activeNote}` : 'Tocca un pad per suonare'}
            </span>
          </div>

          <div className="flex items-end gap-1 h-5">
            {[40, 70, 30, 90, 60, 80].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-t from-cyan-500 to-rose-400 rounded-full transition-all duration-150"
                style={{
                  height: activeNote ? `${h}%` : '20%',
                }}
              />
            ))}
          </div>
        </div>

        {/* Interactive Soundboard Pads */}
        <div className="grid grid-cols-3 gap-3">
          {notes.map((n) => {
            const isPressed = activeNote === n.note;
            return (
              <button
                key={n.note}
                onClick={() => playFrequency(n.freq, n.note)}
                className={`p-4 rounded-3xl ${n.color} font-black font-mono text-base flex flex-col items-center justify-between min-h-[95px] shadow-lg transition-all duration-100 ${
                  isPressed ? 'scale-95 brightness-125 ring-4 ring-white' : 'hover:-translate-y-1 hover:brightness-105'
                }`}
              >
                <span className="text-xs opacity-80">{Math.round(n.freq)} Hz</span>
                <span className="text-2xl tracking-tighter">{n.note}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-90">Pad</span>
              </button>
            );
          })}
        </div>

        <p className="text-[11px] font-mono text-center text-stone-400">
          Scala pentatonica armonica: qualsiasi combinazione di note suona perfettamente accordata.
        </p>
      </div>
    </div>
  );
}
