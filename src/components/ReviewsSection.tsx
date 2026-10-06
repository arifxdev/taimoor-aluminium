import React, { useState } from 'react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/content';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-neutral-50/70 border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
            Testimonial
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading">
            <span className="text-neutral-900">Our Customer</span> <span className="text-neutral-500">Reviews</span>
          </h2>
          <div className="w-12 h-1 bg-neutral-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 2-Column Testimonial Layout matching Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Client Quote Box */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-white p-8 sm:p-12 rounded-2xl border border-neutral-200/90 shadow-sm relative space-y-6">
              
              {/* Top Quote Icon & Google Stars */}
              <div className="flex items-center justify-between">
                <Quote className="w-10 h-10 text-rose-200 shrink-0" />
                <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-amber-900 ml-1">5.0</span>
                </div>
              </div>

              {/* Quote Italicized Body */}
              <blockquote className="text-base sm:text-lg italic text-neutral-800 leading-relaxed min-h-[110px]">
                "{current.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-neutral-900 font-heading">
                    {current.name}
                  </h4>
                  <p className="text-xs text-rose-600 font-medium">
                    {current.role} · {current.location}
                  </p>
                </div>
                
                {/* Verified badge */}
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle className="w-3 h-3" />
                  Verified Review
                </span>
              </div>

              {/* Carousel Indicator Dots & Controls */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <button
                  onClick={prev}
                  className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`transition-all rounded-full ${
                        idx === currentIndex
                          ? 'w-6 h-2 bg-[#193b48]'
                          : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Google Reviews Trust Strip */}
            <div className="mt-4 flex items-center justify-between px-4 py-2 bg-white rounded-lg border border-neutral-200/70 text-xs text-neutral-600">
              <span className="font-semibold text-neutral-900">
                Google Business Profile Rating:
              </span>
              <span className="font-bold text-[#8c254b]">
                ★ 5.0 / 5.0 (Gulshan-e-Hadeed Phase 2, Karachi)
              </span>
            </div>
          </div>

          {/* Right Column: Family Admiring Windows Image matching Reference */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                alt="Happy family looking through modern glass windows"
                className="w-full h-[420px] sm:h-[460px] object-cover object-center group-hover:scale-104 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <p className="font-medium text-white/90 drop-shadow-sm">
                  "Delivering lasting architectural comfort, noise reduction, and modern elegance to families across Karachi."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
