import React, { useState } from 'react';
import { Smile, Layers, Sparkles, CheckCircle2, CircleDot } from 'lucide-react';
import { playJellyPopSound, playMechanicalClickSound } from '../../../utils/soundEffects';

export default function JellyDoubleLayerButton() {
  // Stato indipendente per il primo bottone (Gommoso Elastic Jelly Pop)
  const [jellyWobble, setJellyWobble] = useState(false);
  const [popCount, setPopCount] = useState(0);

  // Stato indipendente per il secondo bottone (Meccanico a 2 Strati con Incastro 3D)
  const [isLatchingDown, setIsLatchingDown] = useState(false);
  const [dualLayerActive, setDualLayerActive] = useState(false);

  const handleJellyPop = () => {
    playJellyPopSound();
    setJellyWobble(true);
    setPopCount((c) => c + 1);
    setTimeout(() => setJellyWobble(false), 600);
  };

  const handleDualLayerToggle = () => {
    const nextState = !dualLayerActive;
    playMechanicalClickSound(dualLayerActive);
    setIsLatchingDown(true);
    setTimeout(() => {
      setDualLayerActive(nextState);
      setIsLatchingDown(false);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* BOTTone 1: JELLY POP GOMMOSO (Wobble E Gelatina Elastica) */}
        <div className="relative group inline-block">
          {/* Underlayer shadow jelly gommoso */}
          <div className="absolute inset-0 translate-y-3 bg-sky-400 rounded-3xl transition-transform group-hover:translate-y-4 shadow-md" />

          {/* Top jelly layer elastico */}
          <button
            onClick={handleJellyPop}
            className={`relative px-8 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 text-white font-black text-xs sm:text-sm rounded-3xl border-2 border-white/50 shadow-lg flex items-center gap-2.5 transition-all select-none ${
              jellyWobble ? 'animate-jelly-wobble' : 'hover:-translate-y-1 active:scale-95'
            }`}
          >
            <Smile
              className={`w-5 h-5 transition-transform duration-300 ${
                jellyWobble ? 'rotate-180 scale-125' : 'group-hover:rotate-12'
              }`}
            />
            <span className="tracking-wide">
              {jellyWobble ? 'JELLY POP! 🫧' : 'JELLY POP ELASTICO'}
            </span>
            {popCount > 0 && (
              <span className="px-2 py-0.5 bg-white/25 rounded-full font-mono text-xs font-black">
                {popCount}
              </span>
            )}
          </button>
        </div>

        {/* BOTTONE 2: DUAL-LAYER MECCANICO 3D (Incastro Profondo a 2 Livelli) */}
        <div className="relative inline-block">
          {/* Telaio Inferiore / Base Socket (Strato 1 fisso con incastro) */}
          <div className="p-1.5 bg-stone-950 border-3 border-black rounded-2xl shadow-[6px_6px_0px_#000]">
            <div className="flex items-center justify-between px-3 py-1 bg-stone-900 rounded-lg text-[10px] font-mono font-black mb-1 border border-stone-800">
              <span className="text-stone-400">CHASSIS 3D</span>
              <span
                className={`flex items-center gap-1 ${
                  dualLayerActive ? 'text-emerald-400' : 'text-amber-400'
                }`}
              >
                {dualLayerActive ? (
                  <CheckCircle2 className="w-3 h-3" />
                ) : (
                  <CircleDot className="w-3 h-3" />
                )}
                {dualLayerActive ? 'INNESTATO' : 'STANDBY'}
              </span>
            </div>

            {/* Piastra Superiore Mobile (Strato 2 che scende e si blocca nel telaio) */}
            <button
              onClick={handleDualLayerToggle}
              className={`relative px-7 py-3 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl border-2 border-black flex items-center gap-2.5 transition-all duration-200 select-none ${
                dualLayerActive
                  ? 'bg-emerald-400 text-stone-950 translate-y-1 shadow-[1px_1px_0px_#000]'
                  : 'bg-lime-400 text-stone-950 -translate-y-1 shadow-[4px_4px_0px_#000] hover:bg-lime-300'
              } ${isLatchingDown ? 'scale-95' : ''}`}
            >
              <Layers className="w-4 h-4" />
              <span>
                {dualLayerActive ? 'DUAL-LAYER: LIVE [ON]' : 'SCATTO DUAL-LAYER'}
              </span>
              <Sparkles
                className={`w-3.5 h-3.5 transition-transform ${
                  dualLayerActive ? 'rotate-90 text-stone-950' : 'text-stone-700'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs font-mono font-bold text-stone-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500" /> Gomma Gelatinosa (Wobble)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" /> Meccanismo a 2 Strati (Toggle 3D)
        </span>
      </div>
    </div>
  );
}
