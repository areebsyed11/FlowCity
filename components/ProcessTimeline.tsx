'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Navigation, FileCheck, ShieldCheck } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: <PhoneCall className="w-5 h-5 text-cyan-400" />,
    title: 'Instant Request',
    description: 'Book online in 30 seconds or call our 24/7 hotline for immediate priority dispatch.',
  },
  {
    step: '02',
    icon: <Navigation className="w-5 h-5 text-amber-400" />,
    title: 'Live GPS Tech Dispatch',
    description: 'Receive SMS updates and live technician ETA as your master plumber heads to your location.',
  },
  {
    step: '03',
    icon: <FileCheck className="w-5 h-5 text-emerald-400" />,
    title: 'Upfront Flat-Rate Quote',
    description: 'Our tech diagnoses the issue on-site and provides an exact price quote before turning a wrench.',
  },
  {
    step: '04',
    icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
    title: 'Flawless Fix & Warranty',
    description: 'We perform the repair, clean your space, and activate your lifetime parts & labor warranty.',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Simple 4-Step Process</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            How We Deliver <span className="text-gradient-cyan">Hassle-Free Relief</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            From your initial call to job completion, here is what to expect from FLowcity.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-800 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-2xl font-black text-slate-700 group-hover:text-cyan-400 transition font-mono">
                  {item.step}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
