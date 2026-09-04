import React, { useState } from 'react';
import { ChevronUp, X, Palette, Sparkles, Sliders } from 'lucide-react';

export default function CurvedDrawerModal() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sliderVal, setSliderVal] = useState(65);

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4">
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-stone-950 font-black text-xs sm:text-sm shadow-xl shadow-teal-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
      >
        <ChevronUp className="w-4 h-4" />
        <span>Solleva Cassetto a Bordo Curvato</span>
      </button>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs animate-in fade-in">
          {/* Drawer sheet */}
          <div className="w-full max-w-xl bg-gradient-to-b from-stone-900 to-stone-950 text-white border-t-4 border-emerald-400 p-6 rounded-t-[3.5rem] shadow-2xl animate-in slide-in-from-bottom duration-300">
            {/* Grab handle pill */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1.5 rounded-full bg-emerald-400/80" />
            </div>

            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-black">Pannello Inferiore Curvo</h3>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-400 mb-5">
              Un pannello estraibile dal basso con arco concavo superiore e dettagli
              neon per comandi veloci.
            </p>

            {/* Interactive parameter slider */}
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700 space-y-2 mb-6">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-stone-300 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                  Saturazione Armonica
                </span>
                <span className="text-emerald-300 font-bold">{sliderVal}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderVal}
                onChange={(e) => setSliderVal(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
            </div>

            <button
              onClick={() => setIsDrawerOpen(false)}
              className="w-full py-3 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-stone-950 font-black text-xs uppercase tracking-wider transition-colors"
            >
              Applica e Richiudi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
