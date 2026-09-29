import React from 'react';
import { Leaf, Award, Compass, HeartHandshake } from 'lucide-react';

export const WhyEgaSection: React.FC = () => {
  const pillars = [
    {
      icon: Leaf,
      title: 'Pure Ingredients',
      description:
        'Wild-harvested Himalayan botanicals, whole unadulterated roots, and certified organic herbs with full chain-of-custody transparency.',
      badge: 'Uncompromised Purity',
    },
    {
      icon: Award,
      title: 'Traditional Processes',
      description:
        'Inspired by time-tested Ayurvedic preparation protocols—slow decoction, brass-vessel simmer, and authentic Rasashastra methods.',
      badge: 'Classical Protocol',
    },
    {
      icon: Compass,
      title: 'Conscious Formulations',
      description:
        'Vegan and pure vegetarian options clearly identified at the individual product level. Zero hidden excipients or synthetic fillers.',
      badge: 'Honest Labeling',
    },
    {
      icon: HeartHandshake,
      title: 'Made in India',
      description:
        'Deeply rooted in Indian Ayurvedic traditions and formulated under the guidance of traditional Vaidyas and PhD biochemists.',
      badge: 'Vedic Heritage',
    },
  ];

  return (
    <section id="why-ega" className="py-24 sm:py-32 bg-ivory-50 bg-grain border-b border-sage-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-forest-700 font-semibold block mb-2">
            The EGA Distinction
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-forest-950 tracking-tight">
            Why Discerning Seekers Choose EGA
          </h2>
          <p className="mt-3 text-sm sm:text-base text-forest-800/70 font-light">
            We bridge the wisdom of 5,000-year-old texts with modern clinical precision and mindful luxury.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-8 rounded-3xl bg-white border border-sage-200/80 hover:border-gold-500/50 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-sage-100/70 group-hover:bg-forest-900 transition-colors duration-500 flex items-center justify-center text-forest-800 group-hover:text-gold-400">
                      <Icon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] font-mono text-sage-400 font-medium">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-forest-700 bg-sage-100/60 mb-2">
                    {pillar.badge}
                  </span>

                  <h3 className="font-serif text-xl font-medium text-forest-950 group-hover:text-forest-800 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-forest-800/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-sage-100 flex items-center gap-1.5 text-[11px] font-medium text-forest-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
