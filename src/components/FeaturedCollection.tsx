import React from 'react';
import { Eye, Plus, Check } from 'lucide-react';
import { FRAGRANCES, Fragrance } from '../data/fragrances';
import { useCart } from '../context/CartContext';

interface FeaturedCollectionProps {
  onQuickView: (fragrance: Fragrance) => void;
  onExploreAll: () => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  onQuickView,
  onExploreAll
}) => {
  const { addStandardItem } = useCart();
  const [addedId, setAddedId] = React.useState<string | null>(null);

  const featured = FRAGRANCES.filter((f) => f.isFeatured);

  const handleAdd = (fragrance: Fragrance, e: React.MouseEvent) => {
    e.stopPropagation();
    addStandardItem(fragrance, '50ml', 1);
    setAddedId(fragrance.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="collection" className="py-20 lg:py-28 bg-[#F8F3EB] border-b border-[#302520]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A16B] font-semibold block mb-3">
              The Signature Quartet
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#302520] tracking-tight">
              FIND YOUR SIGNATURE.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#302520]/75 max-w-md">
            Four master-crafted fragrances engineered around genuine emotional states. Formulated with rare botanical tinctures and aged wood extractions.
          </p>
        </div>

        {/* 4-Column Grid on Desktop, 2-Column on Tablet/Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((fragrance) => {
            const isJustAdded = addedId === fragrance.id;

            return (
              <div
                key={fragrance.id}
                onClick={() => onQuickView(fragrance)}
                className="group cursor-pointer flex flex-col bg-[#F8F3EB] border border-[#302520]/10 hover:border-[#302520]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image Container with 4:3 proportion */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E8D8C5]">
                  <img
                    src={fragrance.image}
                    alt={`${fragrance.name} perfume bottle`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.dataset.retried) {
                        img.dataset.retried = 'true';
                        if (img.src.includes('/src/assets/images/')) {
                          img.src = img.src.replace('/src/assets/images/', '/assets/images/');
                          return;
                        } else if (img.src.includes('/assets/images/')) {
                          img.src = img.src.replace('/assets/images/', '/src/assets/images/');
                          return;
                        }
                      }
                      img.style.display = 'none';
                    }}
                  />

                  {/* Scent family text identifier */}
                  <div className="absolute top-3 left-3 bg-[#F8F3EB]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[#302520]">
                    {fragrance.family}
                  </div>

                  {/* Quick View overlay button */}
                  <div className="absolute inset-0 bg-[#302520]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(fragrance);
                      }}
                      className="px-4 py-2 bg-[#F8F3EB] text-[#302520] text-xs font-medium tracking-wide shadow-md hover:bg-white flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Notes kicker */}
                    <div className="text-[11px] text-[#A79889] uppercase tracking-wider mb-1">
                      {fragrance.notes.top[0].name} · {fragrance.notes.base[0].name}
                    </div>

                    <h3 className="text-xl font-serif-luxury font-medium text-[#302520] group-hover:text-[#542C3A] transition-colors mb-2">
                      {fragrance.name}
                    </h3>

                    <p className="text-xs text-[#302520]/75 leading-relaxed line-clamp-2 mb-4">
                      {fragrance.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#302520]/10 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-[#302520]/60 mr-1">50ml ·</span>
                      <span className="text-base font-medium text-[#302520] tabular-nums">
                        ₹{fragrance.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleAdd(fragrance, e)}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium transition-colors ${
                        isJustAdded
                          ? 'bg-[#3A6351] text-white'
                          : 'bg-[#542C3A] text-[#F8F3EB] hover:bg-[#302520]'
                      }`}
                      aria-label={`Add ${fragrance.name} to bag`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Discovery Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={onExploreAll}
            className="text-sm font-medium text-[#542C3A] hover:text-[#302520] underline underline-offset-4 tracking-wide"
          >
            Explore all 21 atelier creations in our discovery archive →
          </button>
        </div>
      </div>
    </section>
  );
};
