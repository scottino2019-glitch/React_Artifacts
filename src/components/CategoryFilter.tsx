import React from 'react';
import { ComponentCategory } from '../types';

interface CategoryFilterProps {
  activeCategory: ComponentCategory;
  onSelectCategory: (category: ComponentCategory) => void;
  counts: Record<ComponentCategory, number>;
}

export default function CategoryFilter({
  activeCategory,
  onSelectCategory,
  counts,
}: CategoryFilterProps) {
  const categories: {
    id: ComponentCategory;
    label: string;
    shapeType: 'circle-red' | 'poly-blue' | 'square-green' | 'dot-orange' | 'triangle-yellow' | 'pink-diamond' | 'black-pill' | 'cyan-box' | 'purple-star' | 'teal-ring' | 'amber-dot';
  }[] = [
    { id: 'tutti', label: 'Tutti', shapeType: 'black-pill' },
    { id: 'header', label: 'Header', shapeType: 'circle-red' },
    { id: 'hero', label: 'Hero', shapeType: 'poly-blue' },
    { id: 'footer', label: 'Footer', shapeType: 'square-green' },
    { id: 'card', label: 'Card', shapeType: 'dot-orange' },
    { id: 'griglie', label: 'Griglie', shapeType: 'triangle-yellow' },
    { id: 'bottoni', label: 'Bottoni', shapeType: 'pink-diamond' },
    { id: 'modali', label: 'Modali', shapeType: 'cyan-box' },
    { id: 'video', label: 'Video', shapeType: 'purple-star' },
    { id: 'audio', label: 'Audio', shapeType: 'teal-ring' },
    { id: 'blocknote', label: 'Blocknote', shapeType: 'amber-dot' },
  ];

  const renderShape = (type: string) => {
    switch (type) {
      case 'circle-red':
        return <span className="w-2.5 h-2.5 bg-red-500 rounded-full inline-block shrink-0 border border-black" />;
      case 'poly-blue':
        return (
          <span
            className="w-2.5 h-2.5 bg-blue-600 inline-block shrink-0"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          />
        );
      case 'square-green':
        return <span className="w-2.5 h-2.5 bg-green-500 rotate-45 inline-block shrink-0 border border-black" />;
      case 'dot-orange':
        return <span className="w-2.5 h-2.5 bg-orange-500 rounded-full inline-block shrink-0 border border-black" />;
      case 'triangle-yellow':
        return (
          <span
            className="w-2.5 h-2.5 bg-yellow-400 inline-block shrink-0"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          />
        );
      case 'pink-diamond':
        return <span className="w-2.5 h-2.5 bg-pink-500 rotate-12 inline-block shrink-0 border border-black" />;
      case 'cyan-box':
        return <span className="w-2.5 h-2.5 bg-cyan-400 inline-block shrink-0 border border-black" />;
      case 'purple-star':
        return <span className="w-2.5 h-2.5 bg-purple-500 rounded-full inline-block shrink-0 border border-black" />;
      case 'teal-ring':
        return <span className="w-2.5 h-2.5 bg-[#4ecdc4] rounded-sm inline-block shrink-0 border border-black" />;
      case 'amber-dot':
        return <span className="w-2.5 h-2.5 bg-amber-400 rounded-full inline-block shrink-0 border border-black" />;
      default:
        return <span className="w-2.5 h-2.5 bg-black inline-block shrink-0" />;
    }
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] font-mono font-black uppercase text-black">
          <span className="w-2.5 h-2.5 bg-[#ffeb3b] border border-black" />
          <span>FILTRA PER CATEGORIA:</span>
        </div>
        <span className="text-[10px] font-mono text-stone-600 font-bold uppercase hidden sm:inline">
          TUTTE LE 10 CATEGORIE + VISTA COMPLETA
        </span>
      </div>

      <div className="w-full flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = counts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              id={`filter-btn-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all border-2 border-black ${
                isActive
                  ? 'bg-[#ffeb3b] text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5'
                  : 'bg-white hover:bg-stone-100 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5'
              }`}
            >
              {renderShape(cat.shapeType)}
              <span>{cat.label}</span>
              <span
                className={`px-1.5 py-0.2 text-[10px] font-mono font-bold ${
                  isActive ? 'bg-black text-[#ffeb3b]' : 'bg-black text-white'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

