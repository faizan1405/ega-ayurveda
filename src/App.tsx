import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { FEATURED_PRODUCTS } from './data/products';
import { BOTANICAL_INGREDIENTS } from './data/ingredients';
import { WELLNESS_GOALS, TESTIMONIALS } from './data/wellnessGoals';
import { Product } from './types';

// Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandPhilosophyStrip } from './components/BrandPhilosophyStrip';
import { FeaturedProductsGrid } from './components/FeaturedProductsGrid';
import { FeaturedProductStory } from './components/FeaturedProductStory';
import { GoldSilverAyurvedaSection } from './components/GoldSilverAyurvedaSection';
import { WhyEgaSection } from './components/WhyEgaSection';
import { IngredientExperience } from './components/IngredientExperience';
import { ShopByWellnessGoal } from './components/ShopByWellnessGoal';
import { AyurvedaExpertSection } from './components/AyurvedaExpertSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BrandStorySection } from './components/BrandStorySection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

// Modals & Detail
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
  const [currentView, setCurrentView] = useState<'home' | 'product-detail'>('home');
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

  const handleNavigate = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
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

  const heroProduct = FEATURED_PRODUCTS[0]; // EGA Swarna Chyawanprash

  return (
    <div className="min-h-screen bg-ivory-50 text-forest-950 font-sans selection:bg-forest-800 selection:text-ivory-50">
      
      {/* Header */}
      <Header
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenExpert={() => setIsExpertModalOpen(true)}
        onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
      />

      {/* Main Content Area */}
      {currentView === 'home' ? (
        <main>
          {/* Hero Section */}
          <Hero
            onExploreCollection={() => handleNavigate('featured-products')}
            onDiscoverPhilosophy={() => handleNavigate('brand-story')}
            onSelectHeroProduct={() => handleSelectProduct(heroProduct)}
          />

          {/* Marquee Philosophy Strip */}
          <BrandPhilosophyStrip />

          {/* EXACT FIVE FEATURED PRODUCTS */}
          <FeaturedProductsGrid
            products={FEATURED_PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
          />

          {/* Featured Product Story (Asymmetrical Editorial Split) */}
          <FeaturedProductStory
            heroProduct={heroProduct}
            onViewProductDetail={handleSelectProduct}
          />

          {/* Gold & Silver Rasashastra Story */}
          <GoldSilverAyurvedaSection
            products={FEATURED_PRODUCTS}
            onExploreProduct={handleSelectProductById}
          />

          {/* Why EGA Section (Trust Cards) */}
          <WhyEgaSection />

          {/* Interactive Ingredient Experience (From Nature to Ritual) */}
          <IngredientExperience
            ingredients={BOTANICAL_INGREDIENTS}
            onSelectProductByIngredient={handleSelectProductById}
          />

          {/* Shop By Wellness Goal (Targeted Rituals) */}
          <ShopByWellnessGoal
            goals={WELLNESS_GOALS}
            onSelectGoal={handleSelectProductById}
          />

          {/* Ayurveda Expert Consultation Section */}
          <AyurvedaExpertSection
            onOpenBooking={() => setIsExpertModalOpen(true)}
          />

          {/* Testimonials Editorial Carousel */}
          <TestimonialsSection testimonials={TESTIMONIALS} />

          {/* Brand Story (Food As Medicine) */}
          <BrandStorySection
            onOpenStoryModal={() => setIsStoryModalOpen(true)}
            onExplorePhilosophy={() => handleNavigate('gold-silver-alchemy')}
          />

          {/* Minimal Newsletter */}
          <NewsletterSection />
        </main>
      ) : (
        selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            allProducts={FEATURED_PRODUCTS}
            onBack={handleBackToHome}
            onSelectProduct={handleSelectProduct}
          />
        )
      )}

      {/* Luxury Forest-Green Footer */}
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
          handleNavigate('featured-products');
        }}
      />

      {/* Toast feedback */}
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
