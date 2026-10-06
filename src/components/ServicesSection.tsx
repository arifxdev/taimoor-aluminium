import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/content';
import { Phone, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching Reference Image */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
            Taimoor Aluminium
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading">
            <span className="text-neutral-900">Our</span> <span className="text-neutral-500">Services</span>
          </h2>
          <div className="w-12 h-1 bg-neutral-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Prominent Service Cards matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className="bg-neutral-50/60 rounded-2xl overflow-hidden border border-neutral-200/70 hover:border-neutral-300 transition-all duration-300 hover:shadow-xl flex flex-col group"
            >
              {/* Photo Header */}
              <div className="h-52 overflow-hidden bg-neutral-200 relative">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-neutral-900/15"></div>
                <div className="absolute top-3 left-3 bg-[#193b48]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded">
                  Phase 0{idx + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-[#d43764] transition-colors font-heading">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 text-justify">
                    {srv.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6 text-left">
                    {srv.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-neutral-200/60">
                  {srv.id === 'after-sales' ? (
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#d43764] hover:bg-[#b82a52] rounded transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{srv.actionText}</span>
                    </a>
                  ) : (
                    <button
                      onClick={onOpenContact}
                      className="w-full py-2.5 px-4 text-xs font-bold text-[#193b48] bg-white hover:bg-[#193b48] hover:text-white border border-neutral-300 hover:border-[#193b48] rounded transition-all cursor-pointer shadow-2xs"
                    >
                      {srv.actionText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
