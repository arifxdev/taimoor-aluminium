import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown, Calculator } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#111622]/95 backdrop-blur-md border-b border-neutral-800 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo Zone - White and Pink Logo per user request */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Architectural Profile Extrusion bars with signature pink & dark slate */}
            <div className="flex items-end gap-1 h-9 px-1">
              <span className="w-1.5 h-6 bg-[#d43764] rounded-t-xs transition-all group-hover:h-7"></span>
              <span className="w-2.5 h-9 bg-neutral-200 rounded-t-xs"></span>
              <span className="w-2 h-7 bg-[#f43f5e] rounded-t-xs transition-all group-hover:h-8"></span>
              <span className="w-2.5 h-8 bg-neutral-400 rounded-t-xs"></span>
              <span className="w-1.5 h-5 bg-[#fb7185] rounded-t-xs"></span>
            </div>
            
            {/* White and Pink brand text combination */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-heading leading-tight flex items-center gap-1.5">
                TAIMOOR
                <span className="text-[#f43f5e] font-bold tracking-wide text-lg sm:text-xl">
                  ALUMINIUM
                </span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                Karachi · Gulshan-e-Hadeed
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - White & Grey Classic Combination */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            <a 
              href="#about" 
              className="text-neutral-400 hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-neutral-500"
            >
              About Us
            </a>

            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <a 
                href="#products" 
                className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors py-2 group cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:rotate-180 transition-transform duration-200" />
              </a>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-[#141a24] rounded-lg shadow-2xl border border-neutral-700/80 py-2.5 animate-fadeIn">
                  <a 
                    href="#products" 
                    className="block px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/80 transition-colors"
                  >
                    Aluminium Windows (Sliding & Casement)
                  </a>
                  <a 
                    href="#products" 
                    className="block px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/80 transition-colors"
                  >
                    Aluminium Doors & Bi-Fold Systems
                  </a>
                  <a 
                    href="#products" 
                    className="block px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/80 transition-colors"
                  >
                    Glass Facade & Curtain Walling
                  </a>
                  <a 
                    href="#products" 
                    className="block px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/80 transition-colors"
                  >
                    Architectural Louvers & Sunshades
                  </a>
                  <a 
                    href="#products" 
                    className="block px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/80 transition-colors"
                  >
                    Frameless Shower Enclosures
                  </a>
                  <a 
                    href="#products" 
                    className="block px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/80 transition-colors"
                  >
                    Balcony Glass & Aluminium Railings
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#services" 
              className="text-neutral-400 hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-neutral-500"
            >
              Services
            </a>
            <a 
              href="#products" 
              className="text-neutral-400 hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-neutral-500"
            >
              Architectural Glass
            </a>
            <a 
              href="#projects" 
              className="text-neutral-400 hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-neutral-500"
            >
              Projects
            </a>
            <a 
              href="#reviews" 
              className="text-neutral-400 hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-neutral-500"
            >
              Reviews
            </a>
            <a 
              href="#blogs" 
              className="text-neutral-400 hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-neutral-500"
            >
              Guides
            </a>
          </nav>

          {/* Action Zone: White & Grey Styling */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/80 rounded transition-colors whitespace-nowrap cursor-pointer shadow-xs"
              title="Estimate approximate cost"
            >
              <Calculator className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
              <span>Cost Calculator</span>
            </button>

            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-900 bg-white hover:bg-neutral-200 rounded transition-all shadow-sm hover:shadow-md whitespace-nowrap cursor-pointer active:scale-95"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="p-2 text-neutral-300 hover:text-white bg-neutral-800 rounded sm:hidden"
              aria-label="Calculator"
            >
              <Calculator className="w-4 h-4 text-neutral-300" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111622] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded"
          >
            About Us
          </a>
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded"
          >
            Products
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded"
          >
            Projects
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded"
          >
            Client Reviews
          </a>
          <a
            href="#blogs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded"
          >
            Articles & Guides
          </a>

          <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-neutral-300 hover:text-white bg-neutral-800/80 border border-neutral-700 rounded"
            >
              <Calculator className="w-4 h-4 text-neutral-300" />
              <span>Instant Cost Calculator</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-neutral-900 bg-white hover:bg-neutral-200 rounded"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
