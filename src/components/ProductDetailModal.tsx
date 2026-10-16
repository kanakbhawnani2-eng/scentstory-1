import React, { useState } from 'react';
import { X, Check, ShoppingBag, Sparkles, Clock, Compass, ShieldCheck } from 'lucide-react';
import { Fragrance, FRAGRANCES } from '../data/fragrances';
import { useCart, BottleSize } from '../context/CartContext';

interface ProductDetailModalProps {
  fragrance: Fragrance | null;
  onClose: () => void;
  onSelectRelated: (fragrance: Fragrance) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  fragrance,
  onClose,
  onSelectRelated
}) => {
  const { addStandardItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<BottleSize>('50ml');
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!fragrance) return null;

  const calculatePrice = (size: BottleSize) => {
    if (size === '15ml') return Math.max(799, Math.round(fragrance.price * 0.6));
    if (size === '100ml') return Math.round(fragrance.price * 1.55);
    return fragrance.price;
  };

  const currentPrice = calculatePrice(selectedSize);

  const handleAddToCart = () => {
    addStandardItem(fragrance, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Find 2 related fragrances from same family
  const sameFamily = FRAGRANCES.filter((f) => f.id !== fragrance.id && f.family === fragrance.family);
  const related = sameFamily.length >= 2 
    ? sameFamily.slice(0, 2) 
    : [...sameFamily, ...FRAGRANCES.filter((f) => f.id !== fragrance.id && f.family !== fragrance.family)].slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#302520]/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#F8F3EB] border border-[#302520]/20 shadow-2xl my-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#302520] hover:text-[#542C3A] bg-[#F8F3EB]/90 backdrop-blur-xs rounded-full border border-[#302520]/10 transition-colors focus-visible:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 2-Column Split: Sticky Left Media, Contiguous Purchase Module Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Fragrance Artwork & Olfactory Visuals */}
          <div className="md:col-span-6 bg-[#E8D8C5] relative flex flex-col">
            <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden">
              <img
                src={fragrance.image}
                alt={fragrance.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!img.dataset.retried) {
                    img.dataset.retried = 'true';
                    if (img.src.includes('/src/assets/images/')) {
                      img.src = img.src.replace('/src/assets/images/', '/assets/images/');
                    } else if (img.src.includes('/assets/images/')) {
                      img.src = img.src.replace('/assets/images/', '/src/assets/images/');
                    }
                  }
                }}
              />
              <div className="absolute top-4 left-4 bg-[#F8F3EB]/90 backdrop-blur-xs px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#302520]">
                {fragrance.family} Family
              </div>
            </div>

            {/* Olfactory Story Quote */}
            <div className="p-6 sm:p-8 bg-[#E8D8C5]/60 flex-1 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A16B] font-semibold mb-2 block">
                The Narrative Origin
              </span>
              <p className="text-sm font-serif-luxury italic text-[#302520]/90 leading-relaxed mb-4">
                “{fragrance.story}”
              </p>
              <div className="flex items-center gap-4 text-xs text-[#302520]/70 pt-2 border-t border-[#302520]/10">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A16B]" />
                  <span>Longevity: {fragrance.longevity}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C5A16B]" />
                  <span>Sillage: {fragrance.sillage}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-[#F8F3EB]">
            <div>
              {/* Scent Identity Archetype Link */}
              <div className="flex items-center gap-2 text-xs text-[#C5A16B] uppercase tracking-wider font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Resonates with: {fragrance.matchedIdentity}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-medium text-[#302520] mb-2">
                {fragrance.name}
              </h2>

              <p className="text-xs text-[#A79889] italic font-serif-luxury text-sm mb-3">
                {fragrance.tagline}
              </p>

              {/* If You Love Comparison */}
              {fragrance.ifYouLove && (
                <div className="mb-4 p-3 bg-[#E8D8C5]/30 border border-[#302520]/10 text-xs">
                  <span className="font-semibold text-[#542C3A] block text-[11px] uppercase tracking-wider mb-0.5">
                    Olfactory Comparison:
                  </span>
                  <p className="text-[#302520]/80 italic font-serif-luxury">
                    If you love {fragrance.ifYouLove}, this creation will feel intuitively familiar yet distinct.
                  </p>
                </div>
              )}

              {/* Clean Formulation Badges (unboxed text separators per constitution) */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#3A6351] font-medium mb-4">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Clean Formula:</span>
                </span>
                {fragrance.cleanBadges?.map((badge, bIdx) => (
                  <React.Fragment key={badge}>
                    <span>{badge}</span>
                    {bIdx < fragrance.cleanBadges.length - 1 && <span aria-hidden="true" className="text-[#302520]/30">·</span>}
                  </React.Fragment>
                ))}
              </div>

              {/* Price display with tabular numerals */}
              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-[#302520]/10">
                <span className="text-3xl font-serif-luxury font-medium text-[#302520] tabular-nums">
                  ₹{currentPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#302520]/60">
                  Includes all luxury packaging & taxes
                </span>
              </div>

              {/* Bottle Size Selector */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider text-[#302520]/80 font-medium mb-2.5">
                  Select Bottle Size
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['15ml', '50ml', '100ml'] as BottleSize[]).map((size) => {
                    const price = calculatePrice(size);
                    const isSelected = selectedSize === size;

                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`p-3 text-center border transition-all ${
                          isSelected
                            ? 'border-[#542C3A] bg-[#542C3A] text-[#F8F3EB] shadow-xs'
                            : 'border-[#302520]/20 bg-white text-[#302520] hover:border-[#542C3A]'
                        }`}
                      >
                        <div className="text-xs font-bold tracking-wider mb-0.5">
                          {size === '15ml' ? 'Travel Flacon' : size === '50ml' ? 'Signature' : 'Grand'}
                        </div>
                        <div className="text-[11px] opacity-80">{size}</div>
                        <div className="text-xs font-semibold mt-1 tabular-nums">
                          ₹{price.toLocaleString('en-IN')}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Olfactory Pyramid (Top, Heart, Base Notes) */}
              <div className="mb-6 p-4 bg-[#E8D8C5]/30 border border-[#302520]/10 space-y-3">
                <div className="text-xs uppercase tracking-widest font-semibold text-[#542C3A]">
                  Olfactory Pyramid
                </div>

                <div className="text-xs">
                  <span className="font-semibold text-[#302520] block mb-0.5">Top Notes (0-30 mins)</span>
                  <p className="text-[#302520]/75">
                    {fragrance.notes.top.map((n) => `${n.name} (${n.description})`).join(' · ')}
                  </p>
                </div>

                <div className="text-xs pt-2 border-t border-[#302520]/10">
                  <span className="font-semibold text-[#302520] block mb-0.5">Heart Notes (30 mins - 4 hrs)</span>
                  <p className="text-[#302520]/75">
                    {fragrance.notes.heart.map((n) => `${n.name} (${n.description})`).join(' · ')}
                  </p>
                </div>

                <div className="text-xs pt-2 border-t border-[#302520]/10">
                  <span className="font-semibold text-[#302520] block mb-0.5">Base Notes (4 - 12+ hrs)</span>
                  <p className="text-[#302520]/75">
                    {fragrance.notes.base.map((n) => `${n.name} (${n.description})`).join(' · ')}
                  </p>
                </div>
              </div>

              {/* Occasion Tags (unboxed text separators per constitution) */}
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-wider text-[#A79889] block mb-1">
                  Ideal Rituals & Occasions
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#302520]/80">
                  {fragrance.occasions.map((occ, idx) => (
                    <React.Fragment key={occ}>
                      <span>{occ}</span>
                      {idx < fragrance.occasions.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity Stepper & Add to Bag CTA */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border border-[#302520]/20 bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm text-[#302520] hover:bg-[#E8D8C5]/30 focus-visible:outline-none"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 text-xs font-semibold tabular-nums text-[#302520]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm text-[#302520] hover:bg-[#E8D8C5]/30 focus-visible:outline-none"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-6 text-xs uppercase tracking-widest font-medium transition-all flex items-center justify-center gap-2 ${
                    isAdded
                      ? 'bg-[#3A6351] text-white'
                      : 'bg-[#542C3A] text-[#F8F3EB] hover:bg-[#302520] shadow-md'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Your Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag · ₹{(currentPrice * quantity).toLocaleString('en-IN')}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees */}
              <div className="flex items-center justify-between text-[11px] text-[#A79889] pt-3 border-t border-[#302520]/10">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A16B]" />
                  <span>Complimentary 2ml Sample Included</span>
                </span>
                <span>Free Insured Delivery Across India</span>
              </div>

              {/* Related Fragrances */}
              {related.length > 0 && (
                <div className="mt-6 pt-4 border-t border-[#302520]/10">
                  <span className="text-[11px] uppercase tracking-wider text-[#A79889] block mb-2">
                    Complementary Olfactory Stories
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {related.map((rel) => (
                      <button
                        key={rel.id}
                        type="button"
                        onClick={() => onSelectRelated(rel)}
                        className="text-left p-2 border border-[#302520]/10 bg-white/60 hover:bg-white hover:border-[#C5A16B] transition-all flex items-center gap-2.5"
                      >
                        <img
                          src={rel.image}
                          alt={rel.name}
                          className="w-10 h-10 object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0">
                          <div className="text-xs font-serif-luxury font-medium text-[#302520] truncate">
                            {rel.name}
                          </div>
                          <div className="text-[10px] text-[#A79889] truncate">
                            ₹{rel.price.toLocaleString('en-IN')}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
