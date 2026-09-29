import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
  onOpenExpert: () => void;
  onOpenDoshaQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onOpenSearch,
  onOpenExpert,
  onOpenDoshaQuiz,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', id: 'featured-products' },
    { label: 'Our Philosophy', id: 'brand-story' },
    { label: 'Gold & Silver', id: 'gold-silver-alchemy' },
    { label: 'Ingredients', id: 'ingredients-experience' },
    { label: 'Ayurveda', id: 'why-ega' },
    { label: 'Wellness Goals', id: 'wellness-goals' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-ivory-50/90 backdrop-blur-md border-b border-sage-200/60 shadow-xs py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Mobile menu toggle & Desktop Navigation */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-forest-900 hover:text-forest-700 transition-colors focus:outline-hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <nav className="hidden lg:flex items-center gap-7">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    className="relative text-xs tracking-[0.16em] uppercase font-medium text-forest-900/80 hover:text-forest-900 transition-colors duration-200 group py-1"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-800 transition-all duration-300 ease-out group-hover:w-full" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Center: Brand Logo */}
            <div className="flex flex-col items-center cursor-pointer select-none" onClick={() => onNavigate('hero')}>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-medium text-2xl sm:text-3xl tracking-[0.25em] text-forest-950 uppercase">
                  EGA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mb-1" />
              </div>
              <span className="text-[9px] tracking-[0.38em] uppercase text-forest-800/70 -mt-1 font-serif italic">
                Ayurveda
              </span>
            </div>

            {/* Right: Actions & Secondary CTA */}
            <div className="flex items-center gap-2.5 sm:gap-4">
              {/* Secondary CTA: Talk to an Ayurvedic Expert */}
              <button
                onClick={onOpenExpert}
                className="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-forest-900 bg-sage-100/70 hover:bg-sage-200/80 border border-sage-300/40 transition-all duration-200 group"
              >
                <Calendar className="w-3.5 h-3.5 text-forest-700 group-hover:scale-110 transition-transform" />
                <span>Talk to an Expert</span>
              </button>

              {/* Prakriti / Dosha Quiz Badge */}
              <button
                onClick={onOpenDoshaQuiz}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-forest-900 bg-gold-400/20 hover:bg-gold-400/30 border border-gold-500/30 transition-all duration-200"
                title="Discover your Ayurvedic constitution"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-600 animate-pulse" />
                <span>Dosha Quiz</span>
              </button>

              {/* Search button */}
              <button
                onClick={onOpenSearch}
                className="p-2 text-forest-900/80 hover:text-forest-950 transition-colors duration-200 rounded-full hover:bg-sage-100/50"
                aria-label="Search formulations and botanicals"
                title="Search (Cmd + K)"
              >
                <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Account icon */}
              <button
                onClick={() => onNavigate('newsletter')}
                className="hidden md:flex p-2 text-forest-900/80 hover:text-forest-950 transition-colors duration-200 rounded-full hover:bg-sage-100/50"
                aria-label="Account & Ritual Club"
                title="Ritual Account"
              >
                <User className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Slide-out Cart Trigger */}
              <button
                onClick={openCart}
                className="relative p-2 text-forest-900/80 hover:text-forest-950 transition-colors duration-200 rounded-full hover:bg-sage-100/50"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-forest-800 text-ivory-50 text-[10px] font-semibold flex items-center justify-center rounded-full animate-scale-in">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-forest-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-0 mr-auto w-full max-w-xs bg-ivory-50 h-full shadow-2xl p-6 flex flex-col justify-between z-10 animate-slide-right">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-sage-200">
                <div className="flex flex-col">
                  <span className="font-display font-medium text-2xl tracking-[0.25em] text-forest-950 uppercase">
                    EGA
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-forest-800/70 font-serif italic">
                    Ayurveda
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-forest-900 hover:text-forest-700"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile links */}
              <div className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onNavigate(link.id);
                    }}
                    className="flex items-center justify-between py-2 text-sm tracking-wider uppercase font-medium text-forest-900 border-b border-sage-100 text-left"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-sage-400" />
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenDoshaQuiz();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gold-400/20 text-forest-950 text-xs font-semibold tracking-wide border border-gold-500/40"
                >
                  <Sparkles className="w-4 h-4 text-gold-600" />
                  <span>Discover Your Dosha</span>
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenExpert();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-forest-900 text-ivory-50 text-xs font-medium tracking-wide shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Talk to an Ayurvedic Expert</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-sage-200 text-xs text-forest-800/60 text-center">
              <p className="font-serif italic">“Ancient Wisdom. Refined for Modern Wellness.”</p>
              <p className="mt-1 text-[11px]">Free Worldwide Shipping over ₹2,000</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
