import React, { useState } from 'react';
import { Sparkles, Sun, Moon, Compass, CompassIcon, ArrowDown } from 'lucide-react';

export default function SplitArcHero() {
  const [stampActive, setStampActive] = useState(false);

  return (
    <div className="w-full overflow-hidden rounded-3xl border-2 border-stone-200 shadow-xl bg-gradient-to-b from-amber-50 via-rose-50 to-indigo-50">
      {/* Upper curved segment */}
      <div className="relative bg-indigo-600 text-white p-8 md:p-14 rounded-b-[4rem] sm:rounded-b-[6rem] shadow-lg transition-all">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-2 bg-indigo-500/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-indigo-100 border border-indigo-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
            <span>Spazio a Geometrie Miste</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Colori vivi che non chiedono il permesso.
          </h2>

          <p className="text-indigo-200 text-sm sm:text-base max-w-lg leading-relaxed">
            Una composizione a doppia curva organica pensata per rompere la noia dei layout
            rigidi a blocchi paralleli.
          </p>
        </div>

        {/* Interactive Floating Circular Stamp */}
        <button
          onClick={() => setStampActive(!stampActive)}
          className={`absolute -bottom-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white flex items-center justify-center font-black text-xs shadow-xl transition-transform ${
            stampActive
              ? 'bg-rose-500 text-white rotate-45 scale-110'
              : 'bg-amber-400 text-stone-900 rotate-0 hover:scale-105'
          }`}
          title="Tocca il sigillo"
        >
          {stampActive ? '✦' : '⚡'}
        </button>
      </div>

      {/* Lower playful pill strip */}
      <div className="pt-12 pb-8 px-6 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-3">
        <div className="px-4 py-2 rounded-2xl bg-white border border-stone-200 shadow-sm text-xs font-bold text-stone-700 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span>Curva Catenaria</span>
        </div>
        <div className="px-4 py-2 rounded-2xl bg-white border border-stone-200 shadow-sm text-xs font-bold text-stone-700 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span>Contrasti Saturi</span>
        </div>
        <div className="px-4 py-2 rounded-2xl bg-white border border-stone-200 shadow-sm text-xs font-bold text-stone-700 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span>Senza Griglie Standard</span>
        </div>
      </div>
    </div>
  );
}
