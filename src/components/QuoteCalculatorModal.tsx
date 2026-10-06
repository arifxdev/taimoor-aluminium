import React, { useState } from 'react';
import { X, Calculator, MessageSquare, Check, Phone, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = 'Aluminium Windows',
}) => {
  const [productType, setProductType] = useState(defaultProduct);
  const [gauge, setGauge] = useState<'1.2mm' | '1.6mm' | '2.0mm' | 'thermal-break'>('1.6mm');
  const [glassType, setGlassType] = useState<'5mm-clear' | '8mm-tinted' | '12mm-tempered' | 'double-glazed'>('double-glazed');
  const [widthFeet, setWidthFeet] = useState<number>(5);
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [quantity, setQuantity] = useState<number>(1);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Real Karachi Market Pricing Estimates per Sq Ft in PKR
  const baseRates: Record<string, number> = {
    '1.2mm': 550,
    '1.6mm': 780,
    '2.0mm': 1150,
    'thermal-break': 1750,
  };

  const glassRates: Record<string, number> = {
    '5mm-clear': 180,
    '8mm-tinted': 290,
    '12mm-tempered': 480,
    'double-glazed': 620,
  };

  const areaSqFt = widthFeet * heightFeet;
  const ratePerSqFt = (baseRates[gauge] || 780) + (glassRates[glassType] || 620);
  const totalEstimatedCost = Math.round(areaSqFt * ratePerSqFt * quantity);

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Taimoor Aluminium! I am interested in an estimate for Karachi:\n` +
      `- Product: ${productType}\n` +
      `- Profile: ${gauge}\n` +
      `- Glass: ${glassType}\n` +
      `- Dimensions: ${widthFeet} ft x ${heightFeet} ft (${areaSqFt} sq.ft each)\n` +
      `- Qty: ${quantity} units\n` +
      `- Approx Estimate: PKR ${totalEstimatedCost.toLocaleString()}\n` +
      `Please confirm site survey availability in Karachi.`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-neutral-200">
        
        {/* Header */}
        <div className="p-6 bg-[#193b48] text-white relative">
          <div className="flex items-center gap-2.5">
            <Calculator className="w-5 h-5 text-rose-400" />
            <h3 className="text-xl font-bold font-heading">
              Instant Architectural Cost Estimator
            </h3>
          </div>
          <p className="text-xs text-neutral-300 mt-1">
            Calculated using standard Karachi fabrication rates (Gulshan-e-Hadeed Phase 2)
          </p>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-neutral-300 hover:text-white p-1 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-neutral-800">
          
          {/* Select Product */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
              Select Product Category
            </label>
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="w-full text-xs font-semibold p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#193b48] outline-hidden"
            >
              <option value="Aluminium Windows">Aluminium Windows (Sliding & Casement)</option>
              <option value="Aluminium Doors">Aluminium Heavy Sliding & Bi-Fold Doors</option>
              <option value="Glass Facade System">Structural Curtain Wall & Facade Glazing</option>
              <option value="Louvers">Architectural Louvers & Sunshades</option>
              <option value="Frameless Shower Enclosures">Frameless Shower Bath Enclosures</option>
              <option value="Office Partitions">Office Partitions & Acoustic Cubicles</option>
              <option value="Balcony Glass Railing">Balcony Glass & Aluminium Railings</option>
              <option value="Skylight Dome">Skylight Window & Roof Dome Work</option>
            </select>
          </div>

          {/* Aluminium Gauge */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
              Aluminium Profile Gauge
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {[
                { id: '1.2mm', label: '1.2mm Economy' },
                { id: '1.6mm', label: '1.6mm Standard' },
                { id: '2.0mm', label: '2.0mm Heavy' },
                { id: 'thermal-break', label: 'Thermal Break' },
              ].map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setGauge(g.id as any)}
                  className={`p-2 rounded-lg border text-center font-medium transition-all cursor-pointer ${
                    gauge === g.id
                      ? 'bg-[#193b48] text-white border-[#193b48]'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Glass Specification */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
              Glass Glazing Option
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: '5mm-clear', label: '5mm Clear Sheet Glass' },
                { id: '8mm-tinted', label: '8mm Tinted / Solar Bronze' },
                { id: '12mm-tempered', label: '12mm Toughened Safety Glass' },
                { id: 'double-glazed', label: '24mm Double Glazed Acoustic' },
              ].map((gl) => (
                <button
                  key={gl.id}
                  type="button"
                  onClick={() => setGlassType(gl.id as any)}
                  className={`p-2 rounded-lg border text-left font-medium transition-all cursor-pointer ${
                    glassType === gl.id
                      ? 'bg-rose-50 text-rose-900 border-rose-300 font-bold'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {gl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dimensions */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-600 mb-1">
                Width (Feet)
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={widthFeet}
                onChange={(e) => setWidthFeet(Math.max(1, Number(e.target.value)))}
                className="w-full text-xs p-2 bg-neutral-50 border border-neutral-300 rounded-lg text-center font-mono font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-600 mb-1">
                Height (Feet)
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={heightFeet}
                onChange={(e) => setHeightFeet(Math.max(1, Number(e.target.value)))}
                className="w-full text-xs p-2 bg-neutral-50 border border-neutral-300 rounded-lg text-center font-mono font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-600 mb-1">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                max="200"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="w-full text-xs p-2 bg-neutral-50 border border-neutral-300 rounded-lg text-center font-mono font-bold"
              />
            </div>
          </div>

          {/* Cost Result Box */}
          <div className="bg-gradient-to-r from-neutral-900 to-[#193b48] text-white p-4 rounded-xl flex items-center justify-between shadow-md">
            <div>
              <span className="text-[11px] text-neutral-300 uppercase tracking-wider block">
                Estimated Approximate Cost
              </span>
              <div className="text-2xl font-black font-mono text-rose-300">
                PKR {totalEstimatedCost.toLocaleString()}
              </div>
              <span className="text-[10px] text-neutral-400">
                Total Area: {areaSqFt * quantity} sq.ft · (~PKR {ratePerSqFt}/sq.ft)
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
                Free Site Survey Included
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-[11px] text-neutral-500 bg-neutral-50 p-2.5 rounded border border-neutral-200">
            <Info className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
            <span>
              Final quote subject to exact laser site measurement and hardware selection (Chawla Aluminium / Imported German locks).
            </span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Specs to WhatsApp (0333 1265727)</span>
            </a>

            <div className="flex items-center justify-between text-xs pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="text-neutral-700 hover:text-[#193b48] font-bold flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-rose-600" />
                <span>Call Directly: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="text-neutral-500 hover:text-neutral-800 font-semibold"
              >
                Close
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
