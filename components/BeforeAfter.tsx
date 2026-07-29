'use client';

import React, { useState } from 'react';
import { SlidersHorizontal, CheckCircle2, AlertOctagon, Sparkles } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'pipe' | 'heater'>('pipe');

  const contentMap = {
    pipe: {
      title: 'Hydro-Jetting Pipe Clearing',
      subtitle: 'Grease & Root Clog vs 4,000 PSI Restored Pipe',
      beforeImg: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1000&q=80',
      afterImg: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=80',
      beforeText: 'Heavy Root Intrusion & Grease Build-up',
      afterText: '100% Cleared Smooth-Bore Pipe Surface',
    },
    heater: {
      title: 'Tankless Water Heater Upgrade',
      subtitle: 'Corroded 50-Gal Tank vs Modern Endless Hot Water Unit',
      beforeImg: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
      afterImg: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
      beforeText: 'Leaking, Corroded 50-Gallon Tank',
      afterText: 'Ultra-Quiet 98% Efficient Tankless Unit',
    },
  };

  const activeContent = contentMap[activeTab];

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Interactive Restoration Slider
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See the <span className="text-gradient-cyan">FLowcity Transformation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Drag the slider below to inspect our non-invasive pipe clearing and pristine mechanical installations.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8 gap-3">
          <button
            onClick={() => setActiveTab('pipe')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
              activeTab === 'pipe'
                ? 'bg-gradient-primary text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            🌀 Hydro-Jet Drain Cleaning
          </button>
          <button
            onClick={() => setActiveTab('heater')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
              activeTab === 'heater'
                ? 'bg-gradient-primary text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            🔥 Tankless Water Heater
          </button>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-4 sm:p-6">
          <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden select-none">
            
            {/* After Image (Background) */}
            <img
              src={activeContent.afterImg}
              alt="After Restoration"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-500/90 text-slate-950 font-extrabold text-xs px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-lg z-10">
              <CheckCircle2 className="w-3.5 h-3.5" /> AFTER: {activeContent.afterText}
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeContent.beforeImg}
                alt="Before Restoration"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-amber-500/90 text-slate-950 font-extrabold text-xs px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                <AlertOctagon className="w-3.5 h-3.5" /> BEFORE: {activeContent.beforeText}
              </div>
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_15px_#00bbf9] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-xs shadow-xl border-2 border-white">
                ↔
              </div>
            </div>

            {/* Hidden Input Range Slider overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Before and After slider"
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Drag left/right to compare</span>
            <span className="font-semibold text-slate-300">{activeContent.subtitle}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
