import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  Plus,
  Trash2,
  Bookmark,
  PenTool,
  Grid,
  AlignLeft,
  Sparkles,
} from 'lucide-react';

interface NoteItem {
  id: string;
  text: string;
  done: boolean;
}

export default function SpiralNotebookCard() {
  const [activeTab, setActiveTab] = useState<'idee' | 'progetti' | 'bozze'>('idee');
  const [paperStyle, setPaperStyle] = useState<'grid' | 'lines' | 'dots'>('grid');
  const [items, setItems] = useState<NoteItem[]>([
    { id: '1', text: 'Disegnare layout a spirale con fori ovali', done: true },
    { id: '2', text: 'Applicare washi tape giallo all’angolo superiore', done: true },
    { id: '3', text: 'Completare l’integrazione player audio MP3', done: false },
    { id: '4', text: 'Sperimentare griglia a quadretti da 5mm', done: false },
  ]);
  const [newItemText, setNewItemText] = useState('');

  const toggleItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    setItems([
      ...items,
      { id: Date.now().toString(), text: newItemText.trim(), done: false },
    ]);
    setNewItemText('');
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // 12 spiral rings looping on the left
  const rings = Array.from({ length: 11 });

  return (
    <div className="w-full max-w-xl mx-auto py-6 px-2 flex flex-col items-center">
      {/* Outer Notebook wrapper with right index tabs */}
      <div className="relative w-full flex">
        {/* Main Spiral Notebook Sheet */}
        <div className="relative flex-1 bg-[#fffef7] border-4 border-black shadow-[10px_10px_0px_0px_#000] overflow-hidden">
          {/* Diagonal Washi Tape on top corner */}
          <div className="absolute -top-3 left-16 z-20 w-28 h-7 bg-[#ffeb3b]/90 border-2 border-black -rotate-6 shadow-[2px_2px_0px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none">
            <span className="text-[8px] font-mono font-black uppercase tracking-widest text-black">
              WASHI_TAPE_STUDIO
            </span>
          </div>

          {/* Dog-ear fold top right corner */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-stone-200 border-l-2 border-b-2 border-black shadow-[-2px_2px_0px_rgba(0,0,0,0.2)] z-10" />

          {/* The Notebook Page with Spiral margin */}
          <div className="flex">
            {/* Left Binding strip with punched oval holes and metallic wire spirals */}
            <div className="w-14 sm:w-16 bg-[#ece7d5] border-r-3 border-black p-2 flex flex-col justify-around items-center relative select-none shrink-0 py-6">
              {rings.map((_, i) => (
                <div key={i} className="relative flex items-center justify-center my-1.5 w-full">
                  {/* Punched oval hole */}
                  <div className="w-5 h-2.5 bg-black rounded-full shadow-inner" />

                  {/* Wire coil loop (3D metallic effect) */}
                  <div className="absolute -left-2 w-8 h-3.5 border-3 border-black bg-gradient-to-r from-stone-400 via-stone-100 to-stone-500 rounded-full shadow-[1px_2px_0px_rgba(0,0,0,0.6)] transform -rotate-12 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Notebook Lined / Grid Paper Area */}
            <div
              className="flex-1 p-5 sm:p-7 relative"
              style={{
                backgroundImage:
                  paperStyle === 'grid'
                    ? 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)'
                    : paperStyle === 'lines'
                    ? 'linear-gradient(to bottom, rgba(59,130,246,0.15) 1px, transparent 1px)'
                    : 'radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)',
                backgroundSize: paperStyle === 'lines' ? '100% 28px' : '20px 20px',
              }}
            >
              {/* Header inside notebook */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b-2 border-black">
                <div className="flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-black stroke-[2.5]" />
                  <span className="font-mono text-sm font-black uppercase text-black tracking-tight">
                    QUADERNO APPUNTI • #{activeTab.toUpperCase()}
                  </span>
                </div>

                {/* Paper texture toggle */}
                <div className="flex items-center gap-1 bg-white border border-black p-0.5">
                  <button
                    onClick={() => setPaperStyle('grid')}
                    className={`px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase ${
                      paperStyle === 'grid' ? 'bg-black text-white' : 'text-black'
                    }`}
                    title="Quadretti"
                  >
                    Quadretti
                  </button>
                  <button
                    onClick={() => setPaperStyle('lines')}
                    className={`px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase ${
                      paperStyle === 'lines' ? 'bg-black text-white' : 'text-black'
                    }`}
                    title="Righe"
                  >
                    Righe
                  </button>
                  <button
                    onClick={() => setPaperStyle('dots')}
                    className={`px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase ${
                      paperStyle === 'dots' ? 'bg-black text-white' : 'text-black'
                    }`}
                    title="Puntinato"
                  >
                    Puntini
                  </button>
                </div>
              </div>

              {/* Form to add note */}
              <form onSubmit={addItem} className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={newItemText}
                  onChange={(e) => setNewItemText(e.target.value)}
                  placeholder="Scrivi una nuova voce nel quaderno..."
                  className="flex-1 bg-white border-2 border-black px-3 py-1.5 text-xs font-mono text-black placeholder:text-stone-400 focus:outline-none focus:bg-[#fff9db]"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-[#ffeb3b] hover:bg-black hover:text-[#ffeb3b] text-black border-2 border-black font-mono font-black text-xs uppercase shadow-[2px_2px_0px_#000] flex items-center gap-1 transition-all"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Aggiungi</span>
                </button>
              </form>

              {/* Items checklist on the ruled paper */}
              <div className="mt-5 space-y-2.5 min-h-[140px]">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 p-2 bg-white/80 border border-black shadow-[2px_2px_0px_rgba(0,0,0,0.7)] group transition-all"
                  >
                    <div
                      onClick={() => toggleItem(item.id)}
                      className="flex items-center gap-2.5 flex-1 cursor-pointer select-none"
                    >
                      <button
                        type="button"
                        className="text-black hover:scale-110 transition-transform"
                      >
                        {item.done ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 fill-emerald-100 stroke-[2.5]" />
                        ) : (
                          <Square className="w-4 h-4 text-black stroke-[2.5]" />
                        )}
                      </button>
                      <span
                        className={`text-xs font-mono ${
                          item.done
                            ? 'line-through text-stone-400 italic'
                            : 'font-bold text-black'
                        }`}
                      >
                        {item.text}
                      </span>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-stone-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                      title="Elimina voce"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Bottom margin info */}
              <div className="mt-6 pt-3 border-t-2 border-black flex items-center justify-between text-[10px] font-mono font-bold text-stone-500 uppercase">
                <span>
                  STATO: {items.filter((i) => i.done).length}/{items.length} COMPLETATI
                </span>
                <span>DATA: 2024.VOL.02</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sticky Index Tabs (Linguette colorate sporgenti) */}
        <div className="flex flex-col gap-2 pt-10 -ml-1 z-30 shrink-0">
          <button
            onClick={() => setActiveTab('idee')}
            className={`px-2.5 py-3 text-[10px] font-mono font-black uppercase [writing-mode:vertical-lr] border-2 border-black shadow-[2px_2px_0px_#000] transition-all ${
              activeTab === 'idee'
                ? 'bg-[#ffeb3b] text-black translate-x-1'
                : 'bg-white hover:bg-stone-100 text-stone-700'
            }`}
          >
            IDEE
          </button>

          <button
            onClick={() => setActiveTab('progetti')}
            className={`px-2.5 py-3 text-[10px] font-mono font-black uppercase [writing-mode:vertical-lr] border-2 border-black shadow-[2px_2px_0px_#000] transition-all ${
              activeTab === 'progetti'
                ? 'bg-[#4ecdc4] text-black translate-x-1'
                : 'bg-white hover:bg-stone-100 text-stone-700'
            }`}
          >
            PROGETTI
          </button>

          <button
            onClick={() => setActiveTab('bozze')}
            className={`px-2.5 py-3 text-[10px] font-mono font-black uppercase [writing-mode:vertical-lr] border-2 border-black shadow-[2px_2px_0px_#000] transition-all ${
              activeTab === 'bozze'
                ? 'bg-[#ff6b6b] text-white translate-x-1'
                : 'bg-white hover:bg-stone-100 text-stone-700'
            }`}
          >
            BOZZE
          </button>
        </div>
      </div>
    </div>
  );
}
