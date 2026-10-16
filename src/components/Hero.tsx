import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onDiscoverClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick, onExploreClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#F8F3EB] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#302520]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A16B] font-semibold mb-4">
              Artisanal Olfactory Discovery
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-medium text-[#302520] tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
              SOME MEMORIES NEVER FADE. SOME SCENTS NEVER LEAVE.
            </h1>

            <p className="text-base sm:text-lg text-[#302520]/80 font-normal leading-relaxed max-w-xl mb-8">
              Discover fragrances inspired by the moments, moods, and memories that make you who you are. Designed to feel like personal expression rather than a generic bottle on a shelf.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onDiscoverClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#542C3A] text-[#F8F3EB] rounded-none hover:bg-[#302520] transition-colors font-medium text-sm tracking-wide shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A16B]"
              >
                <span>Discover My Scent</span>
                <Sparkles className="w-4 h-4 text-[#C5A16B]" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#302520]/30 text-[#302520] hover:border-[#302520] hover:bg-[#E8D8C5]/30 transition-colors font-medium text-sm tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A16B]"
              >
                <span>Explore the Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Sub-kicker trust attributes (unboxed typography, no badges) */}
            <div className="mt-10 pt-6 border-t border-[#302520]/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#302520]/70">
              <span>Bespoke Olfactory Profiles</span>
              <span aria-hidden="true">·</span>
              <span>100% Cruelty-Free Botanical Extracts</span>
              <span aria-hidden="true">·</span>
              <span>Complimentary 2ml Vial with Every Order</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] shadow-xl border border-[#302520]/10 bg-[#E8D8C5]">
              <img
                src="/src/assets/images/hero_scentstory_perfume_1792142411558.jpg"
                alt="ScentStory handcrafted perfume bottle resting on warm stone bathed in golden afternoon sunlight"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#302520]/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Discrete editorial caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#F8F3EB]/95 backdrop-blur-sm p-4 border border-[#302520]/10 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#C5A16B] font-semibold">
                    Signature Architecture
                  </div>
                  <div className="text-sm font-serif-luxury font-semibold text-[#302520]">
                    Pure Extract Parfum · Hand-Poured Flacon
                  </div>
                </div>
                <div className="text-xs text-[#302520]/60 italic font-serif-luxury hidden sm:block">
                  “Your fragrance should feel like your story.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
