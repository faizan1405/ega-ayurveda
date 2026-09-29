import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { X, Star, ShoppingBag, ArrowRight, Check } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onViewFullDetail: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onViewFullDetail,
}) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-ivory-50 rounded-3xl shadow-2xl border border-sage-200 overflow-hidden z-10 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-md text-forest-900 hover:text-forest-700 shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto w-full bg-ivory-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              <span
                className={`px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md ${
                  product.badge === '100% Vegan'
                    ? 'bg-emerald-950/80 text-emerald-300'
                    : 'bg-amber-950/80 text-amber-200'
                }`}
              >
                {product.badge}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-2">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-semibold text-forest-950">{product.rating}</span>
                <span className="text-[11px] text-forest-700/60">({product.reviewCount} reviews)</span>
              </div>

              <span className="text-xs font-serif text-forest-700 italic block">
                {product.sanskritName}
              </span>

              <h3 className="font-serif text-2xl font-medium text-forest-950 mt-1 mb-2">
                {product.name}
              </h3>

              <p className="text-xs text-forest-800/80 leading-relaxed font-light mb-4">
                {product.description}
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-serif text-xl font-semibold text-forest-950">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-xs text-forest-800/40 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-[10px] text-forest-700/60 ml-auto font-mono">
                  {product.weightVolume}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-full bg-white border border-sage-300 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 flex items-center justify-center text-xs text-forest-900"
                  >
                    -
                  </button>
                  <span className="w-7 text-center text-xs font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center text-xs text-forest-900"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 ${
                    justAdded ? 'bg-emerald-700 text-white' : 'bg-forest-900 text-ivory-50 hover:bg-forest-850'
                  }`}
                >
                  {justAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4 text-gold-400" />}
                  <span>{justAdded ? 'Added' : 'Add To Cart'}</span>
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onViewFullDetail(product);
                }}
                className="w-full py-2.5 rounded-full bg-transparent text-forest-900 text-xs uppercase tracking-wider font-semibold hover:bg-forest-900/5 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Complete Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
