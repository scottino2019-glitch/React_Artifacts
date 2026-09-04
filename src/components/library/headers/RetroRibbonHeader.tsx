import React, { useState } from 'react';
import { Zap, Disc, Bookmark, Radio, ArrowRight } from 'lucide-react';

export default function RetroRibbonHeader() {
  const [activeChannel, setActiveChannel] = useState('01-SYNTH');
  const [isPlaying, setIsPlaying] = useState(false);

  const channels = ['01-SYNTH', '02-NOISE', '03-COLLAGE'];

  return (
    <div className="w-full bg-amber-300 border-4 border-black p-3 shadow-[6px_6px_0px_#000] rounded-2xl">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Logo block with offset badge */}
        <div className="flex items-center gap-3">
          <div className="bg-rose-500 text-white font-black px-3 py-1.5 border-2 border-black -rotate-2 shadow-[3px_3px_0px_#000] flex items-center gap-1.5 text-sm uppercase tracking-wider">
            <Zap className="w-4 h-4 fill-amber-300 text-black" />
            <span>RADICAL.LAB</span>
          </div>
          <span className="hidden sm:inline-block bg-black text-amber-300 font-mono text-[11px] px-2 py-0.5 font-bold uppercase">
            EST. 1989 / REV. 2026
          </span>
        </div>

        {/* Channels / Nav */}
        <div className="flex items-center gap-2">
          {channels.map((ch) => (
            <button
              key={ch}
              onClick={() => setActiveChannel(ch)}
              className={`px-3 py-1 text-xs font-mono font-bold border-2 border-black transition-transform ${
                activeChannel === ch
                  ? 'bg-cyan-400 text-black shadow-[3px_3px_0px_#000] -translate-y-0.5 font-black'
                  : 'bg-white text-stone-700 hover:bg-stone-100'
              }`}
            >
              {ch}
            </button>
          ))}
        </div>

        {/* Live status badge & tape action */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1 rounded-sm border-2 border-black text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
              isPlaying
                ? 'bg-emerald-400 text-black shadow-[2px_2px_0px_#000]'
                : 'bg-stone-200 text-stone-800'
            }`}
          >
            <Radio className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
            <span>{isPlaying ? 'ON AIR' : 'MUTED'}</span>
          </button>

          <button className="bg-purple-600 text-white px-3.5 py-1.5 border-2 border-black font-black text-xs shadow-[3px_3px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#000] transition-all flex items-center gap-1">
            <span>GET ZIP</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
