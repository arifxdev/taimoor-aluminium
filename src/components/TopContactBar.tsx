import React from 'react';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const TopContactBar: React.FC = () => {
  return (
    <div className="bg-[#0b0e14] text-neutral-300 text-xs py-2 px-4 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
        {/* Left: Email */}
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span className="font-medium tracking-tight truncate max-w-[200px] sm:max-w-none">
              {BUSINESS_INFO.email}
            </span>
          </a>
        </div>

        {/* Right: Location, Hours, Phone */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-neutral-400 text-xs">
          <div className="hidden md:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span className="text-neutral-300">Gulshan-e-Hadeed Phase 2, Karachi</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span className="bg-neutral-800 text-neutral-200 border border-neutral-700/70 font-semibold px-2 py-0.5 rounded text-[11px] tracking-wide">
              Open 24 Hours
            </span>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="flex items-center gap-2 font-bold text-white hover:text-neutral-200 transition-colors bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-1 rounded-sm"
          >
            <Phone className="w-3.5 h-3.5 text-white shrink-0 animate-pulse" />
            <span>Call Us: {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
