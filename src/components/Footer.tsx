import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';


interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenExpert: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenExpert }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-forest-950 text-ivory-50 pt-20 pb-12 overflow-hidden border-t border-forest-800">
      
      {/* Subtle Oversized Botanical Line-Art SVG in Background */}
      <div className="absolute right-0 bottom-0 w-[550px] h-[550px] opacity-[0.04] pointer-events-none translate-x-1/4 translate-y-1/4">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full text-gold-300">
          <path d="M100 10 C 120 40, 160 80, 190 100 C 160 120, 120 160, 100 190 C 80 160, 40 120, 10 100 C 40 80, 80 40, 100 10 Z" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="45" strokeWidth="0.5" />
          <path d="M100 30 L 100 170 M 30 100 L 170 100" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-forest-850">
          
          {/* Brand Presentation Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1.5 cursor-pointer mb-3" onClick={scrollToTop}>
              <span className="font-display font-medium text-3xl tracking-[0.25em] text-ivory-50 uppercase">
                EGA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mb-1" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-gold-300/80 font-serif italic ml-1">
                Ayurveda
              </span>
            </div>

            <p className="max-w-sm text-xs sm:text-sm text-ivory-200/70 font-light leading-relaxed mb-6">
              Ancient Ayurvedic Wisdom. Refined for Modern Wellness. Handcrafted formulations, authentic Rasashastra preparations, and wild-harvested botanicals.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-forest-900 border border-forest-800 hover:border-gold-500/50 flex items-center justify-center text-ivory-100 hover:text-gold-300 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-forest-900 border border-forest-800 hover:border-gold-500/50 flex items-center justify-center text-ivory-100 hover:text-gold-300 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="mailto:care@egaayurveda.com"
                className="w-9 h-9 rounded-full bg-forest-900 border border-forest-800 hover:border-gold-500/50 flex items-center justify-center text-ivory-100 hover:text-gold-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav: Shop & Formulations */}
          <div>
            <h4 className="text-xs font-serif uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">
              Formulations
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-200/70 font-light">
              <li>
                <button onClick={() => onNavigate('featured-products')} className="hover:text-gold-300 transition-colors">
                  Swarna Chyawanprash
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('featured-products')} className="hover:text-gold-300 transition-colors">
                  Nervega Gold & Silver
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('featured-products')} className="hover:text-gold-300 transition-colors">
                  Nano Giloy Extract
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('featured-products')} className="hover:text-gold-300 transition-colors">
                  Wild Forest Amla
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('featured-products')} className="hover:text-gold-300 transition-colors">
                  Kumkumadi Radiance Elixir
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Nav: Knowledge & Heritage */}
          <div>
            <h4 className="text-xs font-serif uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">
              Wisdom & Care
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-200/70 font-light">
              <li>
                <button onClick={() => onNavigate('brand-story')} className="hover:text-gold-300 transition-colors">
                  Our Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gold-silver-alchemy')} className="hover:text-gold-300 transition-colors">
                  Gold & Silver Alchemy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ingredients-experience')} className="hover:text-gold-300 transition-colors">
                  Botanical Glossary
                </button>
              </li>
              <li>
                <button onClick={onOpenExpert} className="hover:text-gold-300 transition-colors">
                  Ayurvedic Doctor Consultation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('wellness-goals')} className="hover:text-gold-300 transition-colors">
                  Dinacharya Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Orders */}
          <div>
            <h4 className="text-xs font-serif uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">
              Concierge
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-200/70 font-light">
              <li>
                <a href="#contact" className="hover:text-gold-300 transition-colors">
                  Shipping & Customs
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-gold-300 transition-colors">
                  Returns & Integrity
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-gold-300 transition-colors">
                  Privacy & Disclaimers
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-300/50 font-light">
          <p>
            © {new Date().getFullYear()} EGA Ayurveda. Handcrafted with reverence in India. All classical rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-ivory-300/40">
              Client Presentation Demo Concept
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-ivory-200 hover:text-gold-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
