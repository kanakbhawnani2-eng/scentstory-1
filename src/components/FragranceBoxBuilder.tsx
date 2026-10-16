import React, { useState } from 'react';
import { Plus, X, Check, Gift, Sparkles, ShoppingBag } from 'lucide-react';
import { MINI_DISCOVERY_OPTIONS, MiniFragranceOption } from '../data/fragrances';
import { useCart } from '../context/CartContext';

export const FragranceBoxBuilder: React.FC = () => {
  const { addDiscoveryBox } = useCart();
  const [selectedMinis, setSelectedMinis] = useState<MiniFragranceOption[]>([]);
  const [monogram, setMonogram] = useState('');
  const [giftNote, setGiftNote] = useState('');
  const [showGiftOptions, setShowGiftOptions] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [filterFamily, setFilterFamily] = useState<string>('All');

  const filteredMinis = MINI_DISCOVERY_OPTIONS.filter(
    (o) => filterFamily === 'All' || o.family === filterFamily
  );

  const maxSlots = 3;
  const isComplete = selectedMinis.length === maxSlots;

  const handleToggleMini = (option: MiniFragranceOption) => {
    const isSelected = selectedMinis.some((m) => m.id === option.id);
    if (isSelected) {
      setSelectedMinis((prev) => prev.filter((m) => m.id !== option.id));
    } else {
      if (selectedMinis.length < maxSlots) {
        setSelectedMinis((prev) => [...prev, option]);
      }
    }
  };

  const handleRemoveSlot = (index: number) => {
    setSelectedMinis((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleAddBoxToCart = () => {
    if (!isComplete) return;

    addDiscoveryBox(
      selectedMinis.map((m) => m.id),
      selectedMinis.map((m) => m.name),
      giftNote.trim() ? giftNote.trim() : undefined,
      monogram.trim() ? monogram.trim().toUpperCase() : undefined
    );

    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      // Reset builder for fresh experience
      setSelectedMinis([]);
      setMonogram('');
      setGiftNote('');
    }, 2200);
  };

  return (
    <section id="discovery-box" className="py-20 lg:py-28 bg-[#E8D8C5]/40 border-b border-[#302520]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A16B] font-semibold block mb-3">
            Custom Discovery Coffret
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#302520] tracking-tight mb-4">
            A LITTLE BOX OF YOU.
          </h2>
          <p className="text-sm sm:text-base text-[#302520]/75 leading-relaxed">
            Select three 10ml miniature flacons to create your personalized discovery set. Hand-poured and encased in our gold-foil linen keepsake box for a special bundle price of ₹999.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive 3-Slot Visual Discovery Box Tray */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-[#F8F3EB] border border-[#302520]/15 p-6 sm:p-8 shadow-xl relative">
              {/* Box Image / Presentation header */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6 border border-[#302520]/10 bg-[#E8D8C5]">
                <img
                  src="/src/assets/images/fragrance_discovery_box_1792142430048.jpg"
                  alt="Custom Discovery Box with three miniature flacons"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-[#542C3A] text-[#F8F3EB] text-xs font-semibold px-2.5 py-1 tracking-wider uppercase">
                  3 × 10ml · ₹999
                </div>
              </div>

              {/* Live 3-Slot Presentation Tray */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="uppercase tracking-widest text-[#C5A16B] font-semibold">
                    Discovery Tray
                  </span>
                  <span className="font-medium text-[#302520] tabular-nums">
                    {selectedMinis.length} of {maxSlots} Selected
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((slotIdx) => {
                    const item = selectedMinis[slotIdx];

                    return (
                      <div
                        key={slotIdx}
                        className={`aspect-[3/4] p-3 flex flex-col items-center justify-between text-center border transition-all ${
                          item
                            ? 'border-[#C5A16B] bg-[#F8F3EB] shadow-xs'
                            : 'border-dashed border-[#302520]/20 bg-[#E8D8C5]/30'
                        }`}
                      >
                        {item ? (
                          <>
                            <div className="w-full flex justify-end">
                              <button
                                type="button"
                                onClick={() => handleRemoveSlot(slotIdx)}
                                className="text-[#302520]/50 hover:text-[#542C3A] p-0.5"
                                aria-label={`Remove ${item.name}`}
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <div className="w-8 h-12 bg-gradient-to-b from-[#C5A16B]/20 to-[#C5A16B]/50 border border-[#C5A16B] flex items-center justify-center my-1">
                              <span className="text-[9px] font-serif-luxury font-bold text-[#302520]">
                                10ml
                              </span>
                            </div>

                            <div>
                              <div className="text-[11px] font-serif-luxury font-semibold text-[#302520] leading-tight line-clamp-1">
                                {item.name}
                              </div>
                              <div className="text-[9px] text-[#A79889] uppercase tracking-wider">
                                {item.family}
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full text-[#302520]/40">
                            <Plus className="w-4 h-4 mb-1" />
                            <span className="text-[10px] uppercase tracking-wider">Slot {slotIdx + 1}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Monogram & Gift Note Accordion */}
              <div className="border-t border-[#302520]/10 pt-4 mb-6">
                <button
                  type="button"
                  onClick={() => setShowGiftOptions(!showGiftOptions)}
                  className="w-full flex items-center justify-between text-xs text-[#302520] hover:text-[#542C3A] font-medium"
                >
                  <div className="flex items-center gap-1.5">
                    <Gift className="w-3.5 h-3.5 text-[#C5A16B]" />
                    <span>Complimentary Embossed Monogram & Gift Note</span>
                  </div>
                  <span className="text-sm">{showGiftOptions ? '−' : '+'}</span>
                </button>

                {showGiftOptions && (
                  <div className="mt-4 space-y-3 pt-2 text-xs">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#302520]/70 mb-1">
                        Gold Foil Monogram (Max 3 Initials)
                      </label>
                      <input
                        type="text"
                        maxLength={3}
                        value={monogram}
                        onChange={(e) => setMonogram(e.target.value.toUpperCase())}
                        placeholder="e.g. S.K."
                        className="w-full px-3 py-2 border border-[#302520]/20 bg-white text-xs tracking-widest font-mono uppercase focus:border-[#C5A16B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#302520]/70 mb-1">
                        Handwritten Calligraphy Gift Message
                      </label>
                      <textarea
                        rows={2}
                        value={giftNote}
                        onChange={(e) => setGiftNote(e.target.value)}
                        placeholder="Add a loving note for someone special..."
                        className="w-full px-3 py-2 border border-[#302520]/20 bg-white text-xs resize-none focus:border-[#C5A16B] focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Add Box to Bag Button */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="text-xs uppercase tracking-wider text-[#302520]/70">Set Price:</span>
                  <span className="text-xl font-medium text-[#302520] tabular-nums font-serif-luxury">
                    ₹999 <span className="text-xs text-[#302520]/60 font-sans line-through ml-1">₹1,450</span>
                  </span>
                </div>

                <button
                  type="button"
                  disabled={!isComplete}
                  onClick={handleAddBoxToCart}
                  className={`w-full py-3.5 px-6 text-xs uppercase tracking-widest font-medium transition-all flex items-center justify-center gap-2 ${
                    isComplete
                      ? addedSuccess
                        ? 'bg-[#3A6351] text-white'
                        : 'bg-[#542C3A] text-[#F8F3EB] hover:bg-[#302520] shadow-md cursor-pointer'
                      : 'bg-[#302520]/20 text-[#302520]/40 cursor-not-allowed'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Discovery Box Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>{isComplete ? 'Add Discovery Box to Bag' : `Select ${maxSlots - selectedMinis.length} More to Complete`}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Miniature Fragrance Flacons Selection Grid */}
          <div className="lg:col-span-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-serif-luxury font-medium text-[#302520]">
                  Choose Three 10ml Travel Flacons
                </h3>
                <span className="text-xs text-[#A79889]">Explore all 25 bespoke formulations</span>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {['All', 'Fresh', 'Floral', 'Woody', 'Warm'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFilterFamily(cat)}
                    className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-medium transition-all ${
                      filterFamily === cat
                        ? 'bg-[#542C3A] text-[#F8F3EB]'
                        : 'bg-white/80 text-[#302520] hover:bg-white border border-[#302520]/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[640px] overflow-y-auto pr-2">
              {filteredMinis.map((option) => {
                const isSelected = selectedMinis.some((m) => m.id === option.id);
                const isFull = selectedMinis.length >= maxSlots && !isSelected;

                return (
                  <div
                    key={option.id}
                    onClick={() => !isFull && handleToggleMini(option)}
                    className={`p-4 border transition-all flex gap-4 items-center ${
                      isSelected
                        ? 'border-[#C5A16B] bg-[#F8F3EB] shadow-sm'
                        : isFull
                        ? 'border-[#302520]/10 bg-[#F8F3EB]/40 opacity-60 cursor-not-allowed'
                        : 'border-[#302520]/15 bg-[#F8F3EB] hover:border-[#C5A16B]/60 hover:bg-white cursor-pointer'
                    }`}
                  >
                    <div className="w-16 h-16 shrink-0 bg-[#E8D8C5] overflow-hidden border border-[#302520]/10">
                      <img
                        src={option.image}
                        alt={option.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[11px] uppercase tracking-wider text-[#A79889]">
                          {option.family}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] bg-[#C5A16B]/20 text-[#542C3A] font-semibold px-2 py-0.5 uppercase tracking-wider">
                            In Tray
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-serif-luxury font-medium text-[#302520] truncate">
                        {option.name}
                      </h4>
                      <p className="text-xs text-[#302520]/70 truncate">
                        {option.tagline}
                      </p>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'border-[#C5A16B] bg-[#C5A16B] text-white'
                          : 'border-[#302520]/30 text-transparent'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3 h-3 text-[#302520]/40" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Information Accord / Gifting Guarantee */}
            <div className="mt-8 p-6 bg-[#F8F3EB] border border-[#302520]/10 flex flex-col sm:flex-row items-center gap-4 text-xs text-[#302520]/80">
              <Sparkles className="w-6 h-6 text-[#C5A16B] shrink-0" />
              <div>
                <span className="font-semibold text-[#302520] block mb-0.5">
                  The ScentStory Discovery Guarantee
                </span>
                Every discovery box includes a 100% credit voucher toward your first full-sized 50ml or 100ml flacon purchase within 30 days.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
