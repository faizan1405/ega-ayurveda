import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Mountain, Sun, Droplets, ArrowRight, ShieldCheck } from 'lucide-react';
import type { Product } from '../types';

interface ShilajitScrollStoryProps {
  shilajitProduct: Product;
  onExploreProduct: (product: Product) => void;
}

export const ShilajitScrollStory: React.FC<ShilajitScrollStoryProps> = ({
  shilajitProduct,
  onExploreProduct,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      index: 1,
      title: 'Born from the mountains.',
      subtitle: 'The Altitude of Origin',
      text: 'Harvested above 18,000 feet from pristine Himalayan cliffs, where geological compression over millennia creates rare mineral-rich exudate.',
      accent: 'Untouched Himalayan Altitude',
      icon: Mountain,
    },
    {
      index: 2,
      title: 'Purified with tradition.',
      subtitle: 'Classical Surya Tapi Ritual',
      text: 'Purified strictly according to classical Charaka Samhita guidelines through 60 days of solar infusion and Triphala decoctions, preserving living bioactive compounds.',
      accent: '60-Day Solar Purification',
      icon: Sun,
    },
    {
      index: 3,
      title: 'Concentrated into every serving.',
      subtitle: '80%+ Bioavailable Fulvic Acid',
      text: 'Delivering 84+ ionic trace minerals in cellularly absorbable liquid resin form to recharge mitochondrial ATP energy without stimulants.',
      accent: '84+ Ionic Minerals',
      icon: Droplets,
    },
    {
      index: 4,
      title: 'Premium Shilajit Resin.',
      subtitle: 'The Gold Standard of Ayurveda',
      text: 'Encased in heavy matte champagne silver with a brushed gold lid and solid brass dosing spoon. The ultimate modern Ayurvedic longevity ritual.',
      accent: 'Laboratory ICP-MS Tested',
      icon: ShieldCheck,
    },
  ];

  // Auto-advance or sync with scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // If within viewport, calculate scroll progress
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const totalScrollable = rect.height - windowHeight;
        const currentScrolled = Math.abs(rect.top);
        const progress = Math.min(1, Math.max(0, currentScrolled / totalScrollable));
        const stepIdx = Math.min(3, Math.floor(progress * 4));
        setActiveStep(stepIdx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="shilajit-story"
      ref={containerRef}
      className="relative min-h-[180vh] sm:min-h-[220vh] bg-[#141512] text-stone-200 select-none"
    >
      {/* Sticky Cinematic Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Subtle Himalayan Rock & Mineral Background Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-950/20 via-[#181916] to-[#0E0F0D]" />
        
        {/* Ambient Golden Mineral Flare */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-gold-600/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Center-Stage Centered Product Imagery with Mineral Orbit (Left/Center 6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              
              {/* Outer Golden Concentric Mineral Circles */}
              <div className="absolute w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] rounded-full border border-gold-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute w-[240px] sm:w-[380px] h-[240px] sm:h-[380px] rounded-full border border-stone-700/40 pointer-events-none" />

              {/* The Product Jar Stage */}
              <div className="relative w-64 sm:w-88 md:w-96 aspect-square rounded-3xl p-3 sm:p-4 bg-stone-900/80 border border-gold-500/30 shadow-[0_0_50px_rgba(169,130,67,0.15)] backdrop-blur-md">
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-stone-950">
                  <img
                    src="./products/shilajit-resin.jpg"
                    alt="Premium Shilajit Resin jar on Himalayan stone"
                    className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141512] via-transparent to-transparent opacity-80" />

                  {/* Golden Ember Particles & Active Step Marker */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/80 border border-gold-500/40 backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-gold-300">
                      Step 0{activeStep + 1} of 04
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="text-stone-300 font-serif">Himalayan Harvest</span>
                    <span className="text-gold-400 font-serif font-medium">80%+ Fulvic</span>
                  </div>
                </div>
              </div>

              {/* Progress step indicators underneath image */}
              <div className="flex items-center gap-2 mt-6">
                {steps.map((_, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setActiveStep(sIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      sIdx === activeStep
                        ? 'w-10 bg-gold-400'
                        : 'w-2 bg-stone-700 hover:bg-stone-500'
                    }`}
                    aria-label={`Go to step ${sIdx + 1}`}
                  />
                ))}
              </div>

            </div>

            {/* Stepped Text Storytelling (Right 6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 border border-gold-500/30 text-gold-300 text-xs font-serif uppercase tracking-[0.2em] self-start mb-6">
                <Mountain className="w-3.5 h-3.5 text-gold-400" />
                <span>The Himalayan Shilajit Journey</span>
              </div>

              {/* Dynamic Step Content */}
              <div className="min-h-[220px] transition-all duration-500">
                <span className="text-xs uppercase tracking-[0.25em] font-serif text-stone-400 block mb-2">
                  {steps[activeStep].subtitle}
                </span>

                <h3 className="font-serif text-3xl sm:text-5xl font-light text-stone-100 tracking-tight leading-[1.15] mb-4">
                  {steps[activeStep].title}
                </h3>

                <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light mb-6 max-w-lg">
                  {steps[activeStep].text}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900/90 border border-stone-800 text-xs text-gold-300 font-serif">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>{steps[activeStep].accent}</span>
                </div>
              </div>

              {/* Navigation & CTA */}
              <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onExploreProduct(shilajitProduct)}
                  className="px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-stone-950 text-xs uppercase tracking-[0.18em] font-medium transition-all shadow-lg hover:shadow-gold-500/20 flex items-center gap-2.5 group"
                >
                  <span>Discover Shilajit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 text-stone-400 text-xs">
                  <span>₹2,450</span>
                  <span>•</span>
                  <span>50g Jar with Spoon</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
