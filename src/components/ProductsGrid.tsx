import React, { useState } from 'react';
import { PRODUCTS } from '../data/content';
import { ProductItem } from '../types';
import { ArrowUpRight, Check, X, Shield, Layers } from 'lucide-react';

interface ProductsGridProps {
  onSelectProductForQuote: (productTitle: string) => void;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({ onSelectProductForQuote }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <section id="products" className="py-20 lg:py-28 bg-neutral-50/70 border-y border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching Reference Image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading">
              <span className="text-neutral-900">Choose Our Unique</span> <br />
              <span className="text-neutral-500">Products</span>
            </h2>
          </div>

          <div className="max-w-md text-neutral-600 text-sm leading-relaxed">
            <p>
              Taimoor Aluminium provides a stupendous line-up of superior quality architectural products tailored to the specific needs of our residential and commercial customers.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#193b48] hover:bg-[#122c36] rounded transition-all shadow-xs inline-flex items-center gap-2"
            >
              <span>More Info</span>
              <ArrowUpRight className="w-4 h-4 text-rose-300" />
            </a>
          </div>
        </div>

        {/* 8-Card Grid Layout matching Reference Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Product Thumbnail with hover zoom */}
              <div className="relative h-48 overflow-hidden bg-neutral-100">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors"></div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/90 backdrop-blur-xs text-neutral-900 text-[10px] font-bold px-2 py-1 rounded shadow-xs">
                    Quick View
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-[#d43764] transition-colors leading-snug">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                    {prod.description}
                  </p>
                </div>

                {/* Interactive Actions */}
                <div className="pt-2 border-t border-neutral-100 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setSelectedProduct(prod)}
                    className="text-xs font-semibold text-[#193b48] hover:text-[#d43764] transition-colors py-1 px-2 cursor-pointer"
                  >
                    View Specs
                  </button>
                  <span className="text-neutral-300">·</span>
                  <button
                    onClick={() => onSelectProductForQuote(prod.title)}
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 transition-colors py-1 px-2 cursor-pointer"
                  >
                    Get Estimate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200">
            {/* Modal Header */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent"></div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-neutral-900/60 hover:bg-neutral-900 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  {selectedProduct.category}
                </span>
                <h3 className="text-2xl font-black font-heading">
                  {selectedProduct.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-neutral-700 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-rose-600" />
                  Key Advantages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-800 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profiles & Technical Specifications */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#193b48]" />
                  Section Profiles & Technical Specs
                </h4>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100 text-xs text-neutral-700 space-y-1">
                  <div className="font-semibold text-neutral-900">
                    Available Profiles: {selectedProduct.profiles.join(', ')}
                  </div>
                  <div>{selectedProduct.specifications}</div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedProduct.title;
                    setSelectedProduct(null);
                    onSelectProductForQuote(title);
                  }}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#193b48] hover:bg-[#122c36] rounded transition-colors"
                >
                  Calculate Cost for this Item
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
