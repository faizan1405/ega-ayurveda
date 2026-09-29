import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag, Eye, Sparkles } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface HorizontalProductDiscoveryProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const HorizontalProductDiscovery: React.FC<HorizontalProductDiscoveryProps> = ({
  products,
  onSelectProduct,
  onQuickView,
}) => {
  const { addToCart } = useCart();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Focus on the secondary curated TOP Ayurveda products + complementary items
  const discoveryProducts = products.filter(
    (p) =>
      p.id === 'swarna-chyawanprash' ||
      p.id === 'colon-cleanser' ||
      p.id === 'daily-lax' ||
      p.id === 'ashwagandha-pt100-tea' ||
      p.id === 'organic-moringa-tablets' ||
      p.id === 'ayurvedic-oil-pulling'
  );

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="explore-ayurveda"
      className="py-24 sm:py-32 bg-ivory-50 bg-grain border-b border-stone-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-stone-300 text-[11px] font-serif uppercase tracking-[0.2em] text-stone-800 mb-3">
              <Sparkles className="w-3 h-3 text-gold-600" />
              <span>Curated Botanical Lineage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-950 tracking-tight">
              Explore Ayurveda
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base font-light max-w-xl">
              Classical formulations referenced from classical compendiums, refined into modern daily wellness rituals.
            </p>
          </div>

          {/* Scroll Arrows */}
          <div className="flex items-center gap-3 self-end">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-stone-300 bg-white/80 hover:bg-stone-950 hover:text-ivory-50 hover:border-stone-950 transition-all flex items-center justify-center text-stone-800 shadow-2xs"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-stone-300 bg-white/80 hover:bg-stone-950 hover:text-ivory-50 hover:border-stone-950 transition-all flex items-center justify-center text-stone-800 shadow-2xs"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {discoveryProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex-none w-[280px] sm:w-[340px] snap-start rounded-3xl bg-white/90 border border-stone-200/90 hover:border-gold-500/50 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Product Visual */}
              <div
                className="relative aspect-square w-full overflow-hidden bg-stone-100 p-4 cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dietary Badge */}
                <div className="absolute top-6 left-6">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-serif uppercase tracking-widest font-medium border shadow-xs ${
                      product.badge === '100% Vegan'
                        ? 'bg-emerald-950/90 text-emerald-200 border-emerald-500/40'
                        : 'bg-stone-950/90 text-gold-300 border-gold-400/40'
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Quick View Button on Hover */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickView(product);
                  }}
                  className="absolute bottom-6 right-6 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-stone-300 text-stone-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:bg-stone-950 hover:text-ivory-50"
                  aria-label="Quick view"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Card Meta */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-xs font-serif uppercase tracking-[0.18em] text-gold-700 mb-1.5 font-semibold">
                    <span>{product.category}</span>
                    <span className="text-stone-400 font-sans tracking-normal">
                      {product.weightVolume.split(' ')[0]}
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-serif text-lg sm:text-xl text-stone-950 font-normal tracking-tight line-clamp-1 cursor-pointer hover:text-gold-800 transition-colors"
                  >
                    {product.name}
                  </h3>

                  <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed font-light">
                    {product.shortPurpose}
                  </p>
                </div>

                {/* Price and Quick Add */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-base sm:text-lg font-serif text-stone-950 font-normal">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="ml-2 text-xs text-stone-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 rounded-full bg-stone-950 text-ivory-50 hover:bg-stone-900 hover:shadow-md text-xs uppercase tracking-wider font-medium transition-all flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-gold-400" />
                    <span>Add</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
