import React, { useState, useEffect } from 'react';
import { ArrowDown, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onExploreBestsellers?: () => void;
  onDiscoverPhilosophy?: () => void;
  onSelectHeroProduct: () => void;
}


export const Hero: React.FC<HeroProps> = ({
  onExploreCollection,
  onExploreBestsellers,
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
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center bg-ivory-50 bg-grain overflow-hidden"
    >
      {/* Subtle Ambient Champagne & Warm Stone Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-gradient-to-tr from-gold-300/20 via-champagne-200/30 to-transparent blur-3xl pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 20}px), ${mousePosition.y * 20}px)`,
        }}
      />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-stone-100/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />

      {/* Floating Accent Markers with Soft Studio Aesthetic */}
      <div
        className="absolute top-32 left-[8%] hidden md:flex items-center gap-2 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-xs animate-float-slow pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
        }}
      >
        <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
        <span className="text-[11px] font-serif tracking-widest text-stone-900 uppercase">
          Gold Grade Himalayan Shilajit
        </span>
      </div>

      <div
        className="absolute top-36 right-[8%] hidden md:flex items-center gap-2 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-gold-400/40 shadow-xs animate-float-gentle pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      >
        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
        <span className="text-[11px] font-serif tracking-widest text-stone-900 uppercase">
          Standardized 80%+ Fulvic Acid
        </span>
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Storytelling & Headline */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-100/90 border border-stone-300/60 text-stone-900 text-xs tracking-wider uppercase font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
              <span>Ancient Wellness. Modern Elegance.</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-stone-950 tracking-tight leading-[1.08] mb-6">
              Pure Ayurveda, <br />
              <span className="italic font-normal text-stone-800 relative">
                Refined for Modern Wellness
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-gold-500/70 via-stone-400/40 to-transparent" />
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="max-w-xl text-base sm:text-lg text-stone-700 leading-relaxed font-light mb-8">
              Premium Ayurvedic formulations crafted with purity, elegance and everyday wellness in mind.
              Encased in champagne silver and muted gold, designed for mindful living.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreCollection}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-950 text-ivory-50 text-xs uppercase tracking-[0.18em] font-medium hover:bg-stone-900 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Shop Collection</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:scale-150 transition-transform" />
              </button>

              <button
                onClick={onExploreBestsellers}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-stone-950 text-xs uppercase tracking-[0.18em] font-medium border border-stone-950/30 hover:border-stone-950 hover:bg-stone-950/5 transition-all duration-300"
              >
                Explore Bestsellers
              </button>
            </div>

            {/* Three Trust Markers */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-stone-900 tracking-wide">
                  Pure Ayurveda
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-stone-900 tracking-wide">
                  Gold & Silver Notes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-stone-900 tracking-wide">
                  Carefully Crafted
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual featuring the Exact Uploaded Shilajit Packaging */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            <div
              className="relative w-full max-w-[480px] aspect-square rounded-3xl p-3 sm:p-5 border border-stone-200 bg-white/70 shadow-2xl group cursor-pointer"
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
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />

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
              <div className="absolute -top-3 -right-2 px-3 py-1.5 rounded-full bg-stone-950 text-gold-300 text-[10px] font-serif uppercase tracking-widest border border-gold-500/40 shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-gold-400" />
                <span>100% Surya Tapi</span>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Prompt */}
        <div className="mt-12 flex justify-center">
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
