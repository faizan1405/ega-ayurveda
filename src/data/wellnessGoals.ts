import type { WellnessGoal, Testimonial } from '../types';

export const WELLNESS_GOALS: WellnessGoal[] = [
  {
    id: 'vitality-strength',
    title: 'Vitality & Strength',
    sanskritName: 'बल एवं ओजस् (Bala & Ojas)',
    description: 'Cellular endurance, stamina, and mitochondrial recharge powered by Gold Grade Himalayan Shilajit.',
    image: './products/shilajit-resin.jpg',
    featuredProductId: 'premium-shilajit-resin',
    benefits: ['84+ ionic trace minerals', 'Sustained daily stamina', 'Rapid cellular recovery'],
  },
  {
    id: 'digestive-wellness',
    title: 'Digestive Wellness',
    sanskritName: 'अग्नि शोधन (Agni Shodhana)',
    description: 'Deep gastrointestinal toxin flush, smooth intestinal motility, and elimination of Ama toxic sludge.',
    image: './products/colon-cleanser.jpg',
    featuredProductId: 'colon-cleanser',
    benefits: ['Ama toxin elimination', 'Gentle overnight motility', 'Relief from bloating'],
  },
  {
    id: 'metabolic-wellness',
    title: 'Metabolic Wellness',
    sanskritName: 'मधुमेह संतुलन (Metabolic Agni)',
    description: 'Stabilize healthy glucose metabolism and curb sugar cravings with standardized Vijaysar and Jamun seed.',
    image: './products/diacontrol.jpg',
    featuredProductId: 'diacontrol-formula',
    benefits: ['Healthy fasting glucose', 'Beta-cell nourishment', 'Zero post-meal slumps'],
  },
  {
    id: 'daily-wellness',
    title: 'Daily Wellness',
    sanskritName: 'स्वास्थ संरक्षण (Swastha)',
    description: 'Calm the nervous pathways, tone vital organs, and enrich daily nutrition with Moringa and Ekangveer.',
    image: './products/ekangveer-ras-vati.jpg',
    featuredProductId: 'ekangveer-ras-vati',
    benefits: ['Nerve channel calming', 'Joint mobility ease', 'Vata-Pitta equilibrium'],
  },
  {
    id: 'mind-balance',
    title: 'Mind & Balance',
    sanskritName: 'मनः शान्ति (Manas Shanti)',
    description: 'Full-spectrum KSM-66 root extract and botanical tea to regulate cortisol spikes and quiet mental chattering.',
    image: './products/ashwagandha-gold.jpg',
    featuredProductId: 'ashwagandha-gold-ksm66',
    benefits: ['Balanced stress response', 'Restorative REM sleep', 'Non-drowsy mental clarity'],
  },
  {
    id: 'skin-radiance',
    title: 'Skin & Radiance',
    sanskritName: 'तेजस् एवं कान्ति (Tejas Glow)',
    description: 'Kashmiri Mongra saffron facial nectar for lit-from-within complexion and barrier rejuvenation.',
    image: './products/kumkumadi-oil.jpg',
    featuredProductId: 'kumkumadi-tejas-glow-oil',
    benefits: ['Golden Tejas glow', 'Even skin barrier tone', 'Zero synthetic fragrance'],
  },
  {
    id: 'ayurvedic-rituals',
    title: 'Ayurvedic Rituals',
    sanskritName: 'दिनचर्या एवं रसायन (Dinacharya)',
    description: 'Timeless morning Gandusha oil pulling and sacred 24K gold rasayana for oral purity and holistic longevity.',
    image: './products/oil-pulling.jpg',
    featuredProductId: 'ayurvedic-oil-pulling',
    benefits: ['Microbiome oral detox', 'Deep enamel care', 'Sacred morning alignment'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Kabir Singhania',
    location: 'Worli Sea Face, Mumbai',
    rating: 5,
    productName: 'Premium Shilajit Resin',
    comment:
      'The champagne silver and gold packaging is worthy of a 5-star suite, but the product itself is what won me over. 80% fulvic acid makes a perceptible difference to morning stamina. Unrivaled purity.',
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Anita Deshmukh',
    location: 'Vasant Vihar, New Delhi',
    rating: 5,
    productName: 'Diacontrol',
    comment:
      'I was looking for an authentic Ayurvedic formula that did not use cheap fillers. Diacontrol brought my post-lunch sugar spikes right back into a steady band within 4 weeks. Simply exceptional.',
    verified: true,
  },
  {
    id: 'test-3',
    name: 'Vikramaditya Iyer',
    location: 'Indiranagar, Bengaluru',
    rating: 5,
    productName: 'Ekangveer Ras Vati',
    comment:
      'Chronic cervical nerve tension from long software architecture hours had become debilitating. Ekangveer Ras Vati provided profound, steady relief within twenty days.',
    verified: true,
  },
  {
    id: 'test-4',
    name: 'Meera Chawla',
    location: 'Alipore, Kolkata',
    rating: 5,
    productName: 'Kumkumadi Tejas Glow Oil',
    comment:
      'Pure saffron nectar in heavy faceted glass. It absorbs like a dry satin oil without grease. My skin has that authentic bridal glow every single morning.',
    verified: true,
  },
  {
    id: 'test-5',
    name: 'Aditya Singhal',
    location: 'Golf Links, New Delhi',
    rating: 5,
    productName: 'EGA Swarna Chyawanprash with Real Gold',
    comment:
      'The addition of authentic 24K Swarna Bhasma and A2 Gir cow ghee gives this Chyawanprash an unmistakable texture and vitality boost. My immune armor for the winter.',
    verified: true,
  },
  {
    id: 'test-6',
    name: 'Dr. Sunita Rao',
    location: 'Bandra, Mumbai',
    rating: 5,
    productName: 'Ayurvedic Oil Pulling Formula',
    comment:
      'The cold-pressed sesame infused with cloves and cardamom makes morning Gandusha an absolute treat. Fresh breath that lasts the entire day.',
    verified: true,
  },
];
