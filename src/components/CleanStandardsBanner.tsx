import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, Sparkles, Check, ChevronDown, ChevronUp, Leaf } from 'lucide-react';
import { BANNED_INGREDIENTS, FORMULATION_PILLARS, BannedIngredient } from '../data/cleanStandards';

export const CleanStandardsBanner: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('phthalates');
  const [filterMode, setFilterMode] = useState<'banned' | 'pillars'>('banned');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="clean-standards" className="py-20 lg:py-24 bg-[#E8D8C5]/30 border-b border-[#302520]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#542C3A] font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-[#C5A16B]" />
            <span>The ScentStory Clean Formulation Constitution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#302520] tracking-tight mb-4">
            WHAT WE BAN & WHY.
          </h2>

          <p className="text-sm sm:text-base text-[#302520]/75 leading-relaxed">
            True luxury is transparent. While mass-market perfumes rely on synthetic fixatives and petrochemical dyes, every ScentStory formulation adheres to an uncompromising blacklist of harmful, sensitizing, and bio-accumulative chemicals.
          </p>

          {/* Toggle buttons between Banned List and Clean Pillars */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#F8F3EB] border border-[#302520]/15">
            <button
              onClick={() => setFilterMode('banned')}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
                filterMode === 'banned'
                  ? 'bg-[#542C3A] text-[#F8F3EB] shadow-xs'
                  : 'text-[#302520] hover:text-[#542C3A]'
              }`}
            >
              The Banned Chemicals ({BANNED_INGREDIENTS.length})
            </button>
            <button
              onClick={() => setFilterMode('pillars')}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
                filterMode === 'pillars'
                  ? 'bg-[#542C3A] text-[#F8F3EB] shadow-xs'
                  : 'text-[#302520] hover:text-[#542C3A]'
              }`}
            >
              Our Clean Certifications
            </button>
          </div>
        </div>

        {filterMode === 'banned' ? (
          /* Banned List Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BANNED_INGREDIENTS.map((item) => {
              const isOpen = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => toggleExpand(item.id)}
                  className={`p-6 bg-white border transition-all cursor-pointer flex flex-col justify-between ${
                    isOpen
                      ? 'border-[#542C3A] shadow-md ring-1 ring-[#542C3A]/20'
                      : 'border-[#302520]/10 hover:border-[#C5A16B]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-rose-800 bg-rose-50 px-2 py-0.5 border border-rose-200 font-semibold">
                        Strictly Banned
                      </span>
                      <span className="text-[#302520]/40">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif-luxury font-medium text-[#302520] mb-1">
                      {item.name}
                    </h3>

                    <div className="text-[11px] text-[#A79889] uppercase tracking-wider mb-3">
                      {item.category}
                    </div>

                    <p className="text-xs text-[#302520]/80 leading-relaxed mb-4">
                      {item.whyBanned}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#302520]/10 text-xs space-y-2">
                    <div className="text-[11px] text-[#302520]/60">
                      <strong className="text-[#302520]/80">Commercial use:</strong> {item.industryCommonUse}
                    </div>

                    <div className="p-2.5 bg-[#F8F3EB] border border-[#C5A16B]/30 text-[#302520]">
                      <div className="flex items-center gap-1.5 text-[#3A6351] font-semibold text-[11px] mb-0.5">
                        <Leaf className="w-3.5 h-3.5" />
                        <span>ScentStory Clean Alternative:</span>
                      </div>
                      <p className="text-[11px] text-[#302520]/85 italic font-serif-luxury">
                        {item.scentStoryAlternative}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Clean Pillars */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FORMULATION_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#302520]/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-[#E8D8C5]/50 flex items-center justify-center text-[#542C3A] mb-4">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-base font-serif-luxury font-medium text-[#302520] mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#302520]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#302520]/10 text-[10px] text-[#C5A16B] uppercase tracking-wider font-semibold">
                  Verified In Atelier
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reassurance strip */}
        <div className="mt-12 p-6 bg-[#F8F3EB] border border-[#302520]/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#302520]/80">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#C5A16B] shrink-0" />
            <div>
              <strong className="text-[#302520]">Zero Animal Testing · Zero Phthalates · Safe for Sensitive Skin</strong>
              <p className="text-[11px] text-[#302520]/70">
                Every batch is evaluated under dermatology oversight and aged in amber glass flacons.
              </p>
            </div>
          </div>
          <span className="text-[11px] text-[#A79889] font-mono whitespace-nowrap">
            IFRA-CERTIFIED · 2026 AUDIT
          </span>
        </div>
      </div>
    </section>
  );
};
