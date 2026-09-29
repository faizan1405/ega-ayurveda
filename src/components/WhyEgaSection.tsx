import React from 'react';
import { Award, Compass, ShieldCheck, HeartHandshake, Sparkles, Droplets } from 'lucide-react';

export const WhyEgaSection: React.FC = () => {
  const trustBlocks = [
    {
      icon: Compass,
      title: 'Classical Shodhana Rituals',
      description:
        'Purified according to Charaka and Sushruta texts through time-intensive solar infusions (Surya Tapi) and medicinal decoction baths.',
      badge: 'Scripture Aligned',
    },
    {
      icon: ShieldCheck,
      title: 'Certified Heavy-Metal Free (ICP-MS)',
      description:
        'Every single production batch undergoes third-party ICP-MS spectroscopic testing with scan-verified Certificates of Analysis.',
      badge: 'Zero Heavy Metals',
    },
    {
      icon: Award,
      title: 'Standardized Active Potency',
      description:
        'Verified bio-active markers: 80%+ fulvic acid in Shilajit, 5% withanolides in Ashwagandha, and certified Grade-1 Mongra saffron.',
      badge: 'Clinically Documented',
    },
    {
      icon: Droplets,
      title: 'Zero Gelatin or Synthetic Binders',
      description:
        '100% plant-cellulose capsules and classical hand-rolled vatis without magnesium stearate, chemical preservatives, or fillers.',
      badge: 'Clean Label Purity',
    },
    {
      icon: Sparkles,
      title: 'Ethically Wild-Harvested',
      description:
        'Sourced sustainably from high-altitude Himalayan cliffs above 18,000 feet and certified organic pesticide-free heritage groves.',
      badge: 'Pristine Sourcing',
    },
    {
      icon: HeartHandshake,
      title: 'Vaidya & Physician Formulated',
      description:
        'Engineered in deep collaboration with classical Ayurvedic Vaidyas and analytical biochemists for everyday physiological balance.',
      badge: 'Doctor Guided',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 sm:py-32 bg-ivory-50 bg-grain border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-gold-700 font-semibold block mb-2">
            The Purity Charter
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-950 tracking-tight">
            Why Choose Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-700 font-light">
            An unwavering commitment to classical authenticity, analytical laboratory testing, and champagne-and-gold luxury design.
          </p>
        </div>

        {/* 6 Trust Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <div
                key={block.title}
                className="group relative p-8 rounded-3xl bg-white border border-stone-200/90 hover:border-gold-500/50 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-champagne-100 flex items-center justify-center text-stone-900 group-hover:bg-stone-950 group-hover:text-gold-400 transition-colors duration-300">
                      <Icon className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] font-mono text-stone-400 font-medium">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-gold-800 bg-champagne-100/80 mb-2">
                    {block.badge}
                  </span>

                  <h3 className="font-serif text-xl font-medium text-stone-950 group-hover:text-gold-700 transition-colors">
                    {block.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {block.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-medium text-stone-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                  <span>Guaranteed Classical Authenticity</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
