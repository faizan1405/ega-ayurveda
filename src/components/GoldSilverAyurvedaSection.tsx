import React, { useState } from 'react';
import { Sparkles, Compass, Shield, Sun, Moon, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface GoldSilverProps {
  onExploreProduct: (productSlug: string) => void;
  products: Product[];
}

export const GoldSilverAyurvedaSection: React.FC<GoldSilverProps> = ({
  onExploreProduct,
  products,
}) => {
  const [activeElement, setActiveElement] = useState<'both' | 'swarna' | 'rajata'>('both');

  const swarnaProducts = products.filter(
    (p) => p.elementHighlight === 'gold' || p.elementHighlight === 'both'
  );
  const rajataProducts = products.filter((p) => p.elementHighlight === 'both');

  return (
    <section
      id="gold-silver-alchemy"
      className="relative py-24 sm:py-36 bg-forest-950 text-ivory-50 overflow-hidden select-none border-y border-forest-800"
    >
      {/* Background Star / Sacred Geometry Constellation Subtle Texture */}
      <div className="absolute inset-0 bg-dark-grain opacity-70 pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-silver-400/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900/90 border border-gold-500/40 text-gold-300 text-xs font-serif uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Classical Rasashastra • Mineral Alchemy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-ivory-50 tracking-tight leading-tight">
            Precious Elements. <br />
            <span className="italic font-normal bg-gradient-to-r from-gold-300 via-ivory-100 to-silver-300 bg-clip-text text-transparent">
              Ancient Knowledge.
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-ivory-200/70 font-light leading-relaxed">
            In classical Ayurveda, metallurgical alchemy (Rasashastra) has historically employed specially purified, non-toxic mineral preparations known as <em>Bhasmas</em>. Micro-calcined over dozens of fire cycles, these noble elements act as potent catalysts for deep vitality and neural equilibrium.
          </p>
        </div>

        {/* Floating Metallic Orbs Interaction Stage */}
        <div className="relative max-w-4xl mx-auto mb-16">
          
          {/* Element Selector Controls */}
          <div className="flex justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveElement('both')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
                activeElement === 'both'
                  ? 'bg-gradient-to-r from-gold-500 to-silver-400 text-forest-950 font-semibold shadow-lg'
                  : 'bg-forest-900/80 text-ivory-200/80 border border-forest-800 hover:border-gold-500/40'
              }`}
            >
              Solar & Lunar Harmony (Dual)
            </button>
            <button
              onClick={() => setActiveElement('swarna')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all flex items-center gap-2 ${
                activeElement === 'swarna'
                  ? 'bg-gold-500 text-forest-950 font-semibold shadow-lg shadow-gold-500/20'
                  : 'bg-forest-900/80 text-gold-300/80 border border-gold-500/30 hover:border-gold-400'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Swarna (Gold)</span>
            </button>
            <button
              onClick={() => setActiveElement('rajata')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all flex items-center gap-2 ${
                activeElement === 'rajata'
                  ? 'bg-silver-300 text-forest-950 font-semibold shadow-lg shadow-silver-300/20'
                  : 'bg-forest-900/80 text-silver-300/80 border border-silver-400/30 hover:border-silver-300'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Rajata (Silver)</span>
            </button>
          </div>

          {/* Interactive Dual Cards with Metallic Radial Glows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Swarna Bhasma (Gold) Card */}
            <div
              className={`relative rounded-3xl p-8 bg-forest-900/90 border transition-all duration-500 backdrop-blur-md flex flex-col justify-between ${
                activeElement === 'swarna' || activeElement === 'both'
                  ? 'border-gold-500/60 shadow-2xl shadow-gold-500/10 scale-102'
                  : 'border-forest-800/80 opacity-60'
              }`}
            >
              {/* Metallic Orb Graphic */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 shadow-xl shadow-gold-500/30 flex items-center justify-center animate-float-slow p-1">
                  <div className="w-full h-full rounded-full border border-gold-200/60 flex items-center justify-center">
                    <Sun className="w-7 h-7 text-forest-950" />
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-gold-400">
                    Solar Archetype
                  </span>
                  <p className="text-xs text-ivory-100/60">Ushna Virya (Warming Potency)</p>
                </div>
              </div>

              <div>
                <span className="text-xs font-serif text-gold-400/90 tracking-widest uppercase">
                  Rasashastra Formulation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 mt-1 mb-2 font-normal">
                  Swarna Bhasma
                </h3>
                <p className="text-xs font-serif text-gold-300/90 italic mb-4">
                  Traditional Ayurvedic gold preparation
                </p>

                <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed font-light mb-6">
                  Produced through ancient calcination (Puta) cycles, elemental 24-karat gold is triturated with medicinal decoctions until it achieves bio-assimilable micro-particulate status. Esteemed in classical texts for longevity, sensory acuity, and deep Ojas nourishment.
                </p>

                <div className="p-3.5 rounded-xl bg-forest-950/70 border border-gold-500/30 text-xs text-gold-200/90 mb-6">
                  <strong>Featured in EGA Formulations:</strong>
                  <ul className="mt-1 list-disc list-inside space-y-0.5 text-[11px] text-ivory-200/70">
                    <li>EGA Swarna Chyawanprash (Daily Rasayana)</li>
                    <li>EGA Nervega Gold & Silver (Neuro-Calm)</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onExploreProduct('ega-swarna-chyawanprash')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-gold-400 hover:text-gold-300 group"
              >
                <span>Explore Swarna Chyawanprash</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Rajata Bhasma (Silver) Card */}
            <div
              className={`relative rounded-3xl p-8 bg-forest-900/90 border transition-all duration-500 backdrop-blur-md flex flex-col justify-between ${
                activeElement === 'rajata' || activeElement === 'both'
                  ? 'border-silver-400/60 shadow-2xl shadow-silver-400/10 scale-102'
                  : 'border-forest-800/80 opacity-60'
              }`}
            >
              {/* Metallic Silver Orb Graphic */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-silver-500 via-silver-300 to-white shadow-xl shadow-silver-400/30 flex items-center justify-center animate-float-gentle p-1">
                  <div className="w-full h-full rounded-full border border-silver-100 flex items-center justify-center">
                    <Moon className="w-7 h-7 text-forest-950" />
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-silver-300">
                    Lunar Archetype
                  </span>
                  <p className="text-xs text-ivory-100/60">Sheeta Virya (Cooling Potency)</p>
                </div>
              </div>

              <div>
                <span className="text-xs font-serif text-silver-400/90 tracking-widest uppercase">
                  Rasashastra Formulation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 mt-1 mb-2 font-normal">
                  Rajata Bhasma
                </h3>
                <p className="text-xs font-serif text-silver-300/90 italic mb-4">
                  Traditional Ayurvedic silver preparation
                </p>

                <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed font-light mb-6">
                  Purified silver processed with cooling aloe vera and herbal decoctions through repeated low-temperature subterranean firings. Cherished in classical texts for quelling excessive metabolic Pitta, soothing the nervous system, and cooling cranial heat.
                </p>

                <div className="p-3.5 rounded-xl bg-forest-950/70 border border-silver-400/30 text-xs text-silver-200/90 mb-6">
                  <strong>Featured in EGA Formulations:</strong>
                  <ul className="mt-1 list-disc list-inside space-y-0.5 text-[11px] text-ivory-200/70">
                    <li>EGA Nervega Gold & Silver (Nervous Balance & Restful Sleep)</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onExploreProduct('ega-nervega-gold-silver')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-silver-300 hover:text-white group"
              >
                <span>Explore Nervega Formulation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

        {/* Responsible Safety & Clinical Standards Strip */}
        <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-forest-900/60 border border-forest-800 text-center text-xs text-ivory-200/70 font-light">
          <p>
            <strong>Classical Assurance:</strong> Swarna and Rajata preparations are prepared strictly in licensed facilities adhering to the Ayurvedic Pharmacopoeia of India (API). They are bio-compatible, free of free-form heavy metals, and tested under ICP-MS spectroscopy.
          </p>
        </div>

      </div>
    </section>
  );
};
