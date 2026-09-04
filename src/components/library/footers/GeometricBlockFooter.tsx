import React, { useState } from 'react';
import { Asterisk, ArrowUp, Smile, Sparkles } from 'lucide-react';

export default function GeometricBlockFooter() {
  const [clickedStamp, setClickedStamp] = useState(false);

  return (
    <footer className="w-full bg-black p-4 rounded-3xl text-white font-mono">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Block 1: Canary Block */}
        <div className="bg-amber-400 text-black p-6 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-[4px_4px_0px_#fff]">
          <div className="flex items-center justify-between">
            <span className="font-black text-sm uppercase">BOX A-01</span>
            <Asterisk className="w-5 h-5 animate-spin" />
          </div>
          <div>
            <p className="text-xl font-black leading-tight">GEOMETRIA E CONTRASTO</p>
            <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
              Pattern Non Lineare
            </span>
          </div>
        </div>

        {/* Block 2: Magenta Interactive Stamp */}
        <div className="bg-rose-500 text-white p-6 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-[4px_4px_0px_#fff]">
          <div className="flex items-center justify-between">
            <span className="font-black text-sm uppercase">TIMBRO INTERATTIVO</span>
            <Smile className="w-5 h-5" />
          </div>
          <button
            onClick={() => setClickedStamp(!clickedStamp)}
            className="w-full py-2.5 bg-black text-rose-300 font-black text-xs uppercase border-2 border-white hover:bg-white hover:text-black transition-colors rounded-xl flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000]"
          >
            <Sparkles className="w-4 h-4" />
            <span>{clickedStamp ? 'TIMBRATO!' : 'CLICCA TIMBRO'}</span>
          </button>
        </div>

        {/* Block 3: Cyan Action Block */}
        <div className="bg-cyan-400 text-black p-6 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-[4px_4px_0px_#fff]">
          <div className="flex items-center justify-between">
            <span className="font-black text-sm uppercase">FONDO PAGINA</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-full bg-black text-cyan-300 flex items-center justify-center hover:scale-110 transition-transform"
              title="Torna su"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs font-bold leading-relaxed">
            Nessun footer preconfezionato. Tre blocchi indipendenti ad alto impatto.
          </p>
        </div>
      </div>
    </footer>
  );
}
