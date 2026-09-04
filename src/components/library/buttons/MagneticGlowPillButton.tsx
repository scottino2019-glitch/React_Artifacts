import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Compass, Check } from 'lucide-react';

export default function MagneticGlowPillButton() {
  const [hovered, setHovered] = useState(false);
  const [orbClicked, setOrbClicked] = useState(false);
  const [emeraldClicked, setEmeraldClicked] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-6">
      {/* Pill with Animated Chromatic Ring */}
      <div className="relative group p-[2px] rounded-full overflow-hidden">
        {/* Animated gradient spinning border */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 rounded-full animate-spin [animation-duration:3s]" />

        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => {
            setOrbClicked(true);
            setTimeout(() => setOrbClicked(false), 800);
          }}
          className="relative px-7 py-3 rounded-full bg-stone-950 text-white font-bold text-xs sm:text-sm flex items-center gap-2.5 transition-all duration-300 hover:bg-stone-900 active:scale-95"
        >
          <Sparkles className={`w-4 h-4 text-cyan-300 transition-transform ${hovered ? 'rotate-45' : ''}`} />
          <span className="tracking-wide">
            {orbClicked ? 'ORBITA AGGANCIATA!' : 'ORBITA CROMATICA'}
          </span>
          {orbClicked ? (
            <Check className="w-4 h-4 text-amber-300 stroke-[3]" />
          ) : (
            <ArrowUpRight
              className={`w-4 h-4 text-fuchsia-400 transition-transform ${
                hovered ? 'translate-x-0.5 -translate-y-0.5' : ''
              }`}
            />
          )}
        </button>
      </div>

      {/* Pill 2: Neon Mint Variant */}
      <div className="relative group p-[2px] rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-500 rounded-full animate-pulse" />

        <button
          onClick={() => {
            setEmeraldClicked(true);
            setTimeout(() => setEmeraldClicked(false), 800);
          }}
          className="relative px-7 py-3 rounded-full bg-stone-900 text-emerald-300 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all hover:bg-stone-950 active:scale-95"
        >
          <Compass className={`w-4 h-4 text-emerald-400 ${emeraldClicked ? 'rotate-180 transition-transform duration-500' : ''}`} />
          <span className="tracking-wide">
            {emeraldClicked ? 'POLO ALLINEATO!' : 'POLO SMERALDO'}
          </span>
          {emeraldClicked && <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />}
        </button>
      </div>
    </div>
  );
}
