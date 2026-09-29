import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag, Eye, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface SignatureFiveShowcaseProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const SignatureFiveShowcase: React.FC<SignatureFiveShowcaseProps> = ({
  products,
  onSelectProduct,
  onQuickView,
}) => {
  // Exact 5 Client Products
  const signatureProducts = products.slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { addToCart } = useCart();

  const currentProduct = signatureProducts[currentIndex] || signatureProducts[0];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % signatureProducts.length);
    setTimeout(() => setIsAnimating(false), 450);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + signatureProducts.length) % signatureProducts.length);
    setTimeout(() => setIsAnimating(false), 450);
  };

  const handleSelectIndex = (idx: number) => {
    if (idx === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(idx);
    setTimeout(() => setIsAnimating(false), 450);
  };

  return (
    <section
      id="signature-collection"
      className="relative py-24 lg:py-32 bg-ivory-50 bg-grain border-b border-stone-200 overflow-hidden"
    >
      {/* Background Ambient Aura */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-gold-300/10 via-champagne-200/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-stone-300/60">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-stone-300 text-[11px] font-serif uppercase tracking-[0.2em] text-stone-800 mb-3">
              <Sparkles className="w-3 h-3 text-gold-600" />
              <span>Core Client Collection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-950 tracking-tight">
              Our Signature Formulations
            </h2>
          </div>

          {/* Stepped Progress Indicator 01 / 05 */}
          <div className="mt-6 md:mt-0 flex items-center gap-6">
            <div className="flex items-baseline gap-1 font-serif">
              <span className="text-3xl sm:text-4xl font-light text-stone-950 tracking-wider">
                0{currentIndex + 1}
              </span>
              <span className="text-sm text-stone-400 font-sans tracking-widest">
                / 0{signatureProducts.length}
              </span>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-stone-300 bg-white/80 hover:bg-stone-950 hover:text-ivory-50 hover:border-stone-950 transition-all flex items-center justify-center text-stone-800 shadow-2xs"
                aria-label="Previous signature product"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-stone-300 bg-white/80 hover:bg-stone-950 hover:text-ivory-50 hover:border-stone-950 transition-all flex items-center justify-center text-stone-800 shadow-2xs"
                aria-label="Next signature product"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Oversized Stepped Experience Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Oversized Product Showcase (Left 7 cols) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            
            {/* Floating Soft Decorative Botanical Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full border border-gold-300/30 animate-spin-slow" />
              <div className="w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full border border-stone-300/40" />
            </div>

            {/* Product Image Stage */}
            <div
              className={`relative w-full max-w-[540px] aspect-square rounded-3xl p-4 sm:p-6 bg-white/80 border border-stone-300/80 shadow-2xl backdrop-blur-xs transition-all duration-500 ease-out transform ${
                isAnimating ? 'opacity-40 scale-95 translate-x-4' : 'opacity-100 scale-100 translate-x-0'
              }`}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-stone-100">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Badges on Stage */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-serif uppercase tracking-widest font-medium border shadow-xs ${
                      currentProduct.badge === '100% Vegan'
                        ? 'bg-emerald-950/90 text-emerald-200 border-emerald-500/40'
                        : 'bg-stone-950/90 text-gold-300 border-gold-400/40'
                    }`}
                  >
                    {currentProduct.badge}
                  </span>
                  {currentProduct.isBestseller && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-serif uppercase tracking-widest bg-stone-900/90 text-ivory-50 border border-stone-700 shadow-xs">
                      Signature Bestseller
                    </span>
                  )}
                </div>

                {/* Quick View Button Overlay */}
                <button
                  onClick={() => onQuickView(currentProduct)}
                  className="absolute bottom-4 right-4 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-stone-300 text-stone-900 text-xs font-serif uppercase tracking-wider flex items-center gap-1.5 hover:bg-stone-950 hover:text-ivory-50 transition-colors shadow-md"
                >
                  <Eye className="w-3.5 h-3.5 text-gold-600" />
                  <span>Quick View</span>
                </button>
              </div>
            </div>

          </div>

          {/* Stepped Product Information (Right 5 cols) */}
          <div
            className={`lg:col-span-5 flex flex-col transition-all duration-500 ease-out ${
              isAnimating ? 'opacity-40 translate-y-3' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Category / Sanskrit Name */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase font-serif tracking-[0.2em] text-gold-700 font-semibold">
                {currentProduct.category}
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-xs font-serif text-stone-600 italic">
                {currentProduct.sanskritName}
              </span>
            </div>

            {/* Product Name */}
            <h3 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal tracking-tight mb-3">
              {currentProduct.name}
            </h3>

            {/* Purpose */}
            <p className="text-sm sm:text-base font-serif italic text-gold-800 mb-4">
              "{currentProduct.shortPurpose}"
            </p>

            {/* Description */}
            <p className="text-sm text-stone-700 leading-relaxed font-light mb-6">
              {currentProduct.description}
            </p>

            {/* 2-3 Key Highlights */}
            <div className="space-y-2.5 mb-8 p-4 rounded-2xl bg-white/80 border border-stone-200 shadow-2xs">
              <span className="text-[11px] uppercase tracking-wider font-serif text-stone-500 font-medium">
                Formulation Highlights
              </span>
              {currentProduct.featureBadges.slice(0, 3).map((badge, bIdx) => (
                <div key={bIdx} className="flex items-center gap-2.5 text-xs text-stone-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Price & Weight */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-2xl sm:text-3xl font-serif text-stone-950 font-normal">
                ₹{currentProduct.price.toLocaleString('en-IN')}
              </span>
              {currentProduct.originalPrice > currentProduct.price && (
                <span className="text-sm text-stone-400 line-through">
                  ₹{currentProduct.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-xs text-stone-500 ml-auto font-serif">
                {currentProduct.weightVolume}
              </span>
            </div>

            {/* CTAs: Learn More + Add to Cart */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onSelectProduct(currentProduct)}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-full border border-stone-950 text-stone-950 hover:bg-stone-950 hover:text-ivory-50 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => addToCart(currentProduct)}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-stone-950 text-ivory-50 hover:bg-stone-900 hover:shadow-lg text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-gold-400" />
                <span>Add to Cart</span>
              </button>
            </div>

          </div>

        </div>

        {/* Thumbnail Selector Rail along Bottom */}
        <div className="mt-14 pt-8 border-t border-stone-300/60 grid grid-cols-5 gap-2 sm:gap-4">
          {signatureProducts.map((prod, idx) => (
            <button
              key={prod.id}
              onClick={() => handleSelectIndex(idx)}
              className={`group flex flex-col items-center p-2 rounded-xl border text-center transition-all duration-300 ${
                idx === currentIndex
                  ? 'border-gold-500 bg-white shadow-md'
                  : 'border-stone-200/80 bg-white/40 hover:bg-white/80 hover:border-stone-300'
              }`}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-stone-100 mb-2">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[10px] tracking-wider uppercase font-serif text-stone-400">
                0{idx + 1}
              </span>
              <span
                className={`text-[11px] sm:text-xs font-serif line-clamp-1 ${
                  idx === currentIndex ? 'text-stone-950 font-medium' : 'text-stone-600'
                }`}
              >
                {prod.name}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
