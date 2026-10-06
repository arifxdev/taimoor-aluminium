import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface CtaBannerProps {
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuote, onOpenContact }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-[#ebdce0] rounded-xl p-8 sm:p-10 border border-[#dfc3cb] shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand Logo Lockup matching Reference */}
        <div className="flex flex-col items-center sm:items-start shrink-0">
          <div className="flex items-end gap-1 h-12 px-1 mb-1">
            <span className="w-2 h-8 bg-[#8c254b] rounded-t-xs"></span>
            <span className="w-3 h-12 bg-[#1e3442] rounded-t-xs"></span>
            <span className="w-2.5 h-10 bg-[#b8335f] rounded-t-xs"></span>
            <span className="w-3 h-11 bg-[#334e5c] rounded-t-xs"></span>
            <span className="w-2 h-7 bg-[#d44872] rounded-t-xs"></span>
          </div>
          <span className="text-xs font-black tracking-widest uppercase text-neutral-800 font-heading">
            TAIMOOR ALUMINIUM
          </span>
        </div>

        {/* Center: Headline & Copy */}
        <div className="flex-1 text-center md:text-left space-y-2 max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-black font-heading">
            <span className="text-neutral-900">Want to know</span> <span className="text-neutral-600">our work ?</span>
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            We help you give your space the desired outlook with a versatile array of our premium products and services and bring your architectural vision to life.
          </p>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#193b48] hover:bg-[#122c36] rounded transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 text-rose-300" />
          </button>
          
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="px-4 py-3 text-xs font-bold text-neutral-900 bg-white/80 hover:bg-white rounded transition-colors inline-flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-rose-600" />
            <span>0333 1265727</span>
          </a>
        </div>

      </div>
    </section>
  );
};
