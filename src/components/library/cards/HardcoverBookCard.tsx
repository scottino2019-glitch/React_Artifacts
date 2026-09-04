import React, { useState } from 'react';
import {
  BookOpen,
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Feather,
  Quote,
  Copy,
  Check,
} from 'lucide-react';

interface BookChapter {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  excerpt: string;
  pageNumber: number;
  note: string;
}

const CHAPTERS: BookChapter[] = [
  {
    id: 1,
    number: 'CAPITOLO I',
    title: 'L’Origine della Forma',
    subtitle: 'Manifesto sull’estetica delle geometrie pure',
    excerpt:
      '«Non v’è bellezza senza rigore matematico, né arte senza il coraggio di rompere il rettangolo comune. Ogni curva racchiude un pensiero, ogni spigolo vivo traccia un confine tra l’inerzia e la creazione.»',
    pageNumber: 42,
    note: 'Nota a margine: la forma non segue la funzione, la forma definisce l’esperienza.',
  },
  {
    id: 2,
    number: 'CAPITOLO II',
    title: 'L’Inchiostro e la Luce',
    subtitle: 'Contrasti ad alto impatto visivo',
    excerpt:
      '«Nel silenzio della pagina bianca, il nero più profondo risalta non per assenza, ma per autorità. Accostato al giallo vivo dell’ambra, il testo cessa di essere semplice scrittura e diviene scultura tipografica.»',
    pageNumber: 87,
    note: 'Nota: verificare la saturazione ottica su supporti editoriali ad alta grammatura.',
  },
  {
    id: 3,
    number: 'CAPITOLO III',
    title: 'La Legatura Perpetua',
    subtitle: 'La memoria tangibile degli artefatti',
    excerpt:
      '«Un libro non è soltanto un contenitore di parole: è un edificio portatile, una cassaforte di idee rilegate con filo di lino e protette da spessi piatti di cartone rivestito in tela cerata.»',
    pageNumber: 138,
    note: 'Riferimento: edizioni private e copertine d’autore del XX secolo.',
  },
];

