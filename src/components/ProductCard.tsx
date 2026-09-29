import React, { useState } from 'react';
import { Star, Eye, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';
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
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-sage-200/70 hover:border-gold-500/40 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer"
    >
      {/* Product Image Container (Dominates card) */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-ivory-100 flex items-center justify-center">
        {/* Main Product Image */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isHovered ? 'scale-108' : 'scale-100'
          }`}
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Badges Top Bar */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-start justify-between gap-2 pointer-events-none z-10">
          {/* Dietary Badge: Vegan vs Pure Vegetarian strictly verified */}
          <div className="flex flex-col gap-1.5 items-start">
            <span
              className={`px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-xs ${
                product.badge === '100% Vegan'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                  : 'bg-amber-950/80 text-amber-200 border border-amber-500/30'
              }`}
            >
              {product.badge}
            </span>

            {/* Element badge (Gold / Silver / Both) */}
            {product.elementHighlight === 'gold' && (
              <span className="px-2.5 py-0.5 rounded-full text-[9px] font-serif uppercase tracking-widest bg-forest-900/90 text-gold-300 border border-gold-500/40">
                ✦ 24K Swarna
              </span>
            )}
            {product.elementHighlight === 'both' && (
              <span className="px-2.5 py-0.5 rounded-full text-[9px] font-serif uppercase tracking-widest bg-forest-900/90 text-gold-300 border border-gold-500/40">
                ✦ Swarna & Rajata
              </span>
            )}
          </div>

          {/* Bestseller Badge */}
          {product.isBestseller && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-medium tracking-widest uppercase bg-gold-500 text-forest-950 shadow-sm font-serif">
              Bestseller
            </span>
          )}
        </div>

        {/* Hover Slide-Up Actions Overlay */}
        <div
          className={`absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-2 transition-all duration-300 z-20 ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Quick View Button */}
          <button
            type="button"
            onClick={handleQuickView}
            className="p-2.5 rounded-xl bg-ivory-50/95 text-forest-900 hover:text-forest-950 hover:bg-white shadow-md border border-sage-200 transition-colors"
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
                ? 'bg-emerald-700 text-white'
                : 'bg-forest-900 text-ivory-50 hover:bg-forest-850 hover:shadow-lg'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Ritual</span>
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

      {/* Card Information Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Rating and Reviews */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-xs font-semibold text-forest-950">
                {product.rating}
              </span>
              <span className="text-[11px] text-forest-800/50">
                ({product.reviewCount})
              </span>
            </div>

            <span className="text-[10px] uppercase tracking-wider text-forest-700/60 font-medium">
              {product.weightVolume}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-lg sm:text-xl font-medium text-forest-950 group-hover:text-forest-800 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short Purpose */}
          <p className="mt-1 text-xs text-forest-800/70 line-clamp-2 leading-relaxed font-light">
            {product.shortPurpose}
          </p>
        </div>

        {/* Price & Savings */}
        <div className="mt-4 pt-3 border-t border-sage-100 flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg font-semibold text-forest-950">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-forest-800/40 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <span className="text-[11px] font-medium tracking-wide text-forest-700 underline underline-offset-4 group-hover:text-gold-600 transition-colors">
            View Ritual →
          </span>
        </div>
      </div>
    </div>
  );
};
