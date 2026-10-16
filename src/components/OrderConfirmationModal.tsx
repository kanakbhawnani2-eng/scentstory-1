import React from 'react';
import { CheckCircle2, Package, Sparkles, Download, ArrowRight, ShieldCheck } from 'lucide-react';
import { CheckoutDetails } from '../context/CartContext';

interface OrderConfirmationModalProps {
  order: CheckoutDetails | null;
  onClose: () => void;
  onContinueShopping: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  onClose,
  onContinueShopping
}) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#302520]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#F8F3EB] border border-[#302520]/20 shadow-2xl overflow-hidden my-6">
        {/* Celebration Banner */}
        <div className="bg-[#542C3A] text-[#F8F3EB] p-8 text-center relative overflow-hidden">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#C5A16B] rounded-full flex items-center justify-center text-[#542C3A] shadow-md">
            <CheckCircle2 className="w-9 h-9 stroke-[2]" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A16B] font-semibold block mb-2">
            Order Confirmed & Preparing
          </span>
          <h2 className="text-3xl font-serif-luxury font-medium text-[#F8F3EB] mb-2">
            Every Scent Tells a Story.
          </h2>
          <p className="text-sm text-[#F8F3EB]/80 font-light max-w-md mx-auto">
            Thank you, {order.fullName}. Your artisanal fragrance creation is now being compounded and packaged with bespoke care.
          </p>

          <div className="mt-4 inline-block bg-[#302520]/60 px-4 py-1.5 border border-[#C5A16B]/40 text-xs font-mono tracking-widest text-[#C5A16B]">
            ORDER #{order.orderNumber}
          </div>
        </div>

        {/* Order Details Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Dispatch Notice */}
          <div className="flex items-center gap-3 p-4 bg-[#E8D8C5]/40 border border-[#302520]/10 text-xs text-[#302520]">
            <Package className="w-5 h-5 text-[#542C3A] shrink-0" />
            <div>
              <span className="font-semibold block text-[#302520]">
                Estimated Delivery: 3–5 Business Days
              </span>
              Tracking information will be dispatched to <strong className="font-mono">{order.email}</strong> once your order leaves our atelier.
            </div>
          </div>

          {/* Purchased Items */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#A79889] font-semibold mb-3">
              Ordered Creations
            </h4>
            <div className="space-y-3">
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-white border border-[#302520]/10 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-12 object-cover bg-[#E8D8C5] border border-[#302520]/10"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-serif-luxury font-medium text-sm text-[#302520]">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-[#A79889]">
                        Qty: {item.quantity} · {item.type === 'standard' ? item.size : 'Bespoke Coffret'}
                      </div>
                    </div>
                  </div>

                  <span className="tabular-nums font-medium text-[#302520]">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Complimentary Sample & Monogram */}
          <div className="p-3 bg-white border border-[#302520]/10 text-xs space-y-1">
            <div className="flex justify-between">
              <span className="text-[#A79889]">Complimentary 2ml Vial:</span>
              <span className="font-medium text-[#302520]">{order.sampleChoice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A79889]">Payment Method:</span>
              <span className="font-medium text-[#302520]">{order.paymentMethod} (Simulated)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A79889]">Delivery Address:</span>
              <span className="font-medium text-[#302520] text-right truncate max-w-xs">
                {order.address}, {order.city}, {order.state} - {order.pincode}
              </span>
            </div>
          </div>

          {/* Financial Totals */}
          <div className="pt-3 border-t border-[#302520]/10 text-xs space-y-1.5">
            <div className="flex justify-between text-[#302520]/80">
              <span>Subtotal</span>
              <span className="tabular-nums">₹{order.subtotal.toLocaleString('en-IN')}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-emerald-800 font-medium">
                <span>Promotional Discount</span>
                <span className="tabular-nums">−₹{order.discount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between text-[#302520]/80">
              <span>Shipping</span>
              <span className="tabular-nums">
                {order.shippingFee === 0 ? 'Complimentary' : `₹${order.shippingFee}`}
              </span>
            </div>
            <div className="flex justify-between items-baseline pt-2 border-t border-[#302520]/15 font-semibold text-sm">
              <span className="text-[#302520]">Total Paid</span>
              <span className="text-xl font-serif-luxury text-[#542C3A] tabular-nums">
                ₹{order.total.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-[#E8D8C5]/30 border-t border-[#302520]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#302520]/30 text-xs font-medium text-[#302520] hover:bg-white transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Print Receipt</span>
          </button>

          <button
            onClick={onContinueShopping}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#542C3A] text-[#F8F3EB] text-xs uppercase tracking-widest font-medium hover:bg-[#302520] transition-colors"
          >
            <span>Continue Exploring ScentStory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
