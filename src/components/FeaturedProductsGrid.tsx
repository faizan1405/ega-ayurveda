import React, { useState } from 'react';
import { Product } from '../types';
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
  const [activeFilter, setActiveFilter] = useState<'all' | 'vegan' | 'vegetarian' | 'alchemy'>('all');

  const filteredProducts = products.filter((p) => {
    if (activeFilter === 'vegan') return p.badge === '100% Vegan';
    if (activeFilter === 'vegetarian') return p.badge === 'Pure Vegetarian';
    if (activeFilter === 'alchemy') return p.elementHighlight === 'gold' || p.elementHighlight === 'both';
    return true;
  });

  return (
    <section id="featured-products" className="py-20 sm:py-28 bg-ivory-100/70 border-b border-sage-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-200/50 text-forest-900 text-xs font-medium tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Curated Master Formulations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-forest-950 tracking-tight">
              The Five Essential Pillars
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-forest-800/70 font-light">
              Carefully formulated across Rasayana longevity, neuro-calming, cellular detox, and botanical radiance.
              Each prepared according to classical Ayurvedic scripture.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-ivory-50 border border-sage-200/80 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-forest-900 text-ivory-50 shadow-xs'
                  : 'text-forest-800/80 hover:text-forest-950'
              }`}
            >
              All (5)
            </button>
            <button
              onClick={() => setActiveFilter('vegetarian')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition-all ${
                activeFilter === 'vegetarian'
                  ? 'bg-forest-900 text-ivory-50 shadow-xs'
                  : 'text-forest-800/80 hover:text-forest-950'
              }`}
            >
              <Shield className="w-3 h-3 text-gold-400" />
              <span>Pure Vegetarian</span>
            </button>
            <button
              onClick={() => setActiveFilter('vegan')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition-all ${
                activeFilter === 'vegan'
                  ? 'bg-forest-900 text-ivory-50 shadow-xs'
                  : 'text-forest-800/80 hover:text-forest-950'
              }`}
            >
              <Leaf className="w-3 h-3 text-emerald-400" />
              <span>100% Vegan</span>
            </button>
            <button
              onClick={() => setActiveFilter('alchemy')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition-all ${
                activeFilter === 'alchemy'
                  ? 'bg-forest-900 text-ivory-50 shadow-xs'
                  : 'text-forest-800/80 hover:text-forest-950'
              }`}
            >
              <Sparkles className="w-3 h-3 text-gold-400" />
              <span>Gold & Silver</span>
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

        {/* Note on Formulation Integrity */}
        <div className="mt-12 p-4 rounded-xl bg-ivory-50 border border-sage-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-forest-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-500 shrink-0" />
            <span>
              <strong>Ayurvedic Verification:</strong> All formulations undergo botanical fingerprinting and heavy-metal testing in accordance with AYUSH standards.
            </span>
          </div>
          <span className="font-serif italic text-forest-900">
            Charaka Samhita & Sharangdhara Compliant
          </span>
        </div>

      </div>
    </section>
  );
};
