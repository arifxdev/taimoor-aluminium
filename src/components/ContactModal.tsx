import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: 'Gulshan-e-Hadeed Phase 2',
    service: 'Aluminium Windows & Sliding Doors',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-neutral-200">
        
        {/* Header */}
        <div className="p-6 bg-[#193b48] text-white relative">
          <h3 className="text-xl font-bold font-heading">
            Contact Taimoor Aluminium
          </h3>
          <p className="text-xs text-neutral-300 mt-1">
            Fast response from our Karachi engineering team (Open 24 Hours)
          </p>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-neutral-300 hover:text-white p-1 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 font-heading">
                Inquiry Received Successfully!
              </h4>
              <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Our Karachi contractor will contact you at <strong>{formData.phone || BUSINESS_INFO.phoneDisplay}</strong> shortly to schedule your free laser measurement.
              </p>
              <div className="pt-4 flex flex-col gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full py-2.5 text-xs font-bold text-white bg-[#193b48] rounded hover:bg-[#122c36] inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-rose-300" />
                  <span>Call Now for Immediate Dispatch</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="text-xs text-neutral-500 hover:text-neutral-900 py-1"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mehmood"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#193b48] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0333 1265727"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#193b48] outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Karachi Location / Area
                  </label>
                  <input
                    type="text"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full text-xs p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#193b48] outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full text-xs p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#193b48] outline-hidden"
                  >
                    <option value="Aluminium Windows & Sliding Doors">Aluminium Windows & Doors</option>
                    <option value="Glass Facade System">Glass Facade & Curtain Wall</option>
                    <option value="Louvers & Sunshades">Architectural Louvers</option>
                    <option value="Frameless Shower Enclosures">Shower Bath Enclosure</option>
                    <option value="Balcony Glass Railings">Balcony Glass Railings</option>
                    <option value="Emergency Repair & Service">Emergency Repair (24/7)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Project Notes or Window Dimensions
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirements (e.g., 4 sliding windows in 1.6mm champagne section, double glazed)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full text-xs p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#193b48] outline-hidden"
                ></textarea>
              </div>

              {/* Direct Info */}
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-[11px] text-neutral-600 space-y-1">
                <div className="flex items-center gap-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>{BUSINESS_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-emerald-700">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Workshop & Hotline: Open 24 Hours</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#193b48] hover:bg-[#122c36] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Free Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
