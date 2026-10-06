import React from 'react';
import { Phone, Star, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onOpenContact: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenQuote }) => {
  return (
    <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden bg-neutral-900 text-white">
      {/* Background Architectural Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85"
          alt="Modern Architectural Aluminium & Glass Building"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient overlay to ensure WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/70 to-neutral-950/40"></div>
        {/* Subtle grid pattern overlay for industrial architectural feel */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Welcome Kicker */}
          <div className="inline-flex items-center gap-2 text-neutral-400 font-semibold text-sm tracking-wide">
            <span className="w-6 h-[2px] bg-neutral-400 inline-block"></span>
            <span>Welcome!</span>
          </div>

          {/* Headline - White and Grey combination */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-heading">
            <span className="text-white">We Are Providing</span> <br />
            <span className="text-white">Best Services</span> <br />
            <span className="text-neutral-400">Aluminium & Glass</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-neutral-200/90 leading-relaxed font-normal max-w-xl">
            We offer a diversified range of premium products and services to provide you with customized and reliable solutions for your architectural needs in Karachi.
          </p>

          {/* Actions & Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-7 py-3 text-sm font-bold text-white bg-[#193b48] hover:bg-[#122c36] border border-cyan-900/40 rounded transition-all shadow-lg hover:shadow-cyan-950/40 inline-flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-rose-300" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-6 py-3 text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-rose-400" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-5 py-3 text-sm font-semibold text-neutral-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              Get Free Instant Quote
            </button>
          </div>

          {/* Real Trust Badges Bar */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-neutral-300">
            {/* Google Rating 5.0 */}
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 Star</span>
              <span className="text-neutral-400">Google Reviews</span>
            </div>

            {/* 24 Hours Availability */}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-400" />
              <span className="text-neutral-200">Open 24 Hours in Karachi</span>
            </div>

            {/* Guaranteed Durability */}
            <div className="hidden md:flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-neutral-200">Architectural Grade 6063-T6</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
