'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import CostEstimator from '@/components/CostEstimator';
import BeforeAfter from '@/components/BeforeAfter';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessTimeline from '@/components/ProcessTimeline';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import FloatingEmergencyBar from '@/components/FloatingEmergencyBar';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <CostEstimator />
      <BeforeAfter />
      <WhyChooseUs />
      <ProcessTimeline />
      <Reviews />
      <FAQ />
      <ContactForm />
      
      {/* Floating Sticky Bar on Mobile */}
      <FloatingEmergencyBar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Global Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
