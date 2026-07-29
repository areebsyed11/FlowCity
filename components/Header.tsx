'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Droplets, Calendar, Menu, X, ShieldCheck } from 'lucide-react';
import BookingModal from './BookingModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Urgent Notification Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border-b border-cyan-500/20 text-slate-200 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-300">
              Live Service Status: <span className="text-emerald-400 font-semibold">3 Technicians On Duty</span> (Avg. Arrival: 24 Mins)
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Licensed & Insured #PL-98241</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline text-amber-400 font-semibold">$25 Off Online Bookings</span>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-3' : 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition transform">
              <Droplets className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-0.5">
                FLow<span className="text-gradient-cyan">city</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold block -mt-1">
                Plumbing & Drain
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#estimator" className="hover:text-cyan-400 transition flex items-center gap-1">
              Cost Estimator <span className="px-1.5 py-0.5 text-[10px] rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Instant</span>
            </a>
            <a href="#why-us" className="hover:text-cyan-400 transition">Why Us</a>
            <a href="#reviews" className="hover:text-cyan-400 transition">Reviews</a>
            <a href="#faq" className="hover:text-cyan-400 transition">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:18003569248"
              className="flex items-center gap-2 text-slate-200 hover:text-cyan-400 px-3 py-2 text-sm font-semibold transition"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400">
                <Phone className="w-4 h-4 animate-pulse" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-400 block font-normal leading-none">24/7 Emergency Hotline</span>
                <span className="text-sm font-bold tracking-tight text-white">(800) 356-9248</span>
              </div>
            </a>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-primary hover:opacity-95 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/25 flex items-center gap-2 text-sm transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              Book Online ($25 Off)
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4">
            <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400">Services</a>
              <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400">Cost Estimator</a>
              <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400">Why Choose Us</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400">Customer Reviews</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400">FAQ</a>
            </nav>
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <a
                href="tel:18003569248"
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 border border-slate-700 text-white rounded-xl font-bold"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                Call (800) 356-9248
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="w-full py-3 bg-gradient-primary text-slate-950 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Calendar className="w-4 h-4" />
                Book Online ($25 Off)
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
