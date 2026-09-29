import { WellnessGoal, Testimonial } from '../types';

export const WELLNESS_GOALS: WellnessGoal[] = [
  {
    id: 'gut-digestion',
    title: 'Gut & Digestion',
    sanskritName: 'जठराग्नि (Jatharagni)',
    description: 'Kindle the internal digestive fire, eliminate metabolic sludge (Ama), and restore nutrient assimilation.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    featuredProductId: 'ega-wild-forest-amla-tablets',
    benefits: ['Clear nutrient uptake', 'Zero post-meal heaviness', 'Harmonized gut microbiome'],
  },
  {
    id: 'daily-wellness',
    title: 'Daily Wellness & Detox',
    sanskritName: 'शोधन (Shodhana)',
    description: 'Effortless cellular purification through gentle daily botanical cleansing.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    featuredProductId: 'ega-nano-giloy-extract',
    benefits: ['Daily blood filtration', 'Liver vitality', 'Adaptogenic balance'],
  },
  {
    id: 'skin-radiance',
    title: 'Skin & Radiance',
    sanskritName: 'त्वच्य कान्ति (Twachya)',
    description: 'Nurture dermal layers from within using pure saffron, sandalwood, and lipid-balancing elixirs.',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80',
    featuredProductId: 'ega-kumkumadi-saffron-elixir',
    benefits: ['Subtle luminous glow', 'Unified skin tone', 'Cellular barrier protection'],
  },
  {
    id: 'immunity-vitality',
    title: 'Immunity & Vitality',
    sanskritName: 'ओजस् (Ojas Longevity)',
    description: 'Fortify the body’s innate defense envelope through classical Rasayana gold preparations.',
    image: 'https://images.unsplash.com/photo-1608248597359-0a6e0a8169e5?auto=format&fit=crop&w=800&q=80',
    featuredProductId: 'ega-swarna-chyawanprash',
    benefits: ['Enduring respiratory vigor', 'Deep tissue replenishment', 'Sustained seasonal defense'],
  },
  {
    id: 'mind-balance',
    title: 'Mind & Deep Balance',
    sanskritName: 'सत्त्व (Sattva & Medhya)',
    description: 'Soothe hyperactive nervous currents, release mental tension, and encourage restorative slumber.',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
    featuredProductId: 'ega-nervega-gold-silver',
    benefits: ['Serene cognitive clarity', 'Deep restorative REM cycles', 'Balanced cortisol response'],
  },
  {
    id: 'oral-wellness',
    title: 'Oral & Sensory Rituals',
    sanskritName: 'दन्त शुद्धि (Gandusha)',
    description: 'Ancient oil pulling and herbal rinses to purify the oral biome and revitalize the senses.',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    featuredProductId: 'ega-nano-giloy-extract',
    benefits: ['Fresh breath vitality', 'Gum tissue strengthening', 'Sensory awakening'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sunita Singhania',
    location: 'Worli, South Mumbai',
    rating: 5,
    productName: 'EGA Swarna Chyawanprash',
    comment:
      'I was tired of commercial Chyawanprash that tasted like sweetened commercial jam. EGA’s Swarna formulation is in a different league entirely—you can feel the warmth, the authentic spices, and the pure gold finish. Truly feels like medicine.',
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Devraj Choudhury',
    location: 'Vasant Vihar, New Delhi',
    rating: 5,
    productName: 'EGA Nervega Gold & Silver',
    comment:
      'As a corporate lawyer working 14-hour days, brain fog was constant. The combination of Swarna and Rajata Bhasma in Nervega calmed my frantic nervous system within two weeks. My sleep is now deep and unbroken.',
    verified: true,
  },
  {
    id: 'test-3',
    name: 'Pooja Hegde',
    location: 'Indiranagar, Bengaluru',
    rating: 5,
    productName: 'EGA Kumkumadi Radiance Elixir',
    comment:
      'The pure Kashmiri saffron in this bottle is genuine. Three drops warmed between the hands every night gives me that lit-from-within morning glow without clogging pores. Worth every rupee.',
    verified: true,
  },
  {
    id: 'test-4',
    name: 'Rajeshwari Patel',
    location: 'Ahmedabad & London',
    rating: 5,
    productName: 'EGA Nano Giloy Extract',
    comment:
      'Finally, an Ayurvedic brand that understands clean aesthetics AND classical authenticity! Giloy used to be bitter and hard to consume—EGA’s nano capsules make it effortless without losing potency.',
    verified: true,
  },
];
