import React, { useState } from 'react';
import {
  Plane,
  Stamp,
  QrCode,
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  Scissors,
  Sparkles,
} from 'lucide-react';

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
      {/* Boarding Pass Ticket Card with Die-Cut Perforated Notch */}
      <div className="relative w-full bg-white border-4 border-black shadow-[10px_10px_0px_0px_#000] flex flex-col md:flex-row overflow-hidden select-none">
        {/* Top/Left Perforated Notch (Cutout) */}
        <div className="hidden md:block absolute -top-4 right-[160px] w-8 h-8 bg-[#f5f5f5] rounded-full border-2 border-black z-20" />
        <div className="hidden md:block absolute -bottom-4 right-[160px] w-8 h-8 bg-[#f5f5f5] rounded-full border-2 border-black z-20" />

        {/* Main Ticket Section */}
        <div className="flex-1 p-5 sm:p-6 space-y-5 bg-[#fafafa]">
          {/* Header Banner */}
          <div className="flex items-center justify-between pb-3 border-b-2 border-black">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-black text-[#ffeb3b] flex items-center justify-center border border-black shadow-[1px_1px_0px_#ffeb3b]">
                <Plane className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-mono font-black text-sm uppercase tracking-tight text-black">
                AERO_ARTIFACT_AIRWAYS
              </span>
            </div>
            <span className="px-2 py-0.5 bg-[#ffeb3b] text-black font-mono font-black text-[10px] uppercase border border-black shadow-[1px_1px_0px_#000]">
              PRIORITY_BOARDING
            </span>
          </div>

          {/* Route Flight Path */}
          <div className="flex items-center justify-between gap-4 py-2">
            <div>
              <span className="text-[10px] font-mono font-bold text-stone-500 uppercase">
                PARTENZA
              </span>
              <h4 className="text-3xl font-black text-black font-mono tracking-tighter">
                MIL
              </h4>
              <p className="text-xs font-bold text-stone-700">Milano Malpensa</p>
            </div>

            <div className="flex flex-col items-center flex-1 px-4">
              <span className="text-[10px] font-mono text-stone-400 font-bold uppercase mb-1">
                VOLO AF-782 • DIRETTO
              </span>
              <div className="w-full flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-black" />
                <div className="flex-1 border-t-2 border-dashed border-black" />
                <Plane className="w-4 h-4 text-black rotate-90" />
                <div className="flex-1 border-t-2 border-dashed border-black" />
                <div className="w-2 h-2 rounded-full bg-black" />
              </div>
              <span className="text-[10px] font-mono text-stone-500 font-bold mt-1">
                02H 45M
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono font-bold text-stone-500 uppercase">
                DESTINAZIONE
              </span>
              <h4 className="text-3xl font-black text-black font-mono tracking-tighter">
                TYO
              </h4>
              <p className="text-xs font-bold text-stone-700">Tokyo Haneda</p>
            </div>
          </div>

          {/* Flight Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-white border-2 border-black">
            <div>
              <span className="text-[9px] font-mono text-stone-400 font-bold uppercase block">
                PASSEGGERO
              </span>
              <span className="text-xs font-mono font-black text-black uppercase">
                CREATIVE/EXP
              </span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-stone-400 font-bold uppercase block">
                DATA
              </span>
              <span className="text-xs font-mono font-black text-black uppercase">
                18 NOV 24
              </span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-stone-400 font-bold uppercase block">
                GATE
              </span>
              <span className="text-xs font-mono font-black text-black uppercase">
                B-24
              </span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-stone-400 font-bold uppercase block">
                POSTO
              </span>
              <span className="text-xs font-mono font-black text-black uppercase">
                01A • WINDOW
              </span>
            </div>
          </div>

          {/* Interactive Vintage Passport Stamps */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-black uppercase">
              <span className="flex items-center gap-1">
                <Stamp className="w-3.5 h-3.5 text-black" />
                <span>TIMBRI DI VISTO DOGANALE:</span>
              </span>
              <button
                onClick={() =>
                  setStampedCount((prev) => (prev >= stamps.length ? 1 : prev + 1))
                }
                className="px-2 py-0.5 bg-[#4ecdc4] text-black font-bold uppercase border border-black hover:bg-black hover:text-[#4ecdc4] transition-colors"
              >
                + Applica Timbro
              </button>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {stamps.slice(0, stampedCount).map((st, idx) => (
                <div
                  key={idx}
                  className={`p-2 border-2 rounded-xl text-center transform -rotate-3 border-dashed font-mono font-black text-[9px] uppercase shadow-sm ${st.color}`}
                >
                  <div>{st.city} PASSPORT CONTROL</div>
                  <div className="text-xs tracking-wider">{st.code}</div>
                  <div className="text-[8px] font-normal">{st.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Perforated Vertical Divider for desktop */}
        <div className="hidden md:flex flex-col items-center justify-between py-4 border-r-2 border-dashed border-black/70 bg-stone-100 w-[1px]" />

        {/* Detachable Boarding Stub (Talloncino staccabile) */}
        <div
          className={`w-full md:w-44 p-5 bg-[#fdfdfd] border-t-2 md:border-t-0 md:border-l-2 border-dashed border-black flex flex-col justify-between transition-all ${
            isTorn ? 'translate-x-2 translate-y-2 bg-[#ffeb3b]/40 rotate-1' : ''
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-black uppercase text-black">
                STUB PASS
              </span>
              <button
                onClick={() => setIsTorn(!isTorn)}
                className="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-black text-white hover:bg-[#ffeb3b] hover:text-black transition-colors flex items-center gap-1"
                title="Strappa talloncino"
              >
                <Scissors className="w-2.5 h-2.5" />
                <span>{isTorn ? 'RIATTACCA' : 'STRAPPA'}</span>
              </button>
            </div>

            <div>
              <span className="text-[9px] font-mono text-stone-400 block uppercase">
                VOLO & POSTO
              </span>
              <span className="text-sm font-mono font-black text-black">
                AF-782 • 01A
              </span>
            </div>

            {/* Barcode Graphic */}
            <div className="pt-2">
              <div className="h-10 w-full flex items-center justify-between gap-0.5">
                {[
                  3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2,
                  1, 3, 1,
                ].map((w, i) => (
                  <div
                    key={i}
                    className="h-full bg-black"
                    style={{ width: `${w * 1.5}px` }}
                  />
                ))}
              </div>
              <span className="text-[8px] font-mono text-center block mt-1 tracking-widest text-black">
                *984729104829*
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-300 text-center">
            <span className="text-[9px] font-mono font-black text-black uppercase block">
              STATUS: {isTorn ? 'TALLONCINO STACCATO' : 'VALIDATO'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
