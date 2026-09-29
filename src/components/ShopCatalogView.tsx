import React, { useState } from 'react';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, ArrowLeft, Filter, SlidersHorizontal, Check } from 'lucide-react';

interface ShopCatalogViewProps {
  products: Product[];
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  initialFilter?: string;
}

export const ShopCatalogView: React.FC<ShopCatalogViewProps> = ({
  products,
  onBack,
  onSelectProduct,
  onQuickView,
  initialFilter = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialFilter);
  const [dietaryFilter, setDietaryFilter] = useState<'all' | '100% Vegan' | 'Pure Vegetarian'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = [
    { label: 'All', value: 'all', count: products.length },
    { label: 'Daily Wellness', value: 'Daily Wellness', count: products.filter(p => p.category === 'Daily Wellness').length },
    { label: 'Digestive', value: 'Digestive', count: products.filter(p => p.category === 'Digestive').length },
    { label: 'Vitality', value: 'Vitality', count: products.filter(p => p.category === 'Vitality').length },
    { label: 'Metabolic', value: 'Metabolic', count: products.filter(p => p.category === 'Metabolic').length },
    { label: 'Ayurvedic Rituals', value: 'Ayurvedic Rituals', count: products.filter(p => p.category === 'Ayurvedic Rituals').length },
    { label: 'Premium Ayurveda', value: 'Premium Ayurveda', count: products.filter(p => p.category === 'Premium Ayurveda').length },
  ];

  // Filtering
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      p.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesDietary =
      dietaryFilter === 'all' || p.badge === dietaryFilter;
    return matchesCategory && matchesDietary;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // default featured
  });

  return (
    <div className="min-h-screen pt-28 pb-24 bg-ivory-50 bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-stone-600 hover:text-stone-950 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home Experience</span>
          </button>

          <span className="text-xs font-serif text-stone-500">
            Showing {sortedProducts.length} curated formulations
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-stone-300 text-stone-900 text-xs font-serif uppercase tracking-[0.2em] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>The Complete Apothecary</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-stone-950 tracking-tight leading-tight">
            Curated Formulations
          </h1>

          <p className="mt-3 text-sm sm:text-base text-stone-600 font-light max-w-xl mx-auto">
            Anchored around our 5 signature formulations in champagne silver, accompanied by classical compendium remedies.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Main Category Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-stone-950 text-ivory-50 shadow-md scale-102'
                    : 'bg-white/80 border border-stone-200/90 text-stone-700 hover:border-stone-400 hover:text-stone-950'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Secondary Controls: Dietary & Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-300/60">
            
            {/* Dietary Badge Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs uppercase tracking-wider font-serif text-stone-500 font-medium mr-1">
                Dietary:
              </span>
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  dietaryFilter === 'all'
                    ? 'bg-stone-200 text-stone-900 font-semibold'
                    : 'bg-transparent text-stone-600 hover:text-stone-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter('100% Vegan')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                  dietaryFilter === '100% Vegan'
                    ? 'bg-emerald-900 text-emerald-100 font-semibold'
                    : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                100% Vegan
              </button>
              <button
                onClick={() => setDietaryFilter('Pure Vegetarian')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                  dietaryFilter === 'Pure Vegetarian'
                    ? 'bg-gold-800 text-gold-100 font-semibold'
                    : 'bg-champagne-100 text-gold-900 hover:bg-champagne-200'
                }`}
              >
                Pure Vegetarian
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
              <span className="text-xs uppercase tracking-wider font-serif text-stone-500 font-medium">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-stone-300 rounded-full px-3.5 py-1.5 text-xs text-stone-800 focus:outline-hidden focus:border-stone-950 font-serif"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

          </div>

        </div>

        {/* Product Grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-200">
            <p className="font-serif text-lg text-stone-700">No formulations found matching this filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-stone-950 text-ivory-50 text-xs uppercase tracking-wider font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
