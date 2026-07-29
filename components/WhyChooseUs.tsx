'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Sparkles, UserCheck, ShieldCheck, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
    title: 'Upfront Flat-Rate Pricing',
    description: 'You approve the exact written quote before any work starts. No surprise hourly overages or weekend markups ever.',
    highlight: 'Zero Hidden Fees',
  },
  {
    icon: <Clock className="w-6 h-6 text-amber-400" />,
    title: 'On-Time Arrival Guarantee',
    description: 'We respect your busy schedule. If our technician arrives late to your scheduled appointment window, we credit $50 off your bill.',
    highlight: '$50 On-Time Credit',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
    title: 'Red Carpet Clean Promise',
    description: 'Our plumbers wear protective shoe covers, lay down workspace tarps, and leave your home cleaner than when we arrived.',
    highlight: 'Spotless Cleanup',
  },
  {
    icon: <UserCheck className="w-6 h-6 text-blue-400" />,
    title: 'Master Certified & Background Checked',
    description: 'Every team member undergoes rigorous background screening and holds active master plumber certifications for your family’s safety.',
    highlight: '100% Vetted Techs',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <HeartHandshake className="w-3.5 h-3.5" /> The FLowcity Standard
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why 15,000+ Homeowners <span className="text-gradient-cyan">Trust FLowcity</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            We built our business around radical transparency, rapid response times, and uncompromising quality.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 shadow-inner">
                  {item.icon}
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 mb-3">
                  {item.highlight}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-cyan-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> FLowcity Guarantee
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
