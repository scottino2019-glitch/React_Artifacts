import React, { useState } from 'react';
import { Compass, Sparkles, Orbit, RefreshCw } from 'lucide-react';

export default function PrismHoloCard() {
  const [activeFacet, setActiveFacet] = useState(0);

  const fragments = [
    { title: 'Frammento Astrale', freq: '432 Hz', color: 'from-fuchsia-500 via-purple-600 to-indigo-600', note: 'I colori non sono proprietà degli oggetti, ma conversazioni tra luce e retina.' },
    { title: 'Dissonanza Ottica', freq: '528 Hz', color: 'from-amber-400 via-rose-500 to-violet-600', note: 'Un angolo obliquo rompe la gravità percepita di una pagina web statica.' },
    { title: 'Spazio Iridescente', freq: '639 Hz', color: 'from-teal-400 via-cyan-500 to-blue-600', note: 'La forma prismatica scompone la luce bianca in gradienti di pura emozione.' },
  ];

  const current = fragments[activeFacet];

  return (
    <div className="w-full max-w-sm mx-auto p-1">
      <div
        className={`relative p-7 rounded-[2.5rem] bg-gradient-to-br ${current.color} text-white shadow-[0_20px_50px_rgba(124,58,237,0.35)] transition-all duration-700 hover:scale-[1.02]`}
        style={{
          clipPath: 'polygon(0% 12%, 12% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%)',
        }}
      >
        {/* Holographic noise/shine overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between min-h-[280px]">
          {/* Top header badge */}
          <div className="flex items-center justify-between">
            <div className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold tracking-widest flex items-center gap-1.5">
              <Orbit className="w-3.5 h-3.5 text-amber-300 animate-spin" />
              <span>{current.freq}</span>
            </div>

            <button
              onClick={() => setActiveFacet((prev) => (prev + 1) % fragments.length)}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-transform active:rotate-180"
              title="Ruota prisma"
            >
              <RefreshCw className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="my-6 space-y-2">
            <h3 className="text-2xl font-black tracking-tight drop-shadow-md">
              {current.title}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed drop-shadow-sm font-medium">
              "{current.note}"
            </p>
          </div>

          {/* Bottom badge */}
          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping" />
              <span className="text-[11px] font-mono tracking-wider uppercase opacity-90">
                Poliedro Attivo
              </span>
            </div>
            <Sparkles className="w-4 h-4 text-amber-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
