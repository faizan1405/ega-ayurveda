import React, { useState, useEffect } from 'react';
import { ArrowDown, ShieldCheck, Sparkles, Award, Compass, Feather } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onDiscoverPhilosophy?: () => void;
  onSelectHeroProduct: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollection,
  onDiscoverPhilosophy,
  onSelectHeroProduct,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-28 flex items-center justify-center bg-ivory-50 bg-grain overflow-hidden"
    >
      {/* Subtle Warm Ivory & Limestone Studio Environment */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[380px] sm:w-[700px] h-[380px] sm:h-[700px] rounded-full bg-gradient-to-tr from-gold-400/15 via-champagne-200/25 to-transparent blur-3xl pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 25}px), ${mousePosition.y * 25}px)`,
        }}
      />
      {/* Subtle Limestone Shadow Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-stone-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 rounded-full bg-stone-300/30 blur-3xl pointer-events-none" />
      
      {/* Floating Botanical/Mineral Accents */}
      <div
        className="absolute top-36 left-[7%] hidden xl:flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-xs pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -18}px, ${mousePosition.y * -18}px)`,
        }}
      >
        <span className="w-2 h-2 rounded-full bg-gold-600 animate-ping" />
        <span className="text-[11px] font-serif tracking-[0.2em] text-stone-900 uppercase">
          Gold Grade Himalayan Shilajit
        </span>
      </div>

      <div
        className="absolute top-44 right-[8%] hidden xl:flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-gold-400/40 shadow-xs pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 22}px, ${mousePosition.y * 22}px)`,
        }}
      >
        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
        <span className="text-[11px] font-serif tracking-[0.2em] text-stone-900 uppercase">
          Standardized 80%+ Fulvic Acid
        </span>
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-stone-300/70 text-stone-800 text-xs tracking-[0.2em] uppercase font-medium mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
              <span>Classical Rasashastra • Modern Purity</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-stone-950 tracking-tight leading-[1.08] mb-6">
              Ancient Ayurveda.{' '}
              <span className="block italic font-normal text-stone-900 mt-1 relative">
                Refined for Modern Wellness.
                <span className="hidden sm:block absolute -bottom-2 left-0 w-3/4 h-[1px] bg-gradient-to-r from-gold-500/70 via-stone-400/40 to-transparent" />
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="max-w-xl text-base sm:text-lg text-stone-700 leading-relaxed font-light mb-8">
              Pure formulations, premium ingredients and time-honoured Ayurvedic wisdom crafted for everyday wellbeing.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreCollection}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-950 text-ivory-50 text-xs uppercase tracking-[0.18em] font-medium hover:bg-stone-900 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Explore Our Formulations</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:scale-150 transition-transform" />
              </button>

              <button
                onClick={onDiscoverPhilosophy || onExploreCollection}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-stone-950 text-xs uppercase tracking-[0.18em] font-medium border border-stone-950/30 hover:border-stone-950 hover:bg-stone-950/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Compass className="w-3.5 h-3.5 text-gold-700" />
                <span>Discover Ayurveda</span>
              </button>
            </div>

            {/* Exact Four Small Premium Trust Labels */}
            <div className="pt-6 border-t border-stone-300/60 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span className="text-[11px] font-medium text-stone-800 tracking-wide">
                  Authentic Ayurveda
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span className="text-[11px] font-medium text-stone-800 tracking-wide">
                  Premium Quality
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span className="text-[11px] font-medium text-stone-800 tracking-wide">
                  Made in India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Feather className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span className="text-[11px] font-medium text-stone-800 tracking-wide">
                  Consciously Formulated
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual featuring the Exact Uploaded Shilajit Packaging */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            <div
              className="relative w-full max-w-[460px] aspect-square rounded-3xl p-3 sm:p-5 border border-stone-300/70 bg-white/80 shadow-2xl group cursor-pointer backdrop-blur-xs"
              onClick={onSelectHeroProduct}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-inner bg-champagne-100/50">
                <img
                  src="./products/shilajit-resin.jpg"
                  alt="Premium Shilajit Resin in luxury champagne silver and gold packaging"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center transform scale-102 group-hover:scale-106 transition-transform duration-1000 ease-out"
                />

                {/* Subtle light vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-lg flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-serif text-gold-700 font-semibold">
                      Signature Bestseller
                    </span>
                    <span className="text-sm font-serif font-medium text-stone-950">
                      Premium Shilajit Resin
                    </span>
                    <span className="text-[11px] text-stone-600">
                      Gold Grade • 80%+ Fulvic Acid • 50g
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-stone-950 text-ivory-50 shrink-0">
                    ₹2,450
                  </span>
                </div>
              </div>

              {/* Floating Metallic Badge */}
              <div className="absolute -top-3 -right-2 px-3.5 py-1.5 rounded-full bg-stone-950 text-gold-300 text-[10px] font-serif uppercase tracking-widest border border-gold-500/40 shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-gold-400" />
                <span>100% Surya Tapi Purified</span>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Prompt */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={onExploreCollection}
            className="flex flex-col items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors"
            aria-label="Scroll down to explore"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 text-gold-600 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
};
