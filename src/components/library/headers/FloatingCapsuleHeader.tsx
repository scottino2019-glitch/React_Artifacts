import React, { useState } from 'react';
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
                id={`capsule-nav-${link.name.toLowerCase()}`}
                onClick={() => setActiveTab(link.name)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-900/50'
                    : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : link.color}`} />
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            id="capsule-bell-btn"
            onClick={() => setIsAlertActive(!isAlertActive)}
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
              isAlertActive
                ? 'bg-amber-400 text-stone-950 border-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                : 'bg-stone-800 text-stone-300 border-stone-700 hover:text-white hover:border-stone-600'
            }`}
            title="Avvisi colorati"
          >
            <Bell className="w-4 h-4" />
          </button>

          <button
            id="capsule-primary-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 text-stone-950 font-bold text-xs hover:brightness-110 active:scale-95 transition-all shadow-md shadow-rose-950/20"
          >
            <span>Avvia Esperimento</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            id="capsule-mobile-menu-btn"
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
                <Icon className={`w-4 h-4 ${link.color}`} />
                {link.name}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
