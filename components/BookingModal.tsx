'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Clock, AlertTriangle, Calendar, Phone, MapPin, User } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function BookingModal({ isOpen, onClose, initialService = 'Emergency Plumbing' }: BookingModalProps) {
  const [service, setService] = useState(initialService);
  const [isEmergency, setIsEmergency] = useState(false);
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: 'Today - ASAP',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-lg glass-card border border-cyan-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 text-slate-100 z-10 my-8 overflow-hidden"
          >
            {/* Top Glow Bar */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${isEmergency ? 'bg-gradient-emergency' : 'bg-gradient-primary'}`} />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-full transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {step === 'form' ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                    <ShieldCheck className="w-3.5 h-3.5" /> Upfront Pricing • 100% Guaranteed
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Book Priority Dispatch</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    Book online now & get <span className="text-emerald-400 font-semibold">$25 OFF</span> your service call.
                  </p>
                </div>

                {/* Emergency Toggle */}
                <div
                  onClick={() => setIsEmergency(!isEmergency)}
                  className={`cursor-pointer p-3.5 rounded-xl border mb-6 transition-all flex items-start gap-3 ${
                    isEmergency
                      ? 'bg-amber-500/10 border-amber-500/50 text-amber-300 shadow-lg shadow-amber-950/40'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <AlertTriangle className={`w-5 h-5 mt-0.5 shrink-0 ${isEmergency ? 'text-amber-400 animate-pulse' : 'text-slate-400'}`} />
                  <div className="text-xs">
                    <span className="font-bold block text-sm">
                      {isEmergency ? '🚨 Emergency 24/7 Priority Mode Active' : 'Is this an active leak or emergency?'}
                    </span>
                    <span className="text-slate-400">
                      {isEmergency
                        ? 'Technician auto-dispatched within 30 minutes.'
                        : 'Check box for immediate rapid emergency response.'}
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Select Service</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                    >
                      <option value="Emergency Plumbing">Emergency Plumbing (24/7 Dispatch)</option>
                      <option value="Leak Repair">Leak Detection & Repair</option>
                      <option value="Drain Cleaning">Hydro-Jetting & Drain Cleaning</option>
                      <option value="Water Heater Installation">Tankless / Water Heater Installation</option>
                    </select>
                  </div>

                  {/* Name & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                        <input
                          type="tel"
                          required
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Address */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Service Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        placeholder="123 Main St, Metro Area"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Preferred Schedule</label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                      <select
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                      >
                        <option value="Today - ASAP">Today - Immediate Dispatch (ASAP)</option>
                        <option value="Today - Afternoon">Today - Afternoon Slot (1pm - 5pm)</option>
                        <option value="Tomorrow Morning">Tomorrow Morning (8am - 12pm)</option>
                        <option value="Tomorrow Afternoon">Tomorrow Afternoon (1pm - 5pm)</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Issue Description (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Water leaking under kitchen sink, pipe humming sound..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-white shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${
                      isEmergency
                        ? 'bg-gradient-emergency shadow-amber-500/25 hover:shadow-amber-500/40'
                        : 'bg-gradient-primary shadow-cyan-500/25 hover:shadow-cyan-500/40'
                    }`}
                  >
                    {isEmergency ? '🚨 Confirm Emergency Dispatch' : 'Confirm Priority Booking ($25 Promo Applied)'}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /> Fast 24-Min Response</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Flat-Rate Quote</span>
                  </div>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30 glow-cyan">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Priority Booking Confirmed!</h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Thank you <span className="font-semibold text-white">{formData.name || 'Valued Customer'}</span>. A licensed FLowcity technician has been assigned to <span className="text-cyan-400 font-medium">{formData.address || 'your location'}</span> for <span className="text-cyan-400 font-medium">{formData.date}</span>.
                </p>

                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 mb-6 text-left space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Confirmation Code:</span>
                    <span className="font-mono text-cyan-400 font-bold">#FC-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Assigned Service:</span>
                    <span className="text-white font-medium">{service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Promo Discount:</span>
                    <span className="text-emerald-400 font-bold">-$25.00 Applied</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
