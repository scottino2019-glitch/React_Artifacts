import React, { useState, useMemo } from 'react';
import { ComponentCategory } from './types';
import { COMPONENTS_DATA } from './data/componentsData';
import HeaderNav from './components/HeaderNav';
import CategoryFilter from './components/CategoryFilter';
import ComponentCard from './components/ComponentCard';
import { Sparkles, ArrowUp, Layers, Code, Download, Heart } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ComponentCategory>('tutti');
  const [searchQuery, setSearchQuery] = useState('');

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<ComponentCategory, number> = {
      tutti: COMPONENTS_DATA.length,
      header: 0,
      hero: 0,
      footer: 0,
      card: 0,
      griglie: 0,
      bottoni: 0,
      modali: 0,
      video: 0,
      audio: 0,
      blocknote: 0,
    };

    COMPONENTS_DATA.forEach((item) => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    });

    return counts;
  }, []);

  // Filtered components
  const filteredComponents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return COMPONENTS_DATA.filter((item) => {
      const matchesCategory =
        activeCategory === 'tutti' || item.category === activeCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      const inName = item.name.toLowerCase().includes(query);
      const inDesc = item.description.toLowerCase().includes(query);
      const inShape = item.shape.toLowerCase().includes(query);
      const inCategory = item.categoryLabel.toLowerCase().includes(query);
      const inTags = item.tags.some((t) => t.toLowerCase().includes(query));

      return inName || inDesc || inShape || inCategory || inTags;
    });
  }, [activeCategory, searchQuery]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a] selection:bg-[#ffeb3b] selection:text-black font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Navigation & Title */}
        <HeaderNav
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalCount={COMPONENTS_DATA.length}
          filteredCount={filteredComponents.length}
        />

        {/* Category Filters Bar (Artistic Flair Sticky Neo-brutalist) */}
        <div className="sticky top-4 z-40 bg-[#fdfdfd]/95 backdrop-blur-md py-3 -mx-2 px-3 border-y-2 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]">
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            counts={categoryCounts}
          />
        </div>

        {/* Components Feed */}
        <main className="space-y-12">
          {filteredComponents.length > 0 ? (
            <div className="grid grid-cols-1 gap-12">
              {filteredComponents.map((item) => (
                <ComponentCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="p-10 text-center bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 bg-[#ffeb3b] border-2 border-black text-black flex items-center justify-center mx-auto shadow-[3px_3px_0px_#000]">
                <Sparkles className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-black uppercase text-black">Nessun artefatto trovato</h3>
              <p className="text-xs text-stone-600 font-medium">
                Nessun elemento corrisponde ai filtri impostati. Prova a reimpostare la ricerca o seleziona "Tutti".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('tutti');
                }}
                className="px-4 py-2 bg-black text-white font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-[#ffeb3b] hover:text-black hover:shadow-none transition-all"
              >
                Reimposta Filtri
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Global Page Footer - Artistic Flair Technical Mono Bar */}
      <footer className="mt-16 border-t-4 border-black bg-black text-white py-6 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-mono tracking-widest uppercase">
        <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
          <span className="font-bold text-[#ffeb3b]">COPYRIGHT_2024_REACT_ARTIFACTS</span>
          <span className="hidden sm:inline text-stone-500">|</span>
          <span className="text-stone-300">DESIGN_FOR_PURE_FUNCTION_NOT_COMMERCE</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-stone-400">V_02_44_12</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 bg-white text-black border border-white font-bold hover:bg-[#ffeb3b] hover:border-[#ffeb3b] transition-colors"
          >
            <span>TORNA_SU</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[3]" />
          </button>
        </div>
      </footer>
    </div>
  );
}

