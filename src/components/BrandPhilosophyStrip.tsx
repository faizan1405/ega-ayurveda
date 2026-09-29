import React from 'react';
import { Sparkles } from 'lucide-react';

export const BrandPhilosophyStrip: React.FC = () => {
  const statement = [
    'Ancient Wisdom',
    'Pure Ingredients',
    'Mindful Formulation',
    'Modern Elegance',
    'Ayurveda in its Purest Form',
    'Gold & Silver Rasashastra',
    'Pure Himalayan Shilajit',
  ];

  return (
    <div className="relative py-4 sm:py-5 bg-stone-950 border-y border-stone-850 text-ivory-50 overflow-hidden select-none">
      {/* Decorative Gold Sheen Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12">
            {statement.map((phrase, idx) => (
              <div key={`${loopIdx}-${idx}`} className="flex items-center gap-8 sm:gap-12">
                <span className="font-serif text-sm sm:text-base tracking-[0.22em] uppercase font-light text-stone-200 hover:text-gold-300 transition-colors cursor-default">
                  {phrase}
                </span>
                <Sparkles className="w-3 h-3 text-gold-400/80 shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
