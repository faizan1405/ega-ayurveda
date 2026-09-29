import React from 'react';
import { Award, Compass, ShieldCheck, HeartHandshake, Sparkles, Droplets } from 'lucide-react';

export const WhyEgaSection: React.FC = () => {
  const trustBlocks = [
    {
      icon: Award,
      title: 'Premium Quality',
      description:
        'Standardized active compounds, verified by third-party testing with full batch transparency.',
      badge: 'Gold Standard',
    },
    {
      icon: Compass,
      title: 'Authentic Ayurveda',
      description:
        'Rooted strictly in classical compendiums including Charaka, Sushruta, and Sharangdhara Samhitas.',
      badge: 'Scripture Aligned',
    },
    {
      icon: Sparkles,
      title: 'Carefully Crafted',
      description:
        'Small-batch artisan compounding ensuring micro-nutrients and volatile esters remain intact.',
      badge: 'Small-Batch',
    },
    {
      icon: Droplets,
      title: 'Made with Purity',
      description:
        'Zero synthetic binders, zero artificial colors, and rigorously tested for heavy metals.',
      badge: 'Zero Adulteration',
    },
    {
      icon: HeartHandshake,
      title: 'Wellness Focused',
      description:
        'Formulated for daily preventive balance and sustained cellular vitality rather than quick fixes.',
      badge: 'Holistic Living',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Formulations',
      description:
        'Developed in consultation with classical Vaidyas and manufactured in certified cleanrooms.',
      badge: 'Doctor Guided',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 sm:py-32 bg-ivory-50 bg-grain border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-gold-700 font-semibold block mb-2">
            The Trust Charter
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-950 tracking-tight">
            Why Discerning Seekers Choose Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-700 font-light">
            An unwavering commitment to botanical authenticity, modern analytical testing, and luxury design.
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
                  <span>Certified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
