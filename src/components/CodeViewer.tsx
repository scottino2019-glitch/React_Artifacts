import React, { useState } from 'react';
import { Copy, Check, Download, FileCode } from 'lucide-react';

interface CodeViewerProps {
  code: string;
  filename: string;
}

export default function CodeViewer({ code, filename }: CodeViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/typescript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.tsx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const lines = code.split('\n');

  return (
    <div className="w-full bg-[#18181b] text-stone-200 border-2 border-black shadow-[4px_4px_0px_#000] font-mono text-xs overflow-hidden">
      {/* Code Header bar in Artistic Flair yellow */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#ffeb3b] border-b-2 border-black text-black">
        <div className="flex items-center gap-2">
          <FileCode className="w-4 h-4 text-black stroke-[2.5]" />
          <span className="font-black uppercase tracking-tight text-black">{filename}.tsx</span>
          <span className="text-[10px] px-1.5 py-0.5 bg-black text-white font-bold tracking-wider uppercase">
            TYPESCRIPT
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className={`px-3 py-1 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 border border-black shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all ${
              copied
                ? 'bg-emerald-400 text-black'
                : 'bg-white hover:bg-black hover:text-white text-black'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Copy className="w-3.5 h-3.5 stroke-[2.5]" />}
            <span>{copied ? 'Copiato!' : 'Copia'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-3 py-1 bg-black hover:bg-yellow-400 hover:text-black text-white font-black text-xs uppercase tracking-wider flex items-center gap-1.5 border border-black shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            title="Scarica file TSX"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Scarica .tsx</span>
          </button>
        </div>
      </div>

      {/* Code content with line numbers */}
      <div className="p-4 max-h-96 overflow-y-auto overflow-x-auto select-text scrollbar-thin bg-[#121214]">
        <pre className="table w-full">
          {lines.map((line, idx) => (
            <div key={idx} className="table-row hover:bg-stone-800/60">
              <span className="table-cell pr-4 text-right select-none text-stone-500 w-10 text-[11px] font-mono border-r border-stone-800">
                {idx + 1}
              </span>
              <span className="table-cell pl-3 text-stone-200 whitespace-pre font-mono">
                {line || ' '}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

