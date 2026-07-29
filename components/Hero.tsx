'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck, Clock, Star, Zap, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import BookingModal from './BookingModal';

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-slate-950">
      {/* Dynamic Animated Gradient Mesh Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Emergency Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-xs sm:text-sm font-semibold text-slate-200 shadow-lg shadow-cyan-950/50"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <span className="text-amber-400 font-bold">24/7 Emergency Response</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Average Arrival <span className="text-cyan-400 font-bold">24 Mins</span></span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Precision Plumbing.{' '}
              <span className="text-gradient-cyan block mt-1">Instant Relief.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Fast, transparent, and certified plumbing service for your home. From burst pipe emergencies to tankless water heater installs, we deliver flat-rate upfront quotes with a 100% satisfaction guarantee.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-primary hover:opacity-95 text-slate-950 font-extrabold text-base rounded-2xl shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-3 transition transform hover:-translate-y-1 active:translate-y-0 group"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                Book Priority Service ($25 Off)
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              <a
                href="tel:18003569248"
                className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-slate-900 border border-slate-700/80 text-white font-bold text-base rounded-2xl flex items-center justify-center gap-3 transition transform hover:-translate-y-0.5"
              >
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 animate-pulse" />
                </div>
                Call (800) 356-9248
              </a>
            </motion.div>

            {/* Quick Micro Trust Checks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 pt-2"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Hidden Callout Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Licensed Master Plumbers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Upfront Flat-Rate Quotes</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Hero Visual & Interactive Badge Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Interactive Glass Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 relative z-10 shadow-2xl shadow-slate-950">
              
              {/* Card Header with Rating */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">FLowcity Certified</h3>
                    <p className="text-xs text-slate-400">Metro Plumbing Dispatch</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="font-bold text-sm text-white">4.9 / 5.0</span>
                  </div>
                  <span className="text-[11px] text-slate-400">482+ Verified Reviews</span>
                </div>
              </div>

              {/* Service Capabilities Grid */}
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <Zap className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Response</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">Under 30M</div>
                  <p className="text-[11px] text-slate-400">24/7 Rapid Emergency</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Warranty</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">100% Coverage</div>
                  <p className="text-[11px] text-slate-400">Parts & Labor Included</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-amber-400 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Pricing</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">Flat-Rate</div>
                  <p className="text-[11px] text-slate-400">No Hourly Surprises</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Completed</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">15,000+</div>
                  <p className="text-[11px] text-slate-400">Homes Served</p>
                </div>
              </div>

              {/* Bottom Quick Dispatch Banner inside card */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Technicians active in Metro Area
                  </span>
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                  >
                    Check Slot →
                  </button>
                </div>
              </div>

            </div>

            {/* Glowing Accent Ring behind visual */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-cyan-500/20 rounded-3xl -z-0 pointer-events-none hidden sm:block" />
          </motion.div>

        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
