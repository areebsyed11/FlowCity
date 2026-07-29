'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, Zap, AlertCircle } from 'lucide-react';
import BookingModal from './BookingModal';

interface ServiceOption {
  id: string;
  name: string;
  basePriceMin: number;
  basePriceMax: number;
  description: string;
  icon: string;
}

const servicesList: ServiceOption[] = [
  {
    id: 'emergency',
    name: 'Emergency Plumbing (24/7)',
    basePriceMin: 149,
    basePriceMax: 299,
    description: 'Rapid response burst pipe, active flooding, shutoff valve replacement',
    icon: '🚨',
  },
  {
    id: 'leak',
    name: 'Leak Detection & Repair',
    basePriceMin: 180,
    basePriceMax: 350,
    description: 'Non-invasive acoustic & thermal imaging leak diagnosis and pipe repair',
    icon: '💧',
  },
  {
    id: 'drain',
    name: 'Drain Cleaning & Hydro-Jetting',
    basePriceMin: 125,
    basePriceMax: 275,
    description: 'High-pressure hydro clearing, clog removal, video sewer inspection',
    icon: '🌀',
  },
  {
    id: 'heater',
    name: 'Tankless / Water Heater Install',
    basePriceMin: 850,
    basePriceMax: 2200,
    description: 'Energy-efficient tankless upgrade or traditional water heater replacement',
    icon: '🔥',
  },
];

export default function CostEstimator() {
  const [selectedService, setSelectedService] = useState<ServiceOption>(servicesList[0]);
  const [propertyType, setPropertyType] = useState<'residential' | 'condo' | 'commercial'>('residential');
  const [urgency, setUrgency] = useState<'immediate' | 'sameday' | 'scheduled'>('immediate');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Price Calculation Logic
  let propertyMultiplier = 1.0;
  if (propertyType === 'condo') propertyMultiplier = 0.95;
  if (propertyType === 'commercial') propertyMultiplier = 1.35;

  let urgencyAdder = 0;
  if (urgency === 'immediate') urgencyAdder = 45;
  if (urgency === 'sameday') urgencyAdder = 20;

  const calculatedMin = Math.round((selectedService.basePriceMin + urgencyAdder) * propertyMultiplier);
  const calculatedMax = Math.round((selectedService.basePriceMax + urgencyAdder) * propertyMultiplier);

  return (
    <section id="estimator" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Calculator className="w-3.5 h-3.5" /> 100% Upfront Pricing Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Instant Plumbing <span className="text-gradient-cyan">Cost Estimator</span>
          </h2>
          <p className="text-slate-400 text-base mt-3">
            No surprise hourly bills or hidden travel fees. Get a transparent estimate in seconds and lock in your <span className="text-emerald-400 font-semibold">$25 online discount</span>.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Service Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Select Plumbing Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servicesList.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedService(item)}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${
                      selectedService.id === item.id
                        ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-950/50 text-white'
                        : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-bold text-sm text-white">{item.name}</div>
                      <div className="text-xs text-slate-400 mt-1 leading-snug">{item.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                2. Property Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setPropertyType('residential')}
                  className={`py-3 px-4 rounded-xl border text-xs font-bold transition ${
                    propertyType === 'residential'
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  🏡 Single Home
                </button>
                <button
                  onClick={() => setPropertyType('condo')}
                  className={`py-3 px-4 rounded-xl border text-xs font-bold transition ${
                    propertyType === 'condo'
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  🏢 Condo / Apt
                </button>
                <button
                  onClick={() => setPropertyType('commercial')}
                  className={`py-3 px-4 rounded-xl border text-xs font-bold transition ${
                    propertyType === 'commercial'
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  🏪 Commercial
                </button>
              </div>
            </div>

            {/* Step 3: Urgency Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                3. Arrival Speed
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setUrgency('immediate')}
                  className={`py-3 px-4 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                    urgency === 'immediate'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-300 shadow-md shadow-amber-950/30'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Immediate 24/7
                </button>
                <button
                  onClick={() => setUrgency('sameday')}
                  className={`py-3 px-4 rounded-xl border text-xs font-bold transition ${
                    urgency === 'sameday'
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  Same Day Slot
                </button>
                <button
                  onClick={() => setUrgency('scheduled')}
                  className={`py-3 px-4 rounded-xl border text-xs font-bold transition ${
                    urgency === 'scheduled'
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  Flexible Date
                </button>
              </div>
            </div>

          </div>

          {/* Right Price Calculation Summary Card */}
          <div className="lg:col-span-5 glass-card border border-cyan-500/30 rounded-3xl p-6 sm:p-8 relative shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Estimated Investment</span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                -$25 Online Discount Active
              </span>
            </div>

            {/* Big Price Range Display */}
            <div className="my-6 text-center lg:text-left">
              <div className="text-xs text-slate-400 font-medium">Estimated Upfront Cost Range</div>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-1">
                ${calculatedMin} - ${calculatedMax}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                *Final price confirmed on-site before any work starts. No obligation.
              </p>
            </div>

            {/* Included Guarantees */}
            <div className="space-y-2.5 py-4 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Licensed Master Technician Diagnostics Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Upfront Written Quote Before Work Begins</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Parts & Workmanship Lifetime Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Clean Workspace Promise (Shoe Covers & Cleanup)</span>
              </div>
            </div>

            {/* Lock In Quote Button */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full mt-6 py-4 bg-gradient-primary hover:opacity-95 text-slate-950 font-extrabold text-sm rounded-xl shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5"
            >
              Lock In Estimate & Book Service
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-3 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Zero cancellation fee prior to technician dispatch</span>
            </div>
          </div>

        </div>

      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService.name}
      />
    </section>
  );
}
