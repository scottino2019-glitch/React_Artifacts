import React, { useState } from 'react';
import { Compass, Sparkles, Orbit, Radio, Zap } from 'lucide-react';

export default function ParallelogramGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const items = [
    { title: 'Angolo Alfa', code: '∠ 15°', color: 'from-amber-400 to-orange-500', desc: 'Inclinazione dinamica positiva' },
    { title: 'Angolo Beta', code: '∠ 45°', color: 'from-fuchsia-500 to-pink-600', desc: 'Spostamento prospettico rapido' },
    { title: 'Angolo Gamma', code: '∠ 75°', color: 'from-cyan-400 to-blue-600', desc: 'Rifrazione orizzontale pura' },
    { title: 'Angolo Delta', code: '∠ 90°', color: 'from-emerald-400 to-teal-600', desc: 'Chiusura poligonale ortogonale' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div
            key={item.title}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="group relative cursor-pointer transition-transform duration-300 hover:-translate-y-2"
          >
            <div
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} text-stone-950 font-sans shadow-lg flex flex-col justify-between min-h-[220px] transition-all`}
              style={{
                transform: hoveredIdx === idx ? 'skewX(-4deg)' : 'skewX(0deg)',
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black uppercase bg-stone-950 text-white px-2.5 py-1 rounded-lg">
                  {item.code}
                </span>
                <Zap className="w-4 h-4 text-stone-950 fill-current" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-black tracking-tight">{item.title}</h4>
                <p className="text-xs font-semibold opacity-90">{item.desc}</p>
              </div>

              <div className="pt-2 border-t border-stone-950/20 flex items-center justify-between text-[11px] font-mono font-bold">
                <span>POLIGONO #{idx + 1}</span>
                <span>ATTIVO</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
