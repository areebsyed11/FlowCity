'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, ShieldCheck, CheckCircle2, AlertTriangle, Send } from 'lucide-react';

export default function ContactForm() {
  const [isEmergency, setIsEmergency] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: 'Emergency Plumbing',
    date: 'Today - ASAP',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information & Urgency */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                Need Priority <span className="text-gradient-cyan">Plumbing Service?</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                Fill out the form for instant priority scheduling, or call our 24/7 emergency dispatch line directly.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:18003569248"
                className="glass-card glass-card-hover p-4 rounded-2xl border border-slate-800 flex items-center gap-4 text-white"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">24/7 Emergency Hotline</span>
                  <span className="text-lg font-bold text-white tracking-tight">(800) 356-9248</span>
                </div>
              </a>

              <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Dispatch Email</span>
                  <span className="text-sm font-semibold text-white">dispatch@flowcityplumbing.com</span>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Metro Headquarters</span>
                  <span className="text-sm font-semibold text-white">100 Metro Plaza, Suite 400</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                Operating Hours
              </div>
              <p className="text-slate-400">Emergency Line: 24/7 / 365 Days a Year</p>
              <p className="text-slate-400">Standard Scheduled Slots: Mon-Sat (7:00 AM - 7:00 PM)</p>
            </div>
          </div>

          {/* Right Column: Embedded Form Container */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <h3 className="text-xl font-bold text-white">Request Priority Service Slot</h3>
                  <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    -$25 Promo Active
                  </span>
                </div>

                {/* Emergency Toggle */}
                <div
                  onClick={() => setIsEmergency(!isEmergency)}
                  className={`cursor-pointer p-3.5 rounded-xl border transition flex items-center justify-between ${
                    isEmergency
                      ? 'bg-amber-500/10 border-amber-500 text-amber-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5 text-xs font-bold">
                    <AlertTriangle className={`w-4 h-4 ${isEmergency ? 'text-amber-400 animate-pulse' : 'text-slate-400'}`} />
                    <span>{isEmergency ? '🚨 Emergency Mode: 24/7 Immediate Dispatch' : 'Mark as Active Emergency Leak'}</span>
                  </div>
                  <span className="text-[11px] underline">Toggle</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Service Address</label>
                    <input
                      type="text"
                      required
                      placeholder="456 Oak Ave, Metro City"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Emergency Plumbing">Emergency Plumbing</option>
                      <option value="Leak Repair">Leak Detection & Repair</option>
                      <option value="Drain Cleaning">Hydro-Jetting Drain Clearing</option>
                      <option value="Water Heater Installation">Water Heater Installation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Preferred Time</label>
                    <select
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Today - ASAP">Today - Immediate Dispatch (ASAP)</option>
                      <option value="Today - Afternoon">Today Afternoon (1pm-5pm)</option>
                      <option value="Tomorrow Morning">Tomorrow Morning (8am-12pm)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Issue Details</label>
                  <textarea
                    rows={3}
                    placeholder="Describe the plumbing problem (e.g., location of leak, sounds, age of heater)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 rounded-xl font-bold text-white shadow-xl transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 ${
                    isEmergency ? 'bg-gradient-emergency shadow-amber-500/25' : 'bg-gradient-primary shadow-cyan-500/25'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  {isEmergency ? '🚨 Submit Emergency Dispatch Request' : 'Submit Priority Request ($25 Off)'}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 glow-cyan">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Request Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Our dispatch coordinator is contacting you at <span className="text-cyan-400 font-bold">{formData.phone}</span> to confirm arrival time.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold text-xs transition"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
