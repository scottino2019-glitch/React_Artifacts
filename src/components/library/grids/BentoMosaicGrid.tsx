import React, { useState } from 'react';
import { Eye, Palette, Sparkles, Wand2, Compass, Sun } from 'lucide-react';

export default function BentoMosaicGrid() {
  const [activeTile, setActiveTile] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px]">
        {/* Big Tile (spans 2 cols, 2 rows) - Vibrant Violet & Mango */}
        <div
          onClick={() => setActiveTile(0)}
          className="md:col-span-2 md:row-span-2 rounded-[2.5rem] bg-gradient-to-br from-violet-600 via-indigo-600 to-fuchsia-500 p-8 text-white shadow-xl flex flex-col justify-between cursor-pointer hover:scale-[1.01] transition-transform relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-44 h-44 bg-amber-400 rounded-full blur-3xl opacity-30 pointer-events-none" />

          <div className="flex items-center justify-between">
            <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-bold uppercase tracking-wider font-mono">
              Spazio Primario
            </span>
            <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
          </div>

          <div className="space-y-2 z-10">
            <h3 className="text-3xl font-black tracking-tight leading-tight">
              Mosaico Asimmetrico a Densità Variabile
            </h3>
            <p className="text-white/80 text-sm max-w-md">
              Ogni cella possiede proporzioni e pesi cromatici differenti per rompere la
              monotonia delle griglie standard a scacchiera.
            </p>
          </div>

          <div className="flex items-center gap-2 z-10">
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-white/90">Griglia Fluida Attiva</span>
          </div>
        </div>

        {/* Tile 2 - Lime Neo-Pop */}
        <div
          onClick={() => setActiveTile(1)}
          className="rounded-[2rem] bg-lime-300 text-stone-950 p-6 flex flex-col justify-between shadow-lg cursor-pointer hover:-translate-y-1 transition-transform border-2 border-stone-900"
        >
          <div className="flex items-center justify-between">
            <Palette className="w-5 h-5 text-stone-950" />
            <span className="text-[10px] font-mono font-black uppercase bg-stone-950 text-lime-300 px-2 py-0.5 rounded">
              LIME
            </span>
          </div>
          <div>
            <h4 className="font-black text-lg leading-tight">Tonalità Saturata</h4>
            <span className="text-xs text-stone-800 font-semibold">Energia visiva immediata</span>
          </div>
        </div>

        {/* Tile 3 - Coral Cloud */}
        <div
          onClick={() => setActiveTile(2)}
          className="rounded-[2rem] bg-rose-400 text-white p-6 flex flex-col justify-between shadow-lg cursor-pointer hover:-translate-y-1 transition-transform"
        >
          <div className="flex items-center justify-between">
            <Sun className="w-5 h-5 text-amber-200" />
            <span className="text-[10px] font-mono font-black uppercase bg-white/20 px-2 py-0.5 rounded-full">
              CORAL
            </span>
          </div>
          <div>
            <h4 className="font-black text-lg leading-tight">Riflessi Caldi</h4>
            <span className="text-xs text-rose-100 font-medium">Contrasto complementare</span>
          </div>
        </div>

        {/* Tile 4 (spans 3 cols on mobile/tablet or full width bar) - Cyan Night */}
        <div
          onClick={() => setActiveTile(3)}
          className="md:col-span-3 rounded-[2rem] bg-stone-950 border border-stone-800 text-stone-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400 text-stone-950 flex items-center justify-center font-black">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-black text-base text-white">Visualizzazione a Frequenze</h5>
              <p className="text-xs text-stone-400">Interfaccia non simmetrica per contenuti artistici</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-xl bg-stone-800 text-xs font-mono text-cyan-300 border border-stone-700">
              {activeTile !== null ? `Cella #${activeTile + 1} Selezionata` : 'Tocca una cella'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
