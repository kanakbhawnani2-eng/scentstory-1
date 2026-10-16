import React, { useState, useMemo } from 'react';
import { Search, Eye, Plus, Check, Sparkles } from 'lucide-react';
import { FRAGRANCES, Fragrance } from '../data/fragrances';
import { useCart } from '../context/CartContext';

interface ShopAllPerfumesProps {
  onSelectProduct: (fragrance: Fragrance) => void;
}

export const ShopAllPerfumes: React.FC<ShopAllPerfumesProps> = ({ onSelectProduct }) => {
  const { addStandardItem } = useCart();
  const [collectionScope, setCollectionScope] = useState<'atelier' | 'all' | 'signature'>('atelier');
  const [selectedFamily, setSelectedFamily] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = ['All', 'Fresh', 'Floral', 'Woody', 'Warm'];

  const filteredAndSortedFragrances = useMemo(() => {
    let result = FRAGRANCES.filter((item) => {
      // Collection scope filter: ensures non-repeating experience
      if (collectionScope === 'atelier' && item.isFeatured) {
        return false; // Exclude the 4 featured signatures so there is zero repetition with Section 2
      }
      if (collectionScope === 'signature' && !item.isFeatured) {
        return false;
      }

      // Family filter
      if (selectedFamily !== 'All' && item.family !== selectedFamily) {
        return false;
      }
      // Search query filter (matches name, description, or any note)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.shortDescription.toLowerCase().includes(q);
        const matchesNotes = [
          ...item.notes.top,
          ...item.notes.heart,
          ...item.notes.base
        ].some((n) => n.name.toLowerCase().includes(q));

        return matchesName || matchesDesc || matchesNotes;
      }
      return true;
    });

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [collectionScope, selectedFamily, searchQuery, sortBy]);

  const handleQuickAdd = (fragrance: Fragrance, e: React.MouseEvent) => {
    e.stopPropagation();
    addStandardItem(fragrance, '50ml', 1);
    setAddedId(fragrance.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="shop" className="py-20 lg:py-28 bg-[#F8F3EB] border-b border-[#302520]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#C5A16B] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Complete Olfactory Archive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#302520] tracking-tight mb-4">
            SHOP THE COLLECTION.
          </h2>
          <p className="text-sm sm:text-base text-[#302520]/75 leading-relaxed">
            Every bottle is an invitation to feel, remember, and evoke. Formulated with zero repeated profiles, using ethically harvested botanicals and clean vegan alcohol.
          </p>

          {/* Collection Scope Selector (Prevents duplicate repetition of Signature perfumes) */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#E8D8C5]/40 border border-[#302520]/15 gap-1">
            <button
              type="button"
              onClick={() => setCollectionScope('atelier')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
                collectionScope === 'atelier'
                  ? 'bg-[#542C3A] text-[#F8F3EB] shadow-xs'
                  : 'text-[#302520] hover:text-[#542C3A]'
              }`}
            >
              Atelier Creations (21)
            </button>
            <button
              type="button"
              onClick={() => setCollectionScope('all')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
                collectionScope === 'all'
                  ? 'bg-[#542C3A] text-[#F8F3EB] shadow-xs'
                  : 'text-[#302520] hover:text-[#542C3A]'
              }`}
            >
              All Formulations (25)
            </button>
            <button
              type="button"
              onClick={() => setCollectionScope('signature')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
                collectionScope === 'signature'
                  ? 'bg-[#542C3A] text-[#F8F3EB] shadow-xs'
                  : 'text-[#302520] hover:text-[#542C3A]'
              }`}
            >
              The Signatures (4)
            </button>
          </div>
        </div>

        {/* Filter, Search & Sort Control Strip */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#302520]/10">
          {/* Category Tabs (interactive functional filter controls) */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFamily(cat)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-all ${
                  selectedFamily === cat
                    ? 'bg-[#542C3A] text-[#F8F3EB] shadow-xs'
                    : 'bg-[#E8D8C5]/50 text-[#302520] hover:bg-[#E8D8C5]'
                }`}
              >
                {cat === 'All' ? 'All Families' : `${cat} Scents`}
              </button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#A79889] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search notes (e.g. Yuzu, Tonka, Amber)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2 bg-white border border-[#302520]/20 text-xs text-[#302520] focus:outline-none focus:border-[#C5A16B] placeholder:text-[#302520]/40"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#A79889] hover:text-[#302520]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full sm:w-auto px-4 py-2 bg-white border border-[#302520]/20 text-xs text-[#302520] font-medium focus:outline-none focus:border-[#C5A16B] cursor-pointer"
              >
                <option value="featured">Sort: Curated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count & Active Filters Indicator */}
        <div className="flex items-center justify-between text-xs text-[#A79889] mb-8">
          <div>
            Showing <span className="font-semibold text-[#302520] tabular-nums">{filteredAndSortedFragrances.length}</span> fragrances
            {collectionScope === 'atelier' && <span> in Atelier Archive</span>}
            {collectionScope === 'signature' && <span> in Signatures</span>}
            {selectedFamily !== 'All' && <span> ({selectedFamily})</span>}
            {searchQuery && <span> matching “{searchQuery}”</span>}
          </div>
          {(selectedFamily !== 'All' || searchQuery || collectionScope !== 'atelier') && (
            <button
              type="button"
              onClick={() => {
                setCollectionScope('atelier');
                setSelectedFamily('All');
                setSearchQuery('');
              }}
              className="text-[#542C3A] hover:underline"
            >
              Reset view
            </button>
          )}
        </div>

        {/* Product Grid: 4 columns on large screens, 2 on medium, 1 on small */}
        {filteredAndSortedFragrances.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredAndSortedFragrances.map((fragrance) => {
              const isJustAdded = addedId === fragrance.id;

              return (
                <div
                  key={fragrance.id}
                  onClick={() => onSelectProduct(fragrance)}
                  className="group cursor-pointer flex flex-col bg-[#F8F3EB] border border-[#302520]/10 hover:border-[#302520]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image Container with 4:3 proportion */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E8D8C5]">
                    <img
                      src={fragrance.image}
                      alt={fragrance.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

                    <div className="absolute top-3 left-3 bg-[#F8F3EB]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[#302520]">
                      {fragrance.family}
                    </div>

                    {fragrance.isFeatured && (
                      <div className="absolute top-3 right-3 bg-[#542C3A] text-[#F8F3EB] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-semibold">
                        Signature
                      </div>
                    )}

                    {/* Quick View overlay */}
                    <div className="absolute inset-0 bg-[#302520]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(fragrance);
                        }}
                        className="px-4 py-2 bg-[#F8F3EB] text-[#302520] text-xs font-medium tracking-wide shadow-md hover:bg-white flex items-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Explore Notes</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="text-[11px] text-[#A79889] uppercase tracking-wider mb-1 truncate">
                        {fragrance.notes.top[0].name} · {fragrance.notes.heart[0].name}
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
                        onClick={(e) => handleQuickAdd(fragrance, e)}
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
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16 bg-[#E8D8C5]/20 border border-dashed border-[#302520]/20 p-8">
            <h3 className="text-xl font-serif-luxury font-medium text-[#302520] mb-2">
              No fragrances match your selection
            </h3>
            <p className="text-xs text-[#302520]/70 max-w-sm mx-auto mb-6">
              Try adjusting your fragrance family or search terms to explore our full collection.
            </p>
            <button
              type="button"
              onClick={() => {
                setCollectionScope('all');
                setSelectedFamily('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-[#542C3A] text-[#F8F3EB] text-xs uppercase tracking-wider font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
