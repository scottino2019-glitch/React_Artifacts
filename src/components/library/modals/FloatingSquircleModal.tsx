import React, { useState } from 'react';
import { Sparkles, X, Heart, Eye, Check } from 'lucide-react';

export default function FloatingSquircleModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenOption, setChosenOption] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 rounded-[2rem] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-fuchsia-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
        <span>Apri Finestra Squircle Asimmetrica</span>
      </button>

      {/* Modal Backdrop & Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in">
          <div
            className="relative w-full max-w-md bg-stone-900 text-white p-7 shadow-2xl border-2 border-stone-800 transition-all scale-100 animate-in zoom-in-95"
            style={{
              borderRadius: '2.5rem 1.25rem 3rem 1.75rem',
            }}
          >
            {/* Header ribbon */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center shadow">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-lg tracking-tight bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent">
                    Finestra Squircle
                  </h3>
                  <span className="text-[10px] font-mono text-stone-400 uppercase">Geometria Non Euclidea</span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-5 space-y-4 text-stone-300 text-xs sm:text-sm leading-relaxed">
              <p>
                Questo dialogo adotta raggi di curvatura disuguali sui quattro angoli
                (2.5rem, 1.25rem, 3rem, 1.75rem) per donare morbidezza ed unicità alla
                composizione visiva.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2">
                {['Onda Turchese', 'Bagliore Rosa'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setChosenOption(opt)}
                    className={`p-3 rounded-2xl border text-xs font-bold transition-all flex items-center justify-between ${
                      chosenOption === opt
                        ? 'bg-fuchsia-600/30 border-fuchsia-400 text-white shadow'
                        : 'bg-stone-800/60 border-stone-700 text-stone-300 hover:border-stone-500'
                    }`}
                  >
                    <span>{opt}</span>
                    {chosenOption === opt && <Check className="w-3.5 h-3.5 text-amber-300" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 pt-3 border-t border-stone-800">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl text-stone-400 hover:text-white text-xs font-semibold"
              >
                Chiudi
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs shadow-lg active:scale-95 transition-all"
              >
                Conferma Scelta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
