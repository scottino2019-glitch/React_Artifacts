import React, { useState } from 'react';
import { Ticket, Scissors, Check, Stamp, RotateCcw } from 'lucide-react';
import { playStampPunchSound, playScissorSnipSound } from '../../../utils/soundEffects';

export default function JaggedStampButton() {
  // Stato per TIMBRA BIGLIETTO
  const [stampCount, setStampCount] = useState(0);
  const [isStamping, setIsStamping] = useState(false);

  // Stato per TAGLIO MATRICE
  const [isCut, setIsCut] = useState(false);
  const [isSnipping, setIsSnipping] = useState(false);

  const handleStamp = () => {
    playStampPunchSound();
    setIsStamping(true);
    setStampCount((prev) => prev + 1);
    setTimeout(() => setIsStamping(false), 250);
  };

  const resetStamp = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStampCount(0);
  };

  const handleCut = () => {
    playScissorSnipSound();
    setIsSnipping(true);
    setTimeout(() => {
      setIsCut(!isCut);
      setIsSnipping(false);
    }, 200);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* BOTTONE 1: TIMBRA BIGLIETTO (Con perforazioni die-cut e timbro a inchiostro reale) */}
        <div className="relative group inline-block select-none">
          <button
            onClick={handleStamp}
            className={`relative bg-orange-500 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-8 border-3 border-stone-950 transition-all duration-150 overflow-hidden ${
              isStamping
                ? 'scale-95 translate-y-1 bg-orange-600 shadow-[1px_1px_0px_#000]'
                : 'shadow-[6px_6px_0px_#000] hover:bg-orange-400 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:scale-95'
            }`}
            style={{
              clipPath:
                'polygon(0% 0%, 10% 0%, 10% 8px, 20% 8px, 20% 0%, 80% 0%, 80% 8px, 90% 8px, 90% 0%, 100% 0%, 100% 100%, 90% 100%, 90% calc(100% - 8px), 80% calc(100% - 8px), 80% 100%, 20% 100%, 20% calc(100% - 8px), 10% calc(100% - 8px), 10% 100%, 0% 100%)',
            }}
          >
            <div className="flex items-center gap-2.5 relative z-10">
              <Stamp
                className={`w-4 h-4 transition-transform ${
                  isStamping ? 'rotate-45 scale-125 text-red-950' : 'text-stone-950'
                }`}
              />
              <span>
                {stampCount > 0
                  ? `TIMBRATO [${stampCount}X]`
                  : 'TIMBRA BIGLIETTO'}
              </span>
              {stampCount > 0 && (
                <Check className="w-4 h-4 text-stone-950 stroke-[3]" />
              )}
            </div>

            {/* Sigillo Timbro a inchiostro visibile sulla superficie del biglietto */}
            {stampCount > 0 && (
              <div className="absolute right-2 -bottom-1 transform -rotate-12 border-2 border-red-700 text-red-800 font-mono font-black text-[9px] px-1 py-0.5 rounded uppercase tracking-tighter opacity-85 pointer-events-none bg-orange-400/60">
                OBLIT. #{stampCount}
              </div>
            )}
          </button>

          {/* Reset timbro rapido se già timbrato */}
          {stampCount > 0 && (
            <button
              onClick={resetStamp}
              title="Azzera timbri"
              className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-black text-white border-2 border-white flex items-center justify-center shadow-md hover:bg-red-600 transition-colors z-20"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* BOTTONE 2: TAGLIO MATRICE (Con animazione di cesoia e taglio a strappo del talloncino) */}
        <div className="relative inline-block select-none">
          <button
            onClick={handleCut}
            className={`relative group bg-indigo-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-8 border-3 border-stone-950 transition-all duration-200 ${
              isCut
                ? 'bg-purple-900 border-dashed translate-x-2 rotate-1 shadow-[8px_8px_0px_#ffeb3b]'
                : 'shadow-[6px_6px_0px_#000] hover:bg-indigo-500 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:scale-95'
            }`}
            style={{
              clipPath:
                'polygon(0% 0%, 10% 0%, 10% 8px, 20% 8px, 20% 0%, 80% 0%, 80% 8px, 90% 8px, 90% 0%, 100% 0%, 100% 100%, 90% 100%, 90% calc(100% - 8px), 80% calc(100% - 8px), 80% 100%, 20% 100%, 20% calc(100% - 8px), 10% calc(100% - 8px), 10% 100%, 0% 100%)',
            }}
          >
            <div className="flex items-center gap-2.5">
              <Scissors
                className={`w-4 h-4 text-amber-300 transition-transform duration-300 ${
                  isSnipping ? 'rotate-90 scale-125' : isCut ? 'rotate-45' : ''
                }`}
              />
              <span>{isCut ? 'TAGLIATO! ✂️' : 'TAGLIO MATRICE'}</span>
            </div>

            {/* Effetto fessura linea tratteggiata di taglio */}
            <div className="absolute top-0 bottom-0 right-10 w-0.5 border-r-2 border-dashed border-yellow-300/60 pointer-events-none" />
          </button>

          {isCut && (
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 border border-indigo-300 rounded">
              Matrice separata • Clicca per ricucire
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs font-mono font-bold text-stone-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-orange-500" /> Timbro a Inchiostro con Audio
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-600" /> Taglio Matrice & Forbici
        </span>
      </div>
    </div>
  );
}
