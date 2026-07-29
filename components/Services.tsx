'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplet, Flame, ArrowRight, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import BookingModal from './BookingModal';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  badge: string;
  badgeColor: string;
  image: string;
  icon: React.ReactNode;
}

const servicesData: ServiceItem[] = [
  {
    id: 'Emergency Plumbing',
    title: '24/7 Emergency Plumbing Dispatch',
    category: 'Rapid Response',
    description: 'When pipes burst or severe flooding strikes, every minute matters. Our emergency response team arrives in under 30 minutes with full equipment.',
    features: [
      'Burst Pipe Repair & Rapid Shutoff',
      'Severe Flood & Backup Containment',
      'Gas Leak Emergency Diagnostics',
      '24/7 Live Operator Dispatch',
    ],
    badge: '⚡ Avg 24 Min Response',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    icon: <Zap className="w-6 h-6 text-amber-400" />,
  },
  {
    id: 'Leak Repair',
    title: 'Non-Invasive Leak Detection & Repair',
    category: 'Diagnostic & Repair',
    description: 'Hidden slab leaks and pinhole ceiling leaks destroy property fast. We use ultrasonic acoustic sensors and thermal cameras to find leaks without tearing up walls.',
    features: [
      'Infrared Thermal Imaging Diagnosis',
      'Ultrasonic Pipe Leak Location',
      'Slab Leak Trenchless Repair',
      'PEX & Copper Line Replacement',
    ],
    badge: '🔍 Non-Invasive Tech',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    icon: <Droplet className="w-6 h-6 text-cyan-400" />,
  },
  {
    id: 'Drain Cleaning',
    title: 'High-Pressure Hydro-Jetting & Drain Clearing',
    category: 'Sewer & Drains',
    description: 'Banish stubborn grease, tree roots, and chronic blockages. Our 4,000 PSI hydro-jetter scrubs pipes back to like-new diameter.',
    features: [
      'HD Video Sewer Scope Inspection',
      '4,000 PSI Hydro-Jetting Clearing',
      'Tree Root Cutting & Removal',
      '1-Year No-Clog Warranty',
    ],
    badge: '🌀 Hydro-Jet Power',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
    icon: <Droplet className="w-6 h-6 text-blue-400" />,
  },
  {
    id: 'Water Heater Installation',
    title: 'Tankless & Traditional Water Heater Installs',
    category: 'Water Heating Systems',
    description: 'Never run out of hot water again. Upgrade to a ultra-efficient tankless system or replace your failing traditional tank with same-day installation.',
    features: [
      'Endless Hot Water Tankless Upgrades',
      'Same-Day Tank Replacement',
      'Energy Rebate Assistance ($500+)',
      '10-Year Manufacturer Warranty',
    ],
    badge: '🔥 Endless Hot Water',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    icon: <Flame className="w-6 h-6 text-orange-400" />,
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string>('Emergency Plumbing');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> Licensed & Insured Plumbers
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-gradient-cyan">Plumbing Solutions</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Engineered for durability, speed, and absolute peace of mind. Every service comes backed by upfront flat-rate pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
            >
              {/* Image & Badge Header */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>

                {/* Service Icon floating */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-slate-950/80 border border-slate-700/80 backdrop-blur-md flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">{service.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-cyan-300 transition">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="mt-4 space-y-2 text-xs text-slate-300">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <a
                    href="tel:18003569248"
                    className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    Call Hotline
                  </a>

                  <button
                    onClick={() => {
                      setSelectedService(service.id);
                      setIsBookingOpen(true);
                    }}
                    className="px-5 py-2.5 bg-gradient-primary hover:opacity-95 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition"
                  >
                    Book Service ($25 Off)
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />
    </section>
  );
}
