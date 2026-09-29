import React, { useState } from 'react';
import type { BotanicalIngredient } from '../types';
import { Sparkles } from 'lucide-react';

interface IngredientExperienceProps {
  ingredients: BotanicalIngredient[];
  onSelectProductByIngredient?: (ingredientName: string) => void;
}

export const IngredientExperience: React.FC<IngredientExperienceProps> = ({
  ingredients,
}) => {
  const [selectedIngredient, setSelectedIngredient] = useState<BotanicalIngredient>(ingredients[0]);

  return (
    <section
      id="ingredients-experience"
      className="py-24 sm:py-32 bg-stone-100/60 border-b border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-200/60 text-stone-900 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Botanical Lineage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-950 tracking-tight">
            From Nature to Ritual
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-700 font-light">
            Every mineral, root, and leaf has an energetic profile (Dravya Guna).
            Touch or select an ingredient to reveal its classical Sanskrit context.
          </p>
        </div>

        {/* Circular Interactive Ingredient Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {ingredients.map((ing) => {
            const isCurrent = selectedIngredient.id === ing.id;
            return (
              <button
                key={ing.id}
                onClick={() => setSelectedIngredient(ing)}
                className={`group flex flex-col items-center p-3 rounded-2xl transition-all duration-300 ${
                  isCurrent
                    ? 'bg-white shadow-md border border-gold-500/50 -translate-y-1'
                    : 'bg-transparent hover:bg-white/60'
                }`}
              >
                {/* Circular Macro Image */}
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 transition-all duration-300 ${
                    isCurrent
                      ? 'ring-2 ring-gold-500 ring-offset-2 scale-105'
                      : 'ring-1 ring-stone-300 group-hover:scale-102'
                  }`}
                >
                  <img
                    src={ing.image}
                    alt={ing.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <span className="mt-3 text-xs font-serif font-medium text-stone-950 text-center">
                  {ing.name}
                </span>
                <span className="text-[10px] text-stone-500 font-serif italic text-center">
                  {ing.sanskritName.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Ingredient Editorial Stage */}
        {selectedIngredient && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Ingredient Image with Botanical Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-square rounded-full p-3 bg-gradient-to-tr from-champagne-100 to-ivory-100 border border-gold-400/40 shadow-inner group">
                <div className="w-full h-full rounded-full overflow-hidden shadow-md">
                  <img
                    src={selectedIngredient.image}
                    alt={selectedIngredient.name}
                    className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700"
                  />
                </div>

                <div className="absolute bottom-2 right-2 px-3 py-1 rounded-full bg-stone-950 text-gold-300 text-[10px] uppercase font-serif tracking-wider shadow-md">
                  Dravya Guna
                </div>
              </div>
            </div>

            {/* Right: Rich Ayurvedic Details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-semibold">
                  {selectedIngredient.botanicalName}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span className="text-xs font-serif text-stone-600 italic">
                  {selectedIngredient.sanskritName}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
                {selectedIngredient.name}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-stone-800 font-light italic">
                “{selectedIngredient.shortDescription}”
              </p>

              <div className="my-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h4 className="text-[11px] uppercase font-serif tracking-wider text-stone-800 font-semibold mb-1">
                  Classical Ayurvedic Usage
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  {selectedIngredient.traditionalUsage}
                </p>
              </div>

              {/* Rasa & Dosha Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-xl bg-champagne-100/50 border border-stone-200">
                  <span className="text-[10px] uppercase tracking-wider text-stone-600 font-semibold block">
                    Dosha Affinity
                  </span>
                  <span className="text-xs font-medium text-stone-950">
                    {selectedIngredient.doshaAffinity}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-champagne-100/50 border border-stone-200">
                  <span className="text-[10px] uppercase tracking-wider text-stone-600 font-semibold block">
                    Rasa (Primary Taste)
                  </span>
                  <span className="text-xs font-medium text-stone-950">
                    {selectedIngredient.rasa}
                  </span>
                </div>
              </div>

              {/* Formulations where this ingredient shines */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-stone-700 font-medium">Found in formulations:</span>
                {selectedIngredient.featuredIn.map((feat) => (
                  <span
                    key={feat}
                    className="px-2.5 py-1 rounded-full bg-stone-950 text-ivory-50 text-[10px] font-medium tracking-wide"
                  >
                    {feat}
                  </span>
                ))}
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
