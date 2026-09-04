import React, { useState } from 'react';
import { Pin, Plus, Trash2, CheckSquare, Square, Download, Sparkles } from 'lucide-react';

interface NoteItem {
  id: string;
  title: string;
  text: string;
  color: 'yellow' | 'pink' | 'mint' | 'lavender';
  pinned: boolean;
  todos: { id: string; text: string; done: boolean }[];
}

export default function BlocknoteScratchpad() {
  const [notes, setNotes] = useState<NoteItem[]>([
    {
      id: '1',
      title: 'Idee Spontanee',
      text: 'Disegnare bottoni con bordi asimmetrici e colori complementari.',
      color: 'yellow',
      pinned: true,
      todos: [
        { id: 't1', text: 'Testare frequenze pentatoniche', done: true },
        { id: 't2', text: 'Rifinire curvature organiche', done: false },
      ],
    },
    {
      id: '2',
      title: 'Palette Astratta',
      text: 'Arancio mandarino, turchese neon e lilla vellutato.',
      color: 'lavender',
      pinned: false,
      todos: [],
    },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');
  const [selectedColor, setSelectedColor] = useState<'yellow' | 'pink' | 'mint' | 'lavender'>('mint');

  const colorStyles = {
    yellow: 'bg-amber-200 text-stone-900 border-amber-300 shadow-amber-300/40',
    pink: 'bg-rose-200 text-stone-900 border-rose-300 shadow-rose-300/40',
    mint: 'bg-emerald-200 text-stone-900 border-emerald-300 shadow-emerald-300/40',
    lavender: 'bg-purple-200 text-stone-900 border-purple-300 shadow-purple-300/40',
  };

  const addNote = () => {
    if (!newTitle.trim() && !newText.trim()) return;
    const newNote: NoteItem = {
      id: Date.now().toString(),
      title: newTitle.trim() || 'Nuovo Appunto',
      text: newText.trim(),
      color: selectedColor,
      pinned: false,
      todos: [],
    };
    setNotes([newNote, ...notes]);
    setNewTitle('');
    setNewText('');
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  const togglePin = (id: string) => {
    setNotes(
      notes.map((n) => (n.id === id ? { ...n, pinned: !n.pinned } : n))
    );
  };

  const toggleTodo = (noteId: string, todoId: string) => {
    setNotes(
      notes.map((n) => {
        if (n.id !== noteId) return n;
        return {
          ...n,
          todos: n.todos.map((t) => (t.id === todoId ? { ...t, done: !t.done } : t)),
        };
      })
    );
  };

  const exportNotesAsTxt = () => {
    const content = notes
      .map((n) => `[${n.title}]\n${n.text}\n${n.todos.map((t) => (t.done ? ' [X] ' : ' [ ] ') + t.text).join('\n')}`)
      .join('\n\n---\n\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'miei_appunti_blocknote.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-2">
      <div className="bg-stone-900 border-2 border-stone-800 rounded-3xl p-6 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-black shadow">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-white font-black text-lg">Blocknote Interattivo</h3>
              <p className="text-[11px] text-stone-400">Post-it colorati con checklist e salvataggio rapido</p>
            </div>
          </div>

          <button
            onClick={exportNotesAsTxt}
            className="px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Esporta .txt</span>
          </button>
        </div>

        {/* Input Bar */}
        <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 space-y-3">
          <input
            type="text"
            placeholder="Titolo nota..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full bg-stone-900 text-white px-3 py-2 rounded-xl text-xs sm:text-sm border border-stone-800 focus:outline-none focus:border-amber-400"
          />
          <textarea
            placeholder="Scrivi una nota o pensiero veloce..."
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            rows={2}
            className="w-full bg-stone-900 text-white px-3 py-2 rounded-xl text-xs sm:text-sm border border-stone-800 focus:outline-none focus:border-amber-400 resize-none"
          />

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            {/* Color picker */}
            <div className="flex items-center gap-1.5">
              {(['yellow', 'pink', 'mint', 'lavender'] as const).map((col) => (
                <button
                  key={col}
                  onClick={() => setSelectedColor(col)}
                  className={`w-6 h-6 rounded-full border-2 transition-transform ${
                    selectedColor === col ? 'scale-125 border-white' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor:
                      col === 'yellow' ? '#fde047' : col === 'pink' ? '#f472b6' : col === 'mint' ? '#6ee7b7' : '#c084fc',
                  }}
                />
              ))}
            </div>

            <button
              onClick={addNote}
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs flex items-center gap-1.5 active:scale-95 transition-all shadow"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Aggiungi Nota</span>
            </button>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`p-5 rounded-2xl border-2 shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1 ${
                colorStyles[note.color]
              }`}
              style={{
                transform: note.pinned ? 'rotate(-1deg)' : 'none',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-black text-sm">{note.title}</h4>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => togglePin(note.id)}
                      className={`p-1 rounded hover:bg-black/10 transition-colors ${
                        note.pinned ? 'text-red-600 font-bold' : 'text-stone-700 opacity-60'
                      }`}
                      title={note.pinned ? 'Rimuovi spilla' : 'Spilla nota'}
                    >
                      <Pin className={`w-3.5 h-3.5 ${note.pinned ? 'fill-red-600' : ''}`} />
                    </button>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="p-1 rounded hover:bg-black/10 text-stone-700 opacity-60 hover:opacity-100 transition-colors"
                      title="Elimina"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="text-xs leading-relaxed font-medium mb-3">{note.text}</p>

                {/* Todos inside note */}
                {note.todos.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-black/10">
                    {note.todos.map((todo) => (
                      <button
                        key={todo.id}
                        onClick={() => toggleTodo(note.id, todo.id)}
                        className="flex items-center gap-2 text-[11px] font-semibold text-left w-full hover:opacity-80"
                      >
                        {todo.done ? (
                          <CheckSquare className="w-3.5 h-3.5 text-stone-900" />
                        ) : (
                          <Square className="w-3.5 h-3.5 text-stone-600" />
                        )}
                        <span className={todo.done ? 'line-through opacity-50' : ''}>{todo.text}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 text-[10px] font-mono opacity-70 flex justify-between">
                <span>{note.pinned ? '★ IN EVIDENZA' : 'MEMO'}</span>
                <span>SCRATCHPAD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
