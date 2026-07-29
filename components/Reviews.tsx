'use client';

import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquare, ThumbsUp } from 'lucide-react';

interface ReviewItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  category: string;
  title: string;
  comment: string;
  verified: boolean;
}

const reviewsData: ReviewItem[] = [
  {
    id: 1,
    name: 'Marcus Vance',
    location: 'Metro City Suburbs',
    rating: 5,
    date: '2 days ago',
    category: 'Emergency Plumbing',
    title: 'Saved our basement at 2 AM!',
    comment: 'Our main shutoff valve snapped at 2:15 AM causing a major leak. FLowcity had a master technician at our door in 22 minutes! He stopped the leak, replaced the valve, and cleaned the area. Absolutely lifesavers.',
    verified: true,
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    location: 'Downtown District',
    rating: 5,
    date: '1 week ago',
    category: 'Water Heater Installation',
    title: 'Flawless tankless upgrade!',
    comment: 'Upgraded our 12-year-old tank heater to a modern Rinnai tankless unit. Upfront price quoted was exact to the penny. Endless hot water now and our energy bill dropped significantly.',
    verified: true,
  },
  {
    id: 3,
    name: 'David Sterling',
    location: 'Westside Heights',
    rating: 5,
    date: '2 weeks ago',
    category: 'Drain Cleaning',
    title: 'Hydro-jetting worked miracles!',
    comment: 'Had chronic drain backups for months that regular plumbers couldn’t fix. FLowcity ran a camera scope, found root intrusion, and hydro-jetted the line clean. Outstanding work.',
    verified: true,
  },
  {
    id: 4,
    name: 'Elena Rostova',
    location: 'Northside Park',
    rating: 5,
    date: '3 weeks ago',
    category: 'Leak Repair',
    title: 'Pinpoint acoustic leak detection',
    comment: 'Discovered a mysterious water mark on our kitchen ceiling. They used acoustic imaging to locate the exact pinhole leak behind the drywall without tearing up half the wall.',
    verified: true,
  },
];

export default function Reviews() {
  const [filter, setFilter] = useState<string>('All');

  const filteredReviews = filter === 'All'
    ? reviewsData
    : reviewsData.filter((r) => r.category === filter);

  return (
    <section id="reviews" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-amber-500/30 text-xs font-semibold text-amber-400 mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.9 / 5.0 Rating (482+ Reviews)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by <span className="text-gradient-cyan">Thousands of Neighbors</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Read real unfiltered experiences from homeowners who chose FLowcity for emergency and planned plumbing.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['All', 'Emergency Plumbing', 'Water Heater Installation', 'Drain Cleaning', 'Leak Repair'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filter === cat
                  ? 'bg-gradient-primary text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{rev.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">"{rev.title}"</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{rev.comment}</p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    {rev.name}
                    {rev.verified && (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" /> Verified Customer
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{rev.location}</div>
                </div>

                <span className="text-[11px] text-cyan-400 font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  {rev.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
