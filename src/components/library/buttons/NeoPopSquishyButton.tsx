import React, { useState } from 'react';
import { Sparkles, Zap, Check, Flame } from 'lucide-react';
import { playSquishSound, playShockZapSound } from '../../../utils/soundEffects';

export default function NeoPopSquishyButton() {
  const [squished, setSquished] = useState(false);
  const [squishCount, setSquishCount] = useState(0);

  const [isShocking, setIsShocking] = useState(false);
  const [shockCount, setShockCount] = useState(0);

  const handleSquish = () => {
    playSquishSound();
    setSquished(true);
    setSquishCount((c) => c + 1);
    setTimeout(() => setSquished(false), 300);
  };

  const handleShock = () => {
    playShockZapSound();
    setIsShocking(true);
    setShockCount((c) => c + 1);
    setTimeout(() => setIsShocking(false), 500);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* Bottone 1: Electric Lime Neo-Squish con Compressione Tattile */}
        <button
          onClick={handleSquish}
          className={`group relative inline-flex items-center gap-2.5 px-8 py-4 bg-lime-400 text-stone-950 font-black text-sm uppercase tracking-wider rounded-2xl border-3 border-black transition-all duration-150 select-none ${
            squished
              ? 'scale-x-110 scale-y-75 translate-y-2 shadow-[1px_1px_0px_#000] bg-lime-300'
              : 'shadow-[6px_6px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:scale-95'
          }`}
        >
          <Zap className={`w-5 h-5 fill-stone-950 transition-transform ${squished ? 'rotate-12 scale-125' : ''}`} />
          <span>{squished ? 'SQUISHED!' : 'PREMI SQUISH'}</span>
          {squishCount > 0 && (
            <span className="ml-1 px-2 py-0.5 bg-black text-lime-400 font-mono text-xs rounded-lg font-black">
              {squishCount}
            </span>
          )}
          {squished && <Check className="w-4 h-4 text-stone-950 stroke-[3]" />}
        </button>

        {/* Bottone 2: Punchy Bubblegum Pink SCOSSA POP con Vibrazione Elettrica & Audio */}
        <button
          onClick={handleShock}
          className={`group relative inline-flex items-center gap-2.5 px-8 py-4 bg-pink-500 text-white font-black text-sm uppercase tracking-wider rounded-2xl border-3 border-black transition-all duration-150 select-none ${
            isShocking
              ? 'animate-pop-shake bg-pink-600 shadow-[8px_8px_0px_#fde047] ring-4 ring-yellow-300'
              : 'shadow-[6px_6px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:scale-95'
          }`}
        >
          {isShocking ? (
            <Flame className="w-5 h-5 text-yellow-300 animate-bounce fill-yellow-300" />
          ) : (
            <Sparkles className="w-5 h-5 fill-yellow-300 text-black group-hover:rotate-45 transition-transform" />
          )}
          <span>{isShocking ? 'SCOSSA ATTIVA! ⚡' : 'SCOSSA POP'}</span>
          {shockCount > 0 && (
            <span className="ml-1 px-2 py-0.5 bg-yellow-300 text-black font-mono text-xs rounded-lg font-black">
              {shockCount}x
            </span>
          )}
        </button>
      </div>

      <div className="flex items-center gap-4 text-xs font-mono font-bold text-stone-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-lime-500" /> Compressione Tattile
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-pink-500" /> Vibrazione Elettrica con Audio
        </span>
      </div>
    </div>
  );
}
