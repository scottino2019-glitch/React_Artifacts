import React, { useState } from 'react';
import { Heart, Sparkles, Feather, Send } from 'lucide-react';

export default function WavyHorizonFooter() {
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((l) => l + 1);
      setHasLiked(true);
    } else {
      setLikes((l) => l - 1);
      setHasLiked(false);
    }
  };

  return (
    <footer className="w-full relative bg-stone-900 text-stone-100 rounded-3xl overflow-hidden border border-stone-800">
      {/* SVG Wave separator on top */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-stone-950 fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="p-8 md:p-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left branding and quote */}
        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center shadow-lg">
              <Feather className="w-4 h-4 text-white" />
            </div>
            <span className="font-mono text-sm tracking-widest uppercase font-bold text-amber-300">
              Orizzonte Fluido
            </span>
          </div>

          <p className="text-stone-400 text-xs sm:text-sm max-w-sm italic">
            "La forma non segue più la funzione commerciale: segue l'immaginazione e il
            ritmo dei colori."
          </p>
        </div>

        {/* Center playful interaction */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleLike}
            className={`px-4 py-2 rounded-full border text-xs font-bold flex items-center gap-2 transition-all ${
              hasLiked
                ? 'bg-rose-500 border-rose-400 text-white shadow-[0_0_16px_rgba(244,63,94,0.5)] scale-105'
                : 'bg-stone-800 border-stone-700 text-stone-300 hover:text-white hover:border-stone-600'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-white' : ''}`} />
            <span>{likes} risonanze</span>
          </button>

          <div className="px-3 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 font-mono text-[11px] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Nessun Cookie</span>
          </div>
        </div>

        {/* Right simple links */}
        <div className="flex items-center gap-4 text-xs font-medium text-stone-400">
          <span className="hover:text-amber-300 cursor-pointer transition-colors">Manifesto</span>
          <span className="hover:text-amber-300 cursor-pointer transition-colors">Sintesi</span>
          <span className="hover:text-amber-300 cursor-pointer transition-colors">Archivio</span>
        </div>
      </div>
    </footer>
  );
}
