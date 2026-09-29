export type DietaryBadge = '100% Vegan' | 'Pure Vegetarian';

export interface ProductIngredient {
  name: string;
  sanskrit: string;
  botanical: string;
  benefit: string;
  percentage?: string;
  image?: string;
}

export interface ProductReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  sanskritName: string;
  shortPurpose: string;
  subtitle: string;
  description: string;
  traditionalPreparationStory: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  badge: DietaryBadge;
  isBestseller?: boolean;
  elementHighlight?: 'gold' | 'silver' | 'both' | 'botanical';
  featureBadges: string[];
  image: string;
  gallery: string[];
  weightVolume: string;
  inStock: boolean;
  dosha: {
    vata: 'Balances' | 'Neutral' | 'Soothes';
    pitta: 'Balances' | 'Cools' | 'Neutral' | 'Soothes';
    kapha: 'Balances' | 'Invigorates' | 'Reduces' | 'Neutral';
  };

  keyIngredients: ProductIngredient[];
  ritualHowToUse: {
    timing: string;
    dosage: string;
    anupana: string; // vehicle, e.g. warm water or milk
    tip: string;
  };
  ayurvedicCitation: {
    text: string;
    reference: string;
  };
  faqs: ProductFAQ[];
  reviews: ProductReview[];
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BotanicalIngredient {
  id: string;
  name: string;
  sanskritName: string;
  botanicalName: string;
  shortDescription: string;
  traditionalUsage: string;
  doshaAffinity: string;
  rasa: string; // taste
  image: string;
  featuredIn: string[];
}

export interface WellnessGoal {
  id: string;
  title: string;
  sanskritName: string;
  description: string;
  image: string;
  featuredProductId: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  productName: string;
  comment: string;
  verified: boolean;
}
