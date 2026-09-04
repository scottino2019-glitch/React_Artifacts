import React, { useState } from 'react';
import { ComponentItem, ViewportMode } from '../types';
import CodeViewer from './CodeViewer';
import {
  Eye,
  Code2,
  Copy,
  Check,
  Download,
  Smartphone,
  Tablet,
  Monitor,
  Maximize2,
  Sparkles,
} from 'lucide-react';

interface ComponentCardProps {
  item: ComponentItem;
  key?: React.Key;
}

export default function ComponentCard({ item }: ComponentCardProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [viewport, setViewport] = useState<ViewportMode>('responsive');
  const [copied, setCopied] = useState(false);

  const Component = item.component;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(item.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = item.code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([item.code], { type: 'text/typescript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${item.id}.tsx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getViewportWidthClass = () => {
    switch (viewport) {
      case 'mobile':
        return 'max-w-[375px]';
      case 'tablet':
        return 'max-w-[768px]';
      case 'desktop':
        return 'max-w-[1024px]';
      default:
        return 'w-full';
    }
  };

  return (
    <article
      id={`component-${item.id}`}
      className="w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-all hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
    >
      {/* Component Header Information */}
      <div className="p-5 sm:p-6 bg-white border-b-4 border-black flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 bg-blue-200 text-black border-2 border-black text-xs font-mono font-black uppercase tracking-wider">
              ID: {item.id.toUpperCase()} / {item.categoryLabel}
            </span>

            <span className="px-2.5 py-1 bg-[#ffeb3b] text-black border-2 border-black text-xs font-mono font-bold uppercase">
              FORMA: <strong className="font-black">{item.shape}</strong>
            </span>

            {/* Color swatches */}
            <div className="flex items-center gap-1.5 ml-1 bg-stone-100 px-2 py-1 border border-black" title="Tavolozza cromatiche">
              {item.colorPalette.map((col, idx) => (
                <span
                  key={idx}
                  className="w-3.5 h-3.5 border border-black"
                  style={{ backgroundColor: col }}
                />
              ))}
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
            {item.name}
          </h3>

          <p className="text-stone-700 text-xs sm:text-sm max-w-2xl leading-relaxed font-medium">
            {item.description}
          </p>

          {item.specialFeature && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-200 border-2 border-black text-black text-xs font-mono font-black uppercase">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>{item.specialFeature}</span>
            </div>
          )}
        </div>

        {/* Viewport & View Tabs Controls */}
        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          {/* Viewport Selector (only visible in preview mode) */}
          {activeTab === 'preview' && (
            <div className="flex items-center bg-white p-1 border-2 border-black shadow-[2px_2px_0px_#000]">
              <button
                onClick={() => setViewport('responsive')}
                className={`p-1.5 text-xs font-mono transition-colors ${
                  viewport === 'responsive'
                    ? 'bg-black text-[#ffeb3b] font-bold'
                    : 'text-black hover:bg-stone-200'
                }`}
                title="Larghezza Fluida Completa"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewport('desktop')}
                className={`p-1.5 text-xs font-mono transition-colors ${
                  viewport === 'desktop'
                    ? 'bg-black text-[#ffeb3b] font-bold'
                    : 'text-black hover:bg-stone-200'
                }`}
                title="Vista Desktop (1024px)"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewport('tablet')}
                className={`p-1.5 text-xs font-mono transition-colors ${
                  viewport === 'tablet'
                    ? 'bg-black text-[#ffeb3b] font-bold'
                    : 'text-black hover:bg-stone-200'
                }`}
                title="Vista Tablet (768px)"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewport('mobile')}
                className={`p-1.5 text-xs font-mono transition-colors ${
                  viewport === 'mobile'
                    ? 'bg-black text-[#ffeb3b] font-bold'
                    : 'text-black hover:bg-stone-200'
                }`}
                title="Vista Mobile (375px)"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Toggle Tab: Anteprima / Codice */}
          <div className="flex items-center bg-white p-1 border-2 border-black shadow-[2px_2px_0px_#000]">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                activeTab === 'preview'
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-stone-100'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Anteprima</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                activeTab === 'code'
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-stone-100'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Codice</span>
            </button>
          </div>

          {/* Copy and Download buttons */}
          <button
            onClick={handleCopyCode}
            className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 border-2 border-black shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all ${
              copied
                ? 'bg-emerald-400 text-black'
                : 'bg-white text-black hover:bg-black hover:text-white'
            }`}
            title="Copia codice sorgente negli appunti"
          >
            {copied ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiato!' : 'Copia'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-3.5 py-1.5 bg-[#ffeb3b] text-black font-black uppercase tracking-wider text-xs flex items-center gap-1.5 border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-black hover:text-yellow-300 hover:shadow-none transition-all"
            title="Scarica componente .tsx"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span className="hidden sm:inline">Scarica .tsx</span>
          </button>
        </div>
      </div>

      {/* Main Display Area */}
      <div className="p-4 sm:p-8 bg-[#f5f5f5] min-h-[260px] flex items-center justify-center border-b-4 border-black relative">
        {activeTab === 'preview' ? (
          <div className={`w-full transition-all duration-300 mx-auto ${getViewportWidthClass()}`}>
            <div className="w-full flex items-center justify-center bg-white/70 p-4 sm:p-6 border-2 border-dashed border-stone-300 shadow-inner">
              <Component />
            </div>
          </div>
        ) : (
          <div className="w-full">
            <CodeViewer code={item.code} filename={item.id} />
          </div>
        )}
      </div>

      {/* Footer tags */}
      <div className="px-6 py-3 bg-white flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-600">
        <div className="flex flex-wrap items-center gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-stone-100 text-black border border-black text-[10px] font-mono font-bold uppercase"
            >
              #{tag}
            </span>
          ))}
        </div>
        <span className="font-mono text-[11px] font-bold text-black uppercase">
          PRONTO AL DOWNLOAD (.TSX) • ZERO SERVER
        </span>
      </div>
    </article>
  );
}

