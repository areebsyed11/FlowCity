'use client';

import React from 'react';
import { Droplets, Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & License */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Droplets className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                FLow<span className="text-gradient-cyan">city</span> Plumbing
              </span>
            </a>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Metro area’s leading 24/7 emergency and residential plumbing contractor. Licensed, insured, and committed to transparent flat-rate pricing.
            </p>

            <div className="flex items-center gap-2 text-slate-300 font-medium pt-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>State Master Plumbing License #PL-98241</span>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-cyan-400 transition">24/7 Emergency Plumbing</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Leak Detection & Repair</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Hydro-Jetting Drain Clearing</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Tankless Water Heaters</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Sewer Line Camera Inspection</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#estimator" className="hover:text-cyan-400 transition">Cost Estimator Tool</a></li>
              <li><a href="#why-us" className="hover:text-cyan-400 transition">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-cyan-400 transition">Customer Reviews</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Book Online ($25 Off)</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Direct Contact</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-white font-bold">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href="tel:18003569248" className="hover:text-cyan-400 transition">(800) 356-9248</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>dispatch@flowcityplumbing.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>100 Metro Plaza, Suite 400</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} FLowcity Plumbing LLC. All rights reserved. Built with Next.js & Tailwind CSS.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-200 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200 transition">Terms of Service</a>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-cyan-400 hover:text-white transition shadow-md"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
