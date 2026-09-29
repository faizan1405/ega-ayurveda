import type { WellnessGoal, Testimonial } from '../types';

export const WELLNESS_GOALS: WellnessGoal[] = [
  {
    id: 'vitality-strength',
    title: 'Vitality & Strength',
    sanskritName: 'बल एवं ओजस् (Bala & Ojas)',
    description: 'Cellular endurance, stamina, and mitochondrial recharge powered by Gold Grade Himalayan Shilajit.',
    image: './products/shilajit-resin.jpg',
    featuredProductId: 'premium-shilajit-resin',
    benefits: ['84+ ionic trace minerals', 'Sustained daily stamina', 'Rapid recovery'],
  },
  {
    id: 'blood-sugar-support',
    title: 'Blood Sugar Support',
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
    description: 'Calm the nervous pathways and strengthen connective joint tissue with classical Ekangveer Ras Vati.',
    image: './products/ekangveer-ras-vati.jpg',
    featuredProductId: 'ekangveer-ras-vati',
    benefits: ['Nerve channel calming', 'Joint mobility ease', 'Vata equilibrium'],
  },
  {
    id: 'immunity-support',
    title: 'Immunity Support',
    sanskritName: 'व्याधिक्षमत्व (Immune Shield)',
    description: 'Full-spectrum KSM-66 root extract to regulate cortisol spikes and fortify natural biological defense.',
    image: './products/ashwagandha-gold.jpg',
    featuredProductId: 'ashwagandha-gold-ksm66',
    benefits: ['Balanced stress response', 'Restorative REM sleep', 'Natural vigor'],
  },
  {
    id: 'mens-wellness',
    title: 'Men’s Wellness',
    sanskritName: 'वाजीकरण रसायन (Vajikarana)',
    description: 'Deep physical drive, reproductive vitality, and testosterone equilibrium from high-potency mineral fulvic acids.',
    image: './products/shilajit-resin.jpg',
    featuredProductId: 'premium-shilajit-resin',
    benefits: ['Peak physical performance', 'Mental drive & focus', 'Pure bio-availability'],
  },
  {
    id: 'holistic-care',
    title: 'Holistic Care',
    sanskritName: 'तेजस् एवं कान्ति (Tejas Radiance)',
    description: 'Kashmiri Mongra saffron facial nectar for lit-from-within complexion and barrier restoration.',
    image: './products/kumkumadi-oil.jpg',
    featuredProductId: 'kumkumadi-tejas-glow-oil',
    benefits: ['Golden Tejas glow', 'Even skin barrier tone', 'Zero synthetic fragrance'],
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
];
