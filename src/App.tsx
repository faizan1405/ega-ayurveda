import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { FEATURED_PRODUCTS } from './data/products';
import { BOTANICAL_INGREDIENTS } from './data/ingredients';
import { WELLNESS_GOALS, TESTIMONIALS } from './data/wellnessGoals';
import type { Product } from './types';

// Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandPhilosophyStrip } from './components/BrandPhilosophyStrip';
import { SignatureFiveShowcase } from './components/SignatureFiveShowcase';
import { BrandStorySection } from './components/BrandStorySection';
import { ShopByWellnessGoal } from './components/ShopByWellnessGoal';
import { ShilajitScrollStory } from './components/ShilajitScrollStory';
import { GoldSilverAyurvedaSection } from './components/GoldSilverAyurvedaSection';
import { HorizontalProductDiscovery } from './components/HorizontalProductDiscovery';
import { IngredientExperience } from './components/IngredientExperience';
import { WhyEgaSection } from './components/WhyEgaSection';
import { AyurvedaExpertSection } from './components/AyurvedaExpertSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

// Views & Modals
import { ShopCatalogView } from './components/ShopCatalogView';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { ExpertBookingModal } from './components/ExpertBookingModal';
import { DoshaQuizModal } from './components/DoshaQuizModal';
import { StoryModal } from './components/StoryModal';
import { Toast } from './components/Toast';

export function AppContent() {
  const [currentView, setCurrentView] = useState<'home' | 'product-detail' | 'shop'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [isDoshaQuizOpen, setIsDoshaQuizOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  // Keyboard shortcut Cmd+K or Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (target: string) => {
    if (target === 'shop') {
      setCurrentView('shop');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (target === 'home') {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductById = (productId: string) => {
    const found = FEATURED_PRODUCTS.find((p) => p.id === productId);
    if (found) {
      handleSelectProduct(found);
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const heroProduct = FEATURED_PRODUCTS[0]; // Premium Shilajit Resin

  return (
    <div className="min-h-screen bg-ivory-50 text-stone-900 font-sans selection:bg-stone-900 selection:text-ivory-50">
      
      {/* Sticky Luxury Header */}
      <Header
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenExpert={() => setIsExpertModalOpen(true)}
        onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
      />

      {/* Main View Router */}
      {currentView === 'home' && (
        <main>
          {/* SECTION 1: Cinematic Hero */}
          <Hero
            onExploreCollection={() => handleNavigate('signature-collection')}
            onDiscoverPhilosophy={() => handleNavigate('brand-story')}
            onSelectHeroProduct={() => handleSelectProduct(heroProduct)}
          />

          {/* SECTION 2: Floating Brand Promise Strip */}
          <BrandPhilosophyStrip />

          {/* SECTION 3: Signature 5 Product Experience (01/05 Stepped Reveal) */}
          <SignatureFiveShowcase
            products={FEATURED_PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
          />

          {/* SECTION 4: Animated Philosophy Story (Crafted with Purity, Backed by Tradition) */}
          <BrandStorySection
            onOpenStoryModal={() => setIsStoryModalOpen(true)}
            onExplorePhilosophy={() => handleNavigate('gold-silver-alchemy')}
          />

          {/* SECTION 5: Shop by Wellness Goal (7 Curated Categories) */}
          <ShopByWellnessGoal
            goals={WELLNESS_GOALS}
            onSelectGoal={handleSelectProductById}
          />

          {/* SECTION 6: Scroll-Driven Shilajit Story (Dark Cinematic Charcoal, Himalayan Rock/Resin) */}
          <ShilajitScrollStory
            shilajitProduct={heroProduct}
            onExploreProduct={handleSelectProduct}
          />

          {/* SECTION 7: Gold / Swarna Ayurveda Story (Precious Ingredients, Expanding Gold Alchemy) */}
          <GoldSilverAyurvedaSection
            products={FEATURED_PRODUCTS}
            onExploreProduct={handleSelectProductById}
          />

          {/* SECTION 8: Horizontal Product Discovery (Explore Ayurveda with TOP Ayurveda Collection) */}
          <HorizontalProductDiscovery
            products={FEATURED_PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
          />

          {/* SECTION 9: Ingredient Storytelling (What Goes Into Wellness - 7 Sacred Ingredients) */}
          <IngredientExperience
            ingredients={BOTANICAL_INGREDIENTS}
            onSelectProductByIngredient={handleSelectProductById}
          />

          {/* SECTION 10: Why Choose Us (6 Classical Trust Blocks) */}
          <WhyEgaSection />

          {/* SECTION 11: Expert Consultation (Ayurveda Vaidya Booking) */}
          <AyurvedaExpertSection
            onOpenBooking={() => setIsExpertModalOpen(true)}
          />

          {/* SECTION 12: Reviews (Verified Patron Testimonials) */}
          <TestimonialsSection testimonials={TESTIMONIALS} />

          {/* SECTION 13: Newsletter (Begin Your Wellness Ritual) */}
          <NewsletterSection />
        </main>
      )}

      {currentView === 'shop' && (
        <ShopCatalogView
          products={FEATURED_PRODUCTS}
          onBack={handleBackToHome}
          onSelectProduct={handleSelectProduct}
          onQuickView={(p) => setQuickViewProduct(p)}
        />
      )}

      {currentView === 'product-detail' && selectedProduct && (
        <ProductDetailPage
          product={selectedProduct}
          allProducts={FEATURED_PRODUCTS}
          onBack={handleBackToHome}
          onSelectProduct={handleSelectProduct}
        />
      )}

      {/* SECTION 14: Premium Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenExpert={() => setIsExpertModalOpen(true)}
      />

      {/* Modals & Slide-Out Panels */}
      <CartDrawer onSelectProduct={handleSelectProduct} />
      <CheckoutModal />
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onViewFullDetail={handleSelectProduct}
      />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={FEATURED_PRODUCTS}
        ingredients={BOTANICAL_INGREDIENTS}
        onSelectProduct={handleSelectProduct}
      />
      <ExpertBookingModal
        isOpen={isExpertModalOpen}
        onClose={() => setIsExpertModalOpen(false)}
      />
      <DoshaQuizModal
        isOpen={isDoshaQuizOpen}
        onClose={() => setIsDoshaQuizOpen(false)}
        products={FEATURED_PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />
      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        onExploreProducts={() => {
          setIsStoryModalOpen(false);
          handleNavigate('signature-collection');
        }}
      />

      {/* Global Feedback Toast */}
      <Toast />

    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
