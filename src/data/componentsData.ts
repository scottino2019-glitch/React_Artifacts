import { ComponentItem } from '../types';

import FloatingCapsuleHeader from '../components/library/headers/FloatingCapsuleHeader';
import RetroRibbonHeader from '../components/library/headers/RetroRibbonHeader';
import ChromaticShapesHero from '../components/library/heroes/ChromaticShapesHero';
import SplitArcHero from '../components/library/heroes/SplitArcHero';
import WavyHorizonFooter from '../components/library/footers/WavyHorizonFooter';
import GeometricBlockFooter from '../components/library/footers/GeometricBlockFooter';
import PrismHoloCard from '../components/library/cards/PrismHoloCard';
import OrganicBlobCard from '../components/library/cards/OrganicBlobCard';
import DieCutCassetteCard from '../components/library/cards/DieCutCassetteCard';
import HardcoverBookCard from '../components/library/cards/HardcoverBookCard';
import SpiralNotebookCard from '../components/library/cards/SpiralNotebookCard';
import PassportBoardingCard from '../components/library/cards/PassportBoardingCard';
import ArchiveFolderCard from '../components/library/cards/ArchiveFolderCard';
import BentoMosaicGrid from '../components/library/grids/BentoMosaicGrid';
import ParallelogramGrid from '../components/library/grids/ParallelogramGrid';
import NeoPopSquishyButton from '../components/library/buttons/NeoPopSquishyButton';
import MagneticGlowPillButton from '../components/library/buttons/MagneticGlowPillButton';
import JaggedStampButton from '../components/library/buttons/JaggedStampButton';
import JellyDoubleLayerButton from '../components/library/buttons/JellyDoubleLayerButton';
import FloatingSquircleModal from '../components/library/modals/FloatingSquircleModal';
import CurvedDrawerModal from '../components/library/modals/CurvedDrawerModal';
import VideoPlayerCreative from '../components/library/special/VideoPlayerCreative';
import InteractiveAudioPlayer from '../components/library/special/InteractiveAudioPlayer';
import BlocknoteScratchpad from '../components/library/special/BlocknoteScratchpad';

