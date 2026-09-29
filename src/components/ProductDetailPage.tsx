import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import {
  Star,
  ShieldCheck,
  Leaf,
  Sparkles,
  ArrowLeft,
  ShoppingBag,
  Check,
  ChevronDown,
  Sun,
  Moon,
  Clock,
  Award,
  Share2,
  Heart,
} from 'lucide-react';
import { ProductCard } from './ProductCard';

interface ProductDetailPageProps {
  product: Product;
  allProducts: Product[];
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  allProducts,
  onBack,
  onSelectProduct,
}) => {
  const { addToCart, openCheckout } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.gallery[0] || product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'story' | 'ingredients' | 'ritual' | 'citation' | 'faqs'>('story');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [justAdded, setJustAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    openCheckout();
  };

  return (
    <div className="pt-28 pb-24 bg-ivory-50 bg-grain min-h-screen">
      {/* Sticky Mobile Add to Cart Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-white/95 backdrop-blur-md border-t border-sage-200 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] text-forest-700 uppercase font-serif tracking-wider font-semibold line-clamp-1">
            {product.name}
          </span>
          <span className="text-sm font-serif font-bold text-forest-950">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAddToCart}
            className="px-5 py-2.5 rounded-full bg-forest-900 text-ivory-50 text-xs uppercase tracking-wider font-semibold shadow-md active:scale-95 transition-all flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-gold-400" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-forest-800 hover:text-forest-950 font-medium group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-forest-700 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Formulations</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`p-2 rounded-full border transition-colors ${
                liked
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-white border-sage-200 text-forest-800 hover:border-forest-800'
              }`}
              title="Add to Wishlist"
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: product.name, url: window.location.href });
                }
              }}
              className="p-2 rounded-full bg-white border border-sage-200 text-forest-800 hover:border-forest-800 transition-colors"
              title="Share formulation"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Top Product Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Image Gallery with Thumbnails */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Primary Main Image Container */}
            <div className="relative aspect-4/5 sm:aspect-square w-full rounded-3xl overflow-hidden bg-white border border-sage-200 shadow-xl group">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transform group-hover:scale-104 transition-transform duration-700"
              />

              {/* Floating Badges */}
              <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm ${
                    product.badge === '100% Vegan'
                      ? 'bg-emerald-950/85 text-emerald-300 border border-emerald-500/30'
                      : 'bg-amber-950/85 text-amber-200 border border-amber-500/30'
                  }`}
                >
                  {product.badge}
                </span>

                {product.elementHighlight === 'gold' && (
                  <span className="px-3 py-1 rounded-full text-xs font-serif uppercase tracking-widest bg-forest-900/90 text-gold-300 border border-gold-500/40 backdrop-blur-md">
                    ✦ 24K Real Swarna Bhasma
                  </span>
                )}
                {product.elementHighlight === 'both' && (
                  <span className="px-3 py-1 rounded-full text-xs font-serif uppercase tracking-widest bg-forest-900/90 text-gold-300 border border-gold-500/40 backdrop-blur-md">
                    ✦ Swarna & Rajata Dual Alchemy
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Carousel */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === img
                      ? 'border-forest-900 ring-2 ring-forest-900/20 scale-102'
                      : 'border-sage-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Gallery view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Dosha Impact Bar */}
            <div className="p-4 rounded-2xl bg-white border border-sage-200/80 shadow-xs grid grid-cols-3 gap-3 text-center">
              <div className="p-2 rounded-xl bg-sage-50">
                <span className="text-[10px] uppercase font-serif text-forest-700 tracking-wider font-semibold block">
                  Vata (Air)
                </span>
                <span className="text-xs font-medium text-forest-950 mt-0.5 block">
                  {product.dosha.vata}
                </span>
              </div>
              <div className="p-2 rounded-xl bg-sage-50">
                <span className="text-[10px] uppercase font-serif text-forest-700 tracking-wider font-semibold block">
                  Pitta (Fire)
                </span>
                <span className="text-xs font-medium text-forest-950 mt-0.5 block">
                  {product.dosha.pitta}
                </span>
              </div>
              <div className="p-2 rounded-xl bg-sage-50">
                <span className="text-[10px] uppercase font-serif text-forest-700 tracking-wider font-semibold block">
                  Kapha (Earth)
                </span>
                <span className="text-xs font-medium text-forest-950 mt-0.5 block">
                  {product.dosha.kapha}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Pricing, Actions, Accordions */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* Sanskrit Name and Rating */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-serif uppercase tracking-[0.2em] text-forest-700 font-semibold">
                {product.sanskritName}
              </span>

              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs font-semibold text-forest-950">{product.rating}</span>
                <span className="text-xs text-forest-800/50">({product.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="font-serif text-3xl sm:text-4xl font-normal text-forest-950 tracking-tight leading-snug mb-2">
              {product.name}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-forest-800/80 font-serif italic mb-4">
              {product.subtitle}
            </p>

            {/* Pricing Section */}
            <div className="p-4 rounded-2xl bg-white border border-sage-200/80 mb-6 flex items-baseline justify-between">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-forest-950">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-forest-800/40 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                </span>
              </div>

              <span className="text-[11px] text-forest-700/70 font-light">
                {product.weightVolume}
              </span>
            </div>

            {/* Feature Badges Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.featureBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-full bg-sage-100/70 border border-sage-200 text-forest-900 text-[11px] font-medium tracking-wide flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-gold-500" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>

            {/* Quantity and Cart Actions */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                {/* Quantity modifier */}
                <div className="flex items-center rounded-full bg-white border border-sage-300 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-forest-900 hover:bg-sage-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-semibold text-forest-950">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-forest-900 hover:bg-sage-100 transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3.5 px-6 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                    justAdded
                      ? 'bg-emerald-700 text-white'
                      : 'bg-forest-900 text-ivory-50 hover:bg-forest-850 hover:shadow-lg'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Ritual</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-gold-400" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>

              {/* Buy Now button */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 rounded-full bg-gold-500 text-forest-950 text-xs uppercase tracking-[0.16em] font-bold hover:bg-gold-400 transition-all shadow-md"
              >
                Instant Buy Now
              </button>
            </div>

            {/* Deep-Dive Tabs (Product Story, Ingredients, How to Use, Charaka Citation, FAQ) */}
            <div className="border-t border-sage-200 pt-6">
              <div className="flex items-center gap-2 border-b border-sage-200 pb-2 overflow-x-auto text-xs font-serif uppercase tracking-wider">
                <button
                  onClick={() => setActiveTab('story')}
                  className={`pb-2 transition-colors shrink-0 ${
                    activeTab === 'story'
                      ? 'text-forest-950 border-b-2 border-forest-900 font-semibold'
                      : 'text-forest-700/60 hover:text-forest-900'
                  }`}
                >
                  Heritage & Story
                </button>
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-2 transition-colors shrink-0 ${
                    activeTab === 'ingredients'
                      ? 'text-forest-950 border-b-2 border-forest-900 font-semibold'
                      : 'text-forest-700/60 hover:text-forest-900'
                  }`}
                >
                  Key Botanicals
                </button>
                <button
                  onClick={() => setActiveTab('ritual')}
                  className={`pb-2 transition-colors shrink-0 ${
                    activeTab === 'ritual'
                      ? 'text-forest-950 border-b-2 border-forest-900 font-semibold'
                      : 'text-forest-700/60 hover:text-forest-900'
                  }`}
                >
                  Ritual Dinacharya
                </button>
                <button
                  onClick={() => setActiveTab('citation')}
                  className={`pb-2 transition-colors shrink-0 ${
                    activeTab === 'citation'
                      ? 'text-forest-950 border-b-2 border-forest-900 font-semibold'
                      : 'text-forest-700/60 hover:text-forest-900'
                  }`}
                >
                  Vedic Text
                </button>
                <button
                  onClick={() => setActiveTab('faqs')}
                  className={`pb-2 transition-colors shrink-0 ${
                    activeTab === 'faqs'
                      ? 'text-forest-950 border-b-2 border-forest-900 font-semibold'
                      : 'text-forest-700/60 hover:text-forest-900'
                  }`}
                >
                  FAQs
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="pt-4 text-xs sm:text-sm text-forest-900/80 leading-relaxed font-light">
                {activeTab === 'story' && (
                  <div className="space-y-3">
                    <p>{product.description}</p>
                    <div className="p-3.5 rounded-xl bg-ivory-100 border border-sage-200">
                      <h4 className="text-[11px] uppercase font-serif tracking-wider font-semibold text-forest-900 mb-1">
                        Traditional Preparation Protocol
                      </h4>
                      <p className="text-xs text-forest-800/80 font-light">
                        {product.traditionalPreparationStory}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'ingredients' && (
                  <div className="space-y-3">
                    {product.keyIngredients.map((ing) => (
                      <div key={ing.name} className="p-3 rounded-xl bg-white border border-sage-200 flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-ivory-100">
                          {ing.image && <img src={ing.image} alt={ing.name} className="w-full h-full object-cover" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="font-serif font-semibold text-forest-950 text-xs">{ing.name}</h5>
                            <span className="text-[10px] text-forest-700 italic font-serif">{ing.sanskrit}</span>
                          </div>
                          <p className="text-[11px] text-forest-800/70 mt-0.5">{ing.benefit}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'ritual' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-white border border-sage-200">
                      <span className="text-[10px] uppercase font-serif tracking-wider text-forest-700 font-semibold block">
                        Timing
                      </span>
                      <p className="text-xs text-forest-950 font-medium">{product.ritualHowToUse.timing}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-sage-200">
                      <span className="text-[10px] uppercase font-serif tracking-wider text-forest-700 font-semibold block">
                        Dosage & Vehicle (Anupana)
                      </span>
                      <p className="text-xs text-forest-950 font-medium">{product.ritualHowToUse.dosage} with {product.ritualHowToUse.anupana}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-gold-400/10 border border-gold-400/30">
                      <span className="text-[10px] uppercase font-serif tracking-wider text-gold-800 font-semibold block">
                        Practitioner Tip
                      </span>
                      <p className="text-xs text-forest-900/90 italic font-serif">{product.ritualHowToUse.tip}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'citation' && (
                  <div className="p-5 rounded-2xl bg-forest-900 text-ivory-50 border border-forest-800">
                    <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-gold-300 block mb-2">
                      Classical Scripture Reference
                    </span>
                    <blockquote className="font-serif text-base italic leading-relaxed text-ivory-100">
                      {product.ayurvedicCitation.text}
                    </blockquote>
                    <p className="mt-3 text-xs text-gold-400 font-serif tracking-wide text-right">
                      — {product.ayurvedicCitation.reference}
                    </p>
                  </div>
                )}

                {activeTab === 'faqs' && (
                  <div className="space-y-2">
                    {product.faqs.map((faq, idx) => (
                      <div key={idx} className="rounded-xl border border-sage-200 bg-white overflow-hidden">
                        <button
                          onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                          className="w-full p-3.5 text-left flex items-center justify-between text-xs font-serif font-medium text-forest-950"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-forest-700 transition-transform ${
                              openFaqIdx === idx ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {openFaqIdx === idx && (
                          <div className="px-3.5 pb-3.5 text-xs text-forest-800/80 font-light border-t border-sage-100 pt-2">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Customer Reviews Section */}
        <div className="mt-20 pt-16 border-t border-sage-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-serif uppercase tracking-widest text-forest-700 font-semibold block mb-1">
                Verified Feedback
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-forest-950">
                Customer Experiences ({product.reviews.length})
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-forest-950">{product.rating} out of 5</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.reviews.map((rev) => (
              <div key={rev.id} className="p-6 rounded-2xl bg-white border border-sage-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-forest-700/60 font-light">{rev.date}</span>
                </div>

                <h4 className="font-serif text-sm font-semibold text-forest-950 mb-1">
                  “{rev.title}”
                </h4>

                <p className="text-xs sm:text-sm text-forest-800/80 leading-relaxed font-light mb-4">
                  {rev.comment}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-sage-100 text-xs">
                  <span className="font-medium text-forest-950">{rev.author}, {rev.location}</span>
                  {rev.verified && (
                    <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                      Verified Buyer
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Formulations Carousel / Grid */}
        <div className="mt-20 pt-16 border-t border-sage-200">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-serif uppercase tracking-widest text-forest-700 font-semibold block mb-1">
              Complementary Rituals
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-forest-950">
              Complete Your Daily Dinacharya
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard
                key={rel.id}
                product={rel}
                onSelect={(p) => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onSelectProduct(p);
                }}
                onQuickView={onSelectProduct}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
