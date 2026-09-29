import React from 'react';
import { X, Sparkles, BookOpen, Heart, ShieldCheck, Leaf } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreProducts: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  onExploreProducts,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-ivory-50 rounded-3xl shadow-2xl border border-sage-200 overflow-hidden z-10 animate-scale-in max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-sage-200 bg-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-forest-900" />
            <span className="font-serif text-lg font-medium text-forest-950">
              The Lineage of TOP Ayurveda
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-forest-800 hover:text-forest-950 hover:bg-sage-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Story Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-light text-forest-900/80 leading-relaxed text-sm">
          
          <div>
            <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-forest-700 font-semibold block mb-1">
              Founding Creed
            </span>
            <h3 className="font-serif text-3xl font-light text-forest-950 tracking-tight">
              “Wellness begins before illness does.”
            </h3>
            <p className="mt-3">
              Modern medicine is magnificent at emergency trauma and crisis intervention. Yet, the human soul and cellular structure crave something more enduring: the daily preservation of radiant vitality.
            </p>
            <p className="mt-2">
              TOP Ayurveda was founded on the singular conviction that human beings were never designed to exist in a chronic state of low-grade inflammation, sleepless exhaustion, and digestive congestion. Five millennia ago, the sages of the Vedic civilization articulated a comprehensive science of living: <em>Ayus</em> (Life) and <em>Veda</em> (Wisdom).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-sage-200 shadow-xs">
            <h4 className="font-serif text-lg font-medium text-forest-950 mb-2">
              The Principle of Food As Medicine
            </h4>
            <p className="text-xs sm:text-sm text-forest-800/80">
              In classical texts such as the Charaka Samhita and Sushruta Samhita, herbs and rasayanas are not chemical suppresses—they are food in their most concentrated, intelligent manifestation. When we ingest wild Himalayan Amla, Neem-grown Giloy, or Kashmiri Saffron, we are transmitting bio-informational codes of resilience directly into our cells.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl font-medium text-forest-950 mb-2">
              Noble Metallurgy: Swarna & Rajata Bhasma
            </h4>
            <p>
              One of the most frequently misunderstood realms of authentic Ayurveda is Rasashastra (mineral alchemy). Through dozens of rigorous purification cycles (Shodhana) and closed-fire calcinations (Marana), pure 24-karat gold and silver are reduced to colloidal nano-particles that are completely non-toxic and deeply rejuvenating to nervous tissue.
            </p>
            <p className="mt-2">
              At TOP Ayurveda, our Swarna and Rajata preparations are tested via ICP-MS spectroscopy to guarantee the absence of free heavy metals, adhering stringently to the Ayurvedic Pharmacopoeia of India.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-forest-900 text-ivory-50 border border-forest-800">
            <div className="flex items-center gap-2 text-gold-300 text-xs font-serif uppercase tracking-wider mb-2 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Our Conscious Dietary Charter</span>
            </div>
            <p className="text-xs text-ivory-200/80 leading-relaxed font-light">
              We never make sweeping marketing claims that our entire brand is blindly "100% Vegan". While our Amla tablets and Nano Giloy are purely plant-based and 100% Vegan, our classical Chyawanprash honors sacred Ayurvedic scripture by incorporating Vedic A2 Gir Cow Ghee and wild forest honey as essential Yogavahi catalysts. We state every ingredient with fearless transparency.
            </p>
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-5 border-t border-sage-200 bg-white flex items-center justify-between shrink-0">
          <span className="text-xs font-serif italic text-forest-700">
            Ancient Wisdom. Refined for Modern Wellness.
          </span>

          <button
            onClick={() => {
              onClose();
              onExploreProducts();
            }}
            className="px-6 py-2.5 rounded-full bg-forest-900 text-ivory-50 text-xs uppercase tracking-wider font-semibold hover:bg-forest-850"
          >
            Explore Master Formulations
          </button>
        </div>

      </div>
    </div>
  );
};