export const COMPONENTS_DATA: ComponentItem[] = [
  {
    id: 'floating-capsule-header',
    name: 'Header Capsula Fluttuante',
    category: 'header',
    categoryLabel: 'Header',
    description: 'Header a capsula galleggiante con badge cromatico ruotato, pulsanti pillola e menu responsive.',
    shape: 'Capsula Arrotondata (2.5rem)',
    colorPalette: ['#fbbf24', '#f43f5e', '#6366f1'],
    component: FloatingCapsuleHeader,
    tags: ['capsula', 'fluido', 'glow', 'pill', 'responsive'],
    code: `import React, { useState } from 'react';
import { Sparkles, Compass, Palette, Bell, Menu, X, ArrowUpRight } from 'lucide-react';

export default function FloatingCapsuleHeader() {
  const [activeTab, setActiveTab] = useState('Esplora');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAlertActive, setIsAlertActive] = useState(false);

  const links = [
    { name: 'Esplora', icon: Compass, color: 'text-amber-500' },
    { name: 'Tavolozza', icon: Palette, color: 'text-violet-500' },
    { name: 'Ispirazione', icon: Sparkles, color: 'text-pink-500' },
  ];

  return (
    <header className="w-full p-4 flex justify-center">
      <div className="w-full max-w-4xl bg-stone-900/90 backdrop-blur-md text-stone-100 rounded-[2.5rem] p-2.5 px-4 shadow-[0_12px_32px_rgba(0,0,0,0.25)] border border-stone-800 flex items-center justify-between transition-all">
        {/* Logo / Asymmetrical badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 flex items-center justify-center shadow-inner rotate-3 hover:rotate-0 transition-transform">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <span className="font-black text-lg tracking-tight bg-gradient-to-r from-amber-300 via-pink-400 to-purple-300 bg-clip-text text-transparent">
              ChromaCapsule
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] text-stone-400 font-mono tracking-wider uppercase">Live Studio</span>
            </div>
          </div>
        </div>

        {/* Nav Links in floating pill */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-800/80 p-1.5 rounded-full border border-stone-700/60">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.name;
            return (
              <button
                key={link.name}
                onClick={() => setActiveTab(link.name)}
                className={\`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all \${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-900/50'
                    : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
                }\`}
              >
                <Icon className={\`w-3.5 h-3.5 \${isActive ? 'text-amber-300' : link.color}\`} />
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAlertActive(!isAlertActive)}
            className={\`w-9 h-9 rounded-full flex items-center justify-center border transition-all \${
              isAlertActive
                ? 'bg-amber-400 text-stone-950 border-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                : 'bg-stone-800 text-stone-300 border-stone-700 hover:text-white hover:border-stone-600'
            }\`}
            title="Avvisi colorati"
          >
            <Bell className="w-4 h-4" />
          </button>

          <button
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 text-stone-950 font-bold text-xs hover:brightness-110 active:scale-95 transition-all shadow-md shadow-rose-950/20"
          >
            <span>Avvia Esperimento</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-stone-800 text-stone-300 flex items-center justify-center border border-stone-700"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="absolute top-20 left-4 right-4 bg-stone-900 border border-stone-800 p-4 rounded-3xl shadow-2xl flex flex-col gap-2 md:hidden z-50 animate-in fade-in slide-in-from-top-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.name}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 rounded-2xl text-sm font-medium flex items-center gap-3 bg-stone-800/60 hover:bg-stone-800 text-stone-200"
              >
                <Icon className={\`w-4 h-4 \${link.color}\`} />
                {link.name}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}`,
  },
  {
    id: 'retro-ribbon-header',
    name: 'Header Nastro Retrò Pop',
    category: 'header',
    categoryLabel: 'Header',
    description: 'Header a nastro giallo canarino con bordi neri marcati, badge sfasato ed etichette canali.',
    shape: 'Nastro Spezzato con Ombra Rigida',
    colorPalette: ['#fde047', '#f43f5e', '#22d3ee'],
    component: RetroRibbonHeader,
    tags: ['retro', 'brutalist', 'giallo', 'nastro', 'canali'],
    code: `import React, { useState } from 'react';
import { Zap, Radio, ArrowRight } from 'lucide-react';

export default function RetroRibbonHeader() {
  const [activeChannel, setActiveChannel] = useState('01-SYNTH');
  const [isPlaying, setIsPlaying] = useState(false);

  const channels = ['01-SYNTH', '02-NOISE', '03-COLLAGE'];

  return (
    <div className="w-full bg-amber-300 border-4 border-black p-3 shadow-[6px_6px_0px_#000] rounded-2xl">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-rose-500 text-white font-black px-3 py-1.5 border-2 border-black -rotate-2 shadow-[3px_3px_0px_#000] flex items-center gap-1.5 text-sm uppercase tracking-wider">
            <Zap className="w-4 h-4 fill-amber-300 text-black" />
            <span>RADICAL.LAB</span>
          </div>
          <span className="hidden sm:inline-block bg-black text-amber-300 font-mono text-[11px] px-2 py-0.5 font-bold uppercase">
            EST. 1989 / REV. 2026
          </span>
        </div>

        <div className="flex items-center gap-2">
          {channels.map((ch) => (
            <button
              key={ch}
              onClick={() => setActiveChannel(ch)}
              className={\`px-3 py-1 text-xs font-mono font-bold border-2 border-black transition-transform \${
                activeChannel === ch
                  ? 'bg-cyan-400 text-black shadow-[3px_3px_0px_#000] -translate-y-0.5 font-black'
                  : 'bg-white text-stone-700 hover:bg-stone-100'
              }\`}
            >
              {ch}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={\`px-3 py-1 rounded-sm border-2 border-black text-xs font-mono font-bold flex items-center gap-1.5 transition-all \${
              isPlaying
                ? 'bg-emerald-400 text-black shadow-[2px_2px_0px_#000]'
                : 'bg-stone-200 text-stone-800'
            }\`}
          >
            <Radio className={\`w-3.5 h-3.5 \${isPlaying ? 'animate-spin' : ''}\`} />
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
}`,
  },
  {
    id: 'chromatic-shapes-hero',
    name: 'Hero Forme Cromatiche',
    category: 'hero',
    categoryLabel: 'Hero',
    description: 'Hero artistico con sfondi d’atmosfera sfocati, selettore frequenze di colore e card centrale ruotata.',
    shape: 'Pillole Satellitari e Card a 6°',
    colorPalette: ['#ec4899', '#8b5cf6', '#06b6d4'],
    component: ChromaticShapesHero,
    tags: ['geometrie', 'cromatico', 'satelliti', 'aura'],
    code: `import React, { useState } from 'react';
import { Eye, Wand2, Layers, Shuffle } from 'lucide-react';

export default function ChromaticShapesHero() {
  const [activeMood, setActiveMood] = useState(0);

  const moods = [
    { name: 'Aurora', bg: 'from-fuchsia-600 via-violet-600 to-cyan-500', accent: '#ec4899' },
    { name: 'Solaris', bg: 'from-amber-500 via-orange-600 to-rose-600', accent: '#f59e0b' },
    { name: 'Krypton', bg: 'from-emerald-400 via-teal-600 to-blue-700', accent: '#10b981' },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-stone-950 text-white p-8 md:p-14 border border-stone-800 shadow-2xl">
      <div className={\`absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br \${moods[activeMood].bg} opacity-40 blur-3xl pointer-events-none transition-all duration-700\`} />
      <div className={\`absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-tr \${moods[activeMood].bg} opacity-30 blur-3xl pointer-events-none transition-all duration-700\`} />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-5 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-stone-300">Forma Libera & Colore Puro</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
            Scomponi lo spazio,{' '}
            <span className="bg-gradient-to-r from-amber-300 via-rose-400 to-cyan-300 bg-clip-text text-transparent underline decoration-wavy decoration-cyan-400/50">
              inventa la forma.
            </span>
          </h1>

          <p className="text-stone-400 text-sm sm:text-base leading-relaxed max-w-lg">
            Spazio fluido privo di schemi convenzionali. Intersezioni cromatiche, angoli
            asimmetrici e ritmi visivi spontanei.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <button
              onClick={() => setActiveMood((prev) => (prev + 1) % moods.length)}
              className="px-5 py-2.5 rounded-2xl bg-white text-stone-950 font-extrabold text-xs sm:text-sm flex items-center gap-2 hover:bg-amber-300 transition-colors shadow-lg shadow-white/10 active:scale-95"
            >
              <Shuffle className="w-4 h-4 text-violet-700" />
              <span>Cambia Frequenza: {moods[activeMood].name}</span>
            </button>
          </div>
        </div>

        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
          <div className="w-48 h-48 rounded-[3rem] bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-400 p-1 rotate-6 shadow-2xl hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full bg-stone-950 rounded-[2.8rem] flex flex-col items-center justify-center p-4 text-center">
              <Layers className="w-8 h-8 text-amber-300 mb-2" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-stone-300">POLY-RHYTHM</span>
              <span className="text-[10px] text-stone-500 font-mono mt-1">45° Shift / 120Hz</span>
            </div>
          </div>

          <div className="absolute top-2 -left-4 bg-amber-400 text-stone-950 font-black text-xs px-3.5 py-1.5 rounded-full -rotate-12 shadow-lg border-2 border-stone-950 flex items-center gap-1">
            <Wand2 className="w-3.5 h-3.5" />
            <span>GEO-FLUX</span>
          </div>

          <div className="absolute -bottom-3 -right-3 bg-cyan-400 text-stone-950 font-black text-xs px-3.5 py-1.5 rounded-full rotate-6 shadow-lg border-2 border-stone-950 flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            <span>VIVID DRAFT</span>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'split-arc-hero',
    name: 'Hero Arco Concavo a Due Toni',
    category: 'hero',
    categoryLabel: 'Hero',
    description: 'Hero con divisione ad arco concavo, sigillo centrale interattivo e badge a contrasto.',
    shape: 'Curva Catenaria / Arco Concavo',
    colorPalette: ['#4f46e5', '#fbbf24', '#f43f5e'],
    component: SplitArcHero,
    tags: ['arco', 'curva', 'due-toni', 'sigillo'],
    code: `import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function SplitArcHero() {
  const [stampActive, setStampActive] = useState(false);

  return (
    <div className="w-full overflow-hidden rounded-3xl border-2 border-stone-200 shadow-xl bg-gradient-to-b from-amber-50 via-rose-50 to-indigo-50">
      <div className="relative bg-indigo-600 text-white p-8 md:p-14 rounded-b-[4rem] sm:rounded-b-[6rem] shadow-lg transition-all">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-2 bg-indigo-500/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-indigo-100 border border-indigo-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
            <span>Spazio a Geometrie Miste</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Colori vivi che non chiedono il permesso.
          </h2>

          <p className="text-indigo-200 text-sm sm:text-base max-w-lg leading-relaxed">
            Una composizione a doppia curva organica pensata per rompere la noia dei layout rigidi.
          </p>
        </div>

        <button
          onClick={() => setStampActive(!stampActive)}
          className={\`absolute -bottom-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white flex items-center justify-center font-black text-xs shadow-xl transition-transform \${
            stampActive
              ? 'bg-rose-500 text-white rotate-45 scale-110'
              : 'bg-amber-400 text-stone-900 rotate-0 hover:scale-105'
          }\`}
        >
          {stampActive ? '✦' : '⚡'}
        </button>
      </div>

      <div className="pt-12 pb-8 px-6 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-3">
        <div className="px-4 py-2 rounded-2xl bg-white border border-stone-200 shadow-sm text-xs font-bold text-stone-700 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span>Curva Catenaria</span>
        </div>
        <div className="px-4 py-2 rounded-2xl bg-white border border-stone-200 shadow-sm text-xs font-bold text-stone-700 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span>Contrasti Saturi</span>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'wavy-horizon-footer',
    name: 'Footer Orizzonte Ondulato',
    category: 'footer',
    categoryLabel: 'Footer',
    description: 'Footer con onda SVG morbida sulla sommità, pulsante contatore risonanze e citazione artistica.',
    shape: 'Onda Sinusoidale SVG Fluida',
    colorPalette: ['#1c1917', '#f59e0b', '#f43f5e'],
    component: WavyHorizonFooter,
    tags: ['onda', 'svg', 'organico', 'risonanza'],
    code: `import React, { useState } from 'react';
import { Heart, Sparkles, Feather } from 'lucide-react';

export default function WavyHorizonFooter() {
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <footer className="w-full relative bg-stone-900 text-stone-100 rounded-3xl overflow-hidden border border-stone-800">
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-stone-950 fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="p-8 md:p-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center shadow-lg">
              <Feather className="w-4 h-4 text-white" />
            </div>
            <span className="font-mono text-sm tracking-widest uppercase font-bold text-amber-300">
              Orizzonte Fluido
            </span>
          </div>
          <p className="text-stone-400 text-xs sm:text-sm max-w-sm italic">
            "La forma non segue più la funzione commerciale: segue l'immaginazione e il ritmo dei colori."
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setLikes(hasLiked ? likes - 1 : likes + 1);
              setHasLiked(!hasLiked);
            }}
            className={\`px-4 py-2 rounded-full border text-xs font-bold flex items-center gap-2 transition-all \${
              hasLiked
                ? 'bg-rose-500 border-rose-400 text-white shadow-[0_0_16px_rgba(244,63,94,0.5)] scale-105'
                : 'bg-stone-800 border-stone-700 text-stone-300 hover:text-white hover:border-stone-600'
            }\`}
          >
            <Heart className={\`w-3.5 h-3.5 \${hasLiked ? 'fill-white' : ''}\`} />
            <span>{likes} risonanze</span>
          </button>
        </div>
      </div>
    </footer>
  );
}`,
  },
  {
    id: 'geometric-block-footer',
    name: 'Footer a Blocchi Geometrici',
    category: 'footer',
    categoryLabel: 'Footer',
    description: 'Footer modulare a 3 blocchi ad alto contrasto: giallo, magenta e turchese con timbro interattivo.',
    shape: 'Tessere Modulari con Ombre Dure',
    colorPalette: ['#facc15', '#f43f5e', '#22d3ee'],
    component: GeometricBlockFooter,
    tags: ['brutalist', 'blocchi', 'tessere', 'timbro'],
    code: `import React, { useState } from 'react';
import { Asterisk, ArrowUp, Smile, Sparkles } from 'lucide-react';

export default function GeometricBlockFooter() {
  const [clickedStamp, setClickedStamp] = useState(false);

  return (
    <footer className="w-full bg-black p-4 rounded-3xl text-white font-mono">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-amber-400 text-black p-6 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-[4px_4px_0px_#fff]">
          <div className="flex items-center justify-between">
            <span className="font-black text-sm uppercase">BOX A-01</span>
            <Asterisk className="w-5 h-5 animate-spin" />
          </div>
          <p className="text-xl font-black leading-tight">GEOMETRIA E CONTRASTO</p>
        </div>

        <div className="bg-rose-500 text-white p-6 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-[4px_4px_0px_#fff]">
          <span className="font-black text-sm uppercase">TIMBRO INTERATTIVO</span>
          <button
            onClick={() => setClickedStamp(!clickedStamp)}
            className="w-full py-2.5 bg-black text-rose-300 font-black text-xs uppercase border-2 border-white hover:bg-white hover:text-black transition-colors rounded-xl flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>{clickedStamp ? 'TIMBRATO!' : 'CLICCA TIMBRO'}</span>
          </button>
        </div>

        <div className="bg-cyan-400 text-black p-6 rounded-2xl flex flex-col justify-between min-h-[160px] shadow-[4px_4px_0px_#fff]">
          <span className="font-black text-sm uppercase">FONDO PAGINA</span>
          <p className="text-xs font-bold leading-relaxed">Nessun footer preconfezionato. Tre blocchi indipendenti.</p>
        </div>
      </div>
    </footer>
  );
}`,
  },
  {
    id: 'prism-holo-card',
    name: 'Card Prisma Olografico',
    category: 'card',
    categoryLabel: 'Card',
    description: 'Card sfaccettata a poliedro angolato con gradiente iridescente e selettore di frammenti di pensiero.',
    shape: 'Poligono a Taglio Obliquo (Clip-Path)',
    colorPalette: ['#d946ef', '#6366f1', '#06b6d4'],
    component: PrismHoloCard,
    tags: ['prisma', 'olografico', 'clip-path', 'frammento'],
    code: `import React, { useState } from 'react';
import { Sparkles, Orbit, RefreshCw } from 'lucide-react';

export default function PrismHoloCard() {
  const [activeFacet, setActiveFacet] = useState(0);

  const fragments = [
    { title: 'Frammento Astrale', freq: '432 Hz', color: 'from-fuchsia-500 via-purple-600 to-indigo-600', note: 'I colori non sono proprietà degli oggetti, ma conversazioni tra luce e retina.' },
    { title: 'Dissonanza Ottica', freq: '528 Hz', color: 'from-amber-400 via-rose-500 to-violet-600', note: 'Un angolo obliquo rompe la gravità percepita di una pagina web statica.' },
  ];

  const current = fragments[activeFacet];

  return (
    <div className="w-full max-w-sm mx-auto p-1">
      <div
        className={\`relative p-7 rounded-[2.5rem] bg-gradient-to-br \${current.color} text-white shadow-2xl transition-all duration-700\`}
        style={{ clipPath: 'polygon(0% 12%, 12% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%)' }}
      >
        <div className="relative z-10 flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-black/30 text-[11px] font-mono font-bold tracking-widest">{current.freq}</span>
            <button onClick={() => setActiveFacet((prev) => (prev + 1) % fragments.length)} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <RefreshCw className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
          <div className="my-6 space-y-2">
            <h3 className="text-2xl font-black">{current.title}</h3>
            <p className="text-white/90 text-sm italic">"{current.note}"</p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/20 text-[11px] font-mono">
            <span>Poliedro Attivo</span>
            <Sparkles className="w-4 h-4 text-amber-200" />
          </div>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'organic-blob-card',
    name: 'Card a Blob Organico Morbido',
    category: 'card',
    categoryLabel: 'Card',
    description: 'Card scultura liquida con bordi a raggio organico disomogeneo, fiamma di vibrazione e palette calda.',
    shape: 'Blob Organico (Raggi 58% 42% 63%...)',
    colorPalette: ['#fb923c', '#fb7185', '#fde047'],
    component: OrganicBlobCard,
    tags: ['blob', 'organico', 'liquido', 'arancio'],
    code: `import React, { useState } from 'react';
import { Flame, Heart, Music2 } from 'lucide-react';

export default function OrganicBlobCard() {
  const [pulseLevel, setPulseLevel] = useState(1);
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto p-2">
      <div
        className="relative bg-gradient-to-tr from-orange-400 via-rose-400 to-amber-300 text-stone-950 p-8 shadow-xl transition-transform duration-500 hover:scale-[1.03]"
        style={{ borderRadius: '58% 42% 63% 37% / 44% 59% 41% 56%' }}
      >
        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-md">
            <Flame className={\`w-6 h-6 \${pulseLevel > 2 ? 'animate-bounce text-red-500' : ''}\`} />
          </div>
          <h4 className="text-2xl font-black tracking-tight text-stone-950">Vibrazione Fluida</h4>
          <p className="text-xs font-semibold text-stone-800 max-w-[220px]">
            Una forma organica che rifiuta il rettangolo, abbracciando curve asimmetriche.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setPulseLevel((prev) => (prev % 4) + 1)}
              className="px-3.5 py-1.5 rounded-full bg-stone-950 text-amber-300 font-bold text-xs flex items-center gap-1.5 shadow-md"
            >
              <Music2 className="w-3.5 h-3.5" />
              <span>Intensità: {pulseLevel}x</span>
            </button>
            <button
              onClick={() => setFavorite(!favorite)}
              className={\`w-8 h-8 rounded-full flex items-center justify-center border-2 border-stone-950 \${favorite ? 'bg-rose-500 text-white' : 'bg-white'}\`}
            >
              <Heart className={\`w-4 h-4 \${favorite ? 'fill-white' : ''}\`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'die-cut-cassette-card',
    name: 'Card Fustellata Nastro Cassetta',
    category: 'card',
    categoryLabel: 'Card',
    description: 'Card con linguetta fustellata sporgente stile cassetta audio, rocchetti rotanti e indicatore Lato A/B.',
    shape: 'Fustella a Linguetta con Finestra Audio',
    colorPalette: ['#10b981', '#f43f5e', '#18181b'],
    component: DieCutCassetteCard,
    tags: ['cassetta', 'retro', 'fustella', 'musica'],
    code: `import React, { useState } from 'react';
    import { Tag, Play, Pause } from 'lucide-react';

export default function DieCutCassetteCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tapeSide, setTapeSide] = useState<'LATO A' | 'LATO B'>('LATO A');

  return (
    <div className="w-full max-w-sm mx-auto p-2">
      <div className="relative">
        <div className="w-28 h-6 bg-emerald-400 border-2 border-b-0 border-stone-900 rounded-t-xl ml-6 px-3 flex items-center gap-1 text-[10px] font-mono font-black uppercase text-stone-950">
          <Tag className="w-3 h-3" />
          <span>{tapeSide}</span>
        </div>

        <div className="bg-stone-900 border-3 border-stone-950 p-6 rounded-3xl rounded-tl-none shadow-[8px_8px_0px_#10b981] text-stone-100">
          <div className="bg-stone-950 border-2 border-stone-800 rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-between px-4 py-2 bg-stone-900/90 rounded-xl border border-stone-800">
              <div className={\`w-9 h-9 rounded-full border-2 border-dashed border-emerald-400 flex items-center justify-center \${isPlaying ? 'animate-spin' : ''}\`}>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="font-mono text-xs font-black text-amber-400 bg-black px-2.5 py-1 rounded">
                {isPlaying ? 'REC ● 04:18' : 'STBY 00:00'}
              </div>
              <div className={\`w-9 h-9 rounded-full border-2 border-dashed border-rose-400 flex items-center justify-center \${isPlaying ? 'animate-spin' : ''}\`}>
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              </div>
            </div>
          </div>

          <h4 className="text-lg font-black text-white mb-4">Nastro N. 42: Onde Analogiche</h4>

          <div className="flex items-center justify-between pt-2 border-t border-stone-800">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-xl bg-emerald-400 text-stone-950 font-black text-xs flex items-center gap-1.5 shadow-[2px_2px_0px_#fff]"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isPlaying ? 'PAUSA' : 'ASCOLTA'}</span>
            </button>

            <button
              onClick={() => setTapeSide((s) => (s === 'LATO A' ? 'LATO B' : 'LATO A'))}
              className="px-3 py-2 rounded-xl bg-stone-800 text-stone-200 font-mono text-xs font-bold"
            >
              GIRA LATO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'hardcover-book-card',
    name: 'Card a Forma di Libro Rilegato con Segnalibro',
    category: 'card',
    categoryLabel: 'Card',
    description: 'Card sagomata a libro antico rilegato con dorso in pelle e nervi in rilievo dorati, segnalibro a nastro pendente in raso rosso, sfoglia-capitoli e pagine deckle edge.',
    shape: 'Libro Antico Rilegato con Dorso e Segnalibro Pendente',
    colorPalette: ['#1e1b18', '#faf7ee', '#ffeb3b', '#dc2626'],
    component: HardcoverBookCard,
    tags: ['libro', 'editoriale', 'segnalibro', 'dorso', 'capitoli', 'citazione'],
    specialFeature: 'Forma a Libro: Dorso con nervi dorati, segnalibro in raso cadente interattivo, sfoglia-capitoli e copia citazione',
    code: `import React, { useState } from 'react';
import { Feather, Bookmark, BookmarkCheck, ChevronRight, ChevronLeft, Quote, Copy, Check } from 'lucide-react';

const CHAPTERS = [
  {
    id: 1,
    number: 'CAPITOLO I',
    title: 'L’Origine della Forma',
    subtitle: 'Manifesto sull’estetica delle geometrie pure',
    excerpt: '«Non v’è bellezza senza rigore matematico, né arte senza il coraggio di rompere il rettangolo comune. Ogni curva racchiude un pensiero, ogni spigolo vivo traccia un confine tra l’inerzia e la creazione.»',
    pageNumber: 42,
    note: 'Nota a margine: la forma non segue la funzione, la forma definisce l’esperienza.',
  },
  {
    id: 2,
    number: 'CAPITOLO II',
    title: 'L’Inchiostro e la Luce',
    subtitle: 'Contrasti ad alto impatto visivo',
    excerpt: '«Nel silenzio della pagina bianca, il nero più profondo risalta non per assenza, ma per autorità. Accostato al giallo vivo dell’ambra, il testo cessa di essere semplice scrittura e diviene scultura tipografica.»',
    pageNumber: 87,
    note: 'Nota: verificare la saturazione ottica su supporti editoriali ad alta grammatura.',
  },
];

export default function HardcoverBookCard() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [hasBookmark, setHasBookmark] = useState(true);
  const [copied, setCopied] = useState(false);
  const chapter = CHAPTERS[currentIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(chapter.excerpt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto py-6 px-2 flex flex-col items-center">
      <div className="relative w-full">
        {hasBookmark && (
          <div
            onClick={() => setHasBookmark(!hasBookmark)}
            className="absolute -top-3 right-16 z-30 flex flex-col items-center cursor-pointer group"
            title="Sposta segnalibro"
          >
            <div className="w-6 h-4 bg-red-700 border-x-2 border-t-2 border-black" />
            <div className="w-6 h-28 bg-red-600 border-x-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,0.6)] flex items-end justify-center pb-2">
              <span className="text-[8px] font-mono font-black text-white uppercase tracking-widest rotate-90 mb-6">
                P.{chapter.pageNumber}
              </span>
            </div>
            <div className="w-0 h-0 border-x-[12px] border-x-transparent border-t-[12px] border-t-red-600 border-b-0" />
          </div>
        )}

        <div className="relative bg-[#faf7ee] border-4 border-black shadow-[10px_10px_0px_0px_#000,16px_16px_0px_0px_#d6cbb6] flex overflow-visible">
          {/* Dorso del libro */}
          <div className="w-12 sm:w-16 bg-[#1e1b18] text-[#e0cfb3] border-r-4 border-black p-2 flex flex-col justify-between items-center relative select-none shrink-0 shadow-inner">
            <div className="w-full space-y-12 my-auto">
              <div className="w-full h-2 bg-[#ffeb3b] border-y border-black" />
              <div className="w-full h-2 bg-[#ffeb3b] border-y border-black" />
              <div className="w-full h-2 bg-[#ffeb3b] border-y border-black" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-mono font-black text-xs sm:text-sm tracking-widest text-[#ffeb3b] rotate-90 uppercase whitespace-nowrap">
                ARS_GEOMETRICA_VOL_I
              </span>
            </div>
            <div className="z-10 text-[9px] font-mono text-stone-400 font-bold">1924</div>
          </div>

          {/* Pagina interna */}
          <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between relative bg-[#fffdfa]">
            <div className="flex items-center justify-between pb-3 border-b-2 border-black/80">
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-black stroke-[2.5]" />
                <span className="font-mono text-xs font-black uppercase text-black">{chapter.number}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHasBookmark(!hasBookmark)}
                  className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase border border-black bg-white"
                >
                  {hasBookmark ? 'Segnalibro ON' : 'Segna Pagina'}
                </button>
                <span className="font-mono text-xs font-bold text-black border-l-2 border-black pl-2">
                  Pag. {chapter.pageNumber}
                </span>
              </div>
            </div>

            <div className="py-4 space-y-1">
              <h4 className="text-xl sm:text-2xl font-serif font-black text-black">{chapter.title}</h4>
              <p className="text-xs font-mono font-bold text-stone-600 uppercase">{chapter.subtitle}</p>
            </div>

            <div className="relative my-3 p-4 bg-[#f8f4e9] border-2 border-black shadow-[3px_3px_0px_#000]">
              <Quote className="absolute top-2 right-2 w-6 h-6 text-black/15 pointer-events-none" />
              <p className="font-serif text-sm sm:text-base text-stone-900 leading-relaxed italic pr-4">
                {chapter.excerpt}
              </p>
            </div>

            <div className="pt-2 pb-4 text-xs font-mono text-stone-700 border-l-4 border-[#ffeb3b] pl-3 italic bg-[#fff9db]/50">
              {chapter.note}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-black">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentIdx((prev) => (prev - 1 + CHAPTERS.length) % CHAPTERS.length)}
                  className="px-2.5 py-1 bg-white hover:bg-black hover:text-white text-black border-2 border-black text-xs font-mono font-black uppercase shadow-[2px_2px_0px_#000] flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prec</span>
                </button>
                <button
                  onClick={() => setCurrentIdx((prev) => (prev + 1) % CHAPTERS.length)}
                  className="px-2.5 py-1 bg-[#ffeb3b] hover:bg-black hover:text-[#ffeb3b] text-black border-2 border-black text-xs font-mono font-black uppercase shadow-[2px_2px_0px_#000] flex items-center gap-1"
                >
                  <span>Succ</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleCopy}
                className="px-3 py-1 bg-black text-white hover:bg-[#ffeb3b] hover:text-black border-2 border-black text-xs font-mono font-bold uppercase shadow-[2px_2px_0px_#000] flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiata' : 'Copia Citazione'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'spiral-notebook-card',
    name: 'Card a Forma di Quaderno a Spirale con Washi Tape',
    category: 'card',
    categoryLabel: 'Card',
    description: 'Card sagomata a quaderno con spirale metallica verticale e fori ovali punzonati, washi tape ad angolo, linguette colorate per sezioni e fogli a quadretti/righe.',
    shape: 'Quaderno con Anelli a Spirale, Washi Tape e Linguette',
    colorPalette: ['#ece7d5', '#fffef7', '#ffeb3b', '#4ecdc4', '#ff6b6b'],
    component: SpiralNotebookCard,
    tags: ['quaderno', 'spirale', 'anelli', 'washi-tape', 'linguette', 'checklist'],
    specialFeature: 'Forma a Quaderno: Spirale con anelli 3D, washi tape decorativo, selettore sfondo (quadretti/righe/puntini) e checklist attiva',
    code: `import React, { useState } from 'react';
import { CheckSquare, Square, Plus, Trash2, PenTool } from 'lucide-react';

export default function SpiralNotebookCard() {
  const [activeTab, setActiveTab] = useState<'idee' | 'progetti' | 'bozze'>('idee');
  const [paperStyle, setPaperStyle] = useState<'grid' | 'lines' | 'dots'>('grid');
  const [items, setItems] = useState([
    { id: '1', text: 'Disegnare layout a spirale con fori ovali', done: true },
    { id: '2', text: 'Applicare washi tape giallo all’angolo', done: true },
    { id: '3', text: 'Completare l’integrazione player audio MP3', done: false },
  ]);
  const [newText, setNewText] = useState('');

  const toggleItem = (id: string) => {
    setItems(items.map((it) => (it.id === id ? { ...it, done: !it.done } : it)));
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim()) return;
    setItems([...items, { id: Date.now().toString(), text: newText.trim(), done: false }]);
    setNewText('');
  };

  const removeItem = (id: string) => {
    setItems(items.filter((it) => it.id !== id));
  };

  return (
    <div className="w-full max-w-xl mx-auto py-6 px-2 flex">
      <div className="relative flex-1 bg-[#fffef7] border-4 border-black shadow-[10px_10px_0px_0px_#000] overflow-hidden">
        {/* Washi Tape */}
        <div className="absolute -top-3 left-16 z-20 w-28 h-7 bg-[#ffeb3b]/90 border-2 border-black -rotate-6 shadow-[2px_2px_0px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none">
          <span className="text-[8px] font-mono font-black uppercase tracking-widest text-black">
            WASHI_TAPE_STUDIO
          </span>
        </div>

        {/* Orecchia pagina */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-stone-200 border-l-2 border-b-2 border-black z-10" />

        <div className="flex">
          {/* Spirale con anelli punzonati */}
          <div className="w-14 sm:w-16 bg-[#ece7d5] border-r-3 border-black p-2 flex flex-col justify-around items-center py-6 select-none shrink-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="relative flex items-center justify-center my-1.5 w-full">
                <div className="w-5 h-2.5 bg-black rounded-full shadow-inner" />
                <div className="absolute -left-2 w-8 h-3.5 border-3 border-black bg-gradient-to-r from-stone-400 via-stone-100 to-stone-500 rounded-full shadow-[1px_2px_0px_rgba(0,0,0,0.6)] transform -rotate-12 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Corpo del foglio */}
          <div
            className="flex-1 p-5 sm:p-7 relative"
            style={{
              backgroundImage:
                paperStyle === 'grid'
                  ? 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)'
                  : 'linear-gradient(to bottom, rgba(59,130,246,0.15) 1px, transparent 1px)',
              backgroundSize: paperStyle === 'lines' ? '100% 28px' : '20px 20px',
            }}
          >
            <div className="flex items-center justify-between pb-4 border-b-2 border-black">
              <div className="flex items-center gap-2">
                <PenTool className="w-4 h-4 text-black stroke-[2.5]" />
                <span className="font-mono text-sm font-black uppercase text-black">
                  APPUNTI • #{activeTab.toUpperCase()}
                </span>
              </div>

              <div className="flex items-center gap-1 bg-white border border-black p-0.5">
                <button
                  onClick={() => setPaperStyle('grid')}
                  className={\`px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase \${paperStyle === 'grid' ? 'bg-black text-white' : 'text-black'}\`}
                >
                  Quadretti
                </button>
                <button
                  onClick={() => setPaperStyle('lines')}
                  className={\`px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase \${paperStyle === 'lines' ? 'bg-black text-white' : 'text-black'}\`}
                >
                  Righe
                </button>
              </div>
            </div>

            <form onSubmit={addItem} className="mt-4 flex gap-2">
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Scrivi una nuova voce..."
                className="flex-1 bg-white border-2 border-black px-3 py-1.5 text-xs font-mono text-black focus:outline-none"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-[#ffeb3b] text-black border-2 border-black font-mono font-black text-xs uppercase shadow-[2px_2px_0px_#000]"
              >
                Aggiungi
              </button>
            </form>

            <div className="mt-5 space-y-2 min-h-[120px]">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-2 bg-white/80 border border-black shadow-[2px_2px_0px_rgba(0,0,0,0.7)] group"
                >
                  <div onClick={() => toggleItem(item.id)} className="flex items-center gap-2.5 flex-1 cursor-pointer">
                    {item.done ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Square className="w-4 h-4 text-black" />
                    )}
                    <span className={\`text-xs font-mono \${item.done ? 'line-through text-stone-400' : 'font-bold text-black'}\`}>
                      {item.text}
                    </span>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-stone-400 hover:text-red-600 p-1">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Linguette colorate laterali */}
      <div className="flex flex-col gap-2 pt-10 -ml-1 z-30 shrink-0">
        {(['idee', 'progetti', 'bozze'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={\`px-2.5 py-3 text-[10px] font-mono font-black uppercase [writing-mode:vertical-lr] border-2 border-black shadow-[2px_2px_0px_#000] \${
              activeTab === tab ? 'bg-[#ffeb3b] text-black translate-x-1' : 'bg-white text-stone-700'
            }\`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'passport-boarding-card',
    name: 'Card a Forma di Biglietto d’Imbarco con Talloncino a Strappo',
    category: 'card',
    categoryLabel: 'Card',
    description: 'Card sagomata a carta d’imbarco aerea con intagli fustellati (die-cut notches), timbri doganali retrò, codice a barre stampato e talloncino staccabile.',
    shape: 'Carta d’Imbarco con Tacche Fustellate e Talloncino a Strappo',
    colorPalette: ['#ffffff', '#ffeb3b', '#4ecdc4', '#dc2626'],
    component: PassportBoardingCard,
    tags: ['biglietto', 'imbarco', 'viaggio', 'passaporto', 'fustella', 'timbro'],
    specialFeature: 'Forma Biglietto: Intagli die-cut laterali, talloncino staccabile animato e timbri doganali applicabili',
    code: `import React, { useState } from 'react';
import { Plane, Stamp, Scissors } from 'lucide-react';

export default function PassportBoardingCard() {
  const [isTorn, setIsTorn] = useState(false);
  const [stampedCount, setStampedCount] = useState(2);

  const stamps = [
    { city: 'MILANO', code: 'MXP', date: '14 OTT 2024', color: 'border-red-600 text-red-600' },
    { city: 'TOKYO', code: 'HND', date: '28 NOV 2024', color: 'border-blue-600 text-blue-600' },
    { city: 'BERLIN', code: 'BER', date: '04 DIC 2024', color: 'border-emerald-700 text-emerald-700' },
  ];

  return (
    <div className="w-full max-w-xl mx-auto py-6 px-2 flex flex-col items-center">
      <div className="relative w-full bg-white border-4 border-black shadow-[10px_10px_0px_0px_#000] flex flex-col md:flex-row overflow-hidden select-none">
        {/* Intagli fustellati */}
        <div className="hidden md:block absolute -top-4 right-[160px] w-8 h-8 bg-[#f5f5f5] rounded-full border-2 border-black z-20" />
        <div className="hidden md:block absolute -bottom-4 right-[160px] w-8 h-8 bg-[#f5f5f5] rounded-full border-2 border-black z-20" />

        {/* Parte Principale */}
        <div className="flex-1 p-5 sm:p-6 space-y-5 bg-[#fafafa]">
          <div className="flex items-center justify-between pb-3 border-b-2 border-black">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-black text-[#ffeb3b] flex items-center justify-center border border-black">
                <Plane className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-mono font-black text-sm uppercase text-black">AERO_ARTIFACT_AIRWAYS</span>
            </div>
            <span className="px-2 py-0.5 bg-[#ffeb3b] text-black font-mono font-black text-[10px] uppercase border border-black shadow-[1px_1px_0px_#000]">
              PRIORITY_BOARDING
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-2">
            <div>
              <span className="text-[10px] font-mono font-bold text-stone-500 uppercase">PARTENZA</span>
              <h4 className="text-3xl font-black text-black font-mono">MIL</h4>
              <p className="text-xs font-bold text-stone-700">Milano Malpensa</p>
            </div>
            <div className="flex flex-col items-center flex-1 px-4">
              <span className="text-[10px] font-mono text-stone-400 font-bold uppercase mb-1">VOLO AF-782</span>
              <div className="w-full flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-black" />
                <div className="flex-1 border-t-2 border-dashed border-black" />
                <Plane className="w-4 h-4 text-black rotate-90" />
                <div className="flex-1 border-t-2 border-dashed border-black" />
                <div className="w-2 h-2 rounded-full bg-black" />
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono font-bold text-stone-500 uppercase">DESTINAZIONE</span>
              <h4 className="text-3xl font-black text-black font-mono">TYO</h4>
              <p className="text-xs font-bold text-stone-700">Tokyo Haneda</p>
            </div>
          </div>

          {/* Timbri passaporto */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-black uppercase">
              <span className="flex items-center gap-1">
                <Stamp className="w-3.5 h-3.5" />
                <span>TIMBRI DI VISTO DOGANALE:</span>
              </span>
              <button
                onClick={() => setStampedCount((prev) => (prev >= stamps.length ? 1 : prev + 1))}
                className="px-2 py-0.5 bg-[#4ecdc4] text-black font-bold uppercase border border-black"
              >
                + Applica Timbro
              </button>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {stamps.slice(0, stampedCount).map((st, idx) => (
                <div key={idx} className={\`p-2 border-2 rounded-xl text-center transform -rotate-3 border-dashed font-mono font-black text-[9px] uppercase \${st.color}\`}>
                  <div>{st.city} PASSPORT CONTROL</div>
                  <div className="text-xs">{st.code}</div>
                  <div className="text-[8px] font-normal">{st.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Talloncino staccabile */}
        <div className={\`w-full md:w-44 p-5 bg-[#fdfdfd] border-t-2 md:border-t-0 md:border-l-2 border-dashed border-black flex flex-col justify-between \${isTorn ? 'translate-x-2 translate-y-2 bg-[#ffeb3b]/40 rotate-1' : ''}\`}>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-black uppercase text-black">STUB PASS</span>
              <button
                onClick={() => setIsTorn(!isTorn)}
                className="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-black text-white flex items-center gap-1"
              >
                <Scissors className="w-2.5 h-2.5" />
                <span>{isTorn ? 'RIATTACCA' : 'STRAPPA'}</span>
              </button>
            </div>
            <div>
              <span className="text-[9px] font-mono text-stone-400 block uppercase">VOLO & POSTO</span>
              <span className="text-sm font-mono font-black text-black">AF-782 • 01A</span>
            </div>
            {/* Barcode */}
            <div className="h-10 w-full flex items-center justify-between gap-0.5 pt-2">
              {[3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 2, 4].map((w, i) => (
                <div key={i} className="h-full bg-black" style={{ width: \`\${w * 2}px\` }} />
              ))}
            </div>
          </div>
          <span className="text-[9px] font-mono font-black text-black uppercase pt-4">
            STATUS: {isTorn ? 'TALLONCINO STACCATO' : 'VALIDATO'}
          </span>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'archive-folder-card',
    name: 'Card a Forma di Cartella Archivio Manila con Graffetta',
    category: 'card',
    categoryLabel: 'Card',
    description: 'Card sagomata a cartella documenti di archivio con linguetta superiore a gradino, graffetta metallica bulldog, timbro rosso e documento segreto de-classificabile.',
    shape: 'Cartella Manila con Linguetta Indice e Graffetta Metallica',
    colorPalette: ['#eddcc4', '#ffffff', '#ffeb3b', '#dc2626'],
    component: ArchiveFolderCard,
    tags: ['cartella', 'archivio', 'manila', 'graffetta', 'documento', 'riservato'],
    specialFeature: 'Forma Cartella Manila: Linguetta sporgente, graffetta metallica, timbro de-classificato e filtro di lettura segreta',
    code: `import React, { useState } from 'react';
import { Folder, FileText, Lock, Unlock, Eye, EyeOff } from 'lucide-react';

export default function ArchiveFolderCard() {
  const [isClassified, setIsClassified] = useState(true);

  return (
    <div className="w-full max-w-xl mx-auto py-6 px-2 flex flex-col items-center">
      <div className="relative w-full">
        {/* Linguetta a gradino cartella manila */}
        <div className="flex items-end justify-between px-6">
          <div className="bg-[#e8d5b5] border-t-4 border-x-4 border-black px-5 py-2 flex items-center gap-2">
            <Folder className="w-4 h-4 text-black stroke-[2.5]" />
            <span className="font-mono text-xs font-black uppercase text-black">ARCHIVIO_RISERVATO_#404</span>
          </div>
          <button
            onClick={() => setIsClassified(!isClassified)}
            className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase border-2 border-black bg-white hover:bg-black hover:text-white flex items-center gap-1 mb-1"
          >
            {isClassified ? <Lock className="w-3 h-3 text-red-600" /> : <Unlock className="w-3 h-3 text-emerald-600" />}
            <span>{isClassified ? 'Segreto ON' : 'Desecretato'}</span>
          </button>
        </div>

        {/* Corpo della cartella */}
        <div className="relative bg-[#eddcc4] border-4 border-black shadow-[10px_10px_0px_0px_#000] p-5 sm:p-7 space-y-5">
          {/* Graffetta metallica */}
          <div className="absolute -top-4 right-8 z-30 flex flex-col items-center pointer-events-none">
            <div className="w-3.5 h-12 rounded-full border-3 border-stone-800 bg-stone-300 shadow-[2px_2px_0px_rgba(0,0,0,0.6)]" />
          </div>

          {/* Documento interno */}
          <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0px_#000] space-y-4 relative overflow-hidden">
            <div className="absolute top-4 right-4 border-3 border-red-600 px-3 py-1 text-red-600 font-mono font-black text-xs uppercase tracking-widest rotate-12 border-dashed opacity-85 pointer-events-none">
              {isClassified ? 'STRETTAMENTE RISERVATO' : 'DE-CLASSIFICATO'}
            </div>

            <div className="flex items-center gap-2 pb-3 border-b-2 border-black">
              <FileText className="w-4 h-4 text-black stroke-[2.5]" />
              <span className="font-mono text-xs font-black uppercase text-black">DOSSIER TECNICO DI PROGETTO</span>
            </div>

            <p className={\`text-xs font-mono leading-relaxed \${isClassified ? 'filter blur-[3px] select-none text-stone-600' : 'text-stone-800'}\`}>
              Tutti i moduli dell’interfaccia adottano bordature nette con spessore di 4px e ombre piene proiettate sull’asse X/Y.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-2 py-0.5 bg-[#ffeb3b] text-black font-mono font-bold text-[10px] uppercase border border-black">SPEC-GEOM</span>
              <span className="px-2 py-0.5 bg-[#4ecdc4] text-black font-mono font-bold text-[10px] uppercase border border-black">UI-BAUHAUS</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[10px] font-mono font-bold text-stone-700 uppercase">CLASSIFICAZIONE A-1</span>
            <button
              onClick={() => setIsClassified(!isClassified)}
              className="px-3 py-1 bg-black text-white hover:bg-[#ffeb3b] hover:text-black border-2 border-black text-xs font-mono font-black uppercase shadow-[2px_2px_0px_#000] flex items-center gap-1.5"
            >
              {isClassified ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{isClassified ? 'Rivela Documento' : 'Nascondi'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'bento-mosaic-grid',
    name: 'Griglia Bento Mosaico Asimmetrico',
    category: 'griglie',
    categoryLabel: 'Griglie',
    description: 'Composizione a tessere asimmetriche con celle di altezze e tonalità diverse (lime, viola, corallo e notte).',
    shape: 'Bento Box Asimmetrico con Raggi Misti',
    colorPalette: ['#8b5cf6', '#bef264', '#fb7185', '#06b6d4'],
    component: BentoMosaicGrid,
    tags: ['bento', 'mosaico', 'griglia', 'asimmetrico'],
    code: `import React, { useState } from 'react';
import { Palette, Sparkles, Sun, Eye } from 'lucide-react';

export default function BentoMosaicGrid() {
  const [activeTile, setActiveTile] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px]">
        {/* Big Tile */}
        <div
          onClick={() => setActiveTile(0)}
          className="md:col-span-2 md:row-span-2 rounded-[2.5rem] bg-gradient-to-br from-violet-600 via-indigo-600 to-fuchsia-500 p-8 text-white shadow-xl flex flex-col justify-between cursor-pointer hover:scale-[1.01] transition-transform relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-bold uppercase font-mono">Spazio Primario</span>
            <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
          </div>
          <div className="space-y-2 z-10">
            <h3 className="text-3xl font-black leading-tight">Mosaico Asimmetrico a Densità Variabile</h3>
            <p className="text-white/80 text-sm max-w-md">Ogni cella possiede proporzioni e pesi cromatici differenti per rompere la monotonia.</p>
          </div>
          <div className="flex items-center gap-2 z-10">
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-white/90">Griglia Fluida Attiva</span>
          </div>
        </div>

        {/* Tile Lime */}
        <div
          onClick={() => setActiveTile(1)}
          className="rounded-[2rem] bg-lime-300 text-stone-950 p-6 flex flex-col justify-between shadow-lg cursor-pointer hover:-translate-y-1 transition-transform border-2 border-stone-900"
        >
          <Palette className="w-5 h-5 text-stone-950" />
          <h4 className="font-black text-lg leading-tight">Tonalità Saturata</h4>
        </div>

        {/* Tile Coral */}
        <div
          onClick={() => setActiveTile(2)}
          className="rounded-[2rem] bg-rose-400 text-white p-6 flex flex-col justify-between shadow-lg cursor-pointer hover:-translate-y-1 transition-transform"
        >
          <Sun className="w-5 h-5 text-amber-200" />
          <h4 className="font-black text-lg leading-tight">Riflessi Caldi</h4>
        </div>

        {/* Tile Cyan */}
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
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'parallelogram-grid',
    name: 'Griglia Parallelogrammi Inclinati',
    category: 'griglie',
    categoryLabel: 'Griglie',
    description: 'Griglia isometrica con schede a taglio diagonale che si inclinano sull’asse orizzontale in hover.',
    shape: 'Parallelogramma Dinamico (SkewX)',
    colorPalette: ['#f59e0b', '#d946ef', '#06b6d4', '#10b981'],
    component: ParallelogramGrid,
    tags: ['parallelogramma', 'skew', 'inclinato', 'isometria'],
    code: `import React, { useState } from 'react';
import { Zap } from 'lucide-react';

export default function ParallelogramGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const items = [
    { title: 'Angolo Alfa', code: '∠ 15°', color: 'from-amber-400 to-orange-500', desc: 'Inclinazione dinamica positiva' },
    { title: 'Angolo Beta', code: '∠ 45°', color: 'from-fuchsia-500 to-pink-600', desc: 'Spostamento prospettico rapido' },
    { title: 'Angolo Gamma', code: '∠ 75°', color: 'from-cyan-400 to-blue-600', desc: 'Rifrazione orizzontale pura' },
    { title: 'Angolo Delta', code: '∠ 90°', color: 'from-emerald-400 to-teal-600', desc: 'Chiusura ortogonale' },
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
              className={\`p-6 rounded-2xl bg-gradient-to-br \${item.color} text-stone-950 shadow-lg flex flex-col justify-between min-h-[220px] transition-all\`}
              style={{ transform: hoveredIdx === idx ? 'skewX(-4deg)' : 'skewX(0deg)' }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black bg-stone-950 text-white px-2.5 py-1 rounded-lg">{item.code}</span>
                <Zap className="w-4 h-4 text-stone-950 fill-current" />
              </div>
              <div>
                <h4 className="text-xl font-black">{item.title}</h4>
                <p className="text-xs font-semibold opacity-90">{item.desc}</p>
              </div>
              <div className="pt-2 border-t border-stone-950/20 text-[11px] font-mono font-bold flex justify-between">
                <span>POLIGONO #{idx + 1}</span>
                <span>ATTIVO</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
  },
  {
    id: 'neopop-squishy-button',
    name: 'Bottone Squishy 3D Neo-Pop',
    category: 'bottoni',
    categoryLabel: 'Bottoni',
    description: 'Bottone tattile con ombra dura a contrasto ed effetto di compressione fisica alla pressione.',
    shape: 'Rettangolo Bombato con Ombra a Blocco',
    colorPalette: ['#a3e635', '#ec4899', '#000000'],
    component: NeoPopSquishyButton,
    tags: ['squishy', '3d', 'neo-pop', 'tattile'],
    code: `import React, { useState } from 'react';
import { Zap, Sparkles, Check } from 'lucide-react';

export default function NeoPopSquishyButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 800);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-6">
      <button
        onClick={handleClick}
        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-stone-950 font-black text-sm uppercase tracking-wider rounded-2xl border-3 border-black shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all duration-150"
      >
        <Zap className="w-5 h-5 fill-stone-950" />
        <span>{clicked ? 'PULSATO!' : 'PREMI SQUISH'}</span>
        {clicked && <Check className="w-4 h-4 text-stone-950 stroke-[3]" />}
      </button>

      <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-pink-500 text-white font-black text-sm uppercase tracking-wider rounded-2xl border-3 border-black shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all duration-150">
        <Sparkles className="w-5 h-5 fill-yellow-300 text-black" />
        <span>SCOSSA POP</span>
      </button>
    </div>
  );
}`,
  },
  {
    id: 'magnetic-glow-pill-button',
    name: 'Bottone Pillola con Anello Cromatico',
    category: 'bottoni',
    categoryLabel: 'Bottoni',
    description: 'Bottone a pillola flessibile racchiuso in un bordo rotante a gradiente cromatico ad alta rifrazione.',
    shape: 'Pillola Pura con Spessore Luminoso',
    colorPalette: ['#22d3ee', '#d946ef', '#f59e0b'],
    component: MagneticGlowPillButton,
    tags: ['pillola', 'glow', 'anello', 'cromatico'],
    code: `import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Compass } from 'lucide-react';

export default function MagneticGlowPillButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-6">
      <div className="relative group p-[2px] rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 rounded-full animate-spin [animation-duration:3s]" />
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative px-7 py-3 rounded-full bg-stone-950 text-white font-bold text-xs sm:text-sm flex items-center gap-2.5 transition-all duration-300 hover:bg-stone-900 active:scale-95"
        >
          <Sparkles className={\`w-4 h-4 text-cyan-300 transition-transform \${hovered ? 'rotate-45' : ''}\`} />
          <span className="tracking-wide">ORBITA CROMATICA</span>
          <ArrowUpRight className="w-4 h-4 text-fuchsia-400" />
        </button>
      </div>

      <div className="relative group p-[2px] rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-500 rounded-full animate-pulse" />
        <button className="relative px-7 py-3 rounded-full bg-stone-900 text-emerald-300 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all hover:bg-stone-950 active:scale-95">
          <Compass className="w-4 h-4 text-emerald-400" />
          <span className="tracking-wide">POLO SMERALDO</span>
        </button>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'jagged-stamp-button',
    name: 'Bottone Timbro Dentellato',
    category: 'bottoni',
    categoryLabel: 'Bottoni',
    description: 'Bottone sagomato a matrice di biglietto perforato con ritagli laterali dentellati.',
    shape: 'Taglio Dentellato Perforato (Clip-Path)',
    colorPalette: ['#f97316', '#4f46e5', '#0c0a09'],
    component: JaggedStampButton,
    tags: ['timbro', 'biglietto', 'dentellato', 'clip-path'],
    code: `import React, { useState } from 'react';
import { Ticket, Scissors, Check } from 'lucide-react';

export default function JaggedStampButton() {
  const [punched, setPunched] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-6">
      <button
        onClick={() => {
          setPunched(true);
          setTimeout(() => setPunched(false), 1200);
        }}
        className="relative group bg-orange-500 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-8 border-2 border-stone-950 shadow-[4px_4px_0px_#000] hover:bg-orange-400 active:scale-95 transition-all"
        style={{
          clipPath:
            'polygon(0% 0%, 10% 0%, 10% 8px, 20% 8px, 20% 0%, 80% 0%, 80% 8px, 90% 8px, 90% 0%, 100% 0%, 100% 100%, 90% 100%, 90% calc(100% - 8px), 80% calc(100% - 8px), 80% 100%, 20% 100%, 20% calc(100% - 8px), 10% calc(100% - 8px), 10% 100%, 0% 100%)',
        }}
      >
        <div className="flex items-center gap-2">
          <Ticket className="w-4 h-4" />
          <span>{punched ? 'OBLITERATO!' : 'TIMBRA BIGLIETTO'}</span>
          {punched && <Check className="w-4 h-4 text-stone-950 stroke-[3]" />}
        </div>
      </button>

      <button
        className="relative group bg-indigo-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-8 border-2 border-stone-950 shadow-[4px_4px_0px_#000] hover:bg-indigo-500 active:scale-95 transition-all"
        style={{
          clipPath:
            'polygon(0% 0%, 10% 0%, 10% 8px, 20% 8px, 20% 0%, 80% 0%, 80% 8px, 90% 8px, 90% 0%, 100% 0%, 100% 100%, 90% 100%, 90% calc(100% - 8px), 80% calc(100% - 8px), 80% 100%, 20% 100%, 20% calc(100% - 8px), 10% calc(100% - 8px), 10% 100%, 0% 100%)',
        }}
      >
        <div className="flex items-center gap-2">
          <Scissors className="w-4 h-4 text-amber-300" />
          <span>TAGLIO MATRICE</span>
        </div>
      </button>
    </div>
  );
}`,
  },
  {
    id: 'jelly-double-layer-button',
    name: 'Bottone a Doppio Strato Jelly Pop',
    category: 'bottoni',
    categoryLabel: 'Bottoni',
    description: 'Bottone a due strati gommosi con rimbalzo elastico e curvatura morbida.',
    shape: 'Doppio Strato Organico (3rem)',
    colorPalette: ['#f43f5e', '#38bdf8', '#a855f7'],
    component: JellyDoubleLayerButton,
    tags: ['jelly', 'gommoso', 'doppio-strato', 'elastico'],
    code: `import React, { useState } from 'react';
import { Smile, Sparkles } from 'lucide-react';

export default function JellyDoubleLayerButton() {
  const [bounced, setBounced] = useState(false);

  const triggerBounce = () => {
    setBounced(true);
    setTimeout(() => setBounced(false), 500);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-6">
      <div className="relative group inline-block">
        <div className="absolute inset-0 translate-y-2 bg-sky-400 rounded-3xl transition-transform group-hover:translate-y-3" />
        <button
          onClick={triggerBounce}
          className={\`relative px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-400 text-white font-extrabold text-xs sm:text-sm rounded-3xl shadow-md flex items-center gap-2 transition-all duration-300 \${
            bounced ? 'scale-90 -translate-y-1' : 'group-hover:-translate-y-1'
          }\`}
        >
          <Smile className={\`w-4 h-4 transition-transform \${bounced ? 'rotate-180' : ''}\`} />
          <span className="tracking-wide">JELLY POP ELASTICO</span>
        </button>
      </div>

      <div className="relative group inline-block">
        <div className="absolute inset-0 translate-y-2 bg-purple-700 rounded-3xl transition-transform group-hover:translate-y-3" />
        <button
          onClick={triggerBounce}
          className={\`relative px-8 py-4 bg-lime-400 text-stone-950 font-extrabold text-xs sm:text-sm rounded-3xl shadow-md flex items-center gap-2 transition-all duration-300 \${
            bounced ? 'scale-90 -translate-y-1' : 'group-hover:-translate-y-1'
          }\`}
        >
          <Sparkles className="w-4 h-4 text-purple-900" />
          <span className="tracking-wide">RIMBALZO DUAL-LAYER</span>
        </button>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'floating-squircle-modal',
    name: 'Finestra Modale Squircle Asimmetrica',
    category: 'modali',
    categoryLabel: 'Modali',
    description: 'Dialogo galleggiante con quattro raggi d’angolo diversi, sfumature calde e backdrop blur.',
    shape: 'Squircle a 4 Raggi Differenziati',
    colorPalette: ['#7c3aed', '#db2777', '#fbbf24'],
    component: FloatingSquircleModal,
    tags: ['squircle', 'modale', 'asimmetrico', 'dialogo'],
    code: `import React, { useState } from 'react';
import { Sparkles, X, Check } from 'lucide-react';

export default function FloatingSquircleModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenOption, setChosenOption] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 rounded-[2rem] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-500 text-white font-extrabold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
        <span>Apri Finestra Squircle Asimmetrica</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm">
          <div
            className="relative w-full max-w-md bg-stone-900 text-white p-7 shadow-2xl border-2 border-stone-800 transition-all"
            style={{ borderRadius: '2.5rem 1.25rem 3rem 1.75rem' }}
          >
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <h3 className="font-black text-lg bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent">
                Finestra Squircle
              </h3>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-stone-300 text-xs sm:text-sm">
              <p>Questo dialogo adotta raggi di curvatura disuguali sui quattro angoli per donare morbidezza ed unicità.</p>
              <div className="grid grid-cols-2 gap-2">
                {['Onda Turchese', 'Bagliore Rosa'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setChosenOption(opt)}
                    className={\`p-3 rounded-2xl border text-xs font-bold flex items-center justify-between \${
                      chosenOption === opt ? 'bg-fuchsia-600/30 border-fuchsia-400 text-white' : 'bg-stone-800/60 border-stone-700'
                    }\`}
                  >
                    <span>{opt}</span>
                    {chosenOption === opt && <Check className="w-3.5 h-3.5 text-amber-300" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-stone-800">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-xl text-stone-400 text-xs">Chiudi</button>
              <button onClick={() => setIsOpen(false)} className="px-5 py-2.5 rounded-2xl bg-amber-400 text-stone-950 font-black text-xs">Conferma Scelta</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`,
  },
  {
    id: 'curved-drawer-modal',
    name: 'Cassetto Inferiore a Bordo Curvato',
    category: 'modali',
    categoryLabel: 'Modali',
    description: 'Modale a cassetto scorrevole dal basso con bordo concavo superiore, maniglia luminosa e cursore.',
    shape: 'Arco Concavo Superiore (Bordo 3.5rem)',
    colorPalette: ['#10b981', '#06b6d4', '#1c1917'],
    component: CurvedDrawerModal,
    tags: ['cassetto', 'drawer', 'basso', 'arco-concavo'],
    code: `import React, { useState } from 'react';
import { ChevronUp, X, Palette, Sliders } from 'lucide-react';

export default function CurvedDrawerModal() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sliderVal, setSliderVal] = useState(65);

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4">
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-stone-950 font-black text-xs sm:text-sm shadow-xl flex items-center gap-2"
      >
        <ChevronUp className="w-4 h-4" />
        <span>Solleva Cassetto a Bordo Curvato</span>
      </button>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60">
          <div className="w-full max-w-xl bg-gradient-to-b from-stone-900 to-stone-950 text-white border-t-4 border-emerald-400 p-6 rounded-t-[3.5rem] shadow-2xl">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1.5 rounded-full bg-emerald-400/80" />
            </div>

            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-black">Pannello Inferiore Curvo</h3>
              </div>
              <button onClick={() => setIsDrawerOpen(false)} className="w-8 h-8 rounded-full bg-stone-800 text-stone-400 flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700 space-y-2 mb-6">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-stone-300 flex items-center gap-1.5"><Sliders className="w-3.5 h-3.5 text-emerald-400" /> Saturazione</span>
                <span className="text-emerald-300 font-bold">{sliderVal}%</span>
              </div>
              <input type="range" min="0" max="100" value={sliderVal} onChange={(e) => setSliderVal(Number(e.target.value))} className="w-full accent-emerald-400 cursor-pointer" />
            </div>

            <button onClick={() => setIsDrawerOpen(false)} className="w-full py-3 rounded-2xl bg-emerald-400 text-stone-950 font-black text-xs uppercase">
              Applica e Richiudi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}`,
  },
  {
    id: 'video-player-creative',
    name: 'Lettore Video HTML5 Completo con Sorgenti Multiple',
    category: 'video',
    categoryLabel: 'Video',
    description: 'Player video reale per riprodurre video MP4/WebM. Include selezione sorgenti video demo, caricamento da URL, upload video locale, scrubber avanzato, velocità, PiP e schermo intero.',
    shape: 'Schermo Cinematografico 16:9 con Cornice Neo-Brutalista',
    colorPalette: ['#ffeb3b', '#4ecdc4', '#000000'],
    component: VideoPlayerCreative,
    tags: ['video', 'mp4', 'html5-player', 'scrubber', 'pip', 'fullscreen', 'upload'],
    specialFeature: 'Funzione Video Reale: Riproduzione effettiva MP4/WebM + Caricamento File Utente + URL custom + PiP + Fullscreen',
    code: `import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Repeat,
  Upload,
  Link as LinkIcon,
  Film,
  PictureInPicture2,
} from 'lucide-react';

interface VideoSource {
  title: string;
  url: string;
  badge: string;
}

const PRESET_VIDEOS: VideoSource[] = [
  {
    title: 'Big Buck Bunny (Nature Animation HD)',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    badge: 'HD • MP4',
  },
  {
    title: 'Elephants Dream (Sci-Fi Animation)',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    badge: '1080p • MP4',
  },
  {
    title: 'For Bigger Blazes (Action Teaser)',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    badge: 'Action • MP4',
  },
];

export default function VideoPlayerCreative() {
  const [currentVideo, setCurrentVideo] = useState<VideoSource>(PRESET_VIDEOS[0]);
  const [customUrl, setCustomUrl] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLooping, setIsLooping] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return \`\${mins < 10 ? '0' : ''}\${mins}:\${secs < 10 ? '0' : ''}\${secs}\`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) videoRef.current.currentTime = newTime;
  };

  const handleSkip = (seconds: number) => {
    if (videoRef.current) {
      const nextTime = Math.min(Math.max(0, videoRef.current.currentTime + seconds), duration);
      videoRef.current.currentTime = nextTime;
      setCurrentTime(nextTime);
    }
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const togglePiP = async () => {
    if (!videoRef.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled) {
      await videoRef.current.requestPictureInPicture();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setCurrentVideo({
        title: file.name,
        url: fileUrl,
        badge: \`\${(file.size / (1024 * 1024)).toFixed(1)} MB • Locale\`,
      });
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Sorgenti Video */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-white border-2 border-black shadow-[3px_3px_0px_#000]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-black uppercase text-black flex items-center gap-1">
            <Film className="w-3.5 h-3.5 text-blue-600" />
            <span>Sorgente Video:</span>
          </span>
          {PRESET_VIDEOS.map((vid, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentVideo(vid); setIsPlaying(false); }}
              className={\`px-2.5 py-1 text-xs font-mono font-bold uppercase border border-black \${
                currentVideo.url === vid.url ? 'bg-[#ffeb3b] text-black shadow-[2px_2px_0px_#000]' : 'bg-stone-100 hover:bg-stone-200'
              }\`}
            >
              Demo {idx + 1}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-2.5 py-1 bg-[#4ecdc4] text-black text-xs font-mono font-black uppercase border border-black shadow-[2px_2px_0px_#000] flex items-center gap-1"
          >
            <Upload className="w-3 h-3" />
            <span>Carica File</span>
          </button>
          <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="video/*" className="hidden" />
        </div>
      </div>

      {/* Video Player */}
      <div ref={containerRef} className="relative bg-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <video
          ref={videoRef}
          src={currentVideo.url}
          onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime || 0)}
          onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={togglePlay}
          className="w-full aspect-video object-contain bg-black cursor-pointer"
        />

        {/* Controlli Overlay */}
        <div className="p-3 sm:p-4 bg-black/90 text-white flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-2 bg-stone-700 accent-[#ffeb3b]"
            />
            <span className="font-mono text-xs text-stone-400">{formatTime(duration)}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button onClick={togglePlay} className="px-3 py-1 bg-white text-black font-bold text-xs border border-black">
                {isPlaying ? 'PAUSA' : 'PLAY'}
              </button>
              <button onClick={() => handleSkip(-10)} className="text-xs font-mono">-10s</button>
              <button onClick={() => handleSkip(10)} className="text-xs font-mono">+10s</button>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={togglePiP} className="text-xs font-mono border border-stone-600 px-2 py-0.5">PiP</button>
              <button onClick={toggleFullscreen} className="text-xs font-mono border border-stone-600 px-2 py-0.5">FULLSCREEN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'interactive-audio-player',
    name: 'Player Audio Interattivo con Vinile ed Equalizzatore',
    category: 'audio',
    categoryLabel: 'Audio',
    description: 'Lettore audio completo per ascoltare musica con riproduzione reale di tracce MP3, caricamento brani dal computer, stream URL personalizzato, disco in vinile 33 RPM rotante, equalizzatore a barre e gestione playlist.',
    shape: 'Console Boombox con Vinile Rotante ed Equalizzatore',
    colorPalette: ['#ffeb3b', '#000000', '#4ecdc4', '#ff6b6b'],
    component: InteractiveAudioPlayer,
    tags: ['audio', 'player', 'mp3', 'vinile', 'equalizzatore', 'musica', 'playlist', 'ascolto'],
    specialFeature: 'Funzione Speciale Audio: Riproduzione MP3 reale, upload file da computer, URL stream, disco in vinile rotante ed equalizzatore grafico',
    code: `import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat, Shuffle, Upload, Disc3, ListMusic } from 'lucide-react';

const PRESET_TRACKS = [
  { id: '1', title: 'SoundHelix Ambient Wave #1', artist: 'Synthesized Harmony', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', genre: 'Ambient Chill', coverColor: '#ffeb3b' },
  { id: '2', title: 'SoundHelix Electronic Echo #2', artist: 'Digital Resonance', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', genre: 'Synthwave', coverColor: '#4ecdc4' },
];

export default function InteractiveAudioPlayer() {
  const [playlist, setPlaylist] = useState(PRESET_TRACKS);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const currentTrack = playlist[currentIdx] || playlist[0];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const newTrack = {
        id: Date.now().toString(),
        title: file.name.replace(/\\.[^/.]+$/, ''),
        artist: 'File Locale',
        url: fileUrl,
        genre: 'Locale',
        coverColor: '#ffeb3b',
      };
      setPlaylist([newTrack, ...playlist]);
      setCurrentIdx(0);
      setIsPlaying(false);
    }
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return \`\${m < 10 ? '0' : ''}\${m}:\${s < 10 ? '0' : ''}\${s}\`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <audio
        ref={audioRef}
        src={currentTrack.url}
        onTimeUpdate={() => audioRef.current && setCurrentTime(audioRef.current.currentTime)}
        onLoadedMetadata={() => audioRef.current && setDuration(audioRef.current.duration)}
        onEnded={() => setCurrentIdx((i) => (i + 1) % playlist.length)}
      />

      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 space-y-6">
        {/* Vinile rotante e Traccia */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b-2 border-black">
          <div className={\`w-28 h-28 rounded-full bg-black border-4 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center relative overflow-hidden \${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}\`}>
            <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center" style={{ backgroundColor: currentTrack.coverColor }}>
              <Disc3 className="w-5 h-5 text-black" />
            </div>
            <div className="absolute w-2.5 h-2.5 bg-white rounded-full border-2 border-black" />
          </div>

          <div className="flex-1 text-center sm:text-left space-y-1">
            <span className="px-2 py-0.5 bg-black text-[#ffeb3b] font-mono text-[10px] font-black uppercase">
              {currentTrack.genre}
            </span>
            <h3 className="text-xl font-black text-black uppercase tracking-tight">{currentTrack.title}</h3>
            <p className="text-xs font-mono font-bold text-stone-600">{currentTrack.artist}</p>
          </div>
        </div>

        {/* Barra di scorrimento tempo */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-mono font-bold text-black">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setCurrentTime(val);
              if (audioRef.current) audioRef.current.currentTime = val;
            }}
            className="w-full h-3 bg-stone-200 border-2 border-black appearance-none cursor-pointer accent-black"
          />
        </div>

        {/* Controlli di Riproduzione */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-1.5 bg-[#ffeb3b] text-black border-2 border-black text-xs font-mono font-black uppercase shadow-[2px_2px_0px_#000]"
            >
              Carica Audio
            </button>
            <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="audio/*" className="hidden" />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentIdx((i) => (i - 1 + playlist.length) % playlist.length)}
              className="p-2 bg-white border-2 border-black"
            >
              <SkipBack className="w-4 h-4 fill-black" />
            </button>
            <button
              onClick={togglePlay}
              className="w-12 h-12 bg-[#ffeb3b] text-black border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>
            <button
              onClick={() => setCurrentIdx((i) => (i + 1) % playlist.length)}
              className="p-2 bg-white border-2 border-black"
            >
              <SkipForward className="w-4 h-4 fill-black" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setIsMuted(!isMuted)} className="p-2 border-2 border-black bg-white">
              {isMuted ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4 text-black" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'blocknote-scratchpad',
    name: 'Blocknote Post-it Interattivo',
    category: 'blocknote',
    categoryLabel: 'Blocknote',
    description: 'Tavolozza di note adesive colorate (limone, menta, pesca, lavanda) con to-do list spuntabili, spilla ed esportazione rapida in .txt.',
    shape: 'Fogli Post-it Inclinati con Spille',
    colorPalette: ['#fde047', '#f472b6', '#6ee7b7', '#c084fc'],
    component: BlocknoteScratchpad,
    tags: ['blocknote', 'scratchpad', 'post-it', 'checklist', 'appunti'],
    specialFeature: 'Funzione Speciale Blocknote: Creazione note + Palette 4 colori + Spunta todo + Esportazione file di testo',
    code: `import React, { useState } from 'react';
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
      todos: [{ id: 't1', text: 'Testare frequenze pentatoniche', done: true }],
    },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');
  const [selectedColor, setSelectedColor] = useState<'yellow' | 'pink' | 'mint' | 'lavender'>('mint');

  const colorStyles = {
    yellow: 'bg-amber-200 text-stone-900 border-amber-300',
    pink: 'bg-rose-200 text-stone-900 border-rose-300',
    mint: 'bg-emerald-200 text-stone-900 border-emerald-300',
    lavender: 'bg-purple-200 text-stone-900 border-purple-300',
  };

  const addNote = () => {
    if (!newTitle.trim() && !newText.trim()) return;
    setNotes([
      {
        id: Date.now().toString(),
        title: newTitle.trim() || 'Nuovo Appunto',
        text: newText.trim(),
        color: selectedColor,
        pinned: false,
        todos: [],
      },
      ...notes,
    ]);
    setNewTitle('');
    setNewText('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-2">
      <div className="bg-stone-900 border-2 border-stone-800 rounded-3xl p-6 shadow-2xl space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-stone-800">
          <h3 className="text-white font-black text-lg">Blocknote Interattivo</h3>
        </div>

        <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 space-y-3">
          <input
            type="text"
            placeholder="Titolo nota..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full bg-stone-900 text-white px-3 py-2 rounded-xl text-xs border border-stone-800"
          />
          <textarea
            placeholder="Scrivi una nota..."
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            rows={2}
            className="w-full bg-stone-900 text-white px-3 py-2 rounded-xl text-xs border border-stone-800 resize-none"
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {(['yellow', 'pink', 'mint', 'lavender'] as const).map((col) => (
                <button
                  key={col}
                  onClick={() => setSelectedColor(col)}
                  className={\`w-6 h-6 rounded-full \${selectedColor === col ? 'ring-2 ring-white' : ''}\`}
                  style={{ backgroundColor: col === 'yellow' ? '#fde047' : col === 'pink' ? '#f472b6' : col === 'mint' ? '#6ee7b7' : '#c084fc' }}
                />
              ))}
            </div>
            <button onClick={addNote} className="px-4 py-2 rounded-xl bg-amber-400 text-stone-950 font-black text-xs">Aggiungi</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {notes.map((note) => (
            <div key={note.id} className={\`p-5 rounded-2xl border-2 \${colorStyles[note.color]}\`}>
              <h4 className="font-black text-sm mb-2">{note.title}</h4>
              <p className="text-xs">{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,
  },
];
