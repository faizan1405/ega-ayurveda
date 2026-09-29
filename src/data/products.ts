import type { Product } from '../types';

export const FEATURED_PRODUCTS: Product[] = [
  // --- 1. PRIMARY CLIENT HERO PRODUCT: Premium Shilajit Resin ---
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
    featureBadges: ['80%+ Fulvic Acid', '100% Surya Tapi Purified', 'Heavy Metal Tested', 'Brass Spoon Included'],
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
    category: 'Vitality',
  },

  // --- 2. PRIMARY CLIENT PRODUCT: Diacontrol ---
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
    category: 'Metabolic',
  },

  // --- 3. PRIMARY CLIENT PRODUCT: Ekangveer Ras Vati ---
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

  // --- 4. PRIMARY CLIENT PRODUCT: Ashwagandha Gold KSM-66 ---
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
    category: 'Vitality',
  },

  // --- 5. PRIMARY CLIENT PRODUCT: Kumkumadi Tejas Glow Facial Oil ---
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
    category: 'Skin & Radiance',
  },

  // --- 6. SECONDARY EGA REFERENCE: Swarna Chyawanprash with Real Gold ---
  {
    id: 'swarna-chyawanprash',
    slug: 'swarna-chyawanprash-real-gold',
    name: 'EGA Swarna Chyawanprash with Real Gold',
    sanskritName: 'स्वर्ण च्यवनप्राश (अमृत रसायन)',
    shortPurpose: 'Immunity Shield, Ojas Vitality & Cellular Rejuvenation',
    subtitle: 'Infused with 24K Swarna Bhasma, Wild Forest Amla, A2 Vedic Ghee & Saffron',
    description:
      'The crown jewel of Ayurvedic Rasayana alchemy. Prepared according to the classical Charaka Samhita with 48 potent Himalayan botanicals, slow-cooked wild forest Amla, pure A2 Bilona cow ghee, and fortified with micro-calcined 24K real gold (Swarna Bhasma).',
    traditionalPreparationStory:
      'Classical three-stage preparation over sacred wood fires, combining wild amla pulp with cold-pressed sesame oil and grass-fed A2 ghee, infused with raw forest honey and verified Swarna Bhasma nanoparticles for immediate systemic assimilation.',
    price: 3850,
    originalPrice: 4500,
    rating: 4.99,
    reviewCount: 412,
    badge: 'Pure Vegetarian',
    isBestseller: true,
    elementHighlight: 'gold',
    featureBadges: ['24K Swarna Bhasma', 'A2 Bilona Cow Ghee', 'Raw Forest Honey', '48 Vedic Herbs', 'Pure Vegetarian'],
    image: './products/swarna-chyawanprash.jpg',
    gallery: [
      './products/swarna-chyawanprash.jpg',
      './products/shilajit-resin.jpg',
      './products/ashwagandha-gold.jpg',
    ],
    weightVolume: '500g Dark Amber Apothecary Jar',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Balances',
    },
    keyIngredients: [
      {
        name: '24K Swarna Bhasma (Gold Calx)',
        sanskrit: 'स्वर्ण भस्म',
        botanical: 'Purified Gold Nanoparticles',
        benefit: 'Directly fortifies Ojas (vital immunity essence), heart strength, and mental agility.',
        percentage: 'Classical Standardized Assay',
      },
      {
        name: 'Wild Forest Amalaki',
        sanskrit: 'वन्य आमलकी',
        botanical: 'Phyllanthus Emblica',
        benefit: 'Supreme natural bioflavonoid antioxidant base that preserves cellular vitality.',
        percentage: 'Rich Botanical Pulp',
      },
      {
        name: 'A2 Gir Cow Bilona Ghee',
        sanskrit: 'गोघृत',
        botanical: 'Grass-fed Clarified Butter',
        benefit: 'Unlocks lipophilic phytochemicals and transports them deep into the bone marrow (Majja Dhatu).',
        percentage: 'Pure Vedic Base',
      },
    ],
    ritualHowToUse: {
      timing: 'First thing upon waking or 1 hour before sleep',
      dosage: '1 heaped teaspoon (10g to 15g)',
      anupana: 'Licked directly or followed by a cup of warm A2 milk or almond milk',
      tip: 'Savor slowly on the tongue to allow salivary enzyme activation and immediate sublingual absorption.',
    },
    ayurvedicCitation: {
      text: '“च्यवनः प्राशनादस्य वयः स्थितमवाप्तवान्...” — By taking this elixir, the aged sage Chyavana regained youth, vitality, and glowing longevity.',
      reference: 'Charaka Samhita, Chikitsa Sthana 1:1',
    },
    faqs: [
      {
        question: 'Why is this product labeled Pure Vegetarian and not 100% Vegan?',
        answer:
          'Classical Chyawanprash requires authentic A2 Gir cow ghee and raw forest honey to act as Yogavahi (medicinal carriers). In strict accordance with Ayurvedic tradition, it is 100% Pure Vegetarian and cruelty-free, but not vegan.',
      },
    ],
    reviews: [
      {
        id: 'sc-1',
        author: 'Arunav Singhal',
        location: 'Golf Links, New Delhi',
        rating: 5,
        date: '15 Feb 2026',
        title: 'The gold standard of Chyawanprash in every sense',
        comment:
          'Unlike commercial sweet jams, you can taste the intense amla, cooling spices, and rich ghee with visible gold shimmer. Truly a regal preparation.',
        verified: true,
      },
    ],
    category: 'Premium Ayurveda',
  },

  // --- 7. SECONDARY EGA REFERENCE: Colon Cleanser ---
  {
    id: 'colon-cleanser',
    slug: 'ega-colon-cleanser-detox',
    name: 'EGA Colon Cleanser',
    sanskritName: 'कोष्ठा विशोधक चूर्ण (अग्नि दीपन)',
    shortPurpose: 'Digestive Detox, Agni Igniter & Metabolic Cleansing',
    subtitle: 'Synergistic Blend of Organic Triphala, Senna Leaf, Castor & Fennel',
    description:
      'A master digestive purifier designed to dissolve stubborn toxic sludge (Ama) from the intestinal villi, restore healthy gut peristalsis, and re-ignite metabolic fire (Jatharagni) without causing cramping or electrolyte depletion.',
    traditionalPreparationStory:
      'Classical Virechana formulation combining cold-ground Haritaki, Bibhitaki, and Amalaki with sun-cured fennel seeds and micro-dosed botanical extracts for effortless morning elimination.',
    price: 990,
    originalPrice: 1250,
    rating: 4.93,
    reviewCount: 310,
    badge: '100% Vegan',
    isBestseller: true,
    elementHighlight: 'botanical',
    featureBadges: ['100% Vegan', 'Ama Toxin Flush', 'Non-Habit Forming', 'Gentle Night Detox'],
    image: './products/colon-cleanser.jpg',
    gallery: [
      './products/colon-cleanser.jpg',
      './products/daily-lax.jpg',
      './products/shilajit-resin.jpg',
    ],
    weightVolume: '150g Ultra-Fine Botanical Powder',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Reduces',
    },
    keyIngredients: [
      {
        name: 'Vedic Triphala',
        sanskrit: 'त्रिफला',
        botanical: 'Three Sacred Fruits',
        benefit: 'Cleanses mucosal lining, promotes regular evacuation, and tones intestinal wall musculature.',
        percentage: 'Core Botanical Trio',
      },
      {
        name: 'Wild Fennel (Saunf)',
        sanskrit: 'मधुरिका',
        botanical: 'Foeniculum Vulgare',
        benefit: 'Alleviates abdominal bloating, relieves gas spasms, and cools intestinal Pitta heat.',
        percentage: 'Aromatic Balancer',
      },
    ],
    ritualHowToUse: {
      timing: 'At bedtime, 30 minutes after dinner',
      dosage: '1 level teaspoon (approx. 5g) in warm water',
      anupana: 'Warm water or warm mint infusion',
      tip: 'Drink plenty of room-temperature water throughout the following day to facilitate smooth lymphatic drainage.',
    },
    ayurvedicCitation: {
      text: '“रोगाः सर्वेऽपि मन्देऽग्नौ सुतरामुदराणि च...” — All physiological ailments originate from sluggish digestive fire (Manda Agni) and toxic accumulation.',
      reference: 'Ashtanga Hridaya, Nidana Sthana 12:1',
    },
    faqs: [
      {
        question: 'Is EGA Colon Cleanser safe to take every night?',
        answer:
          'It is formulated to be gentle and non-griping. It can be taken for 14-21 consecutive days during seasonal cleanses, or 2-3 nights a week for maintenance.',
      },
    ],
    reviews: [
      {
        id: 'cc-1',
        author: 'Ritu Agarwal',
        location: 'Gurugram',
        rating: 5,
        date: '10 Feb 2026',
        title: 'Finally relieved from years of chronic bloating',
        comment:
          'Completely transformed my digestion. No severe cramps, just light and clean mornings. The silver tin looks beautiful in my kitchen.',
        verified: true,
      },
    ],
    category: 'Digestive',
  },

  // --- 8. SECONDARY EGA REFERENCE: Daily Lax Tablets ---
  {
    id: 'daily-lax',
    slug: 'ega-daily-lax-tablets',
    name: 'EGA Daily Lax Tablets',
    sanskritName: 'सुख विरेचन वटी (मृदु शोधन)',
    shortPurpose: 'Gentle Overnight Bowel Motility & Gut Regularity',
    subtitle: 'Standardized Triphala, Nishoth & Senna Leaf for Predictable Morning Ease',
    description:
      'A refined classical tablet formulated for gentle, predictable overnight intestinal motility. Alleviates stubborn constipation, gas distension, and heaviness while tonifying the colon wall for lasting physiological rhythm.',
    traditionalPreparationStory:
      'Formulated in convenient plant-cellulose tablets utilizing classical Bhavana extraction to eliminate bitter taste while preserving full therapeutic potency of natural anthraquinones.',
    price: 850,
    originalPrice: 1050,
    rating: 4.88,
    reviewCount: 165,
    badge: '100% Vegan',
    isBestseller: false,
    elementHighlight: 'botanical',
    featureBadges: ['100% Vegan', 'Gentle Regularity', 'No Spasms', 'Classical Vati'],
    image: './products/daily-lax.jpg',
    gallery: [
      './products/daily-lax.jpg',
      './products/colon-cleanser.jpg',
    ],
    weightVolume: '120 Pure Botanical Tablets',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Reduces',
    },
    keyIngredients: [
      {
        name: 'Nishoth Root',
        sanskrit: 'त्रिवृत्',
        botanical: 'Operculina Turpethum',
        benefit: 'Classical Sukha Virechaka (gentle purgative) that soothes the lower intestine.',
        percentage: 'Standardized Extract',
      },
      {
        name: 'Haritaki',
        sanskrit: 'हरीतकी',
        botanical: 'Terminalia Chebula',
        benefit: 'Mother of herbs; stimulates downward Apana Vata energy for natural elimination.',
        percentage: 'Botanical Pulp',
      },
    ],
    ritualHowToUse: {
      timing: 'Night before sleep with a full glass of lukewarm water',
      dosage: '1 to 2 tablets',
      anupana: 'Warm water or ginger tea',
      tip: 'Do not chew; swallow with warm water to activate the time-release botanical compounds.',
    },
    ayurvedicCitation: {
      text: '“त्रिवृत्सुखविरेचनानां श्रेष्ठा...” — Among all botanicals that provide gentle, effortless elimination, Trivrit is supreme.',
      reference: 'Charaka Samhita, Sutra Sthana 25',
    },
    faqs: [
      {
        question: 'Does Daily Lax cause dependency?',
        answer:
          'No. Because it relies on restorative Triphala and tonifying Haritaki rather than harsh synthetic laxatives, it helps retrain natural intestinal peristalsis.',
      },
    ],
    reviews: [
      {
        id: 'dl-1',
        author: 'Prakash Sharma',
        location: 'Jaipur, Rajasthan',
        rating: 5,
        date: '20 Jan 2026',
        title: 'Mild, effective, and zero morning cramps',
        comment:
          'Works reliably within 7 to 8 hours without painful abdominal cramps. Very pleased with the packaging and purity.',
        verified: true,
      },
    ],
    category: 'Digestive',
  },

  // --- 9. SECONDARY EGA REFERENCE: Ashwagandha PT100 Herbal Tea ---
  {
    id: 'ashwagandha-pt100-tea',
    slug: 'ashwagandha-pt100-herbal-tea',
    name: 'Ashwagandha PT100 Herbal Tea',
    sanskritName: 'अश्वगंधा शामक चाय (मनः शान्ति)',
    shortPurpose: 'Evening Nervous Calming, De-Stressing & Restorative Slumber',
    subtitle: 'Fine-Cut Withania Somnifera, Tulsi, Cardamom & Chamomile Blossoms',
    description:
      'A deeply soothing adaptogenic evening tea crafted to calm sensory overload, unwind mental chattering, and gently down-regulate cortisol levels at the close of an active day. Packaged in a brushed champagne airtight canister.',
    traditionalPreparationStory:
      'Slow-cured organic Ashwagandha root shavings blended with Krishna Tulsi leaves, green cardamom pods, and chamomile petals, maintaining delicate volatile oils for maximum aromatherapeutic comfort.',
    price: 1150,
    originalPrice: 1400,
    rating: 4.94,
    reviewCount: 228,
    badge: '100% Vegan',
    isBestseller: false,
    elementHighlight: 'botanical',
    featureBadges: ['100% Vegan', 'Caffeine-Free', 'Whole Leaf Shavings', 'Airtight Champagne Tin'],
    image: './products/ashwagandha-tea.jpg',
    gallery: [
      './products/ashwagandha-tea.jpg',
      './products/ashwagandha-gold.jpg',
    ],
    weightVolume: '100g Loose Leaf Tea Tin',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Neutral',
    },
    keyIngredients: [
      {
        name: 'Whole Root Ashwagandha',
        sanskrit: 'अश्वगंधा',
        botanical: 'Withania Somnifera',
        benefit: 'Balances sympathetic nervous system tone and cushions daily mental strain.',
        percentage: '45% Blend Base',
      },
      {
        name: 'Krishna Tulsi',
        sanskrit: 'तुलसी',
        botanical: 'Ocimum Sanctum',
        benefit: 'Spiritual botanical adaptogen that clears the throat chakra and respiratory passages.',
        percentage: 'Aromatic Shavings',
      },
    ],
    ritualHowToUse: {
      timing: '30 to 45 minutes before bedtime',
      dosage: '1 teaspoon (2g to 3g) steeped in 200ml freshly boiled water for 6 minutes',
      anupana: 'Sipped warm, plain or with raw honey',
      tip: 'Inhale the calming botanical vapors deeply while steeping to engage the olfactory relaxation response.',
    },
    ayurvedicCitation: {
      text: '“हृद्यानि च मनोनुकूलानि...” — Botanicals that gladden the heart and soothe the mind are the purest medicine.',
      reference: 'Charaka Samhita, Sutra Sthana',
    },
    faqs: [
      {
        question: 'Does this tea contain any caffeine or artificial flavourings?',
        answer:
          'None whatsoever. It is 100% caffeine-free, contains zero synthetic flavours or extracts, and uses only whole botanical roots and spices.',
      },
    ],
    reviews: [
      {
        id: 'at-1',
        author: 'Deepika Sen',
        location: 'Pune, Maharashtra',
        rating: 5,
        date: '05 Mar 2026',
        title: 'My nightly wind-down ritual',
        comment:
          'The aroma is intoxicating and warm. A single cup melts away all my screen fatigue before sleep.',
        verified: true,
      },
    ],
    category: 'Daily Wellness',
  },

  // --- 10. SECONDARY EGA REFERENCE: Organic Moringa Leaf Tablets ---
  {
    id: 'organic-moringa-tablets',
    slug: 'organic-moringa-leaf-tablets',
    name: 'Organic Moringa Leaf Tablets',
    sanskritName: 'शिग्रु पत्र वटी (प्राण शक्ति)',
    shortPurpose: 'Whole-Food Bioavailable Multivitamin, Iron & Cellular Energy',
    subtitle: 'Shade-Dried Organic Shigru Leaves with 90+ Nutrients and 46 Antioxidants',
    description:
      'Hand-harvested from pesticide-free organic farms and shade-dried below 38°C to retain raw enzymatic vitality. An extraordinary botanical superfood brimming with bio-assimilable Vitamin C, Calcium, Iron, and natural chlorophyll.',
    traditionalPreparationStory:
      'Prepared in adherence to classical Shigru preservation texts: leaves are harvested before dawn, washed in pure aquifer spring water, and compressed into clean tablets without chemical binders.',
    price: 950,
    originalPrice: 1200,
    rating: 4.91,
    reviewCount: 195,
    badge: '100% Vegan',
    isBestseller: false,
    elementHighlight: 'botanical',
    featureBadges: ['100% Vegan', 'Shade-Dried Below 38°C', '90+ Natural Nutrients', 'Cold-Pressed Vati'],
    image: './products/moringa-tablets.jpg',
    gallery: [
      './products/moringa-tablets.jpg',
      './products/diacontrol.jpg',
    ],
    weightVolume: '60 Cold-Pressed Tablets',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Neutral',
      kapha: 'Reduces',
    },
    keyIngredients: [
      {
        name: 'Organic Moringa Leaf Pulp',
        sanskrit: 'शिग्रु पत्र',
        botanical: 'Moringa Oleifera',
        benefit: 'Delivers comprehensive micro-nutrients to oxygenate red blood cells and combat fatigue.',
        percentage: '500mg per Tablet',
      },
    ],
    ritualHowToUse: {
      timing: 'Morning with breakfast or post-workout',
      dosage: '2 tablets daily with warm water',
      anupana: 'Warm water or fresh citrus juice',
      tip: 'The natural Vitamin C in Moringa enhances non-heme iron absorption significantly.',
    },
    ayurvedicCitation: {
      text: '“शिग्रुस्तीक्ष्णोष्णः कटुकः पाके स्वादुश्च रोचनः...” — Shigru is penetrating, appetizing, destroys Ama, and fortifies the blood.',
      reference: 'Bhavaprakasha Nighantu, Haritakyadi Varga',
    },
    faqs: [
      {
        question: 'Are there any fillers or magnesium stearate in these tablets?',
        answer:
          'No. We use only 100% pure organic moringa leaf powder with acacia botanical gum as a natural pressing agent.',
      },
    ],
    reviews: [
      {
        id: 'mr-1',
        author: 'Ananya Roy',
        location: 'Hyderabad',
        rating: 5,
        date: '14 Feb 2026',
        title: 'Replaced my synthetic multivitamins completely',
        comment:
          'My energy levels in the afternoon have drastically improved. Gentle on the stomach with zero nausea.',
        verified: true,
      },
    ],
    category: 'Daily Wellness',
  },

  // --- 11. SECONDARY EGA REFERENCE: Ayurvedic Oil Pulling Formula ---
  {
    id: 'ayurvedic-oil-pulling',
    slug: 'ayurvedic-oil-pulling-gandusha-formula',
    name: 'Ayurvedic Oil Pulling Formula',
    sanskritName: 'आरिमेदादि गण्डूष तैलम्',
    shortPurpose: 'Classical Gandusha for Oral Microbiome & Gum Vitality',
    subtitle: 'Cold-Pressed Black Sesame Oil Steeped with Clove, Cardamom, Mint & 24 Vedic Herbs',
    description:
      'The sacred morning Ayurvedic ritual of Gandusha / Kavala Graha. Formulated with cold-pressed virgin black sesame oil cured with classical Arimedadi botanicals to draw out lipid-soluble oral toxins, strengthen enamel, banish bad breath, and tighten gums.',
    traditionalPreparationStory:
      'Cooked over slow embers for 7 days according to classical Charaka Samhita guidelines, infusing cloves, cinnamon, neem bark, and licorice root into unrefined sesame lipids.',
    price: 1350,
    originalPrice: 1650,
    rating: 4.97,
    reviewCount: 240,
    badge: '100% Vegan',
    isBestseller: true,
    elementHighlight: 'botanical',
    featureBadges: ['100% Vegan', 'Virgin Cold-Pressed Sesame', 'Zero Alcohol or Synthetic Dyes', 'Pump Dispenser'],
    image: './products/oil-pulling.jpg',
    gallery: [
      './products/oil-pulling.jpg',
      './products/kumkumadi-oil.jpg',
    ],
    weightVolume: '200ml Heavy Amber Glass Bottle',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Balances',
    },
    keyIngredients: [
      {
        name: 'Arimeda Bark & Clove Oil',
        sanskrit: 'आरिमेद एवं लवङ्ग',
        botanical: 'Acacia Farnesiana & Syzygium Aromaticum',
        benefit: 'Combats oral bacteria, reduces gum bleeding, and provides long-lasting breath freshness.',
        percentage: 'Traditional Extract Blend',
      },
      {
        name: 'Cold-Pressed Black Sesame Oil',
        sanskrit: 'तिल तैल (कृष्ण तिल)',
        botanical: 'Sesamum Indicum',
        benefit: 'The premier Ayurvedic base for lipid-soluble toxin extraction and tooth mineralization.',
        percentage: 'Virgin Cold-Pressed Base',
      },
    ],
    ritualHowToUse: {
      timing: 'First thing upon waking, before drinking water or brushing teeth',
      dosage: '1 to 2 tablespoons (approx. 10ml to 15ml)',
      anupana: 'Swished and pulled gently between teeth for 5 to 10 minutes',
      tip: 'Spit into a trash bin (not the drain) once the oil turns milky white, then rinse mouth with warm saline water.',
    },
    ayurvedicCitation: {
      text: '“न चास्य दन्तरोगः स्यात् न मुखशोषः प्रजायते...” — One who practices daily sesame oil swishing shall never suffer from tooth decay, tooth pain, or dry mouth.',
      reference: 'Charaka Samhita, Sutra Sthana 5:78',
    },
    faqs: [
      {
        question: 'Should I swallow the oil after swishing?',
        answer:
          'Never swallow the oil. During the pulling process, the lipid matrix binds oral toxins and bacteria (Ama) that must be expelled completely.',
      },
    ],
    reviews: [
      {
        id: 'op-1',
        author: 'Siddharth Varma',
        location: 'Bandra West, Mumbai',
        rating: 5,
        date: '28 Jan 2026',
        title: 'A deeply restorative morning ritual',
        comment:
          'The amber glass and gold dispenser make it a joy to use every morning. Teeth feel dentist-clean all day and gums have noticeably tightened.',
        verified: true,
      },
    ],
    category: 'Ayurvedic Rituals',
  },
];
