import React from 'react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface BrandStorySectionProps {
  onOpenStoryModal: () => void;
  onExplorePhilosophy?: () => void;
}

export const BrandStorySection: React.FC<BrandStorySectionProps> = ({
  onOpenStoryModal,
}) => {
  return (
    <section id="brand-story" className="py-24 sm:py-36 bg-stone-100/70 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Product & Studio Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 group bg-white p-3">
              <div className="aspect-4/3 sm:aspect-square w-full overflow-hidden rounded-2xl bg-champagne-100/50">
                <img
                  src="./products/diacontrol.jpg"
                  alt="Diacontrol in luxury champagne silver and gold packaging"
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-104 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-50" />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-xl">
                <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-gold-700 block mb-1 font-semibold">
                  The Purity Creed
                </span>
                <p className="font-serif text-sm sm:text-base italic text-stone-950 leading-snug">
                  “When traditional Ayurvedic wisdom is distilled with modern analytical precision, wellness becomes an effortless ritual of elegance.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-200/70 text-stone-900 text-xs font-serif uppercase tracking-widest self-start mb-4 border border-stone-300">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Modern Ayurvedic Excellence</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-950 tracking-tight leading-[1.15]">
              Crafted with Purity, <br />
              <span className="italic font-normal text-stone-800">
                Backed by Tradition
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-stone-700 leading-relaxed font-light">
              We believe that Ayurveda does not belong in crowded herbal medicine shops or dusty dispensary jars. True Ayurvedic science is one of humanity’s most refined wellness lineages, worthy of the finest presentation and uncompromising chemical purity.
            </p>

            <p className="mt-4 text-sm sm:text-base text-stone-700 leading-relaxed font-light">
              Every formula—from our gold-grade Himalayan Shilajit Resin to our classical Ekangveer Ras Vati—is produced in small, certified batches. Encased in champagne silver, matte ivory, and brushed gold, each product elevates your daily regimen into a sacred moment of restoration.
            </p>

            {/* 3 Core Trust Markers */}
            <div className="my-8 space-y-3 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-600" />
                <span className="text-xs sm:text-sm font-medium text-stone-900">
                  Standardized bio-active extracts with 100% chain-of-custody botanical tracing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-600" />
                <span className="text-xs sm:text-sm font-medium text-stone-900">
                  Zero artificial coloring, chemical glues, parabens, or hidden excipients
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-600" />
                <span className="text-xs sm:text-sm font-medium text-stone-900">
                  Classical formulations verified by Ayurvedic Vaidyas and analytical biochemists
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onOpenStoryModal}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-stone-950 text-ivory-50 text-xs uppercase tracking-[0.18em] font-medium hover:bg-stone-900 hover:shadow-lg transition-all group"
              >
                <BookOpen className="w-4 h-4 text-gold-400" />
                <span>Discover Our Heritage</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
