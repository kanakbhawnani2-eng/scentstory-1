import React, { useState } from 'react';
import { X, Search, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { RESEARCH_DOSSIER, BrandResearchItem } from '../data/researchDossier';

interface ResearchDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchDossierModal: React.FC<ResearchDossierModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  if (!isOpen) return null;

  const categories = ['All', 'Niche Artisanal', 'Luxury Heritage', 'Discovery & Modern'];

  const filtered = RESEARCH_DOSSIER.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.lessonsForScentStory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeCategory === 'All') return matchesSearch;
    if (activeCategory === 'Niche Artisanal') {
      return matchesSearch && (item.category.includes('Niche') || item.category.includes('Artisanal') || item.category.includes('Avant-Garde'));
    }
    if (activeCategory === 'Luxury Heritage') {
      return matchesSearch && (item.category.includes('Heritage') || item.category.includes('Haute') || item.category.includes('Aristocratic'));
    }
    if (activeCategory === 'Discovery & Modern') {
      return matchesSearch && (item.category.includes('Modern') || item.category.includes('Memory') || item.category.includes('Discovery') || item.category.includes('Clean') || item.category.includes('K-Beauty'));
    }
    return matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#302520]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#F8F3EB] border border-[#302520]/20 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#542C3A] text-[#F8F3EB] flex items-start justify-between border-b border-[#C5A16B]/30">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A16B] font-semibold mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Section 13 Compliance Dossier</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#F8F3EB]">
              Brand & Design Benchmark Research (20 Curated Audits)
            </h2>
            <p className="text-xs sm:text-sm text-[#F8F3EB]/80 mt-1 max-w-2xl font-light">
              Comprehensive analysis of 20 world-class fragrance houses, luxury e-commerce platforms, and discovery ecosystems informing ScentStory’s visual identity and user experience.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#F8F3EB]/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus-visible:outline-none"
            aria-label="Close research dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 bg-[#E8D8C5]/30 border-b border-[#302520]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#542C3A] text-[#F8F3EB]'
                    : 'bg-white text-[#302520] hover:bg-[#E8D8C5] border border-[#302520]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative sm:w-72">
            <Search className="w-4 h-4 text-[#A79889] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 20 brands or design lessons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-[#302520]/20 text-xs text-[#302520] focus:outline-none focus:border-[#C5A16B]"
            />
          </div>
        </div>

        {/* Scrollable Dossier Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="text-xs text-[#A79889] mb-2">
            Showing <span className="font-semibold text-[#302520] tabular-nums">{filtered.length}</span> documented brand audits
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white border border-[#302520]/15 p-6 shadow-xs hover:border-[#C5A16B] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-[#A79889] text-[11px]">
                      REF-{String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#542C3A] bg-[#542C3A]/10 px-2 py-0.5">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif-luxury font-medium text-[#302520] mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#302520]/80 leading-relaxed mb-4">
                    <strong className="text-[#302520]">Audience & Purpose:</strong> {item.purposeAndAudience}
                  </p>

                  <div className="space-y-2 text-xs text-[#302520]/75 bg-[#F8F3EB] p-3 border border-[#302520]/10 mb-4">
                    <div>
                      <span className="font-semibold text-[#302520]">Palette:</span>{' '}
                      {item.colorPalette.join(' · ')}
                    </div>
                    <div>
                      <span className="font-semibold text-[#302520]">Typography:</span>{' '}
                      {item.typography}
                    </div>
                    <div>
                      <span className="font-semibold text-[#302520]">Photography:</span>{' '}
                      {item.productPhotography}
                    </div>
                    <div>
                      <span className="font-semibold text-[#302520]">Layout & Nav:</span>{' '}
                      {item.layoutAndNav}
                    </div>
                    <div>
                      <span className="font-semibold text-[#302520]">Interaction:</span>{' '}
                      {item.animationAndInteraction}
                    </div>
                  </div>

                  {/* Strengths & Weaknesses */}
                  <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                    <div className="bg-emerald-50/70 p-2.5 border border-emerald-200/50">
                      <span className="font-semibold text-emerald-900 block mb-1">Key Strengths:</span>
                      <ul className="list-disc list-inside space-y-0.5 text-emerald-800 text-[11px]">
                        {item.strengths.map((s, sIdx) => (
                          <li key={sIdx}>{s}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-amber-50/70 p-2.5 border border-amber-200/50">
                      <span className="font-semibold text-amber-900 block mb-1">Observed Flaws:</span>
                      <ul className="list-disc list-inside space-y-0.5 text-amber-800 text-[11px]">
                        {item.weaknesses.map((w, wIdx) => (
                          <li key={wIdx}>{w}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Direct takeaway for ScentStory */}
                <div className="pt-3 border-t border-[#302520]/10 text-xs bg-[#E8D8C5]/30 p-3">
                  <div className="flex items-center gap-1.5 text-[#542C3A] font-semibold uppercase tracking-wider text-[11px] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A16B]" />
                    <span>Applied Lesson for ScentStory:</span>
                  </div>
                  <p className="text-[#302520] italic font-serif-luxury text-sm">
                    “{item.lessonsForScentStory}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F8F3EB] border-t border-[#302520]/15 flex items-center justify-between text-xs text-[#302520]/70">
          <span>ScentStory Architectural Research Archive</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#542C3A] text-[#F8F3EB] text-xs font-medium uppercase tracking-wider hover:bg-[#302520] transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
