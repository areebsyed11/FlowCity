'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqList: FAQItem[] = [
  {
    question: 'How fast can a technician arrive for an emergency call?',
    answer: 'Our average emergency dispatch response time is 24 minutes. We maintain technicians on duty 24/7 across the metro area equipped with full repair gear.',
    category: 'Emergency',
  },
  {
    question: 'How does your upfront flat-rate pricing work?',
    answer: 'Before starting any work, our technician conducts a complete diagnostic inspection and gives you an exact written price quote. You approve the price first—no hidden fees or surprise hourly billing.',
    category: 'Pricing',
  },
  {
    question: 'Do you offer warranties on your plumbing work?',
    answer: 'Yes! All FLowcity repairs and installations come backed by a minimum 1-year labor warranty, up to 10-year manufacturer warranties on tankless water heaters.',
    category: 'Warranty',
  },
  {
    question: 'Are your plumbers licensed and insured?',
    answer: '100% of our plumbers are state-licensed master or journeyman plumbers, fully insured, and background-checked for your safety and peace of mind.',
    category: 'Credentials',
  },
  {
    question: 'Can you assist with homeowners insurance claims for leak damage?',
    answer: 'Yes. We provide complete itemized diagnostic documentation, infrared leak imagery, and official reports to submit directly to your insurance adjuster.',
    category: 'Insurance',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqList.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Got Questions? <span className="text-gradient-cyan">We Have Answers</span>
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search questions (e.g. pricing, warranty, response time)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-cyan-300 transition"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/50 pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
