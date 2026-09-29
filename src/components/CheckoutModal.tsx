import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, ShieldCheck, CheckCircle2, CreditCard, Smartphone, Truck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, closeCheckout, items, subtotal, discountAmount, clearCart } = useCart();
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    name: 'Ananya Sharma',
    email: 'ananya.sharma@example.com',
    phone: '+91 98201 44521',
    address: 'Flat 402, Lotus Grandeur, Worli Sea Face',
    city: 'Mumbai',
    pincode: '400018',
    paymentMethod: 'upi',
  });

  if (!isCheckoutOpen) return null;

  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c69f4b', '#173829', '#e5ece6', '#f3d790'],
      });
    } catch {
      // ignore
    }
  };

  const handleCloseAndReset = () => {
    if (step === 'success') {
      clearCart();
    }
    setStep('details');
    closeCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-950/70 backdrop-blur-xs transition-opacity"
        onClick={handleCloseAndReset}
      />

      <div className="relative w-full max-w-xl bg-ivory-50 rounded-3xl shadow-2xl border border-sage-200 overflow-hidden z-10 animate-scale-in">
        
        {/* Header */}
        <div className="p-5 border-b border-sage-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-medium tracking-widest text-forest-950 uppercase">
              EGA
            </span>
            <span className="text-xs font-serif uppercase tracking-wider text-forest-700">
              | Demo Concierge Checkout
            </span>
          </div>

          <button
            onClick={handleCloseAndReset}
            className="p-1.5 rounded-full text-forest-800 hover:text-forest-950 hover:bg-sage-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {step === 'details' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="p-3 rounded-xl bg-gold-400/15 border border-gold-400/40 text-xs text-forest-950 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
              <span>
                <strong>Client Presentation Mode:</strong> Instant demo checkout. No real money or card details required.
              </span>
            </div>

            {/* Delivery Details */}
            <div>
              <h4 className="text-xs font-serif uppercase tracking-widest font-semibold text-forest-900 mb-3">
                1. Delivery Sacred Sanctuary
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-sage-200 text-xs focus:border-forest-800 focus:outline-hidden"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-sage-200 text-xs focus:border-forest-800 focus:outline-hidden"
                />
              </div>

              <div className="mt-3">
                <input
                  type="text"
                  required
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-sage-200 text-xs focus:border-forest-800 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <input
                  type="text"
                  required
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-sage-200 text-xs focus:border-forest-800 focus:outline-hidden"
                />
                <input
                  type="text"
                  required
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-sage-200 text-xs focus:border-forest-800 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h4 className="text-xs font-serif uppercase tracking-widest font-semibold text-forest-900 mb-3">
                2. Select Preferred Payment
              </h4>

              <div className="grid grid-cols-3 gap-2.5">
                <label
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    formData.paymentMethod === 'upi'
                      ? 'bg-forest-900 text-ivory-50 border-forest-900 shadow-xs'
                      : 'bg-white text-forest-900 border-sage-200 hover:border-sage-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                    className="sr-only"
                  />
                  <Smartphone className="w-4 h-4 text-gold-400" />
                  <span className="text-[11px] font-medium">UPI / QR</span>
                </label>

                <label
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    formData.paymentMethod === 'card'
                      ? 'bg-forest-900 text-ivory-50 border-forest-900 shadow-xs'
                      : 'bg-white text-forest-900 border-sage-200 hover:border-sage-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className="sr-only"
                  />
                  <CreditCard className="w-4 h-4 text-gold-400" />
                  <span className="text-[11px] font-medium">Card / Amex</span>
                </label>

                <label
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'bg-forest-900 text-ivory-50 border-forest-900 shadow-xs'
                      : 'bg-white text-forest-900 border-sage-200 hover:border-sage-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className="sr-only"
                  />
                  <Truck className="w-4 h-4 text-gold-400" />
                  <span className="text-[11px] font-medium">Cash on Delivery</span>
                </label>
              </div>
            </div>

            {/* Order Total & Submit */}
            <div className="pt-4 border-t border-sage-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-serif tracking-wider text-forest-700 block">
                  Total Payable
                </span>
                <span className="font-serif text-2xl font-bold text-forest-950">
                  ₹{finalTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-forest-900 text-ivory-50 text-xs uppercase tracking-[0.16em] font-semibold hover:bg-forest-850 hover:shadow-lg transition-all"
              >
                Complete Demo Order
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center animate-scale-in">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-serif text-2xl font-normal text-forest-950">
              Ritual Order Confirmed!
            </h3>

            <p className="text-xs text-forest-800/80 max-w-sm mx-auto leading-relaxed font-light">
              Order <strong>#EGA-{Math.floor(100000 + Math.random() * 900000)}</strong> has been received by our Ayurvedic dispensary. Handcrafted formulations will be dispatched in protective amber glass packaging.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-sage-200 text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <div className="flex justify-between text-forest-800">
                <span>Recipient:</span>
                <strong className="text-forest-950">{formData.name}</strong>
              </div>
              <div className="flex justify-between text-forest-800">
                <span>Shipping Destination:</span>
                <span className="text-forest-950 truncate max-w-[200px]">{formData.city}, {formData.pincode}</span>
              </div>
              <div className="flex justify-between text-forest-800">
                <span>Total Amount:</span>
                <strong className="text-forest-950">₹{finalTotal.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            <button
              onClick={handleCloseAndReset}
              className="mt-6 px-8 py-3.5 rounded-full bg-forest-900 text-ivory-50 text-xs uppercase tracking-[0.16em] font-semibold hover:bg-forest-850 transition-colors"
            >
              Continue Exploring EGA
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
