import React, { useState } from 'react';
import { Star, Eye, ShoppingBag, Check, Sparkles } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickView,
}) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickView(product);
  };

  return (
    <div
      onClick={() => onSelect(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/90 hover:border-gold-500/50 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer"
    >
      {/* Product Image Container (Dominates card) */}
      <div className="relative aspect-square w-full overflow-hidden bg-champagne-100/40 flex items-center justify-center p-3">
        {/* Main Product Image */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`w-full h-full object-cover object-center rounded-xl transition-all duration-700 ease-out ${
            isHovered ? 'scale-106' : 'scale-100'
          }`}
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity rounded-xl" />

        {/* Badges Top Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2 pointer-events-none z-10">
          <div className="flex flex-col gap-1.5 items-start">
            {product.isBestseller ? (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-serif uppercase tracking-widest bg-stone-950 text-gold-300 border border-gold-500/40 shadow-xs">
                ✦ Bestseller
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-serif uppercase tracking-widest bg-stone-950/80 text-champagne-200 border border-stone-700/50 shadow-xs">
                Premium Formula
              </span>
            )}
          </div>

          <span className="px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-white/90 text-stone-800 border border-stone-200/80 shadow-xs backdrop-blur-md">
            {product.badge}
          </span>
        </div>

        {/* Hover Slide-Up Actions Overlay */}
        <div
          className={`absolute bottom-4 left-4 right-4 flex items-center gap-2 transition-all duration-300 z-20 ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Quick View Button */}
          <button
            type="button"
            onClick={handleQuickView}
            className="p-2.5 rounded-xl bg-white/95 text-stone-900 hover:text-gold-700 hover:bg-white shadow-md border border-stone-200 transition-colors"
            title="Quick view product details"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
              justAdded
                ? 'bg-emerald-800 text-white'
                : 'bg-stone-950 text-ivory-50 hover:bg-stone-900 hover:shadow-lg'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-gold-400" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Rating */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-xs font-semibold text-stone-950">
                {product.rating}
              </span>
              <span className="text-[11px] text-stone-500">
                ({product.reviewCount})
              </span>
            </div>

            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-mono">
              {product.weightVolume}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-lg font-medium text-stone-950 group-hover:text-gold-700 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short One-Line Purpose */}
          <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed font-light">
            {product.shortPurpose}
          </p>
        </div>

        {/* Price & Savings */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg font-semibold text-stone-950">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-stone-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <span className="text-[11px] font-medium tracking-wider uppercase text-stone-800 group-hover:text-gold-600 transition-colors flex items-center gap-1">
            <span>Explore</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
};
