import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneClean}?text=Hello%20Taimoor%20Aluminium!%20I%20am%20inquiring%20about%20aluminium%20windows%20and%20glass%20work%20in%20Karachi.`;

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group"
    >
      {/* Tooltip on hover */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap pointer-events-none">
        Chat 24/7 on WhatsApp
        <span className="block text-[10px] text-emerald-400 font-mono">0333 1265727</span>
      </div>

      {/* Button with ripple animation */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Contact Taimoor Aluminium on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-60"></span>
        <MessageCircle className="w-7 h-7 relative z-10 fill-white" />
      </a>
    </aside>
  );
};
