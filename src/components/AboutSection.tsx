import React from 'react';
import { Shield, Wrench, Clock, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  const metrics = [
    { label: 'Professional', value: 99, gradient: 'from-[#d43764] to-[#f43f5e]' },
    { label: 'Project Complete', value: 100, gradient: 'from-[#792484] to-[#9333ea]' },
    { label: 'Like Our Project', value: 95, gradient: 'from-[#e11d48] to-[#fb7185]' },
    { label: 'Happy Customer', value: 98, gradient: 'from-[#1e3442] to-[#2563eb]' },
    { label: 'Quality Standards', value: 98, gradient: 'from-[#d43764] to-[#f43f5e]' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image of Precision Fabricator / Craftsman */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-neutral-100 group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Taimoor Aluminium Master Craftsman Fabricating Window Frames"
                className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent"></div>

              {/* Floating trust badge on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-dark text-white border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-600 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-tight">10+ Years Serving Karachi</h3>
                    <p className="text-xs text-neutral-300">Phase 2, Gulshan-e-Hadeed & Bin Qasim Town</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Industrial design accents */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose-100 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-100 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Right Column: Copy & Animated Competency Bars */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Kicker */}
            <div className="text-neutral-500 font-bold text-sm tracking-wider uppercase">
              About Us
            </div>

            {/* Main Headline - Charcoal & Grey combination */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight">
              <span className="text-neutral-900">Get Know More About Us And the Reason</span>{' '}
              <span className="text-neutral-500">Why You Should</span>
            </h2>

            {/* Paragraph Text */}
            <div className="space-y-4 text-neutral-600 text-base leading-relaxed">
              <p>
                <strong>Taimoor Aluminium</strong> is one of the leading manufacturers, suppliers, and installers of high-grade architectural aluminium products in Karachi. We offer distinguished aluminium and architectural glass systems tailored to residential, commercial, and industrial standards.
              </p>
              <p>
                Our products are specially engineered to be long-lasting and visually astounding. Designed with high resistance to coastal humidity and thermal fluctuations, these extraordinary qualities make them perfect for contemporary Karachi architectural demands. Prioritizing customer-oriented focus and round-the-clock reliability, we are committed to providing you with exactly what you need.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                <Shield className="w-4 h-4 text-rose-600 mb-1" />
                <div className="text-xs font-bold text-neutral-800">Rust-Resistant</div>
                <div className="text-[11px] text-neutral-500">Coastal anodized coating</div>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                <Clock className="w-4 h-4 text-[#1e3442] mb-1" />
                <div className="text-xs font-bold text-neutral-800">24/7 Service</div>
                <div className="text-[11px] text-neutral-500">Emergency support open</div>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100 col-span-2 sm:col-span-1">
                <Wrench className="w-4 h-4 text-rose-600 mb-1" />
                <div className="text-xs font-bold text-neutral-800">Master Fitters</div>
                <div className="text-[11px] text-neutral-500">Trained laser precision</div>
              </div>
            </div>

            {/* Progress Bars - Matching Reference Image */}
            <div className="space-y-3.5 pt-4">
              {metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-neutral-700">
                    <span>{m.label}</span>
                    <span className="font-mono">{m.value}%</span>
                  </div>
                  <div className="w-full h-5 bg-neutral-100 rounded-full overflow-hidden p-0.5 border border-neutral-200">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${m.gradient} flex items-center justify-end pr-2 transition-all duration-1000`}
                      style={{ width: `${m.value}%` }}
                    >
                      <span className="text-[9px] font-bold text-white tracking-widest">
                        {m.value}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Phone Assistance CTA */}
            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 px-4 py-2.5 rounded transition-colors"
              >
                <span>Need immediate contractor consultation? Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
