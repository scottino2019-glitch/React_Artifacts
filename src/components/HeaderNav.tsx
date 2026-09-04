import React from 'react';
import { Search, X, Sparkles, Download, Layers, ShieldCheck, Palette, Shapes, Terminal, Box } from 'lucide-react';

interface HeaderNavProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalCount: number;
  filteredCount: number;
}

export default function HeaderNav({
  searchQuery,
  onSearchChange,
  totalCount,
  filteredCount,
}: HeaderNavProps) {
  return (
    <div className="w-full space-y-6">
      {/* Top Banner with Artistic Flair: Yellow #ffeb3b, thick black border, neo-brutalist badge */}
      <div className="bg-[#ffeb3b] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        {/* Background decorative geometry */}
        <div className="absolute -right-8 -bottom-10 w-40 h-40 bg-black/5 rounded-full pointer-events-none" />
        <div className="absolute right-32 -top-6 w-16 h-16 border-4 border-black/10 rotate-45 pointer-events-none" />

        <div className="space-y-3 z-10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-black rotate-12 flex items-center justify-center shadow-[3px_3px_0px_#000] shrink-0 hover:rotate-0 transition-transform">
              <span className="text-white font-black text-2xl font-mono">R</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-black text-white text-[10px] font-black tracking-widest px-2 py-0.5 font-mono uppercase">
                  LIBRARY V2.4
                </span>
                <span className="px-2 py-0.5 bg-white text-black border border-black text-[10px] font-mono font-bold uppercase">
                  ZERO_SERVER
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-black leading-none mt-1">
                REACT_ARTIFACTS
              </h1>
            </div>
          </div>

          <p className="text-black font-semibold text-xs sm:text-sm max-w-2xl leading-relaxed">
            Galleria di componenti React da copiare e scaricare in <code className="bg-black text-yellow-300 px-1.5 py-0.5 font-mono text-xs border border-black">.tsx</code>. Forme geometriche singolari, contrasti saturi e funzioni speciali audio synth, video e note.
          </p>
        </div>

        {/* Action / Badges Section */}
        <div className="flex flex-wrap md:flex-col items-start gap-2 text-xs font-black z-10">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 border-2 border-black shadow-[3px_3px_0px_#000]">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
            <span className="uppercase text-black font-mono">Forme Squircles &amp; Poligoni</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 border-2 border-black shadow-[3px_3px_0px_#000]">
            <div className="w-2.5 h-2.5 bg-[#4ecdc4] rotate-45" />
            <span className="uppercase text-black font-mono">Download Diretto TSX</span>
          </div>
          <div className="flex items-center gap-2 bg-black text-white px-3 py-1.5 border-2 border-black shadow-[3px_3px_0px_#000]">
            <span className="w-2 h-2 bg-[#ffeb3b] rounded-full animate-ping" />
            <span className="uppercase font-mono text-[#ffeb3b]">100% Client-Side</span>
          </div>
        </div>
      </div>

      {/* Search Bar & Result Counters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Search input with Artistic Flair neo-brutalist border and hard shadow */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-black absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none stroke-[2.5]" />
          <input
            type="text"
            id="search-components-input"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cerca artefatto per nome, forma o tag..."
            className="w-full bg-white text-black pl-10 pr-9 py-2.5 text-xs sm:text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-0.5 transition-all placeholder:text-stone-500 font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:bg-black hover:text-white p-0.5 rounded transition-colors"
            >
              <X className="w-4 h-4 stroke-[3]" />
            </button>
          )}
        </div>

        {/* Counter badge */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-white border-2 border-black shadow-[3px_3px_0px_#000] font-mono text-xs font-black text-black uppercase">
            MOSTRATI: <strong className="text-blue-600 font-black">{filteredCount}</strong> / {totalCount} ARTEFATTI
          </span>
        </div>
      </div>
    </div>
  );
}

