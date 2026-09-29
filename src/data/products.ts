import type { Product } from '../types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'premium-shilajit-resin',
    slug: 'premium-shilajit-resin-gold-grade',
    name: 'Premium Shilajit Resin',
    sanskritName: 'शुद्ध शिलाजतु (Gold Grade)',
    shortPurpose: 'Cellular Vitality, Stamina & Cognitive Acuity',
    subtitle: 'Wild Himalayan Sourced • Standardized 80%+ Fulvic Acid • 84+ Trace Minerals',
    description:
      'Harvested at 18,000+ feet in the pristine high-altitude Himalayas. Purified through traditional Surya Tapi (solar filtration) over 60 days to preserve volatile bio-active phytocomplexes and natural ionic electrolytes.',
    traditionalPreparationStory:
      'Purified strictly under classical Charaka Samhita Shodhana rituals using Triphala decoctions, followed by slow solar evaporation. Each small batch is verified via independent ICP-MS spectroscopy for heavy metal safety.',
    price: 2450,
    originalPrice: 2950,
    rating: 4.98,
    reviewCount: 384,
    badge: 'Pure Vegetarian',
    isBestseller: true,
    elementHighlight: 'gold',
    featureBadges: ['80%+ Fulvic Acid', '100% Surya Tapi Purified', 'Heavy Metal Tested', 'Measuring Spoon Included'],
    image: './products/shilajit-resin.jpg',
    gallery: [
      './products/shilajit-resin.jpg',
      './products/ashwagandha-gold.jpg',
      './products/ekangveer-ras-vati.jpg',
    ],
    weightVolume: '50g Luxury Frosted Glass Jar',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Neutral',
      kapha: 'Balances',
    },
    keyIngredients: [
      {
        name: 'Himalayan Shilajit (Purified)',
        sanskrit: 'शुद्ध शिलाजतु',
        botanical: 'Asphaltum Punjabianum',
        benefit: 'Delivers 84+ bioavailable ionic trace minerals; potentiates mitochondrial ATP cellular energy.',
        percentage: '100% Pure Resin Base',
        image: './products/shilajit-resin.jpg',
      },
      {
        name: 'Bio-Active Fulvic Acid',
        sanskrit: 'फुल्विक रस',
        botanical: 'Humic Complex',
        benefit: 'Transports nutrients through cellular membranes with superior biological permeability.',
        percentage: '>80% Verified Assay',
      },
    ],
    ritualHowToUse: {
      timing: 'Morning on an empty stomach with the included gold brass spoon',
      dosage: 'Pea-sized portion (approx. 300mg to 500mg)',
      anupana: 'Dissolved in warm spring water, A2 cow milk, or organic herbal tea',
      tip: 'Stir for 60 seconds until completely dissolved without residue; experience sustained alertness without caffeine crash.',
    },
    ayurvedicCitation: {
      text: '“न सोऽस्ति रोगो भुवि साध्यरूपः... शिलाह्वयं यन्न जयेत् प्रसह्य” — There is virtually no curable physiological disharmony that pure Shilajit cannot conquer.',
      reference: 'Charaka Samhita, Chikitsa Sthana, Chapter 1:3',
    },
    faqs: [
      {
        question: 'How can I verify the purity of this Shilajit Resin?',
        answer:
          'Pure gold-grade Shilajit becomes soft and pliable with body heat, dissolves completely in lukewarm water without sediment, and burns cleanly without smoke. Every batch includes a scan-verified Certificate of Analysis (COA).',
      },
      {
        question: 'Is it safe for daily long-term use?',
        answer:
          'Yes. When processed through traditional Surya Tapi purification and lab-tested for heavy metals, it serves as a classical daily Rasayana for energy and longevity.',
      },
    ],
    reviews: [
      {
        id: 'sh-1',
        author: 'Vikramaditya Roy',
        location: 'Colaba, Mumbai',
        rating: 5,
        date: '18 Feb 2026',
        title: 'The cleanest, most potent resin on the market',
        comment:
          'The matte champagne packaging and brushed gold lid look magnificent on my dressing table, and the potency is unquestionable. Noticeable stamina and mental clarity from day four.',
        verified: true,
      },
      {
        id: 'sh-2',
        author: 'Nikhil Kashyap',
        location: 'Indiranagar, Bengaluru',
        rating: 5,
        date: '02 Mar 2026',
        title: 'Dissolves instantly, pure earthen aroma',
        comment:
          'No bitter burnt smell like cheaper brands. It dissolves silky-smooth into warm water. Exceptional quality from presentation to performance.',
        verified: true,
      },
    ],
    category: 'Vitality & Strength',
  },
  {
    id: 'diacontrol-formula',
    slug: 'diacontrol-blood-sugar-wellness',
    name: 'Diacontrol',
    sanskritName: 'मधुमेह शामक योग',
    shortPurpose: 'Healthy Glucose Levels & Metabolic Balance',
    subtitle: 'Vedic Botanical Synergy of Vijaysar, Jamun Seed, Gurmar & Shilajit',
    description:
      'A physician-designed metabolic wellness formulation crafted to maintain healthy blood glucose levels, reduce post-prandial glycemic spikes, and curb intense sugar cravings naturally through traditional Tikta (bitter) botanical principles.',
    traditionalPreparationStory:
      'Standardized extracts of ancient Vijaysar heartwood and wild Jamun seeds are hydro-ethanolic triturated with purified Shilajit to promote beta-cell rejuvenation and enhance cellular insulin receptor sensitivity.',
    price: 1250,
    originalPrice: 1550,
    rating: 4.92,
    reviewCount: 216,
    badge: '100% Vegan',
    isBestseller: true,
    elementHighlight: 'botanical',
    featureBadges: ['100% Vegan Capsules', 'Standardized Vijaysar', 'Zero Sugar or Fillers', 'Physician Formulated'],
    image: './products/diacontrol.jpg',
    gallery: [
      './products/diacontrol.jpg',
      './products/ekangveer-ras-vati.jpg',
      './products/shilajit-resin.jpg',
    ],
    weightVolume: '60 Vegetarian Capsules',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Reduces',
    },
    keyIngredients: [
      {
        name: 'Vijaysar Heartwood',
        sanskrit: 'विजयसार',
        botanical: 'Pterocarpus Marsupium',
        benefit: 'Historically documented for beta-cell rejuvenation and natural insulin modulation.',
        percentage: 'Core Active Extract',
      },
      {
        name: 'Gurmar (Sugar Destroyer)',
        sanskrit: 'मधुनाशिनी / गुड़मार',
        botanical: 'Gymnema Sylvestre',
        benefit: 'Blocks sweet taste receptors on tongue and intestinal sugar absorption pathways.',
        percentage: 'Botanical Extract',
      },
      {
        name: 'Purified Shilajit',
        sanskrit: 'शुद्ध शिलाजतु',
        botanical: 'Mineral Catalyst',
        benefit: 'Acts as Yogavahi bio-carrier for deep metabolic cell uptake.',
        percentage: 'Traditional Catalyst',
      },
    ],
    ritualHowToUse: {
      timing: 'Twice daily, 20 minutes before breakfast and dinner',
      dosage: '1 capsule morning, 1 capsule evening',
      anupana: 'Warm water or cinnamon infused water',
      tip: 'Pair with moderate daily walking and a low-glycemic Ayurvedic diet for optimal metabolic reset.',
    },
    ayurvedicCitation: {
      text: '“मेहेषु विजयसारः श्रेष्ठः...” — Among all botanicals for metabolic balance and urine clarity, Vijaysar stands supreme.',
      reference: 'Bhavaprakasha Nighantu, Vatadi Varga',
    },
    faqs: [
      {
        question: 'Can this be taken alongside modern medications?',
        answer:
          'Diacontrol is 100% herbal and non-toxic. We advise consulting your Ayurvedic physician and keeping a 45-minute gap between formulations while monitoring glucose levels.',
      },
      {
        question: 'Is Diacontrol 100% Vegan?',
        answer:
          'Yes, Diacontrol is formulated in 100% plant-cellulose vegetarian capsules with zero animal gelatin.',
      },
    ],
    reviews: [
      {
        id: 'dc-1',
        author: 'Sunil Mathur',
        location: 'New Delhi',
        rating: 5,
        date: '24 Feb 2026',
        title: 'Stabilized fasting blood sugar remarkably',
        comment:
          'My HbA1c dropped by 0.6 in 90 days. No stomach burning or acidity. The clean champagne label and packaging reflect the clinical purity inside.',
        verified: true,
      },
    ],
    category: 'Blood Sugar Support',
  },
  {
    id: 'ekangveer-ras-vati',
    slug: 'ekangveer-ras-vati-neuro-vitality',
    name: 'Ekangveer Ras Vati',
    sanskritName: 'एकांगवीर रस वटी (शास्त्रीय)',
    shortPurpose: 'Classical Neuro-Vitality, Nerve Calming & Joint Strength',
    subtitle: 'Potent Rasashastra Formulation with Mineral Calces & Medhya Botanicals',
    description:
      'A master classical Ayurvedic medicine celebrated across centuries for pacifying severe Vata imbalances in the nervous channels (Majja Dhatu). Formulated to relieve neuromuscular numbness, tension headaches, and stiffness while restoring fluid joint articulation.',
    traditionalPreparationStory:
      'Purified mineral calces (Swarna Makshika, Rajata Bhasma, Loha Bhasma) are processed with decoctions of Dashamoola and Triphala over 21 continuous trituration cycles (Bhavana) to create an ultra-refined, bio-assimilable tablet.',
    price: 1450,
    originalPrice: 1800,
    rating: 4.95,
    reviewCount: 178,
    badge: 'Pure Vegetarian',
    isBestseller: true,
    elementHighlight: 'both',
    featureBadges: ['Classical Bhasma Formula', 'Neuro-Vascular Support', '21 Bhavana Cycles', 'Traditional Vati'],
    image: './products/ekangveer-ras-vati.jpg',
    gallery: [
      './products/ekangveer-ras-vati.jpg',
      './products/shilajit-resin.jpg',
      './products/ashwagandha-gold.jpg',
    ],
    weightVolume: '60 Traditional Vatis (Tablets)',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Neutral',
      kapha: 'Balances',
    },
    keyIngredients: [
      {
        name: 'Swarna Makshika & Mineral Calces',
        sanskrit: 'स्वर्णमाक्षिक भस्म',
        botanical: 'Purified Copper-Iron Pyrite Calx',
        benefit: 'Nourishes deep nerve sheaths and promotes micro-vascular circulation.',
        percentage: 'Classical Ratio',
      },
      {
        name: 'Dashamoola Synergy',
        sanskrit: 'दशमूल',
        botanical: 'Ten Sacred Roots',
        benefit: 'The gold standard for pacifying deep-seated Vata tremors and stiffness.',
        percentage: 'Bhavana Medium',
      },
    ],
    ritualHowToUse: {
      timing: 'After meals, twice daily',
      dosage: '1 tablet morning and evening',
      anupana: 'Warm water with a spoonful of warm Vedic ghee or honey',
      tip: 'Take consistently for 45 to 60 days to allow neuro-cellular consolidation.',
    },
    ayurvedicCitation: {
      text: '“एकांगवीरः सर्वाङ्ग वातरोगेषु शस्यते...” — Ekangveer is celebrated across classical compendiums for all forms of nervous exhaustion and Vata rigidity.',
      reference: 'Bhaishajya Ratnavali, Vata-Vyadhi Chikitsa',
    },
    faqs: [
      {
        question: 'What makes Ekangveer Ras Vati unique?',
        answer:
          'Unlike ordinary herbal teas or simple powders, Ekangveer is a classical Rasashastra preparation whose micro-calcined elements penetrate the deepest bodily tissues (Asthi and Majja).',
      },
    ],
    reviews: [
      {
        id: 'ek-1',
        author: 'Dr. Rameshwar Iyer',
        location: 'Chennai, Tamil Nadu',
        rating: 5,
        date: '12 Jan 2026',
        title: 'Prescribed to my patients for cervical and nerve stiffness',
        comment:
          'Flawlessly prepared according to Bhaishajya Ratnavali. The frosted glass jar keeps the vatis protected from humidity. Truly a gold standard formulation.',
        verified: true,
      },
    ],
    category: 'Daily Wellness',
  },
  {
    id: 'ashwagandha-gold-ksm66',
    slug: 'ashwagandha-gold-ksm66-capsules',
    name: 'Ashwagandha Gold KSM-66',
    sanskritName: 'अश्वगंधा स्वर्ण (रसायन)',
    shortPurpose: 'Cortisol Harmony, Restorative Sleep & Endurance',
    subtitle: 'Full-Spectrum Root Extract • Standardized 5% Withanolides • Vedic Potency',
    description:
      'Crafted from the highest-concentration full-spectrum Ashwagandha root extract available, preserving the complete natural chemical fingerprint of the sacred root. Clinically documented to lower serum cortisol, elevate vigor, and deepen restorative REM sleep.',
    traditionalPreparationStory:
      'Extracted using green milk-pretreatment protocol based on classic Ayurvedic traditions without synthetic chemical solvents, retaining both hydrophilic and lipophilic active withanolides.',
    price: 1650,
    originalPrice: 1950,
    rating: 4.96,
    reviewCount: 342,
    badge: 'Pure Vegetarian',
    isBestseller: false,
    elementHighlight: 'gold',
    featureBadges: ['KSM-66 Full Spectrum', '5% Active Withanolides', 'Non-Drowsy Adaptogen', 'Pure Vegetarian'],
    image: './products/ashwagandha-gold.jpg',
    gallery: [
      './products/ashwagandha-gold.jpg',
      './products/shilajit-resin.jpg',
      './products/kumkumadi-oil.jpg',
    ],
    weightVolume: '60 Pure Vegetarian Capsules',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Neutral',
      kapha: 'Balances',
    },
    keyIngredients: [
      {
        name: 'Ashwagandha Root Extract (KSM-66)',
        sanskrit: 'अश्वगंधा मूल',
        botanical: 'Withania Somnifera',
        benefit: 'Balances the HPA axis, soothes restless thoughts, and promotes restorative rejuvenation.',
        percentage: '600mg per Serving',
      },
      {
        name: 'Black Pepper Bio-Enhancer',
        sanskrit: 'मरिच',
        botanical: 'Piper Nigrum',
        benefit: 'Enhances systemic absorption and bioavailability across the gastrointestinal barrier.',
        percentage: 'Standardized 95% Piperine',
      },
    ],
    ritualHowToUse: {
      timing: 'Evening with dinner or 45 minutes before sleep',
      dosage: '1 to 2 capsules daily',
      anupana: 'Warm milk with a pinch of nutmeg or warm water',
      tip: 'Take regularly at the same time each evening to synchronize your circadian sleep cycle.',
    },
    ayurvedicCitation: {
      text: '“अश्वगन्धा कषाया च तिक्तोष्णा वातपित्तजित्...” — Ashwagandha imparts the vitality and enduring strength of a stallion.',
      reference: 'Charaka Samhita, Sutra Sthana',
    },
    faqs: [
      {
        question: 'Will Ashwagandha make me sleepy during the day?',
        answer:
          'No. Ashwagandha is an adaptogen: when taken during the day, it provides calm, centered focus. When taken in the evening, it encourages natural melatonin release and deep relaxation.',
      },
    ],
    reviews: [
      {
        id: 'ag-1',
        author: 'Tara Nair',
        location: 'Kochi, Kerala',
        rating: 5,
        date: '04 Mar 2026',
        title: 'Transformed my evening tension and sleep',
        comment:
          'Within a week, the racing thoughts at night subsided. The champagne silver bottle is so luxurious—everything about this brand feels like royalty.',
        verified: true,
      },
    ],
    category: 'Immunity Support',
  },
  {
    id: 'kumkumadi-tejas-glow-oil',
    slug: 'kumkumadi-tejas-glow-facial-oil',
    name: 'Kumkumadi Tejas Glow Facial Oil',
    sanskritName: 'कुंकुमादि कान्ति तैलम्',
    shortPurpose: 'Cellular Skin Radiance, Even Tone & Ageless Tejas',
    subtitle: 'Steeped with Pure Kashmiri Saffron Stigmas, Red Sandalwood & 26 Botanicals',
    description:
      'An exquisite, golden-hued facial nectar steeped in heavy faceted glass. Handcrafted using certified Grade-1 Kashmiri Mongra saffron, Chandana, Manjistha, and cold-pressed botanical lipids to deliver luminosity, fade dark spots, and impart the signature Ayurvedic "Tejas" glow.',
    traditionalPreparationStory:
      'Cooked over slow embers in brass cauldrons for 72 continuous hours according to the authentic Ashtanga Hridaya Sneha Paka methodology, infusing saffron volatile esters without chemical heat degradation.',
    price: 2150,
    originalPrice: 2600,
    rating: 4.99,
    reviewCount: 290,
    badge: '100% Vegan',
    isBestseller: true,
    elementHighlight: 'botanical',
    featureBadges: ['100% Vegan', 'Kashmiri Mongra Saffron', 'Cold-Pressed Botanical Lipids', 'Zero Fragrance'],
    image: './products/kumkumadi-oil.jpg',
    gallery: [
      './products/kumkumadi-oil.jpg',
      './products/shilajit-resin.jpg',
      './products/ashwagandha-gold.jpg',
    ],
    weightVolume: '30ml Faceted Amber Dropper Vial',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Soothes',
      kapha: 'Balances',
    },
    keyIngredients: [
      {
        name: 'Pure Kashmiri Mongra Saffron',
        sanskrit: 'कुंकुम (Kumkuma)',
        botanical: 'Crocus Sativus',
        benefit: 'Rich in crocin antioxidants; stimulates epidermal micro-circulation and skin glow.',
        percentage: 'Hand-Selected Stigma',
      },
      {
        name: 'Red Sandalwood',
        sanskrit: 'रक्तचन्दन',
        botanical: 'Pterocarpus Santalinus',
        benefit: 'Cooling dermal balm that smooths blemishes and relieves sun-induced hyper-pigmentation.',
        percentage: 'Traditional Extract',
      },
    ],
    ritualHowToUse: {
      timing: 'Night ritual before bed, on clean damp skin',
      dosage: '3 to 4 drops warmed between palms',
      anupana: 'Gently pressed onto face and neck using upward marma strokes',
      tip: 'Mist skin with pure rose water before applying for instantaneous lipid absorption without heaviness.',
    },
    ayurvedicCitation: {
      text: '“कुंकुमाद्यमिदं तैलं वक्त्रकान्तिकरं परम्...” — This sacred saffron oil is unrivaled in bestowing supreme facial luminescence.',
      reference: 'Ashtanga Hridaya, Uttarasthana 32:27',
    },
    faqs: [
      {
        question: 'Is this facial oil suitable for sensitive or oily skin?',
        answer:
          'Yes. Our micro-filtration process ensures a featherweight, non-comedogenic elixir that balances natural sebum without clogging pores.',
      },
    ],
    reviews: [
      {
        id: 'km-1',
        author: 'Sanjana Roy',
        location: 'Juhu, Mumbai',
        rating: 5,
        date: '29 Jan 2026',
        title: 'Pure liquid gold for the skin',
        comment:
          'The real saffron threads inside the faceted bottle and the intoxicating natural aroma make this an absolute daily pleasure. Waking up to dewy, plump skin.',
        verified: true,
      },
    ],
    category: 'Holistic Care',
  },
];
