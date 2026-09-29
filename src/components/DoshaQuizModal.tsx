import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';

interface DoshaQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const DoshaQuizModal: React.FC<DoshaQuizModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<('vata' | 'pitta' | 'kapha')[]>([]);

  if (!isOpen) return null;

  const questions = [
    {
      title: 'How does your daily energy and physical constitution behave?',
      options: [
        {
          label: 'Light, quick, highly creative, but prone to rapid fatigue and cold hands/feet.',
          type: 'vata' as const,
          dosha: 'Vata (Wind & Ether)',
        },
        {
          label: 'Dynamic, driven, warm body temperature, sharp intellect and appetite.',
          type: 'pitta' as const,
          dosha: 'Pitta (Fire & Water)',
        },
        {
          label: 'Solid, grounded, calm endurance, slow to tire but prone to morning sluggishness.',
          type: 'kapha' as const,
          dosha: 'Kapha (Earth & Water)',
        },
      ],
    },
    {
      title: 'How would you describe your natural sleep pattern?',
      options: [
        {
          label: 'Light or variable sleep; easily awakened by slight sounds or racing thoughts.',
          type: 'vata' as const,
          dosha: 'Vata',
        },
        {
          label: 'Moderate (6–7 hours); wake up feeling alert; intense vivid dreams occasionally.',
          type: 'pitta' as const,
          dosha: 'Pitta',
        },
        {
          label: 'Deep, heavy, uninterrupted sleep; difficult to wake up before sunrise.',
          type: 'kapha' as const,
          dosha: 'Kapha',
        },
      ],
    },
    {
      title: 'How does your digestion and gut fire (Agni) usually feel?',
      options: [
        {
          label: 'Irregular appetite, prone to dryness, bloating or variable bowel movements.',
          type: 'vata' as const,
          dosha: 'Vata',
        },
        {
          label: 'Strong, intense hunger; easily irritable if meals are skipped; prone to acidity.',
          type: 'pitta' as const,
          dosha: 'Pitta',
        },
        {
          label: 'Slow, steady digestion; feeling heavy for hours after standard meals.',
          type: 'kapha' as const,
          dosha: 'Kapha',
        },
      ],
    },
  ];

  const handleSelectOption = (type: 'vata' | 'pitta' | 'kapha') => {
    const nextAnswers = [...answers, type];
    setAnswers(nextAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // results
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
  };

  // Determine dominant dosha
  const counts = { vata: 0, pitta: 0, kapha: 0 };
  answers.forEach((a) => counts[a]++);
  let dominant: 'vata' | 'pitta' | 'kapha' = 'vata';
  if (counts.pitta > counts.vata && counts.pitta >= counts.kapha) dominant = 'pitta';
  else if (counts.kapha > counts.vata && counts.kapha > counts.pitta) dominant = 'kapha';

  const recommendedProductId =
    dominant === 'vata'
      ? 'ekangveer-ras-vati'
      : dominant === 'pitta'
      ? 'kumkumadi-tejas-glow-oil'
      : 'premium-shilajit-resin';

  const recommendedProduct =
    products.find((p) => p.id === recommendedProductId) || products[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-ivory-50 rounded-3xl shadow-2xl border border-sage-200 overflow-hidden z-10 animate-scale-in">
        
        {/* Header */}
        <div className="p-5 border-b border-sage-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-600" />
            <span className="font-serif text-base sm:text-lg font-medium text-forest-950">
              Prakriti Assessment: Discover Your Dosha
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-forest-800 hover:text-forest-950 hover:bg-sage-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {step < questions.length && (
          <div className="h-1 bg-sage-200 w-full">
            <div
              className="h-full bg-forest-900 transition-all duration-300"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
        )}

        {/* Quiz Content */}
        <div className="p-6 sm:p-8">
          {step < questions.length ? (
            <div>
              <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-forest-700 block mb-2 font-semibold">
                Question {step + 1} of {questions.length}
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-light text-forest-950 mb-6">
                {questions[step].title}
              </h3>

              <div className="space-y-3">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.type)}
                    className="w-full p-4 rounded-2xl bg-white border border-sage-200/90 hover:border-gold-500/60 hover:bg-ivory-100/50 shadow-xs text-left transition-all group flex items-center justify-between"
                  >
                    <span className="text-xs sm:text-sm text-forest-950 leading-relaxed font-light group-hover:text-forest-900">
                      {opt.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-sage-400 group-hover:text-gold-600 group-hover:translate-x-1 shrink-0 ml-3 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="inline-flex p-3 rounded-full bg-gold-400/20 text-gold-600 mb-1">
                <Sparkles className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-serif uppercase tracking-widest text-forest-700 font-semibold block">
                  Your Primary Bio-Energy Constitution
                </span>
                <h3 className="font-serif text-3xl font-normal text-forest-950 mt-1 capitalize">
                  {dominant === 'vata'
                    ? 'Vata Dominant (Wind & Ether)'
                    : dominant === 'pitta'
                    ? 'Pitta Dominant (Fire & Water)'
                    : 'Kapha Dominant (Earth & Water)'}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-forest-800/80 max-w-md mx-auto leading-relaxed font-light">
                  {dominant === 'vata'
                    ? 'Your nature is visionary, mobile, and intuitive. When unbalanced, you experience stress, light sleep, and dryness. Warming grounding herbs and Swarna-Rajata rasayanas restore steady composure.'
                    : dominant === 'pitta'
                    ? 'Your nature is sharp, passionate, and analytical. When unbalanced, you accumulate excess metabolic heat and skin redness. Bitter, cooling botanicals like Guduchi (Giloy) and Saffron bring serene luminescence.'
                    : 'Your nature is serene, loyal, and steady. When unbalanced, you hold excess moisture and lethargy. Light, pungent, and astringent herbs like Himalayan Amla rekindle your inner digestive fire.'}
                </p>
              </div>

              {/* Recommended Formulation Card */}
              {recommendedProduct && (
                <div className="p-4 rounded-2xl bg-white border border-sage-200/90 shadow-sm text-left flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={recommendedProduct.image}
                      alt={recommendedProduct.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-gold-700 block">
                        Your Recommended Ritual Match
                      </span>
                      <h4 className="font-serif text-sm font-semibold text-forest-950">
                        {recommendedProduct.name}
                      </h4>
                      <span className="text-xs font-serif text-forest-700">
                        ₹{recommendedProduct.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onSelectProduct(recommendedProduct);
                    }}
                    className="px-4 py-2 rounded-full bg-forest-900 text-ivory-50 text-xs font-semibold uppercase tracking-wider hover:bg-forest-850 shrink-0"
                  >
                    View Formulation
                  </button>
                </div>
              )}

              <div className="flex justify-center gap-4 pt-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-forest-700 hover:text-forest-950 font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
