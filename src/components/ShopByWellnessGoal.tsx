import React from 'react';
import type { WellnessGoal } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ShopByWellnessGoalProps {
  goals: WellnessGoal[];
  onSelectGoal: (productId: string) => void;
}

export const ShopByWellnessGoal: React.FC<ShopByWellnessGoalProps> = ({
  goals,
  onSelectGoal,
}) => {
  return (
    <section id="wellness-goals" className="py-24 sm:py-32 bg-ivory-50 bg-grain border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-200/60 text-stone-900 text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Targeted Rituals</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-950 tracking-tight">
              Shop by Wellness Goal
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-stone-700 font-light">
              Select your primary physiological objective to discover classical formulations engineered for constitutional harmony.
            </p>
          </div>

          <span className="text-xs uppercase tracking-widest font-mono text-stone-600">
            Curated Categories →
          </span>
        </div>

        {/* 6 Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal) => (
            <div
              key={goal.id}
              onClick={() => onSelectGoal(goal.featuredProductId)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-stone-200/90 hover:border-gold-500/50 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between cursor-pointer"
            >
              {/* Image Container with Exact Product Visual */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-champagne-100/30 p-3">
                <img
                  src={goal.image}
                  alt={goal.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent rounded-2xl" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-ivory-50">
                  <div>
                    <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-gold-300 font-semibold">
                      {goal.sanskritName}
                    </span>
                    <h3 className="font-serif text-2xl font-light">
                      {goal.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Goal Description & Key Benefits */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-4">
                    {goal.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {goal.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-xs text-stone-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-gold-700 transition-colors">
                  <span>Explore Formulation</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
