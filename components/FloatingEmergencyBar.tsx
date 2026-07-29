'use client';

import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface FloatingEmergencyBarProps {
  onOpenBooking: () => void;
}

export default function FloatingEmergencyBar({ onOpenBooking }: FloatingEmergencyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-nav border-t border-slate-800 p-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Direct Emergency Call */}
        <a
          href="tel:18003569248"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/25 active:scale-95 transition"
        >
          <Phone className="w-4 h-4 mb-0.5 animate-pulse" />
          <span>Call 24/7</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href="https://wa.me/18003569248?text=Hi%20FLowcity%2C%20I%20need%20plumbing%20assistance."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-600/25 active:scale-95 transition"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Booking */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-gradient-primary text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/25 active:scale-95 transition"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>$25 Off Book</span>
        </button>

      </div>
    </div>
  );
}
