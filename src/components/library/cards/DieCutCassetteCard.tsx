import React, { useState } from 'react';
import { Disc, Play, Pause, Bookmark, Sparkles, Tag } from 'lucide-react';

export default function DieCutCassetteCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tapeSide, setTapeSide] = useState<'LATO A' | 'LATO B'>('LATO A');

  return (
    <div className="w-full max-w-sm mx-auto p-2">
      {/* Container with top tab die-cut */}
      <div className="relative">
        {/* Die-cut Tab protruding top */}
        <div className="w-28 h-6 bg-emerald-400 border-2 border-b-0 border-stone-900 rounded-t-xl ml-6 px-3 flex items-center gap-1 text-[10px] font-mono font-black uppercase text-stone-950">
          <Tag className="w-3 h-3" />
          <span>{tapeSide}</span>
        </div>

        {/* Main body */}
        <div className="bg-stone-900 border-3 border-stone-950 p-6 rounded-3xl rounded-tl-none shadow-[8px_8px_0px_#10b981] text-stone-100">
          {/* Cassette window simulation */}
          <div className="bg-stone-950 border-2 border-stone-800 rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-between px-4 py-2 bg-stone-900/90 rounded-xl border border-stone-800">
              {/* Spool 1 */}
              <div
                className={`w-9 h-9 rounded-full border-2 border-dashed border-emerald-400 flex items-center justify-center ${
                  isPlaying ? 'animate-spin' : ''
                }`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>

              {/* Tape counter */}
              <div className="font-mono text-xs font-black text-amber-400 bg-black px-2.5 py-1 rounded border border-stone-800 tracking-widest">
                {isPlaying ? 'REC ● 04:18' : 'STBY 00:00'}
              </div>

              {/* Spool 2 */}
              <div
                className={`w-9 h-9 rounded-full border-2 border-dashed border-rose-400 flex items-center justify-center ${
                  isPlaying ? 'animate-spin' : ''
                }`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              </div>
            </div>
          </div>

          <div className="space-y-1 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Collage Sonoro
              </span>
              <span className="text-[10px] font-mono text-stone-400">Hi-Fi Chrome</span>
            </div>
            <h4 className="text-lg font-black tracking-tight text-white">
              Nastro N. 42: Onde Analogiche
            </h4>
          </div>

          {/* Interactive controls */}
          <div className="flex items-center justify-between pt-2 border-t border-stone-800">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-xl bg-emerald-400 text-stone-950 font-black text-xs flex items-center gap-1.5 shadow-[2px_2px_0px_#fff] active:translate-x-0.5 active:translate-y-0.5"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isPlaying ? 'PAUSA' : 'ASCOLTA'}</span>
            </button>

            <button
              onClick={() => setTapeSide((s) => (s === 'LATO A' ? 'LATO B' : 'LATO A'))}
              className="px-3 py-2 rounded-xl bg-stone-800 text-stone-200 border border-stone-700 font-mono text-xs font-bold hover:bg-stone-700 transition-colors"
            >
              GIRA LATO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
