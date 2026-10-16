import React, { useState } from 'react';
import { CartProvider, CheckoutDetails } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollection } from './components/FeaturedCollection';
import { DiscoverScentQuiz } from './components/DiscoverScentQuiz';
import { FragranceBoxBuilder } from './components/FragranceBoxBuilder';
import { ShopAllPerfumes } from './components/ShopAllPerfumes';
import { OurStory } from './components/OurStory';
import { EditorialMoodBanners } from './components/EditorialMoodBanners';
import { CleanStandardsBanner } from './components/CleanStandardsBanner';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ResearchDossierModal } from './components/ResearchDossierModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { Footer } from './components/Footer';
import { Fragrance } from './data/fragrances';

function ScentStoryApp() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedFragrance, setSelectedFragrance] = useState<Fragrance | null>(null);
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<CheckoutDetails | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenProduct = (fragrance: Fragrance) => {
    setSelectedFragrance(fragrance);
  };

  const handleOrderSuccess = (order: CheckoutDetails) => {
    setIsCheckoutOpen(false);
    setConfirmedOrder(order);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3EB] text-[#302520]">
      {/* Top Bar Navigation */}
      <Navbar
        onNavigate={scrollToSection}
        onOpenResearch={() => setIsResearchOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Experience Stream */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onDiscoverClick={() => scrollToSection('quiz')}
          onExploreClick={() => scrollToSection('collection')}
        />

        {/* 2. Featured Fragrance Collection (4 Signatures) */}
        <FeaturedCollection
          onQuickView={handleOpenProduct}
          onExploreAll={() => scrollToSection('shop')}
        />

        {/* 3. Curated Scent Mood Banners */}
        <EditorialMoodBanners onSelectMood={handleOpenProduct} />

        {/* 4. Discover Your Scent (Interactive Quiz) */}
        <DiscoverScentQuiz onViewProduct={handleOpenProduct} />

        {/* 5. Build Your Fragrance Box (A Little Box of You) */}
        <FragranceBoxBuilder />

        {/* 6. Shop All Perfumes (Catalog with Filters, Notes Search & Sorting) */}
        <ShopAllPerfumes onSelectProduct={handleOpenProduct} />

        {/* 7. Clean Standards & Formulation Constitution (What We Ban & Why) */}
        <CleanStandardsBanner />

        {/* 8. Our Story (Atelier, Philosophy & Limbic Memory Science) */}
        <OurStory />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenResearch={() => setIsResearchOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        fragrance={selectedFragrance}
        onClose={() => setSelectedFragrance(null)}
        onSelectRelated={(related) => setSelectedFragrance(related)}
      />

      {/* Research Dossier Modal (Section 13 Compliance: 20 Brand Audits) */}
      <ResearchDossierModal
        isOpen={isResearchOpen}
        onClose={() => setIsResearchOpen(false)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Checkout Demo Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Order Confirmation Screen */}
      <OrderConfirmationModal
        order={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
        onContinueShopping={() => {
          setConfirmedOrder(null);
          scrollToSection('collection');
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <ScentStoryApp />
    </CartProvider>
  );
}
