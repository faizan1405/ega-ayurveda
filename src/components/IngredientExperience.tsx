import React, { useState } from 'react';
import type { BotanicalIngredient } from '../types';
import { Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface IngredientExperienceProps {
  ingredients: BotanicalIngredient[];
  onSelectProductByIngredient?: (ingredientName: string) => void;
}

export const IngredientExperience: React.FC<IngredientExperienceProps> = ({
  ingredients,
  onSelectProductByIngredient,
}) => {
  const [selectedIngredient, setSelectedIngredient] = useState<BotanicalIngredient>(ingredients[0] || ingredients[2]);

  return (
    <section
      id="ingredients-experience"
      className="py-24 sm:py-32 bg-stone-100/70 border-b border-stone-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-200/70 text-stone-900 text-xs font-semibold uppercase tracking-[0.2em] mb-3 border border-stone-300">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Sacred Botanical Lineage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-950 tracking-tight">
            What Goes Into Wellness
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-700 font-light">
            Every mineral, root, and leaf has an energetic profile (Dravya Guna).
            Touch or hover an ingredient circle to reveal its classical Ayurvedic context.
          </p>
        </div>

        {/* Circular Interactive Expanding Ingredient Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 mb-12">
          {ingredients.map((ing) => {
            const isCurrent = selectedIngredient?.id === ing.id;
            return (
              <button
                key={ing.id}
                onClick={() => setSelectedIngredient(ing)}
                onMouseEnter={() => setSelectedIngredient(ing)}
                className={`group flex flex-col items-center p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? 'bg-white shadow-lg border border-gold-500/60 -translate-y-1.5'
                    : 'bg-white/40 hover:bg-white/80 border border-stone-200/60'
                }`}
              >
                {/* Circular Macro Image with Hover Expansion */}
                <div
                  className={`w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden p-1 transition-all duration-300 ${
                    isCurrent
                      ? 'ring-2 ring-gold-500 ring-offset-2 scale-108'
                      : 'ring-1 ring-stone-300 group-hover:scale-104'
                  }`}
                >
                  <img
                    src={ing.image}
                    alt={ing.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <span className="mt-3 text-xs font-serif font-medium text-stone-950 text-center line-clamp-1">
                  {ing.name}
                </span>
                <span className="text-[10px] text-stone-500 font-serif italic text-center line-clamp-1">
                  {ing.sanskritName.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Ingredient Editorial Stage */}
        {selectedIngredient && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Ingredient Image with Botanical Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-square rounded-full p-3 bg-gradient-to-tr from-champagne-100 to-ivory-100 border border-gold-400/50 shadow-inner group">
                <div className="w-full h-full rounded-full overflow-hidden shadow-md">
                  <img
                    src={selectedIngredient.image}
                    alt={selectedIngredient.name}
                    className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700"
                  />
                </div>

                <div className="absolute bottom-2 right-2 px-3.5 py-1 rounded-full bg-stone-950 text-gold-300 text-[10px] uppercase font-serif tracking-wider shadow-md border border-gold-500/40">
                  Dravya Guna
                </div>
              </div>
            </div>

            {/* Right: Rich Ayurvedic Details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs uppercase font-serif tracking-[0.2em] text-gold-700 font-semibold">
                  {selectedIngredient.botanicalName}
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs font-serif italic text-stone-600">
                  {selectedIngredient.sanskritName}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal tracking-tight mb-3">
                {selectedIngredient.name}
              </h3>

              <p className="text-sm font-serif italic text-gold-800 mb-4">
                "{selectedIngredient.shortDescription}"
              </p>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light mb-6">
                {selectedIngredient.traditionalUsage}
              </p>

              {/* Rasa & Dosha Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-serif text-stone-500 font-medium block mb-1">
                    Dosha Affinity
                  </span>
                  <span className="text-xs text-stone-900 font-medium">
                    {selectedIngredient.doshaAffinity}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-serif text-stone-500 font-medium block mb-1">
                    Rasa (Taste Profile)
                  </span>
                  <span className="text-xs text-stone-900 font-medium">
                    {selectedIngredient.rasa}
                  </span>
                </div>
              </div>

              {/* Formulations where present */}
              <div>
                <span className="text-[11px] uppercase tracking-wider font-serif text-stone-500 font-medium block mb-2">
                  Featured in Formulations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedIngredient.featuredIn.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-3 py-1 rounded-full bg-white border border-stone-300 text-xs font-serif text-stone-800 shadow-2xs"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
