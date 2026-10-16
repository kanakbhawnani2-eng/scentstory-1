import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenResearch: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  onOpenResearch,
  activeSection
}) => {
  const { totalItemsCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F3EB]/95 backdrop-blur-md border-b border-[#302520]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark in display face */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-2xl sm:text-3xl font-serif-luxury tracking-widest text-[#302520] hover:text-[#542C3A] transition-colors whitespace-nowrap shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A16B]"
          aria-label="ScentStory Home"
        >
          SCENTSTORY
        </button>

        {/* Zone 2: 4-5 single-line clean nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#302520]/80">
          <button
            onClick={() => handleNavClick('collection')}
            className={`hover:text-[#542C3A] transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
              activeSection === 'collection' ? 'border-[#542C3A] text-[#542C3A]' : 'border-transparent'
            }`}
          >
            Collection
          </button>
          <button
            onClick={() => handleNavClick('quiz')}
            className={`hover:text-[#542C3A] transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
              activeSection === 'quiz' ? 'border-[#542C3A] text-[#542C3A]' : 'border-transparent'
            }`}
          >
            Discover Your Scent
          </button>
          <button
            onClick={() => handleNavClick('discovery-box')}
            className={`hover:text-[#542C3A] transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
              activeSection === 'discovery-box' ? 'border-[#542C3A] text-[#542C3A]' : 'border-transparent'
            }`}
          >
            Discovery Box
          </button>
          <button
            onClick={() => handleNavClick('shop')}
            className={`hover:text-[#542C3A] transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
              activeSection === 'shop' ? 'border-[#542C3A] text-[#542C3A]' : 'border-transparent'
            }`}
          >
            All Perfumes
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className={`hover:text-[#542C3A] transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
              activeSection === 'story' ? 'border-[#542C3A] text-[#542C3A]' : 'border-transparent'
            }`}
          >
            Our Story
          </button>
          <button
            onClick={() => handleNavClick('clean-standards')}
            className={`hover:text-[#542C3A] transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
              activeSection === 'clean-standards' ? 'border-[#542C3A] text-[#542C3A]' : 'border-transparent'
            }`}
          >
            Clean Standards
          </button>
          <button
            onClick={onOpenResearch}
            className="hover:text-[#542C3A] transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 border-transparent text-[#A79889] hover:border-[#A79889]"
            title="View Brand & Design Research Dossier"
          >
            Research (20 Brands)
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={openCart}
            aria-label="Shopping bag"
            className="relative p-2.5 rounded-full hover:bg-[#E8D8C5]/40 text-[#302520] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A16B]"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#542C3A] text-[#F8F3EB] text-[11px] font-semibold w-5 h-5 rounded-full flex items-center justify-center tabular-nums">
                {totalItemsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#302520] hover:text-[#542C3A] focus-visible:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F3EB] border-b border-[#302520]/10 px-6 py-5 flex flex-col gap-4 text-base font-medium">
          <button
            onClick={() => handleNavClick('collection')}
            className="text-left py-2 text-[#302520] hover:text-[#542C3A] border-b border-[#E8D8C5]/50"
          >
            Signature Collection
          </button>
          <button
            onClick={() => handleNavClick('quiz')}
            className="text-left py-2 text-[#302520] hover:text-[#542C3A] border-b border-[#E8D8C5]/50 flex items-center justify-between"
          >
            <span>Discover Your Scent (Quiz)</span>
            <Sparkles className="w-4 h-4 text-[#C5A16B]" />
          </button>
          <button
            onClick={() => handleNavClick('discovery-box')}
            className="text-left py-2 text-[#302520] hover:text-[#542C3A] border-b border-[#E8D8C5]/50"
          >
            Build Fragrance Box (₹999)
          </button>
          <button
            onClick={() => handleNavClick('shop')}
            className="text-left py-2 text-[#302520] hover:text-[#542C3A] border-b border-[#E8D8C5]/50"
          >
            Shop All Perfumes
          </button>
          <button
            onClick={() => handleNavClick('clean-standards')}
            className="text-left py-2 text-[#302520] hover:text-[#542C3A] border-b border-[#E8D8C5]/50"
          >
            Clean Standards (What We Ban)
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className="text-left py-2 text-[#302520] hover:text-[#542C3A] border-b border-[#E8D8C5]/50"
          >
            Our Story & Craft
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResearch();
            }}
            className="text-left py-2 text-[#A79889] hover:text-[#302520]"
          >
            Brand Research Dossier (20 Brands)
          </button>
        </div>
      )}
    </header>
  );
};
