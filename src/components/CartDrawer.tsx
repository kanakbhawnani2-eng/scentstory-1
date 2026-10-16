import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShoppingBag, Sparkles, Tag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onProceedToCheckout }) => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    totalItemsCount,
    couponCode,
    discountAmount,
    applyCoupon,
    removeCoupon,
    sampleChoice,
    setSampleChoice
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; message: string } | null>(null);

  if (!isOpen) return null;

  const sampleOptions = [
    'After the Rain (2ml Vial)',
    'Golden Hour (2ml Vial)',
    'Honeyed Silence (2ml Vial)',
    'Smoke & Poetry (2ml Vial)',
    'Plum Reverie (2ml Vial)',
    'Velvet Nights (2ml Vial)',
    'Ocean Letters (2ml Vial)',
    'Pear in Bloom (2ml Vial)'
  ];

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    setCouponFeedback(res);
    if (res.success) {
      setCouponInput('');
    }
  };

  const finalTotal = Math.max(0, subtotal - discountAmount);
  const isFreeShipping = subtotal >= 999;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#302520]/60 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F3EB] border-l border-[#302520]/15 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#302520]/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#542C3A]" />
              <h2 className="text-xl font-serif-luxury font-medium text-[#302520]">
                Your Shopping Bag
              </h2>
              <span className="text-xs text-[#A79889] tabular-nums">
                ({totalItemsCount} {totalItemsCount === 1 ? 'creation' : 'creations'})
              </span>
            </div>

            <button
              onClick={closeCart}
              className="p-1.5 text-[#302520]/70 hover:text-[#542C3A] hover:bg-[#E8D8C5]/50 rounded-full transition-colors focus-visible:outline-none"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto bg-[#E8D8C5]/40 rounded-full flex items-center justify-center text-[#A79889]">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-serif-luxury font-medium text-[#302520]">
                  Your bag is currently empty
                </h3>
                <p className="text-xs text-[#302520]/70 max-w-xs mx-auto leading-relaxed">
                  Discover scents inspired by moments and moods, or customize a bespoke discovery coffret.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="px-6 py-2.5 bg-[#542C3A] text-[#F8F3EB] text-xs uppercase tracking-wider font-medium hover:bg-[#302520] transition-colors"
                >
                  Explore Fragrances
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-white border border-[#302520]/10 flex gap-4 items-start"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-20 object-cover bg-[#E8D8C5] shrink-0 border border-[#302520]/10"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-serif-luxury font-medium text-[#302520] leading-snug">
                            {item.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-[#302520]/40 hover:text-[#542C3A] transition-colors p-0.5"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {item.type === 'standard' ? (
                          <div className="text-xs text-[#A79889] my-1">
                            {item.size} · {item.family} Family
                          </div>
                        ) : (
                          <div className="text-[11px] text-[#A79889] my-1">
                            Minis: {item.miniNames.join(', ')}
                            {item.monogram && <span> · Monogram: {item.monogram}</span>}
                          </div>
                        )}

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity control */}
                          <div className="flex items-center border border-[#302520]/20 bg-[#F8F3EB]">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2.5 py-0.5 text-xs text-[#302520] hover:bg-[#E8D8C5]"
                            >
                              −
                            </button>
                            <span className="px-2.5 py-0.5 text-xs font-semibold tabular-nums text-[#302520]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2.5 py-0.5 text-xs text-[#302520] hover:bg-[#E8D8C5]"
                            >
                              +
                            </button>
                          </div>

                          <span className="text-sm font-medium text-[#302520] tabular-nums font-serif-luxury">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Complimentary Sample Selector */}
                <div className="p-4 bg-[#E8D8C5]/30 border border-[#302520]/15 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#542C3A] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A16B]" />
                    <span>Complimentary 2ml Deluxe Vial</span>
                  </div>
                  <p className="text-[11px] text-[#302520]/75">
                    Select a personal sample to explore alongside your order:
                  </p>
                  <select
                    value={sampleChoice}
                    onChange={(e) => setSampleChoice(e.target.value)}
                    className="w-full text-xs p-2 bg-white border border-[#302520]/20 text-[#302520] focus:outline-none focus:border-[#C5A16B]"
                  >
                    {sampleOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Promotional Code Form */}
                <div className="pt-2">
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-[#A79889] absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Promo code (try STORY10)"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        className="w-full pl-8 pr-2 py-2 text-xs border border-[#302520]/20 bg-white text-[#302520] uppercase font-mono tracking-wider focus:outline-none focus:border-[#C5A16B]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#542C3A] text-[#F8F3EB] text-xs uppercase tracking-wider font-medium hover:bg-[#302520] transition-colors"
                    >
                      Apply
                    </button>
                  </form>

                  {couponFeedback && (
                    <div
                      className={`text-[11px] mt-1.5 ${
                        couponFeedback.success ? 'text-emerald-700' : 'text-amber-800'
                      }`}
                    >
                      {couponFeedback.message}
                    </div>
                  )}

                  {couponCode && (
                    <div className="flex items-center justify-between text-xs mt-2 p-2 bg-emerald-50 text-emerald-900 border border-emerald-200">
                      <span className="font-mono font-medium">{couponCode} applied</span>
                      <button
                        type="button"
                        onClick={removeCoupon}
                        className="text-[11px] text-emerald-700 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#302520]/15 space-y-3">
              <div className="space-y-1.5 text-xs text-[#302520]/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-medium text-[#302520]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Promotional Privilege</span>
                    <span className="tabular-nums">−₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Insured Shipping</span>
                  <span className="tabular-nums font-medium text-[#302520]">
                    {isFreeShipping ? 'Complimentary' : '₹99'}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#302520]/10 flex justify-between items-baseline">
                <span className="text-sm font-medium text-[#302520]">Estimated Total</span>
                <span className="text-2xl font-serif-luxury font-medium text-[#302520] tabular-nums">
                  ₹{finalTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  closeCart();
                  onProceedToCheckout();
                }}
                className="w-full py-3.5 bg-[#542C3A] text-[#F8F3EB] text-xs uppercase tracking-widest font-medium hover:bg-[#302520] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-[#A79889]">
                Simulated boutique checkout · No real payment collected
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
