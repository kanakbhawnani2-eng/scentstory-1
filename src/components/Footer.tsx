import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenResearch: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenResearch }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-[#302520] text-[#F8F3EB] pt-16 pb-12 border-t border-[#C5A16B]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Tier: Brand Headline & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#F8F3EB]/10">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-2xl sm:text-3xl font-serif-luxury tracking-widest text-[#F8F3EB] block">
              SCENTSTORY
            </span>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury text-[#C5A16B] leading-tight font-light italic">
              “EVERY SCENT TELLS A STORY.”
            </p>
            <p className="text-xs sm:text-sm text-[#F8F3EB]/70 max-w-md leading-relaxed font-light">
              A bespoke fragrance discovery house creating emotional olfactory connections. Formulated with ethically harvested botanicals and poured by master glassmakers.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A16B] font-semibold mb-2 block">
              The Olfactory Letters
            </span>
            <p className="text-xs sm:text-sm text-[#F8F3EB]/80 mb-4 font-light">
              Receive private invitations to limited seasonal distillations, fragrance notes essays, and private discovery coffret releases.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-[#F8F3EB]/10 border border-[#F8F3EB]/20 text-xs text-[#F8F3EB] placeholder:text-[#F8F3EB]/40 focus:outline-none focus:border-[#C5A16B]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#C5A16B] text-[#302520] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8b57e] transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2">
                <Check className="w-3.5 h-3.5" />
                <span>You have been subscribed to our private correspondence letters.</span>
              </div>
            )}
          </div>
        </div>

        {/* Middle Tier: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#F8F3EB]/10 text-xs">
          <div>
            <h4 className="uppercase tracking-widest text-[#C5A16B] font-semibold mb-4 text-[11px]">
              Fragrance Atelier
            </h4>
            <ul className="space-y-2.5 text-[#F8F3EB]/70">
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#F8F3EB] transition-colors"
                >
                  Signature Quartet
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F8F3EB] transition-colors"
                >
                  All 8 Formulations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discovery-box')}
                  className="hover:text-[#F8F3EB] transition-colors"
                >
                  Custom Discovery Box (₹999)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quiz')}
                  className="hover:text-[#F8F3EB] transition-colors"
                >
                  Scent Profile Consultation
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-[#C5A16B] font-semibold mb-4 text-[11px]">
              Fragrance Families
            </h4>
            <ul className="space-y-2.5 text-[#F8F3EB]/70">
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F8F3EB] transition-colors"
                >
                  Fresh & Earthy (Petrichor)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F8F3EB] transition-colors"
                >
                  Warm Citrus & Amber
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F8F3EB] transition-colors"
                >
                  Nocturnal Woody & Spiced
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F8F3EB] transition-colors"
                >
                  Aquatic & Driftwood
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-[#C5A16B] font-semibold mb-4 text-[11px]">
              House & Philosophy
            </h4>
            <ul className="space-y-2.5 text-[#F8F3EB]/70">
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#F8F3EB] transition-colors"
                >
                  Our Story & Origin
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#F8F3EB] transition-colors"
                >
                  Ethical Botanical Extraction
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenResearch}
                  className="hover:text-[#F8F3EB] transition-colors flex items-center gap-1 text-[#C5A16B]"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>20 Brands Research Dossier</span>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-[#C5A16B] font-semibold mb-4 text-[11px]">
              Client Care & Trust
            </h4>
            <ul className="space-y-2.5 text-[#F8F3EB]/70">
              <li>
                <span className="text-[#F8F3EB]">Concierge:</span> care@scentstory.in
              </li>
              <li>
                <span className="text-[#F8F3EB]">Atelier:</span> Mumbai & Grasse
              </li>
              <li>
                <span>Complimentary Shipping & Sample Vial</span>
              </li>
              <li>
                <span>Cruelty-Free · Phthalate-Free</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F8F3EB]/50">
          <div>
            © {new Date().getFullYear()} ScentStory Parfums Atelier. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Every Scent Tells a Story. Find the One That Feels Like Yours.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
