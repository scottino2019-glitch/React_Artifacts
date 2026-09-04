import React, { useState } from 'react';
import { Sparkle, Heart, Flame, Music2 } from 'lucide-react';

export default function OrganicBlobCard() {
  const [pulseLevel, setPulseLevel] = useState(1);
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto p-2">
      <div
        className="relative bg-gradient-to-tr from-orange-400 via-rose-400 to-amber-300 text-stone-950 p-8 shadow-[0_18px_40px_rgba(251,146,60,0.4)] transition-transform duration-500 hover:scale-[1.03]"
        style={{
          borderRadius: '58% 42% 63% 37% / 44% 59% 41% 56%',
        }}
      >
        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          {/* Top sticker */}
          <div className="w-12 h-12 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-md font-black">
            <Flame className={`w-6 h-6 ${pulseLevel > 2 ? 'animate-bounce text-red-500' : ''}`} />
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-stone-800/80">
              Scultura Liquida #09
            </span>
            <h4 className="text-2xl font-black tracking-tight text-stone-950">
              Vibrazione Fluida
            </h4>
          </div>

          <p className="text-xs font-semibold text-stone-800 max-w-[220px] leading-relaxed">
            Una forma organica che rifiuta il rettangolo, abbracciando curve asimmetriche
            e dinamismo plastico.
          </p>

          {/* Interactive controls */}
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setPulseLevel((prev) => (prev % 4) + 1)}
              className="px-3.5 py-1.5 rounded-full bg-stone-950 text-amber-300 font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-transform"
            >
              <Music2 className="w-3.5 h-3.5" />
              <span>Intensità: {pulseLevel}x</span>
            </button>

            <button
              onClick={() => setFavorite(!favorite)}
              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-stone-950 transition-all ${
                favorite ? 'bg-rose-500 text-white' : 'bg-white text-stone-950'
              }`}
            >
              <Heart className={`w-4 h-4 ${favorite ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
