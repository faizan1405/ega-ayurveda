import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
  onOpenExpert?: () => void;
  onOpenDoshaQuiz?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Shop', id: 'shop' },
    { label: 'Signature 5', id: 'signature-collection' },
    { label: 'Explore', id: 'explore-ayurveda' },
    { label: 'Philosophy', id: 'brand-story' },
    { label: 'Contact', id: 'newsletter' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${isScrolled
            ? 'bg-ivory-50/94 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3.5'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Mobile Menu Toggle & Desktop Nav */}
            <div className="flex items-center gap-8">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-stone-900 hover:text-stone-700 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <nav className="hidden lg:flex items-center gap-7">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    className="relative text-xs tracking-[0.18em] uppercase font-medium text-stone-800 hover:text-stone-950 transition-colors duration-200 group py-1"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-600 transition-all duration-300 ease-out group-hover:w-full" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Center: Brand Logo in Elegant Gold & Typography */}
            <div
              className="flex flex-col items-center cursor-pointer select-none"
              onClick={() => onNavigate('home')}
            >
              <div className="flex items-center gap-1.5">
                <span className="font-display font-medium text-2xl sm:text-3xl tracking-[0.28em] text-stone-950 uppercase">
                  TOP
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mb-1" />
              </div>
              <span className="text-[9px] tracking-[0.42em] uppercase text-stone-600 -mt-1 font-serif italic">
                Ayurveda
              </span>
            </div>

            {/* Right: Search, Cart */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search button */}
              <button
                onClick={onOpenSearch}
                className="p-2 text-stone-800 hover:text-stone-950 transition-colors rounded-full hover:bg-stone-100/60"
                aria-label="Search formulations"
                title="Search (Cmd + K)"
              >
                <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openCart}
                className="relative p-2.5 rounded-full bg-stone-950 text-ivory-50 hover:bg-stone-900 transition-all shadow-xs flex items-center justify-center"
                aria-label={`View shopping cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-gold-500 text-stone-950 text-[10px] font-bold flex items-center justify-center rounded-full animate-scale-in">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative ml-0 mr-auto w-full max-w-xs bg-ivory-50 h-full shadow-2xl p-6 flex flex-col justify-between z-10 animate-slide-right">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <div className="flex flex-col">
                  <span className="font-display font-medium text-2xl tracking-[0.25em] text-stone-950 uppercase">
                    TOP
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-stone-600 font-serif italic">
                    Ayurveda
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-stone-900 hover:text-stone-700"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onNavigate(link.id);
                    }}
                    className="flex items-center justify-between py-2.5 text-sm tracking-wider uppercase font-medium text-stone-900 border-b border-stone-100 text-left"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 text-xs text-stone-600 text-center">
              <p className="font-serif italic">“Ancient Wellness. Modern Elegance.”</p>
              <p className="mt-1 text-[11px]">Free Worldwide Shipping over ₹2,000</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
