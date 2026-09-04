import React, { useState } from 'react';
import { Eye, Wand2, Compass, Layers, Shuffle } from 'lucide-react';

export default function ChromaticShapesHero() {
  const [activeMood, setActiveMood] = useState(0);

  const moods = [
    { name: 'Aurora', bg: 'from-fuchsia-600 via-violet-600 to-cyan-500', accent: '#ec4899' },
    { name: 'Solaris', bg: 'from-amber-500 via-orange-600 to-rose-600', accent: '#f59e0b' },
    { name: 'Krypton', bg: 'from-emerald-400 via-teal-600 to-blue-700', accent: '#10b981' },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-stone-950 text-white p-8 md:p-14 border border-stone-800 shadow-2xl">
      {/* Decorative ambient background blobs */}
      <div
        className={`absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br ${moods[activeMood].bg} opacity-40 blur-3xl pointer-events-none transition-all duration-700`}
      />
      <div
        className={`absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-tr ${moods[activeMood].bg} opacity-30 blur-3xl pointer-events-none transition-all duration-700`}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Typography & Visual Hook */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-stone-300">Forma Libera &amp; Colore Puro</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
            Scomponi lo spazio,{' '}
            <span className="bg-gradient-to-r from-amber-300 via-rose-400 to-cyan-300 bg-clip-text text-transparent underline decoration-wavy decoration-cyan-400/50">
              inventa la forma.
            </span>
          </h1>

          <p className="text-stone-400 text-sm sm:text-base leading-relaxed max-w-lg">
            Spazio fluido privo di schemi convenzionali. Intersezioni cromatiche, angoli
            asimmetrici e ritmi visivi spontanei.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <button
              onClick={() => setActiveMood((prev) => (prev + 1) % moods.length)}
              className="px-5 py-2.5 rounded-2xl bg-white text-stone-950 font-extrabold text-xs sm:text-sm flex items-center gap-2 hover:bg-amber-300 transition-colors shadow-lg shadow-white/10 active:scale-95"
            >
              <Shuffle className="w-4 h-4 text-violet-700" />
              <span>Cambia Frequenza: {moods[activeMood].name}</span>
            </button>

            <div className="flex items-center gap-1.5 bg-stone-900/80 border border-stone-800 p-1 rounded-2xl">
              {moods.map((m, idx) => (
                <button
                  key={m.name}
                  onClick={() => setActiveMood(idx)}
                  className={`w-6 h-6 rounded-xl transition-all ${
                    activeMood === idx ? 'scale-125 ring-2 ring-white shadow-md' : 'opacity-50 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: m.accent }}
                  title={m.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Floating Geometries */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
          {/* Central organic morphing card */}
          <div className="w-48 h-48 rounded-[3rem] bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-400 p-1 rotate-6 shadow-2xl hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full bg-stone-950 rounded-[2.8rem] flex flex-col items-center justify-center p-4 text-center">
              <Layers className="w-8 h-8 text-amber-300 mb-2" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-stone-300">
                POLY-RHYTHM
              </span>
              <span className="text-[10px] text-stone-500 font-mono mt-1">45° Shift / 120Hz</span>
            </div>
          </div>

          {/* Floating Pill Satellite 1 */}
          <div className="absolute top-2 -left-4 bg-amber-400 text-stone-950 font-black text-xs px-3.5 py-1.5 rounded-full -rotate-12 shadow-lg border-2 border-stone-950 flex items-center gap-1">
            <Wand2 className="w-3.5 h-3.5" />
            <span>GEO-FLUX</span>
          </div>

          {/* Floating Pill Satellite 2 */}
          <div className="absolute -bottom-3 -right-3 bg-cyan-400 text-stone-950 font-black text-xs px-3.5 py-1.5 rounded-full rotate-6 shadow-lg border-2 border-stone-950 flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            <span>VIVID DRAFT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
