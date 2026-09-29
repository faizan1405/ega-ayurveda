import React, { useState } from 'react';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, Shield, Leaf } from 'lucide-react';

interface FeaturedProductsGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const FeaturedProductsGrid: React.FC<FeaturedProductsGridProps> = ({
  products,
  onSelectProduct,
  onQuickView,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'vitality' | 'metabolic' | 'neuro'>('all');

  const filteredProducts = products.filter((p) => {
    if (activeFilter === 'vitality') return p.category === 'Vitality & Strength' || p.category === 'Immunity Support';
    if (activeFilter === 'metabolic') return p.category === 'Blood Sugar Support';
    if (activeFilter === 'neuro') return p.category === 'Daily Wellness' || p.category === 'Holistic Care';
    return true;
  });

  return (
    <section id="featured-products" className="py-20 sm:py-28 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-200/60 text-stone-900 text-xs font-medium tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>The Core Formulations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-950 tracking-tight">
              Featured Product Showcase
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-stone-700 font-light">
              Crafted with botanical purity, standardized active principles, and encased in luxury champagne silver and gold packaging.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white border border-stone-200/90 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-stone-950 text-ivory-50 shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              All (5)
            </button>
            <button
              onClick={() => setActiveFilter('vitality')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                activeFilter === 'vitality'
                  ? 'bg-stone-950 text-ivory-50 shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Vitality & Strength
            </button>
            <button
              onClick={() => setActiveFilter('metabolic')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                activeFilter === 'metabolic'
                  ? 'bg-stone-950 text-ivory-50 shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Blood Sugar
            </button>
            <button
              onClick={() => setActiveFilter('neuro')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                activeFilter === 'neuro'
                  ? 'bg-stone-950 text-ivory-50 shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Neuro & Radiance
            </button>
          </div>
        </div>

        {/* 5 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Lab Testing Verification Strip */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-600 shrink-0" />
            <span>
              <strong>Purity Assured:</strong> Heavy metal tested via ICP-MS, non-GMO, zero synthetic binders or artificial colors.
            </span>
          </div>
          <span className="font-serif italic text-stone-900">
            Manufactured in GMP & AYUSH Certified Cleanrooms
          </span>
        </div>

      </div>
    </section>
  );
};
