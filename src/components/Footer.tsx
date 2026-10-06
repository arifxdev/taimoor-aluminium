import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onOpenContact }) => {
  return (
    <footer id="contact" className="bg-[#f5f5f7] border-t border-neutral-300/70 text-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Logo & Company Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-end gap-1 h-9 px-1">
                <span className="w-1.5 h-6 bg-[#8c254b] rounded-t-xs"></span>
                <span className="w-2.5 h-9 bg-[#1e3442] rounded-t-xs"></span>
                <span className="w-2 h-7 bg-[#b8335f] rounded-t-xs"></span>
                <span className="w-2.5 h-8 bg-[#334e5c] rounded-t-xs"></span>
                <span className="w-1.5 h-5 bg-[#d44872] rounded-t-xs"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-neutral-900 font-heading">
                  TAIMOOR
                  <span className="text-[#8c254b] font-light ml-1 text-lg">ALUMINIUM</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">
                  Precision Metal Systems · Karachi
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
              We offer a diversified range of premium products and services to provide you with customized and reliable architectural solutions in Karachi, specializing in heavy-duty aluminum windows, sliding glass systems, and emergency repairs.
            </p>

            {/* Social Media Links matching reference */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-2xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-pink-600 hover:border-pink-600 transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=Hello%20Taimoor%20Aluminium,%20I%20need%20a%20quotation`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-emerald-600 hover:border-emerald-600 transition-colors shadow-2xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-neutral-900 font-heading">
              Quick links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenContact}
                  className="text-neutral-600 hover:text-[#8c254b] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#about" className="text-neutral-600 hover:text-[#8c254b] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-neutral-600 hover:text-[#8c254b] transition-colors">
                  Blog & Articles
                </a>
              </li>
              <li>
                <a href="#projects" className="text-neutral-600 hover:text-[#8c254b] transition-colors">
                  Projects Portfolio
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="text-neutral-600 hover:text-[#8c254b] transition-colors cursor-pointer"
                >
                  Cost Estimator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-neutral-900 font-heading">
              Services & Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="text-neutral-600 hover:text-[#8c254b] transition-colors">
                  Aluminium Windows (1.2mm - 2.0mm)
                </a>
              </li>
              <li>
                <a href="#products" className="text-neutral-600 hover:text-[#8c254b] transition-colors">
                  Aluminium Doors & Bi-Fold
                </a>
              </li>
              <li>
                <a href="#products" className="text-neutral-600 hover:text-[#8c254b] transition-colors">
                  Glass Facade System
                </a>
              </li>
              <li>
                <a href="#products" className="text-neutral-600 hover:text-[#8c254b] transition-colors">
                  Architectural Louvers
                </a>
              </li>
              <li>
                <a href="#products" className="text-neutral-600 hover:text-[#8c254b] transition-colors">
                  Frameless Shower Bath Enclosures
                </a>
              </li>
              <li>
                <a href="#products" className="text-neutral-600 hover:text-[#8c254b] transition-colors">
                  Balcony & Staircase Glass Railing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us matching reference (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-neutral-900 font-heading">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs text-neutral-600">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#8c254b] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="font-bold text-neutral-900 hover:text-[#8c254b] transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-neutral-500">24/7 Direct line</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#8c254b] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-[#8c254b] transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8c254b] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}
                </span>
              </li>

              <li className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                  {BUSINESS_INFO.hours}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar matching Reference */}
        <div className="mt-12 pt-6 border-t border-neutral-300 text-center text-xs text-neutral-500">
          <p>
            Copyright © All Right Reserved 2026 - Taimoor Aluminium (Gulshan-e-Hadeed Phase 2, Karachi)
          </p>
        </div>

      </div>
    </footer>
  );
};
