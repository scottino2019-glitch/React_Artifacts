import React, { useState } from 'react';
import { Ticket, Scissors, Check } from 'lucide-react';

export default function JaggedStampButton() {
  const [punched, setPunched] = useState(false);

  const handlePunch = () => {
    setPunched(true);
    setTimeout(() => setPunched(false), 1200);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-6">
      {/* Tangerine Perforated Ticket Stamp */}
      <button
        onClick={handlePunch}
        className="relative group bg-orange-500 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-8 border-2 border-stone-950 shadow-[4px_4px_0px_#000] hover:bg-orange-400 active:scale-95 transition-all"
        style={{
          clipPath:
            'polygon(0% 0%, 10% 0%, 10% 8px, 20% 8px, 20% 0%, 80% 0%, 80% 8px, 90% 8px, 90% 0%, 100% 0%, 100% 100%, 90% 100%, 90% calc(100% - 8px), 80% calc(100% - 8px), 80% 100%, 20% 100%, 20% calc(100% - 8px), 10% calc(100% - 8px), 10% 100%, 0% 100%)',
        }}
      >
        <div className="flex items-center gap-2">
          <Ticket className="w-4 h-4" />
          <span>{punched ? 'OBLITERATO!' : 'TIMBRA BIGLIETTO'}</span>
          {punched && <Check className="w-4 h-4 text-stone-950 stroke-[3]" />}
        </div>
      </button>

      {/* Cyber Violet Variant */}
      <button
        className="relative group bg-indigo-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-8 border-2 border-stone-950 shadow-[4px_4px_0px_#000] hover:bg-indigo-500 active:scale-95 transition-all"
        style={{
          clipPath:
            'polygon(0% 0%, 10% 0%, 10% 8px, 20% 8px, 20% 0%, 80% 0%, 80% 8px, 90% 8px, 90% 0%, 100% 0%, 100% 100%, 90% 100%, 90% calc(100% - 8px), 80% calc(100% - 8px), 80% 100%, 20% 100%, 20% calc(100% - 8px), 10% calc(100% - 8px), 10% 100%, 0% 100%)',
        }}
      >
        <div className="flex items-center gap-2">
          <Scissors className="w-4 h-4 text-amber-300" />
          <span>TAGLIO MATRICE</span>
        </div>
      </button>
    </div>
  );
}
