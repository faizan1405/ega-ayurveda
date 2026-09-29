import React, { useState } from 'react';
import type { Product } from '../types';
import { Sparkles, ArrowRight, ShieldCheck, Sun, Mountain, Compass, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FeaturedProductStoryProps {
  heroProduct: Product;
  onViewProductDetail: (product: Product) => void;
}

export const FeaturedProductStory: React.FC<FeaturedProductStoryProps> = ({
  heroProduct,
  onViewProductDetail,
}) => {
  const { addToCart } = useCart();
  const [selectedHighlight, setSelectedHighlight] = useState(0);

  const highlights = [
    {
      title: '80%+ Fulvic Acid',
      desc: 'The world’s highest verified fulvic concentration, ensuring immediate cellular membrane absorption and mitochondrial ATP replenishment.',
      icon: Sparkles,
    },
    {
      title: '60-Day Surya Tapi Purified',
      desc: 'Filtered slowly under high-altitude Himalayan sun rays in spring water, preserving heat-sensitive bioactive compounds.',
      icon: Sun,
    },
    {
      title: '18,000+ Ft Sourcing',
      desc: 'Harvested exclusively from pristine, untouched rock faces in the upper Gilgit and Ladakh Himalayas.',
      icon: Mountain,
    },
    {
      title: 'Heavy Metal Certified',
      desc: 'Every batch undergoes rigorous ICP-MS spectroscopic assaying with scan-verified Certificate of Analysis (COA).',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="signature-formula" className="py-24 sm:py-32 bg-ivory-50 bg-grain border-b border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-200/70 text-stone-900 border border-stone-300 text-xs font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Signature Formula Spotlight</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-950 tracking-tight">
            Meet Our Signature Formula
          </h2>
          <p className="mt-3 text-stone-700 text-sm sm:text-base font-light">
            Pure Gold Grade Himalayan Shilajit Resin — packaged in matte champagne silver and brushed gold.
          </p>
        </div>

        {/* Asymmetrical Split Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Oversized Premium Product Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 sm:p-5 border border-stone-200 shadow-2xl group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-champagne-100/30">
                <img
                  src="./products/shilajit-resin.jpg"
                  alt="Premium Shilajit Resin in matte silver and gold luxury jar"
                  className="w-full h-full object-cover object-center transform group-hover:scale-104 transition-transform duration-1000 ease-out"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60" />

                {/* Floating Labels */}
                <div className="absolute top-5 left-5 z-10 flex flex-col gap-2">
                  <span className="px-3 py-1 rounded-full bg-stone-950 text-gold-300 border border-gold-500/40 text-[10px] font-serif uppercase tracking-widest backdrop-blur-md shadow-md">
                    ✦ Gold Grade 80%+ Fulvic
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 text-stone-900 border border-stone-200 text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-xs">
                    60-Day Surya Tapi
                  </span>
                </div>

                {/* Bottom Highlight */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-xl flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-serif tracking-[0.2em] text-gold-700 font-semibold">
                      Ritual Measurement
                    </span>
                    <span className="text-xs font-serif font-medium text-stone-950">
                      Solid Brass Gold Spoon Included
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-950 text-ivory-50">
                    50g Resin
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story, Scientific Benchmarks & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="mb-6">
              <span className="text-xs font-serif tracking-widest text-gold-700 uppercase font-semibold">
                {heroProduct.sanskritName}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-950 mt-1">
                {heroProduct.name}
              </h3>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed font-light">
                {heroProduct.description}
              </p>
            </div>

            {/* Interactive Benchmark Tabs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    onClick={() => setSelectedHighlight(idx)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      selectedHighlight === idx
                        ? 'bg-white border-gold-500 shadow-md ring-1 ring-gold-500/20'
                        : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-gold-600" />
                      <h4 className="text-xs font-serif font-semibold text-stone-950">{item.title}</h4>
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed font-light line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Preparation Story Quote */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200 mb-8">
              <span className="text-[10px] uppercase font-serif tracking-wider font-semibold text-gold-700 block mb-1">
                Classical Shodhana Protocol
              </span>
              <p className="text-xs text-stone-700 font-light italic">
                “Triphala decoction washing followed by unhurried solar drying ensures complete bio-transformation without mineral denaturing.”
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => addToCart(heroProduct, 1)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-stone-950 text-ivory-50 text-xs uppercase tracking-[0.16em] font-semibold hover:bg-stone-900 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Add To Cart • ₹{heroProduct.price.toLocaleString('en-IN')}</span>
              </button>

              <button
                onClick={() => onViewProductDetail(heroProduct)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-transparent text-stone-900 text-xs uppercase tracking-[0.16em] font-medium border border-stone-950/30 hover:border-stone-950 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Complete Formulation Dossier</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-700 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
