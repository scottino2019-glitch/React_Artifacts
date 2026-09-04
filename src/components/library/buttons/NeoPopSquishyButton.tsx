import React, { useState } from 'react';
import { Sparkles, Zap, Check } from 'lucide-react';

export default function NeoPopSquishyButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 800);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-6">
      {/* Button 1: Electric Lime Neo-Squish */}
      <button
        onClick={handleClick}
        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-stone-950 font-black text-sm uppercase tracking-wider rounded-2xl border-3 border-black shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all duration-150"
      >
        <Zap className="w-5 h-5 fill-stone-950" />
        <span>{clicked ? 'PULSATO!' : 'PREMI SQUISH'}</span>
        {clicked && <Check className="w-4 h-4 text-stone-950 stroke-[3]" />}
      </button>

      {/* Button 2: Punchy Bubblegum Pink */}
      <button
        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-pink-500 text-white font-black text-sm uppercase tracking-wider rounded-2xl border-3 border-black shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all duration-150"
      >
        <Sparkles className="w-5 h-5 fill-yellow-300 text-black" />
        <span>SCOSSA POP</span>
      </button>
    </div>
  );
}
