import React, { useState } from 'react';
import { Product } from '../types';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Flame, Droplets, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FeaturedProductStoryProps {
  heroProduct: Product;
  onViewProductDetail: (product: Product) => void;
}

export const FeaturedProductStory: React.FC<FeaturedProductStoryProps> = ({
  heroProduct,
  onViewProductDetail,
}) => {
  const { addToCart } = useCart();
  const [selectedIngredientIdx, setSelectedIngredientIdx] = useState(0);

  const activeIngredient = heroProduct.keyIngredients[selectedIngredientIdx] || heroProduct.keyIngredients[0];

  return (
    <section className="py-24 sm:py-32 bg-ivory-50 bg-grain border-b border-sage-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill and Tagline */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/20 text-forest-900 border border-gold-500/30 text-xs font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Hero Formulation Spotlight</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-forest-950 tracking-tight">
            Ancient ingredients. Modern ritual.
          </h2>
          <p className="mt-3 text-forest-800/70 text-sm sm:text-base font-light">
            An intimate look into the 21-day slow-simmered alchemy of our signature Swarna Chyawanprash.
          </p>
        </div>

        {/* Asymmetrical Split Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Oversized High-Resolution Product & Interactive Botanical Markers */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-ivory-200/60 p-4 sm:p-6 border border-sage-200 shadow-xl group">
              
              {/* Product Photography */}
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-forest-900 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1608248597359-0a6e0a8169e5?auto=format&fit=crop&w=1200&q=85"
                  alt={heroProduct.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Vignette and Dark Editorial Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-forest-950/20" />

                {/* Floating Interactive Botanical Labels on the Image */}
                <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                  <span className="px-3 py-1 rounded-full bg-forest-900/90 text-gold-300 border border-gold-500/40 text-[11px] font-serif uppercase tracking-widest backdrop-blur-md shadow-md">
                    ✦ 21-Day Slow Simmer
                  </span>
                  <span className="px-3 py-1 rounded-full bg-ivory-50/90 text-forest-900 border border-sage-300 text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
                    Sharangdhara Protocol
                  </span>
                </div>

                {/* Bottom Highlight inside Photo */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-ivory-50/95 backdrop-blur-md border border-sage-200/90 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-serif tracking-[0.2em] text-forest-700">
                      Tissue Affinity (Sapta Dhatu)
                    </span>
                    <span className="text-xs font-semibold text-gold-700">
                      Ojas Enhancer
                    </span>
                  </div>
                  <p className="text-xs text-forest-900/80 leading-relaxed font-light">
                    “Nourishes the body from Rasa (plasma) all the way to Shukra (reproductive vitality), consolidating life energy into pure Ojas.”
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Narrative, Traditional Preparation & Ingredient Tabs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Sanskrit subtitle and Title */}
            <div className="mb-6">
              <span className="text-xs font-serif tracking-widest text-forest-700 uppercase">
                {heroProduct.sanskritName}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-forest-950 mt-1">
                {heroProduct.name}
              </h3>
              <p className="mt-2 text-sm text-forest-800/80 leading-relaxed font-light">
                {heroProduct.description}
              </p>
            </div>

            {/* Interactive 4 Ingredient Selectors */}
            <div className="mb-8">
              <span className="text-[11px] font-serif uppercase tracking-widest text-forest-900/70 block mb-3 font-semibold">
                Explore The Four Sacred Catalyst Ingredients:
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                {heroProduct.keyIngredients.map((ing, idx) => (
                  <button
                    key={ing.name}
                    onClick={() => setSelectedIngredientIdx(idx)}
                    className={`p-3 rounded-xl text-left border transition-all duration-200 ${
                      selectedIngredientIdx === idx
                        ? 'bg-forest-900 text-ivory-50 border-forest-900 shadow-md scale-102'
                        : 'bg-white text-forest-900 border-sage-200 hover:border-gold-400'
                    }`}
                  >
                    <span className="text-[9px] uppercase tracking-wider block opacity-70 mb-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-serif font-medium block truncate">
                      {ing.name.split('(')[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Ingredient Spotlight Card */}
              {activeIngredient && (
                <div className="p-4 rounded-2xl bg-white border border-sage-200/80 shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-gold-400/40 bg-ivory-100">
                    <img
                      src={activeIngredient.image || 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=200&q=80'}
                      alt={activeIngredient.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-serif font-semibold text-forest-950 uppercase tracking-wide">
                        {activeIngredient.name}
                      </h4>
                      <span className="text-[10px] text-forest-700 font-serif italic">
                        {activeIngredient.sanskrit}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-forest-800/80 leading-relaxed font-light">
                      {activeIngredient.benefit}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Classical Ritual Breakdown (Morning / Evening) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-6 border-t border-sage-200">
              <div className="flex items-start gap-3">
                <Sun className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-semibold text-forest-950 uppercase tracking-wider">
                    Morning Dinacharya
                  </h5>
                  <p className="text-xs text-forest-800/70 mt-0.5">
                    1 teaspoon upon waking with warm milk or lukewarm water on an empty stomach.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Moon className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-semibold text-forest-950 uppercase tracking-wider">
                    Anupana Vehicle
                  </h5>
                  <p className="text-xs text-forest-800/70 mt-0.5">
                    Vedic A2 Gir Cow Ghee & unheated raw forest honey act as catalytic cellular carriers.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => addToCart(heroProduct, 1)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-forest-900 text-ivory-50 text-xs uppercase tracking-[0.16em] font-semibold hover:bg-forest-850 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Add To Cart • ₹{heroProduct.price.toLocaleString('en-IN')}</span>
              </button>

              <button
                onClick={() => onViewProductDetail(heroProduct)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-transparent text-forest-900 text-xs uppercase tracking-[0.16em] font-medium border border-forest-900/30 hover:border-forest-900 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Complete Clinical Dossier</span>
                <ArrowRight className="w-3.5 h-3.5 text-forest-700 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
