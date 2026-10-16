import React, { createContext, useContext, useState, useEffect } from 'react';
import { Fragrance } from '../data/fragrances';

export type BottleSize = '15ml' | '50ml' | '100ml';

export interface CartStandardItem {
  type: 'standard';
  id: string; // unique cart line id
  fragranceId: string;
  name: string;
  size: BottleSize;
  price: number;
  quantity: number;
  image: string;
  family: string;
}

export interface CartDiscoveryBoxItem {
  type: 'box';
  id: string;
  name: string;
  miniIds: string[];
  miniNames: string[];
  price: number; // fixed ₹999
  quantity: number;
  image: string;
  giftNote?: string;
  monogram?: string;
}

export type CartItem = CartStandardItem | CartDiscoveryBoxItem;

export interface CheckoutDetails {
  orderNumber: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'UPI' | 'Card' | 'Net Banking' | 'Cash on Delivery';
  shippingMethod: 'standard' | 'express';
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  items: CartItem[];
  sampleChoice: string;
  createdAt: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addStandardItem: (fragrance: Fragrance, size?: BottleSize, quantity?: number) => void;
  addDiscoveryBox: (miniIds: string[], miniNames: string[], giftNote?: string, monogram?: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  subtotal: number;
  totalItemsCount: number;
  couponCode: string;
  discountAmount: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  sampleChoice: string;
  setSampleChoice: (sample: string) => void;
  completedOrder: CheckoutDetails | null;
  setCompletedOrder: (order: CheckoutDetails | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'scentstory_cart_items';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [sampleChoice, setSampleChoice] = useState('After the Rain (2ml Vial)');
  const [completedOrder, setCompletedOrder] = useState<CheckoutDetails | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const calculateSizePrice = (basePrice: number, size: BottleSize): number => {
    if (size === '15ml') return Math.max(799, Math.round(basePrice * 0.6));
    if (size === '100ml') return Math.round(basePrice * 1.55);
    return basePrice; // 50ml default
  };

  const addStandardItem = (fragrance: Fragrance, size: BottleSize = '50ml', quantity = 1) => {
    const itemPrice = calculateSizePrice(fragrance.price, size);
    const lineId = `${fragrance.id}-${size}`;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === lineId);
      if (existing) {
        return prev.map((item) =>
          item.id === lineId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      const newItem: CartStandardItem = {
        type: 'standard',
        id: lineId,
        fragranceId: fragrance.id,
        name: fragrance.name,
        size,
        price: itemPrice,
        quantity,
        image: fragrance.image,
        family: fragrance.family
      };
      return [...prev, newItem];
    });

    setIsOpen(true);
  };

  const addDiscoveryBox = (
    miniIds: string[],
    miniNames: string[],
    giftNote?: string,
    monogram?: string
  ) => {
    const boxId = `box-${Date.now()}`;
    const boxItem: CartDiscoveryBoxItem = {
      type: 'box',
      id: boxId,
      name: 'Bespoke Fragrance Discovery Box (3 × 10ml)',
      miniIds,
      miniNames,
      price: 999,
      quantity: 1,
      image: '/src/assets/images/fragrance_discovery_box_1792142430048.jpg',
      giftNote,
      monogram
    };

    setItems((prev) => [...prev, boxItem]);
    setIsOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
    setCouponCode('');
    setDiscountAmount(0);
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const applyCoupon = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === 'STORY10' || trimmed === 'WELCOME10') {
      const discount = Math.round(subtotal * 0.1);
      setCouponCode(trimmed);
      setDiscountAmount(discount);
      return { success: true, message: '10% promotional privilege applied' };
    }
    if (trimmed === 'SCENT20' && subtotal >= 2000) {
      const discount = Math.round(subtotal * 0.2);
      setCouponCode(trimmed);
      setDiscountAmount(discount);
      return { success: true, message: '₹' + discount + ' VIP collector privilege applied' };
    }
    return { success: false, message: 'Invalid code. Try STORY10 for 10% off' };
  };

  const removeCoupon = () => {
    setCouponCode('');
    setDiscountAmount(0);
  };

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addStandardItem,
        addDiscoveryBox,
        updateQuantity,
        removeItem,
        clearCart,
        subtotal,
        totalItemsCount,
        couponCode,
        discountAmount,
        applyCoupon,
        removeCoupon,
        sampleChoice,
        setSampleChoice,
        completedOrder,
        setCompletedOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
