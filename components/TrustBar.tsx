'use client';

import React from 'react';
import { Star, ShieldCheck, Award, ThumbsUp, Sparkles } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="bg-slate-900/60 border-y border-slate-800/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 flex flex-col items-center">
            <div className="flex items-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="text-xl font-bold text-white">4.9 / 5.0 Rating</div>
            <p className="text-xs text-slate-400 mt-0.5">Google Verified Reviews (482+)</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xl font-bold text-white">Fully Licensed</div>
            <p className="text-xs text-slate-400 mt-0.5">Master License #PL-98241</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div className="text-xl font-bold text-white">Flat-Rate Guarantee</div>
            <p className="text-xs text-slate-400 mt-0.5">No Hidden Fees or Surprises</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-xl font-bold text-white">Top Rated 2025</div>
            <p className="text-xs text-slate-400 mt-0.5">Best Local Service Award</p>
          </div>

        </div>

        {/* Press Badges */}
        <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-semibold tracking-wider uppercase">
          <span className="flex items-center gap-2 text-slate-300">
            <Sparkles className="w-4 h-4 text-cyan-400" /> As Seen On & Trusted By
          </span>
          <span className="text-slate-400">Metro Business Journal</span>
          <span className="text-slate-400">HomeAdvisor Certified</span>
          <span className="text-slate-400">BBB A+ Accredited</span>
          <span className="text-slate-400">Angi Super Service Award</span>
        </div>
      </div>
    </section>
  );
}
