import React, { useState, useEffect } from 'react';
import { ArrowDown, ShieldCheck, Leaf, Sparkles, Award } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onDiscoverPhilosophy: () => void;
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
      // normalized -1 to 1
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
      {/* Subtle Ambient Golden & Forest Glow Gradients in Background */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-gradient-to-tr from-gold-300/20 via-sage-200/30 to-transparent blur-3xl pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 20}px), ${mousePosition.y * 20}px)`,
        }}
      />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sage-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />

      {/* Floating Botanical Elements (Turmeric, Amla, Saffron, Neem sprigs) */}
      {/* 1. Floating Saffron Thread / Petal */}
      <div
        className="absolute top-24 left-[8%] hidden md:flex items-center gap-2 p-2.5 rounded-2xl bg-ivory-50/80 backdrop-blur-md border border-gold-400/30 shadow-xs animate-float-slow pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
        }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
        <span className="text-[11px] font-serif tracking-widest text-forest-900 uppercase">
          Kashmiri Saffron (Kumkuma)
        </span>
      </div>

      {/* 2. Floating Wild Amla Berry Marker */}
      <div
        className="absolute bottom-36 left-[10%] hidden lg:flex items-center gap-2 p-2.5 rounded-2xl bg-ivory-50/80 backdrop-blur-md border border-sage-300/40 shadow-xs animate-float-gentle pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      >
        <span className="text-base">🌿</span>
        <div className="flex flex-col">
          <span className="text-[11px] font-medium text-forest-950">Wild Himalayan Amla</span>
          <span className="text-[9px] tracking-wider text-sage-700">Tridoshic Rasayana</span>
        </div>
      </div>

      {/* 3. Floating Swarna Bhasma (Gold) Alchemy Marker */}
      <div
        className="absolute top-36 right-[8%] hidden md:flex items-center gap-2 p-2.5 rounded-2xl bg-forest-900/90 text-ivory-50 backdrop-blur-md border border-gold-500/40 shadow-md animate-float-slow pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)`,
        }}
      >
        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
        <div className="flex flex-col text-left">
          <span className="text-[10px] tracking-widest uppercase font-serif text-gold-300">
            Swarna & Rajata
          </span>
          <span className="text-[9px] text-ivory-100/70">Purified Mineral Alchemy</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Storytelling & Headline */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100/80 border border-sage-300/50 text-forest-900 text-xs tracking-wider uppercase font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-700" />
              <span>Ancient Vedic Wisdom × Modern Precision</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-forest-950 tracking-tight leading-[1.08] mb-6">
              Ayurveda, in its <br />
              <span className="italic font-normal text-forest-800 relative">
                purest form.
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-gold-500/60 via-forest-700/40 to-transparent" />
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="max-w-xl text-base sm:text-lg text-forest-900/80 leading-relaxed font-light mb-8">
              Time-honoured Ayurvedic formulations crafted for modern everyday wellness.
              Rooted in pure botanicals, wild-harvested herbs, and traditional rasayana preparations—free from unnecessary fillers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreCollection}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-forest-900 text-ivory-50 text-xs uppercase tracking-[0.18em] font-medium hover:bg-forest-850 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Explore The Collection</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:scale-150 transition-transform" />
              </button>

              <button
                onClick={onDiscoverPhilosophy}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-forest-950 text-xs uppercase tracking-[0.18em] font-medium border border-forest-900/30 hover:border-forest-900 hover:bg-forest-900/5 transition-all duration-300"
              >
                Discover Our Philosophy
              </button>
            </div>

            {/* Three Trust Markers */}
            <div className="pt-6 border-t border-sage-200/80 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-forest-700 shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-forest-900/90 tracking-wide">
                  Pure Ayurveda
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-forest-700 shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-forest-900/90 tracking-wide">
                  Plant-Based
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-forest-700 shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-forest-900/90 tracking-wide">
                  Traditionally Crafted
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Cinematic Product & Botanical Visual Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Circular Botanical Backdrop Frame */}
            <div className="relative w-full max-w-[480px] aspect-square rounded-full p-3 sm:p-5 border border-gold-500/25 bg-gradient-to-b from-ivory-100 to-ivory-200/60 shadow-xl group cursor-pointer" onClick={onSelectHeroProduct}>
              
              {/* Inner Halo */}
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1608248597359-0a6e0a8169e5?auto=format&fit=crop&w=1200&q=85"
                  alt="EGA Swarna Chyawanprash luxury Ayurvedic preparation"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />

                {/* Bottom Overlay Pill on the Hero Visual */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-ivory-50/90 backdrop-blur-md border border-sage-200/80 shadow-lg flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-serif text-forest-700">
                      Signature Rasayana
                    </span>
                    <span className="text-sm font-serif font-medium text-forest-950">
                      EGA Swarna Chyawanprash
                    </span>
                    <span className="text-[11px] text-forest-800/70">
                      Real Gold (Swarna) • Vedic A2 Ghee • Wild Amla
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-forest-900 text-ivory-50 shrink-0">
                    ₹1,850
                  </span>
                </div>
              </div>

              {/* Floating Decorative Gold Seal */}
              <div className="absolute -top-3 -right-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 p-[1px] shadow-lg animate-float-slow">
                <div className="w-full h-full rounded-full bg-forest-900 flex flex-col items-center justify-center text-center p-1 text-gold-300">
                  <Sparkles className="w-3.5 h-3.5 mb-0.5 text-gold-400" />
                  <span className="text-[8px] sm:text-[9px] font-serif uppercase tracking-widest font-semibold leading-tight">
                    Pure Gold<br />Infused
                  </span>
                </div>
              </div>

              {/* Verified badge */}
              <div className="absolute -bottom-3 -left-2 px-3 py-1.5 rounded-full bg-ivory-50 border border-sage-300 text-[10px] font-medium text-forest-900 shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>Pure Vegetarian Verified</span>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll down prompt */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={onExploreCollection}
            className="flex flex-col items-center gap-2 text-forest-800/60 hover:text-forest-950 transition-colors group"
            aria-label="Scroll down to explore"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 text-forest-700 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
};
