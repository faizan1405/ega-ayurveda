import React from 'react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface BrandStorySectionProps {
  onOpenStoryModal: () => void;
  onExplorePhilosophy: () => void;
}

export const BrandStorySection: React.FC<BrandStorySectionProps> = ({
  onOpenStoryModal,
  onExplorePhilosophy,
}) => {
  return (
    <section id="brand-story" className="py-24 sm:py-36 bg-ivory-100/80 border-b border-sage-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Botanical Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sage-200 group">
              <div className="aspect-4/3 sm:aspect-16/10 w-full overflow-hidden bg-forest-900">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                  alt="Ancient Ayurveda food as medicine herbs mortar and pestle"
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-104 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-ivory-50/95 backdrop-blur-md border border-sage-200/90 shadow-xl">
                <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-forest-700 block mb-1">
                  Vedic Aphorism (Charaka)
                </span>
                <p className="font-serif text-sm sm:text-base italic text-forest-950 leading-snug">
                  “When diet and lifestyle are pure, medicine is of no need. When diet is wrong, medicine is of no avail.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Preventive Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-200/70 text-forest-900 text-xs font-serif uppercase tracking-widest self-start mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Preventive Living • Dinacharya</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-forest-950 tracking-tight leading-[1.15]">
              Wellness begins <br />
              <span className="italic font-normal text-forest-800">
                before illness does.
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-forest-900/80 leading-relaxed font-light">
              At EGA Ayurveda, we look upon wellness not as the occasional crisis intervention, but as a perpetual, joyful conversation between your daily food, nature’s cycles (Ritucharya), and your internal digestive fire (Agni).
            </p>

            <p className="mt-4 text-sm sm:text-base text-forest-900/80 leading-relaxed font-light">
              By honoring the timeless principle of <strong>“Food as Medicine”</strong>, our formulations are created to sustain baseline cellular vitality. We don’t manufacture quick fixes; we refine the purest gifts of the earth so your body remembers how to flourish naturally.
            </p>

            {/* 3 Pillars List */}
            <div className="my-8 space-y-3 pt-6 border-t border-sage-200">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="text-xs sm:text-sm font-medium text-forest-950">
                  Mindful sourcing from certified pristine Himalayan biospheres
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="text-xs sm:text-sm font-medium text-forest-950">
                  Zero synthetic binders, artificial perfumes, or disguised excipients
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="text-xs sm:text-sm font-medium text-forest-950">
                  Honest product-level classification for Vegan and Pure Vegetarian lifestyles
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onOpenStoryModal}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-forest-900 text-ivory-50 text-xs uppercase tracking-[0.18em] font-medium hover:bg-forest-850 hover:shadow-lg transition-all group"
              >
                <BookOpen className="w-4 h-4 text-gold-400" />
                <span>Discover Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
