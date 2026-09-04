import React, { useState } from 'react';
import { Smile, Sparkles } from 'lucide-react';

export default function JellyDoubleLayerButton() {
  const [bounced, setBounced] = useState(false);

  const triggerBounce = () => {
    setBounced(true);
    setTimeout(() => setBounced(false), 500);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-6">
      {/* Jelly Double Layer Button: Coral & Sky Blue */}
      <div className="relative group inline-block">
        {/* Underlayer shadow jelly */}
        <div className="absolute inset-0 translate-y-2 bg-sky-400 rounded-3xl transition-transform group-hover:translate-y-3" />

        {/* Top jelly layer */}
        <button
          onClick={triggerBounce}
          className={`relative px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-400 text-white font-extrabold text-xs sm:text-sm rounded-3xl shadow-md flex items-center gap-2 transition-all duration-300 ${
            bounced ? 'scale-90 -translate-y-1' : 'group-hover:-translate-y-1'
          }`}
        >
          <Smile className={`w-4 h-4 transition-transform ${bounced ? 'rotate-180' : ''}`} />
          <span className="tracking-wide">JELLY POP ELASTICO</span>
        </button>
      </div>

      {/* Variant: Acid Lime & Grape Violet */}
      <div className="relative group inline-block">
        <div className="absolute inset-0 translate-y-2 bg-purple-700 rounded-3xl transition-transform group-hover:translate-y-3" />

        <button
          onClick={triggerBounce}
          className={`relative px-8 py-4 bg-lime-400 text-stone-950 font-extrabold text-xs sm:text-sm rounded-3xl shadow-md flex items-center gap-2 transition-all duration-300 ${
            bounced ? 'scale-90 -translate-y-1' : 'group-hover:-translate-y-1'
          }`}
        >
          <Sparkles className="w-4 h-4 text-purple-900" />
          <span className="tracking-wide">RIMBALZO DUAL-LAYER</span>
        </button>
      </div>
    </div>
  );
}
