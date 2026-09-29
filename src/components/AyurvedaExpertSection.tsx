import React from 'react';
import { Calendar, MessageSquare, Award, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface AyurvedaExpertSectionProps {
  onOpenBooking: () => void;
}

export const AyurvedaExpertSection: React.FC<AyurvedaExpertSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section className="py-24 sm:py-32 bg-ivory-100/70 border-b border-sage-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-forest-900 text-ivory-50 overflow-hidden shadow-2xl border border-forest-800 grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Column: Vaidya / Practitioner Portrait & Credentials */}
          <div className="lg:col-span-5 relative h-full min-h-[380px] lg:min-h-[500px] overflow-hidden bg-forest-950">
            <img
              src="https://images.unsplash.com/photo-1594824813511-13c5717757ee?auto=format&fit=crop&w=1000&q=80"
              alt="Ayurvedic Doctor Vaidya consultation"
              className="w-full h-full object-cover object-top opacity-90 hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

            {/* Practitioner Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-forest-900/90 backdrop-blur-md border border-gold-500/30">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span className="text-xs font-serif uppercase tracking-widest text-gold-300">
                  Certified BAMS Vaidya Panel
                </span>
              </div>
              <h4 className="text-sm font-serif font-medium text-ivory-50 mt-1">
                Personalized Nadi & Dosha Diagnosis
              </h4>
              <p className="text-[11px] text-ivory-200/70">
                Over 25,000 holistic consultations conducted globally
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Booking CTA */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-300 text-xs font-serif uppercase tracking-widest self-start mb-4 border border-gold-500/30">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>Complimentary 15-Min Prakriti Analysis</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory-50 tracking-tight leading-tight">
              Not sure what suits you? <br />
              <span className="italic font-normal text-gold-300">
                Speak with an Ayurvedic Expert.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-ivory-200/80 leading-relaxed font-light">
              In Ayurveda, there is no generic solution—each constitution possesses its own rhythm of Vata, Pitta, and Kapha. Speak with our certified classical practitioners to identify your exact biological imbalances, dietary guidance, and personalized herbal regimen.
            </p>

            {/* 3 Consultation Perks */}
            <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-forest-800">
              <div className="flex flex-col">
                <span className="text-xs font-serif text-gold-300 uppercase tracking-wider font-semibold">
                  01. Dosha Profiling
                </span>
                <span className="text-xs text-ivory-200/70 mt-1">
                  Comprehensive assessment of your mind-body prakriti.
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-serif text-gold-300 uppercase tracking-wider font-semibold">
                  02. Custom Ritual
                </span>
                <span className="text-xs text-ivory-200/70 mt-1">
                  Tailored morning and evening dinacharya schedules.
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-serif text-gold-300 uppercase tracking-wider font-semibold">
                  03. Direct Support
                </span>
                <span className="text-xs text-ivory-200/70 mt-1">
                  Continuous follow-up over private WhatsApp concierge.
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-500 text-forest-950 text-xs uppercase tracking-[0.18em] font-semibold hover:bg-gold-400 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-forest-950" />
                <span>Talk To An Expert</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-xs text-ivory-200/60 font-light">
                Available via Video Call & WhatsApp Audio
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
