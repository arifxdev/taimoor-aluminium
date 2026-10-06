/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopContactBar } from './components/TopContactBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsGrid } from './components/ProductsGrid';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { CtaBanner } from './components/CtaBanner';
import { BlogsSection } from './components/BlogsSection';
import { Footer } from './components/Footer';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { ContactModal } from './components/ContactModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('Aluminium Windows');

  const handleOpenQuoteWithProduct = (productTitle: string) => {
    setSelectedProductForQuote(productTitle);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-rose-600 selection:text-white">
      {/* 1. Top Utility Contact Bar (maroon/plum strip matching reference) */}
      <TopContactBar />

      {/* 2. Main Navigation Bar with Architectural Logo */}
      <Navbar
        onOpenQuote={() => setIsQuoteModalOpen(true)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Main Content Sections faithfully recreating reference layout */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onOpenContact={() => setIsContactModalOpen(true)}
          onOpenQuote={() => setIsQuoteModalOpen(true)}
        />

        {/* 4. About Us Section with Competency Bars & Craftsman Photo */}
        <AboutSection />

        {/* 5. Choose Our Unique Products 8-Grid Section */}
        <ProductsGrid
          onSelectProductForQuote={handleOpenQuoteWithProduct}
        />

        {/* 6. Our Services Section (Pre-Order, Installation, After-Sales 24/7) */}
        <ServicesSection
          onOpenContact={() => setIsContactModalOpen(true)}
        />

        {/* 7. Testimonial / Customer Reviews Section */}
        <ReviewsSection />

        {/* 8. Portfolio / Latest Projects Section (1 Large + 2 Stacked) */}
        <ProjectsPortfolio />

        {/* 9. Want to know our work? CTA Banner */}
        <CtaBanner
          onOpenQuote={() => setIsQuoteModalOpen(true)}
          onOpenContact={() => setIsContactModalOpen(true)}
        />

        {/* 10. Latest Blogs / Insights Section */}
        <BlogsSection />
      </main>

      {/* 11. Footer with 4 Columns & Copyright Strip */}
      <Footer
        onOpenQuote={() => setIsQuoteModalOpen(true)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Interactive Modals */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultProduct={selectedProductForQuote}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* 12. Floating WhatsApp Button matching Reference */}
      <FloatingWhatsApp />
    </div>
  );
}
