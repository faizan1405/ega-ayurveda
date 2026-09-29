import React, { useState } from 'react';
import { Sparkles, Sun, Moon, ArrowRight } from 'lucide-react';
import type { Product } from '../types';

interface GoldSilverProps {
  onExploreProduct: (productId: string) => void;
  products: Product[];
}

export const GoldSilverAyurvedaSection: React.FC<GoldSilverProps> = ({
  onExploreProduct,
}) => {
  const [activeElement, setActiveElement] = useState<'both' | 'swarna' | 'rajata'>('both');
  const [isOrbExpanded, setIsOrbExpanded] = useState(false);

  return (
    <section
      id="gold-silver-alchemy"
      className="relative py-24 sm:py-36 bg-[#161714] text-ivory-50 overflow-hidden select-none border-y border-stone-800"
    >
      {/* Background Constellation Texture & Radial Lighting */}
      <div className="absolute inset-0 bg-radial-gradient from-gold-900/10 via-[#161714] to-[#0D0E0C] pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-stone-500/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/90 border border-gold-500/40 text-gold-300 text-xs font-serif uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Classical Rasashastra • When Ayurveda Meets Gold</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-ivory-50 tracking-tight leading-tight">
            Precious Ingredients. <br />
            <span className="italic font-normal bg-gradient-to-r from-gold-300 via-champagne-100 to-amber-200 bg-clip-text text-transparent">
              Ancient Knowledge.
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-stone-300 font-light leading-relaxed">
            In classical Rasashastra, real gold (Swarna) and silver (Rajata) are purified through continuous calcination cycles into micro-assimilable calces.
            Reflected in the signature champagne silver and brushed gold packaging across our collections.
          </p>

          {/* Interactive Expanding Golden Circular Orb */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsOrbExpanded(!isOrbExpanded)}
              className="group relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-950/80 to-stone-900 border border-gold-500/50 hover:border-gold-400 text-gold-300 text-xs font-serif tracking-widest uppercase transition-all duration-500 shadow-[0_0_20px_rgba(169,130,67,0.25)]"
            >
              <span className={`w-3 h-3 rounded-full bg-gold-400 transition-all duration-500 ${isOrbExpanded ? 'scale-150 shadow-[0_0_12px_#A98243]' : 'animate-ping'}`} />
              <span>{isOrbExpanded ? 'Contract Sacred Alchemy' : 'Expand Golden Alchemy Reveal'}</span>
            </button>
          </div>
        </div>

        {/* Expandable Golden Alchemy Story Banner */}
        {isOrbExpanded && (
          <div className="mb-14 p-8 rounded-3xl bg-gradient-to-r from-gold-950/40 via-stone-900/90 to-gold-950/40 border border-gold-500/40 backdrop-blur-md animate-fade-in text-center max-w-4xl mx-auto">
            <span className="text-[11px] uppercase tracking-[0.25em] font-serif text-gold-400 block mb-2 font-medium">
              Classical Shodhana of Swarna (24K Gold)
            </span>
            <p className="font-serif italic text-base sm:text-lg text-stone-200 mb-4 leading-relaxed">
              “सुवर्णं सर्वदोषघ्नं बल्यं मेध्यं रसायनम्...” — Purified Swarna Bhasma eliminates physiological toxins, sharpens the intellect, balances the nervous channels, and bestows youthful ojas.
            </p>
            <span className="text-xs text-stone-400 font-sans">
              Recorded in the Charaka Samhita & Rasaratna Samucchaya
            </span>
          </div>
        )}

        {/* Element Selector Controls */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveElement('both')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
              activeElement === 'both'
                ? 'bg-gradient-to-r from-gold-500 to-amber-300 text-stone-950 font-semibold shadow-lg'
                : 'bg-stone-900 text-stone-300 border border-stone-800 hover:border-gold-500/40'
            }`}
          >
            Dual Alchemy (Solar & Lunar)
          </button>
          <button
            onClick={() => setActiveElement('swarna')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all flex items-center gap-2 ${
              activeElement === 'swarna'
                ? 'bg-gold-500 text-stone-950 font-semibold shadow-lg shadow-gold-500/20'
                : 'bg-stone-900 text-gold-300 border border-gold-500/30 hover:border-gold-400'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Swarna (24K Gold)</span>
          </button>
          <button
            onClick={() => setActiveElement('rajata')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all flex items-center gap-2 ${
              activeElement === 'rajata'
                ? 'bg-stone-300 text-stone-950 font-semibold shadow-lg'
                : 'bg-stone-900 text-stone-300 border border-stone-700 hover:border-stone-500'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Rajata (Silver Calx)</span>
          </button>
        </div>

        {/* Dual Interactive Alchemy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Swarna Bhasma (Gold) Card */}
          <div
            className={`relative rounded-3xl p-8 bg-stone-900/90 border transition-all duration-500 backdrop-blur-md flex flex-col justify-between ${
              activeElement === 'swarna' || activeElement === 'both'
                ? 'border-gold-500/60 shadow-2xl shadow-gold-500/10 scale-101'
                : 'border-stone-800 opacity-60'
            }`}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 shadow-xl shadow-gold-500/30 flex items-center justify-center p-1">
                <div className="w-full h-full rounded-full border border-gold-200/60 flex items-center justify-center">
                  <Sun className="w-7 h-7 text-stone-950" />
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-gold-400">
                  Solar Archetype
                </span>
                <p className="text-xs text-stone-400">Ushna Virya (Warming Vitality)</p>
              </div>
            </div>

            <div>
              <span className="text-xs font-serif text-gold-400/90 tracking-widest uppercase">
                Rasashastra Master Preparation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 mt-1 mb-2 font-normal">
                Swarna Bhasma (24K Gold)
              </h3>
              <p className="text-xs font-serif text-gold-300/90 italic mb-4">
                Classical nano-calcined real gold preparation
              </p>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-6">
                Produced through classical calcination rituals where certified elemental gold is triturated with herbal decoctions into non-toxic nanoparticles. Fortifies heart vitality, deep Ojas immunity, and youthful cellular preservation.
              </p>

              <div className="p-4 rounded-2xl bg-stone-950 border border-gold-500/30 text-xs text-gold-200 mb-6">
                <strong className="font-serif uppercase tracking-wider block mb-1.5 text-gold-300">
                  Featured in Formulations:
                </strong>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-stone-300">
                  <li>TOP Ayurveda Swarna Chyawanprash with Real Gold</li>
                  <li>Premium Shilajit Resin (Gold Grade)</li>
                  <li>Ashwagandha Gold KSM-66</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => onExploreProduct('swarna-chyawanprash')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-gold-400 hover:text-gold-300 group pt-2"
            >
              <span>Explore Swarna Chyawanprash</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Rajata Bhasma (Silver) Card */}
          <div
            className={`relative rounded-3xl p-8 bg-stone-900/90 border transition-all duration-500 backdrop-blur-md flex flex-col justify-between ${
              activeElement === 'rajata' || activeElement === 'both'
                ? 'border-stone-500/60 shadow-2xl shadow-stone-500/10 scale-101'
                : 'border-stone-800 opacity-60'
            }`}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-stone-400 via-stone-200 to-white shadow-xl shadow-stone-400/30 flex items-center justify-center p-1">
                <div className="w-full h-full rounded-full border border-stone-100 flex items-center justify-center">
                  <Moon className="w-7 h-7 text-stone-950" />
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-stone-300">
                  Lunar Archetype
                </span>
                <p className="text-xs text-stone-400">Sheeta Virya (Cooling Calming)</p>
              </div>
            </div>

            <div>
              <span className="text-xs font-serif text-stone-300 tracking-widest uppercase">
                Rasashastra Classical Formulation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 mt-1 mb-2 font-normal">
                Rajata Bhasma (Silver Calx)
              </h3>
              <p className="text-xs font-serif text-stone-300 italic mb-4">
                Classical nerve calming & neuro-vascular cooling
              </p>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-6">
                Micro-purified silver processed with cooling Dashamoola roots to soothe irritated nerve channels (Majja Dhatu), quell mental turbulence, and restore fluid articulation to joints.
              </p>

              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-700 text-xs text-stone-300 mb-6">
                <strong className="font-serif uppercase tracking-wider block mb-1.5 text-stone-200">
                  Featured in Formulations:
                </strong>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-stone-400">
                  <li>Ekangveer Ras Vati (Classical Neuro-Vitality)</li>
                  <li>Ayurvedic Oil Pulling Formula (Arimedadi)</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => onExploreProduct('ekangveer-ras-vati')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-stone-300 hover:text-white group pt-2"
            >
              <span>Explore Ekangveer Ras Vati</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
