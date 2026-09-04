import React, { useState } from 'react';
import {
  Folder,
  FolderOpen,
  Paperclip,
  FileText,
  Tag,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Sparkles,
  Download,
} from 'lucide-react';

export default function ArchiveFolderCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClassified, setIsClassified] = useState(true);

  return (
    <div className="w-full max-w-xl mx-auto py-6 px-2 flex flex-col items-center">
      {/* Manila Archive Folder with Stepped Tab & Metal Clip */}
      <div className="relative w-full">
        {/* Raised Manila Folder Index Tab */}
        <div className="flex items-end justify-between px-6">
          <div className="bg-[#e8d5b5] border-t-4 border-x-4 border-black px-5 py-2 flex items-center gap-2 shadow-[-2px_-2px_0px_rgba(0,0,0,0.1)]">
            <Folder className="w-4 h-4 text-black stroke-[2.5]" />
            <span className="font-mono text-xs font-black uppercase tracking-wider text-black">
              ARCHIVIO_RISERVATO_#404
            </span>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <button
              onClick={() => setIsClassified(!isClassified)}
              className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase border-2 border-black bg-white hover:bg-black hover:text-white flex items-center gap-1 transition-colors"
            >
              {isClassified ? (
                <>
                  <Lock className="w-3 h-3 text-red-600" />
                  <span>Segreto ON</span>
                </>
              ) : (
                <>
                  <Unlock className="w-3 h-3 text-emerald-600" />
                  <span>Desecretato</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main Folder Body with Metallic Paperclip */}
        <div className="relative bg-[#eddcc4] border-4 border-black shadow-[10px_10px_0px_0px_#000] p-5 sm:p-7 space-y-5">
          {/* Metallic Paperclip on top-right */}
          <div className="absolute -top-4 right-8 z-30 flex flex-col items-center pointer-events-none">
            <div className="w-3.5 h-12 rounded-full border-3 border-stone-800 bg-stone-300 shadow-[2px_2px_0px_rgba(0,0,0,0.6)]" />
          </div>

          {/* Internal White Document Sheet (sliding out or revealed) */}
          <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0px_#000] space-y-4 relative overflow-hidden">
            {/* Red Rubber Stamp */}
            <div className="absolute top-4 right-4 border-3 border-red-600 px-3 py-1 text-red-600 font-mono font-black text-xs uppercase tracking-widest rotate-12 border-dashed opacity-85 select-none pointer-events-none">
              {isClassified ? 'STRETTAMENTE RISERVATO' : 'DE-CLASSIFICATO'}
            </div>

            <div className="flex items-center gap-2 pb-3 border-b-2 border-black">
              <FileText className="w-4 h-4 text-black stroke-[2.5]" />
              <span className="font-mono text-xs font-black uppercase text-black">
                DOSSIER TECNICO DI PROGETTO • REV 3.2
              </span>
            </div>

            {/* Document Content */}
            <div className="space-y-2">
              <h4 className="text-lg font-black text-black uppercase tracking-tight">
                Specifiche del Nuovo Sistema Geometrico
              </h4>
              <p
                className={`text-xs font-mono leading-relaxed transition-all ${
                  isClassified
                    ? 'filter blur-[3px] select-none text-stone-600'
                    : 'text-stone-800'
                }`}
              >
                Tutti i moduli dell’interfaccia adottano bordature nette con spessore
                di 4px e ombre piene proiettate sull’asse X/Y. Le superfici alternano
                giallo evidenziatore (#ffeb3b) e sfondi carta millimetrata per
                garantire il massimo contrasto tipografico.
              </p>
            </div>

            {/* Tags and Metadata */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-2 py-0.5 bg-[#ffeb3b] text-black font-mono font-bold text-[10px] uppercase border border-black">
                SPEC-GEOM
              </span>
              <span className="px-2 py-0.5 bg-[#4ecdc4] text-black font-mono font-bold text-[10px] uppercase border border-black">
                UI-BAUHAUS
              </span>
              <span className="px-2 py-0.5 bg-black text-white font-mono font-bold text-[10px] uppercase">
                DOC_ID: 994-A
              </span>
            </div>
          </div>

          {/* Folder Footer Action Bar */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-[10px] font-mono font-bold text-stone-700 uppercase">
              CARTELLA ARCHIVIO • CLASSIFICAZIONE A-1
            </span>

            <button
              onClick={() => setIsClassified(!isClassified)}
              className="px-3 py-1 bg-black text-white hover:bg-[#ffeb3b] hover:text-black border-2 border-black text-xs font-mono font-black uppercase shadow-[2px_2px_0px_#000] flex items-center gap-1.5 transition-all"
            >
              {isClassified ? (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Rivela Documento</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Nascondi</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