export default function HardcoverBookCard() {
  const [currentChapterIdx, setCurrentChapterIdx] = useState(0);
  const [hasBookmark, setHasBookmark] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isCoverOpen, setIsCoverOpen] = useState(true);

  const chapter = CHAPTERS[currentChapterIdx];

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(chapter.excerpt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto py-6 px-2 flex flex-col items-center">
      {/* Book Container with Realistic Hardcover & Deckle Page Edges */}
      <div className="relative w-full">
        {/* Silk Ribbon Bookmark hanging from the book top down to the bottom */}
        {hasBookmark && (
          <div
            onClick={() => setHasBookmark(!hasBookmark)}
            className="absolute -top-3 right-16 z-30 flex flex-col items-center cursor-pointer group"
            title="Clicca per rimuovere / spostare il segnalibro"
          >
            {/* Top folded ribbon */}
            <div className="w-6 h-4 bg-red-700 border-x-2 border-t-2 border-black group-hover:bg-red-600 transition-colors" />
            {/* Hanging body */}
            <div className="w-6 h-28 bg-red-600 border-x-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,0.6)] flex items-end justify-center pb-2 group-hover:bg-red-500 transition-colors">
              <span className="text-[8px] font-mono font-black text-white uppercase tracking-widest rotate-90 mb-6">
                P.{chapter.pageNumber}
              </span>
            </div>
            {/* Forked ribbon tail */}
            <div className="w-0 h-0 border-x-[12px] border-x-transparent border-t-[12px] border-t-red-600 border-b-0" />
          </div>
        )}

        {/* The Hardcover Book Block */}
        <div className="relative bg-[#faf7ee] border-4 border-black shadow-[10px_10px_0px_0px_#000,16px_16px_0px_0px_#d6cbb6] flex overflow-visible">
          {/* Left Spine / Dorso del libro rilegato */}
          <div className="w-12 sm:w-16 bg-[#1e1b18] text-[#e0cfb3] border-r-4 border-black p-2 flex flex-col justify-between items-center relative select-none shrink-0 shadow-inner">
            {/* Spine bands (nervi del dorso in rilievo) */}
            <div className="w-full space-y-12 my-auto">
              <div className="w-full h-2 bg-[#ffeb3b] border-y border-black shadow-[0_2px_0_#000]" />
              <div className="w-full h-2 bg-[#ffeb3b] border-y border-black shadow-[0_2px_0_#000]" />
              <div className="w-full h-2 bg-[#ffeb3b] border-y border-black shadow-[0_2px_0_#000]" />
            </div>

            {/* Vertical Title on Spine */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-mono font-black text-xs sm:text-sm tracking-widest text-[#ffeb3b] rotate-90 uppercase whitespace-nowrap drop-shadow">
                ARS_GEOMETRICA_VOL_I
              </span>
            </div>

            <div className="z-10 text-[9px] font-mono text-stone-400 font-bold">
              1924
            </div>
          </div>

          {/* Book Inner Page Body */}
          <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between relative bg-[#fffdfa]">
            {/* Page Header with Chapter number & Bookmark toggle */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-black/80">
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-black stroke-[2.5]" />
                <span className="font-mono text-xs font-black uppercase tracking-wider text-black">
                  {chapter.number}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHasBookmark(!hasBookmark)}
                  className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase border border-black flex items-center gap-1 transition-all ${
                    hasBookmark
                      ? 'bg-red-600 text-white shadow-[1px_1px_0px_#000]'
                      : 'bg-white text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {hasBookmark ? (
                    <>
                      <BookmarkCheck className="w-3 h-3" />
                      <span>Segnalibro ON</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-3 h-3" />
                      <span>Segna Pagina</span>
                    </>
                  )}
                </button>
                <span className="font-mono text-xs font-bold text-black border-l-2 border-black pl-2">
                  Pag. {chapter.pageNumber}
                </span>
              </div>
            </div>

            {/* Chapter Titles */}
            <div className="py-4 space-y-1">
              <h4 className="text-xl sm:text-2xl font-serif font-black text-black tracking-tight">
                {chapter.title}
              </h4>
              <p className="text-xs font-mono font-bold text-stone-600 uppercase tracking-wide">
                {chapter.subtitle}
              </p>
            </div>

            {/* Literary Excerpt with Drop Cap */}
            <div className="relative my-3 p-4 bg-[#f8f4e9] border-2 border-black shadow-[3px_3px_0px_#000]">
              <Quote className="absolute top-2 right-2 w-6 h-6 text-black/15 pointer-events-none" />
              <p className="font-serif text-sm sm:text-base text-stone-900 leading-relaxed italic pr-4">
                {chapter.excerpt}
              </p>
            </div>

            {/* Margin Note / Chiosa a margine */}
            <div className="pt-2 pb-4 text-xs font-mono text-stone-700 border-l-4 border-[#ffeb3b] pl-3 italic bg-[#fff9db]/50">
              {chapter.note}
            </div>

            {/* Book Footer Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-black">
              {/* Previous / Next Chapter buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setCurrentChapterIdx(
                      (prev) => (prev - 1 + CHAPTERS.length) % CHAPTERS.length
                    )
                  }
                  className="px-2.5 py-1 bg-white hover:bg-black hover:text-white text-black border-2 border-black text-xs font-mono font-black uppercase shadow-[2px_2px_0px_#000] flex items-center gap-1 transition-all"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prec</span>
                </button>

                <button
                  onClick={() =>
                    setCurrentChapterIdx((prev) => (prev + 1) % CHAPTERS.length)
                  }
                  className="px-2.5 py-1 bg-[#ffeb3b] hover:bg-black hover:text-[#ffeb3b] text-black border-2 border-black text-xs font-mono font-black uppercase shadow-[2px_2px_0px_#000] flex items-center gap-1 transition-all"
                >
                  <span>Succ</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Copy Quote Button */}
              <button
                onClick={handleCopyQuote}
                className="px-3 py-1 bg-black text-white hover:bg-[#ffeb3b] hover:text-black border-2 border-black text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_#000] transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Citazione Copiata</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copia Citazione</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
