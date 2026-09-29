import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import type { Product } from '../types';

interface CartDrawerProps {
  onSelectProduct: (product: Product) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onSelectProduct }) => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    promoCode,
    applyPromoCode,
    removePromoCode,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    freeShippingProgress,
    openCheckout,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<{ success: boolean; message: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode) return;
    const res = applyPromoCode(inputCode);
    setPromoFeedback(res);
  };

  const finalTotal = Math.max(0, subtotal - discountAmount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-md bg-ivory-50 h-full shadow-2xl flex flex-col z-10 animate-slide-left">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-stone-900" />
            <span className="font-serif text-lg font-medium text-stone-950">
              Your Daily Ritual ({items.reduce((s, i) => s + i.quantity, 0)})
            </span>
          </div>

          <button
            onClick={closeCart}
            className="p-1.5 rounded-full text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-champagne-100/60 border-b border-stone-200">
          <div className="flex items-center justify-between text-xs text-stone-900 mb-1.5 font-medium">
            <span>
              {amountNeededForFreeShipping === 0 ? (
                <strong className="text-emerald-800">Complimentary Shipping Unlocked! 🌿</strong>
              ) : (
                <>Add <strong>₹{amountNeededForFreeShipping.toLocaleString('en-IN')}</strong> more for Free Shipping</>
              )}
            </span>
            <span className="text-[10px] text-stone-600 font-mono">
              ₹{subtotal.toLocaleString('en-IN')} / ₹{freeShippingThreshold.toLocaleString('en-IN')}
            </span>
          </div>

          <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-stone-950 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 mb-4">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h4 className="font-serif text-xl font-normal text-stone-950">
                Your ritual bag is empty
              </h4>
              <p className="mt-1 text-xs text-stone-600 max-w-xs font-light">
                Explore our classical formulations to begin your personalized wellness journey.
              </p>
              <button
                onClick={closeCart}
                className="mt-6 px-6 py-2.5 rounded-full bg-stone-950 text-ivory-50 text-xs uppercase tracking-wider font-semibold hover:bg-stone-900 transition-colors"
              >
                Explore Formulations
              </button>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-xs flex gap-3.5 items-center"
              >
                {/* Thumbnail */}
                <div
                  onClick={() => {
                    closeCart();
                    onSelectProduct(product);
                  }}
                  className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-champagne-100/50 p-1 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h5
                      onClick={() => {
                        closeCart();
                        onSelectProduct(product);
                      }}
                      className="font-serif text-sm font-medium text-stone-950 truncate cursor-pointer hover:text-gold-700"
                    >
                      {product.name}
                    </h5>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="text-[10px] text-stone-500 font-serif italic block">
                    {product.weightVolume}
                  </span>

                  <div className="flex items-center justify-between mt-2">
                    {/* Qty Modifier */}
                    <div className="flex items-center rounded-lg bg-stone-50 border border-stone-200">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs text-stone-900 hover:bg-stone-200 transition-colors rounded-l-lg"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-xs font-semibold text-stone-950">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs text-stone-900 hover:bg-stone-200 transition-colors rounded-r-lg"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-serif text-sm font-semibold text-stone-950">
                      ₹{(product.price * quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Promo Code & Footer Checkout Summary */}
        {items.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-white space-y-4">
            {/* Promo Code Input */}
            <div>
              {promoCode ? (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-gold-400/15 border border-gold-400/40 text-xs">
                  <div className="flex items-center gap-1.5 text-stone-950 font-medium">
                    <Tag className="w-3.5 h-3.5 text-gold-600" />
                    <span>Applied: <strong>{promoCode}</strong> (-₹{discountAmount.toLocaleString('en-IN')})</span>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-[11px] text-stone-600 hover:text-stone-950 underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    placeholder="Ritual code (try AYURVEDA10)"
                    className="flex-1 px-3 py-2 rounded-xl bg-ivory-50 border border-stone-200 text-xs uppercase tracking-wider text-stone-950 focus:outline-hidden focus:border-stone-800"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-stone-950 text-ivory-50 text-xs uppercase tracking-wider font-semibold hover:bg-stone-900"
                  >
                    Apply
                  </button>
                </form>
              )}

              {promoFeedback && (
                <p className={`text-[10px] mt-1 ${promoFeedback.success ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {promoFeedback.message}
                </p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-serif font-medium text-stone-950">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-800">
                  <span>Ritual Savings</span>
                  <span className="font-serif font-medium">-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-medium text-stone-950">
                  {amountNeededForFreeShipping === 0 ? 'FREE' : '₹150'}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-stone-950 pt-2 border-t border-stone-100">
                <span>Estimated Total</span>
                <span className="font-serif text-base">₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={openCheckout}
              className="w-full py-4 rounded-full bg-stone-950 text-ivory-50 text-xs uppercase tracking-[0.18em] font-semibold hover:bg-stone-900 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
              <span>Certified Batch Tested • 100% Secure Checkout</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
