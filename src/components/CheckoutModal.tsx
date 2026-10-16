import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, ArrowLeft, Download, Sparkles } from 'lucide-react';
import { useCart, CheckoutDetails } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderSuccess: (order: CheckoutDetails) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, onOrderSuccess }) => {
  const { items, subtotal, discountAmount, sampleChoice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'UPI' as 'UPI' | 'Card' | 'Net Banking' | 'Cash on Delivery',
    shippingMethod: 'standard' as 'standard' | 'express'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const shippingFee = formData.shippingMethod === 'express' ? 199 : (subtotal >= 999 ? 0 : 99);
  const orderTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = '10-digit phone number is required';
    if (!formData.address.trim()) errs.address = 'Street address is required';
    if (!formData.city.trim()) errs.city = 'City is required';
    if (!formData.state.trim()) errs.state = 'State is required';
    if (!formData.pincode.trim() || formData.pincode.length < 6) errs.pincode = '6-digit PIN code required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const orderNumber = `SS-${Math.floor(10000 + Math.random() * 90000)}`;
      const completed: CheckoutDetails = {
        orderNumber,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}${formData.apartment ? ', ' + formData.apartment : ''}`,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        paymentMethod: formData.paymentMethod,
        shippingMethod: formData.shippingMethod,
        subtotal,
        discount: discountAmount,
        shippingFee,
        total: orderTotal,
        items: [...items],
        sampleChoice,
        createdAt: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };

      clearCart();
      setIsSubmitting(false);
      onOrderSuccess(completed);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#302520]/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#F8F3EB] border border-[#302520]/20 shadow-2xl my-6 overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#542C3A] text-[#F8F3EB] flex items-center justify-between border-b border-[#C5A16B]/30">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A16B] font-semibold block mb-0.5">
              Simulated Boutique Checkout
            </span>
            <h2 className="text-xl sm:text-2xl font-serif-luxury font-medium text-[#F8F3EB]">
              Complete Your Fragrance Order
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#F8F3EB]/70 hover:text-white rounded-full transition-colors focus-visible:outline-none"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Checkout Form & Order Summary */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 max-h-[80vh] overflow-y-auto">
          {/* Left Column: Customer & Delivery Information */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 bg-[#F8F3EB]">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#302520] mb-4 pb-2 border-b border-[#302520]/10">
                1. Contact & Customer Details
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302520]/70 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Aarav Sharma"
                    className="w-full px-3 py-2 text-xs border border-[#302520]/20 bg-white text-[#302520] focus:outline-none focus:border-[#C5A16B]"
                  />
                  {errors.fullName && <p className="text-[10px] text-red-600 mt-0.5">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302520]/70 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="aarav@example.com"
                      className="w-full px-3 py-2 text-xs border border-[#302520]/20 bg-white text-[#302520] focus:outline-none focus:border-[#C5A16B]"
                    />
                    {errors.email && <p className="text-[10px] text-red-600 mt-0.5">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302520]/70 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="9876543210"
                      className="w-full px-3 py-2 text-xs border border-[#302520]/20 bg-white text-[#302520] focus:outline-none focus:border-[#C5A16B]"
                    />
                    {errors.phone && <p className="text-[10px] text-red-600 mt-0.5">{errors.phone}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#302520] mb-4 pb-2 border-b border-[#302520]/10">
                2. Shipping Address
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302520]/70 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House No, Apartment building, Street name"
                    className="w-full px-3 py-2 text-xs border border-[#302520]/20 bg-white text-[#302520] focus:outline-none focus:border-[#C5A16B]"
                  />
                  {errors.address && <p className="text-[10px] text-red-600 mt-0.5">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302520]/70 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Mumbai"
                      className="w-full px-3 py-2 text-xs border border-[#302520]/20 bg-white text-[#302520] focus:outline-none focus:border-[#C5A16B]"
                    />
                    {errors.city && <p className="text-[10px] text-red-600 mt-0.5">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302520]/70 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="Maharashtra"
                      className="w-full px-3 py-2 text-xs border border-[#302520]/20 bg-white text-[#302520] focus:outline-none focus:border-[#C5A16B]"
                    />
                    {errors.state && <p className="text-[10px] text-red-600 mt-0.5">{errors.state}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302520]/70 mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      placeholder="400001"
                      className="w-full px-3 py-2 text-xs border border-[#302520]/20 bg-white text-[#302520] focus:outline-none focus:border-[#C5A16B]"
                    />
                    {errors.pincode && <p className="text-[10px] text-red-600 mt-0.5">{errors.pincode}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#302520] mb-4 pb-2 border-b border-[#302520]/10">
                3. Delivery Method
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, shippingMethod: 'standard' })}
                  className={`p-3 text-left border transition-all ${
                    formData.shippingMethod === 'standard'
                      ? 'border-[#542C3A] bg-[#542C3A] text-[#F8F3EB]'
                      : 'border-[#302520]/20 bg-white text-[#302520]'
                  }`}
                >
                  <div className="font-semibold mb-0.5">Standard Courier</div>
                  <div className="text-[11px] opacity-80">3-5 Business Days</div>
                  <div className="font-bold mt-1">
                    {subtotal >= 999 ? 'Complimentary' : '₹99'}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, shippingMethod: 'express' })}
                  className={`p-3 text-left border transition-all ${
                    formData.shippingMethod === 'express'
                      ? 'border-[#542C3A] bg-[#542C3A] text-[#F8F3EB]'
                      : 'border-[#302520]/20 bg-white text-[#302520]'
                  }`}
                >
                  <div className="font-semibold mb-0.5">Express Air Insured</div>
                  <div className="text-[11px] opacity-80">1-2 Business Days</div>
                  <div className="font-bold mt-1">₹199</div>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#302520] mb-4 pb-2 border-b border-[#302520]/10">
                4. Simulated Payment Method
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {(['UPI', 'Card', 'Net Banking', 'Cash on Delivery'] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: method })}
                    className={`p-2.5 text-center border font-medium transition-all ${
                      formData.paymentMethod === method
                        ? 'border-[#542C3A] bg-[#542C3A] text-[#F8F3EB]'
                        : 'border-[#302520]/20 bg-white text-[#302520] hover:border-[#542C3A]'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Confirmation CTA */}
          <div className="md:col-span-5 p-6 sm:p-8 bg-[#E8D8C5]/30 border-l border-[#302520]/10 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#302520] mb-4 pb-2 border-b border-[#302520]/10">
                Order Review ({items.length} items)
              </h3>

              <div className="space-y-3 mb-6 max-h-56 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 text-xs">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-12 object-cover bg-white border border-[#302520]/10 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-serif-luxury font-medium text-[#302520] truncate">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-[#A79889]">
                        Qty: {item.quantity} · {item.type === 'standard' ? item.size : 'Box Set'}
                      </div>
                    </div>
                    <div className="tabular-nums font-medium text-[#302520]">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sample indicator */}
              <div className="p-3 bg-white border border-[#302520]/10 mb-6 text-xs text-[#302520]/80">
                <span className="text-[10px] uppercase tracking-wider text-[#C5A16B] font-bold block mb-0.5">
                  Included Gift:
                </span>
                <span>{sampleChoice}</span>
              </div>

              {/* Price Calculation */}
              <div className="space-y-2 text-xs border-t border-[#302520]/10 pt-4">
                <div className="flex justify-between text-[#302520]/80">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-medium">
                    <span>Privilege Discount</span>
                    <span className="tabular-nums">−₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#302520]/80">
                  <span>Shipping Fee</span>
                  <span className="tabular-nums font-medium">
                    {shippingFee === 0 ? 'Complimentary' : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="pt-3 border-t border-[#302520]/15 flex justify-between items-baseline">
                  <span className="text-sm font-semibold text-[#302520]">Total Amount</span>
                  <span className="text-2xl font-serif-luxury font-medium text-[#302520] tabular-nums">
                    ₹{orderTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#542C3A] text-[#F8F3EB] text-xs uppercase tracking-widest font-semibold hover:bg-[#302520] transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Securing Order...</span>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4 text-[#C5A16B]" />
                    <span>Confirm Order · ₹{orderTotal.toLocaleString('en-IN')}</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-[#A79889] mt-3 leading-relaxed">
                Demonstration order. No funds will be charged. Instant confirmation generated.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
