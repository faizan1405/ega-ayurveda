import React, { useState } from 'react';
import { Testimonial } from '../types';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 sm:py-32 bg-ivory-50 bg-grain border-b border-sage-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-forest-700 font-semibold block mb-2">
              Lived Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-forest-950 tracking-tight">
              Words From The Mindful Community
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-sage-200 hover:border-forest-900 text-forest-900 transition-colors shadow-xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-forest-900 text-ivory-50 hover:bg-forest-850 transition-colors shadow-xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Editorial Testimonial Grid & Active Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test, idx) => (
            <div
              key={test.id}
              className={`p-8 rounded-3xl bg-white border transition-all duration-500 flex flex-col justify-between ${
                currentIndex === idx
                  ? 'border-gold-500/60 shadow-xl ring-1 ring-gold-500/20'
                  : 'border-sage-200/80 shadow-xs hover:border-sage-300'
              }`}
            >
              <div>
                {/* Top: Stars and Quote icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-sage-200/80" />
                </div>

                {/* Formulation reference */}
                <span className="text-[10px] font-serif uppercase tracking-widest text-forest-700 font-semibold block mb-2">
                  Ritual: {test.productName}
                </span>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-forest-900/80 leading-relaxed font-light italic">
                  “{test.comment}”
                </p>
              </div>

              {/* Author & Verification */}
              <div className="mt-8 pt-4 border-t border-sage-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-serif font-semibold text-forest-950">
                    {test.name}
                  </h4>
                  <span className="text-[11px] text-forest-700/60 font-light block">
                    {test.location}
                  </span>
                </div>

                {test.verified && (
                  <div className="flex items-center gap-1 text-[10px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
