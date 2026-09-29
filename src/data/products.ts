import { Product } from '../types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'ega-swarna-chyawanprash',
    slug: 'swarna-chyawanprash-gold-vitality',
    name: 'EGA Swarna Chyawanprash',
    sanskritName: 'स्वर्ण च्यवनप्राश (Rasayana)',
    shortPurpose: 'Immunity, Cellular Longevity & Deep Vitality (Ojas)',
    subtitle: 'Infused with Real 24K Swarna Bhasma, Wild Forest Honey & Vedic A2 Ghee',
    description:
      'A master Ayurvedic rasayana slow-cooked in small batches over 21 days according to traditional Sharangdhara Samhita protocols. Enhanced with certified Swarna Bhasma (purified micro-processed elemental gold) and organic wild forest Amalaki to nurture all seven bodily tissues (Dhatus).',
    traditionalPreparationStory:
      'Crafted strictly according to ancient metallurgical and botanical protocols. Wild-harvested organic Amla is deseeded and steamed over herbal decoctions before being simmered in pure A2 Gir Cow Ghee, tempered with raw unheated Himalayan forest honey, and enriched with micro-calcined Swarna Bhasma.',
    price: 1850,
    originalPrice: 2200,
    rating: 4.95,
    reviewCount: 248,
    badge: 'Pure Vegetarian',
    isBestseller: true,
    elementHighlight: 'gold',
    featureBadges: ['Real Swarna Bhasma', 'A2 Vedic Cow Ghee', 'Raw Forest Honey', 'Wild Amalaki'],
    image: 'https://images.unsplash.com/photo-1608248597359-0a6e0a8169e5?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1608248597359-0a6e0a8169e5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1200&q=85'
    ],
    weightVolume: '500g Glass Apothecary Jar',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Balances',
    },
    keyIngredients: [
      {
        name: 'Swarna Bhasma (Gold)',
        sanskrit: 'स्वर्ण भस्म',
        botanical: 'Calcined Aurum',
        benefit: 'Promotes cellular rejuvenation, memory consolidation, and deep vitality (Ojas).',
        percentage: 'Authentic Ayurvedic Formulation',
        image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Wild Forest Amla',
        sanskrit: 'आमलकी (Amalaki)',
        botanical: 'Phyllanthus Emblica',
        benefit: 'One of the richest natural sources of bioavailable Vitamin C; powerful adaptogen.',
        percentage: 'Prime Active Base',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Vedic A2 Gir Cow Ghee',
        sanskrit: 'गोघृत (Go-Ghrita)',
        botanical: 'B Vedic Clarified Butter',
        benefit: 'Acts as Yogavahi—a cellular catalytic carrier ensuring deep nutrient delivery.',
        percentage: 'Traditional Vehicle',
        image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Kashmiri Mongra Saffron',
        sanskrit: 'कुंकुम (Kumkuma)',
        botanical: 'Crocus Sativus',
        benefit: 'Harmonizes mood, elevates cognitive sharpness, and promotes glowing skin.',
        percentage: 'Rare Botanical',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=300&q=80',
      },
    ],
    ritualHowToUse: {
      timing: 'Morning upon rising or 30 minutes before breakfast',
      dosage: '1 level teaspoon (approx. 10g)',
      anupana: 'Warm A2 cow milk or warm water; can also be consumed directly',
      tip: 'Allow the paste to linger on the tongue for 10 seconds before swallowing to activate salivary digestive enzymes.',
    },
    ayurvedicCitation: {
      text: '“च्यवनप्राशः परं ब्रह्म रसायनम्...” — It is supreme among Rasayanas, prolonging life and revitalizing the senses.',
      reference: 'Charaka Samhita, Chikitsa Sthana, Chapter 1:1',
    },
    faqs: [
      {
        question: 'Why does this formulation contain real Swarna Bhasma (Gold)?',
        answer:
          'In traditional Rasashastra (Ayurvedic alchemy), purified micro-calcined gold is documented as a supreme Medhya (intellect booster) and Rasayana (cellular rejuvenator). When processed traditionally through dozens of purification cycles (Puta), it converts into a non-toxic bioavailable mineral compound.',
      },
      {
        question: 'Is this product suitable for vegans?',
        answer:
          'No, EGA Swarna Chyawanprash is 100% Pure Vegetarian but NOT vegan, as it is prepared using traditional Vedic A2 Gir Cow Ghee and wild forest bee honey as essential bio-carriers. For our vegan patrons, we recommend our Nano Giloy and Wild Amla Tablets.',
      },
      {
        question: 'Can children and elders consume it daily?',
        answer:
          'Yes, it is traditionally cherished across generations. Children over 5 years may consume 1/2 teaspoon, while adults take 1 full teaspoon daily.',
      },
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Dr. Meera Nambiar',
        location: 'Bengaluru, Karnataka',
        rating: 5,
        date: '14 Oct 2025',
        title: 'Remarkable refinement in texture and energy',
        comment:
          'As an integrative physician, I am deeply impressed by EGA’s adherence to authentic classical texts. The mouthfeel has that distinctive astringent-sweet herbal depth without artificial sugariness.',
        verified: true,
      },
      {
        id: 'rev-2',
        author: 'Arjun Singhania',
        location: 'Mumbai, Maharashtra',
        rating: 5,
        date: '02 Nov 2025',
        title: 'Noticeable difference in seasonal stamina',
        comment:
          'Taking 1 spoonful every morning with lukewarm water has completely eliminated my seasonal fatigue. The packaging and gold accents feel exceptionally regal.',
        verified: true,
      },
    ],
    category: 'Immunity & Vitality',
  },
  {
    id: 'ega-nervega-gold-silver',
    slug: 'nervega-gold-silver-tablets',
    name: 'EGA Nervega Gold & Silver',
    sanskritName: 'नर्वेगा स्वर्ण-रजत रसायन',
    shortPurpose: 'Anti-Stress, Nervous System Calming & Cognitive Flow',
    subtitle: 'Dual Mineral Alchemy with Swarna Bhasma, Rajata Bhasma & Medhya Herbs',
    description:
      'A physician-designed classical formulation combining purified Swarna (Gold) and Rajata (Silver) Bhasmas with standardized extracts of Brahmi, Shankhpushpi, and Ashwagandha. Formulated to calm hyperactive Vata in the nervous system, reduce cortisol spikes, and induce restorative deep sleep.',
    traditionalPreparationStory:
      'Swarna Bhasma (for vitality and neuro-restoration) and Rajata Bhasma (for cooling nervous heat and calming Pitta) are processed alongside botanical extracts through Bhavana (liquid herb trituration) over 100 hours to ensure cellular synergy.',
    price: 2450,
    originalPrice: 2900,
    rating: 4.92,
    reviewCount: 164,
    badge: 'Pure Vegetarian',
    isBestseller: true,
    elementHighlight: 'both',
    featureBadges: ['Swarna & Rajata Bhasma', 'KSM-66 Ashwagandha', 'Brahmi Extract', 'Physician Formulated'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=85'
    ],
    weightVolume: '60 Herbal Coated Tablets',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Cools',
      kapha: 'Neutral',
    },
    keyIngredients: [
      {
        name: 'Swarna Bhasma',
        sanskrit: 'स्वर्ण भस्म',
        botanical: 'Purified Gold Calx',
        benefit: 'Strengthens synaptic transmission and protects nerve sheaths from oxidative stress.',
        image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Rajata Bhasma',
        sanskrit: 'रजत भस्म',
        botanical: 'Purified Silver Calx',
        benefit: 'Cooling lunar element that pacifies acute nervous agitation, tension headaches, and anxiety.',
        image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Brahmi (Water Hyssop)',
        sanskrit: 'ब्राह्मी',
        botanical: 'Bacopa Monnieri',
        benefit: 'Supports acetylcholine production, improving working memory retention and serene alertness.',
        image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Shankhpushpi',
        sanskrit: 'शंखपुष्पी',
        botanical: 'Convolvulus Pluricaulis',
        benefit: 'Classic Ayurvedic nervine sedative that quiets cyclical, racing nighttime thoughts.',
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=300&q=80',
      },
    ],
    ritualHowToUse: {
      timing: '1 tablet in the morning after breakfast and 1 tablet 45 minutes before sleep',
      dosage: '1 to 2 tablets daily',
      anupana: 'Warm milk with a pinch of nutmeg or warm water',
      tip: 'Avoid checking mobile screens 30 minutes after taking the evening tablet to allow natural melatonin alignment.',
    },
    ayurvedicCitation: {
      text: '“मेध्यानि च रसायनानि विशेषेण शंखपुष्पी...” — Shankhpushpi and Brahmi are supreme among intellect-enhancing, peace-inducing formulations.',
      reference: 'Charaka Samhita, Chikitsa Sthana, Chapter 1:3',
    },
    faqs: [
      {
        question: 'What is the role of Silver (Rajata) in Nervega?',
        answer:
          'While Gold is solar, heating, and strengthening (Ojas-promoting), Silver is lunar, calming, and cooling (Sheeta virya). When combined, they bring exquisite equilibrium to high-stress modern neurological systems.',
      },
      {
        question: 'Is Nervega habit-forming?',
        answer:
          'No. Unlike synthetic sedatives, Nervega works by nourishing the myelin sheath and stabilizing neuro-endocrinal balance naturally without grogginess or dependency.',
      },
    ],
    reviews: [
      {
        id: 'rev-3',
        author: 'Rohit Kulkarni',
        location: 'Pune, Maharashtra',
        rating: 5,
        date: '28 Jan 2026',
        title: 'My Oura ring sleep score jumped 14 points',
        comment:
          'High stress executive job kept me waking up at 3 AM every night. Since starting Nervega 3 weeks ago, my deep sleep cycle has stabilized wonderfully.',
        verified: true,
      },
    ],
    category: 'Mind & Balance',
  },
  {
    id: 'ega-nano-giloy-extract',
    slug: 'nano-giloy-blood-cleanser',
    name: 'EGA Nano Giloy Extract',
    sanskritName: 'नैनो गिलोय अमृत शोधक',
    shortPurpose: 'Bio-Enhanced Blood Cleanser & Daily Cellular Immunity',
    subtitle: 'Cold-Extracted Neem-Grown Guduchi with Nano-Micellar Bioavailability',
    description:
      'Sourced exclusively from wild Giloy vines that climb Neem trees (Neem-Guduchi), doubling their therapeutic bitter principles. Enhanced through sub-micron cellular extraction to deliver uncompromised bioavailability for liver detox, blood purification, and immune resilience.',
    traditionalPreparationStory:
      'In Ayurvedic classics, Giloy climbing a Neem tree absorbs the bioactive azadirachtin compounds from the host tree while retaining its gentle adaptogenic qualities. Extracted using water-soluble gentle decoction to preserve heat-sensitive glyco-proteins.',
    price: 950,
    originalPrice: 1150,
    rating: 4.88,
    reviewCount: 312,
    badge: '100% Vegan',
    isBestseller: true,
    elementHighlight: 'botanical',
    featureBadges: ['100% Vegan', 'Neem-Grown Giloy', 'Nano Bio-Enhanced', 'Zero Preservatives'],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85'
    ],
    weightVolume: '60 Plant-Based Veggie Capsules',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Reduces',
    },
    keyIngredients: [
      {
        name: 'Neem-Grown Guduchi',
        sanskrit: 'नीम गुडूची / अमृता',
        botanical: 'Tinospora Cordifolia',
        benefit: 'Known as "Amrita" (nectar of immortality); enhances phagocytic activity of white blood cells.',
        image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Pippali Bio-Enhancer',
        sanskrit: 'पिप्पली',
        botanical: 'Piper Longum',
        benefit: 'Enhances cellular absorption through thermogenic micro-circulation.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80',
      },
    ],
    ritualHowToUse: {
      timing: 'Twice daily, 15 minutes before main meals',
      dosage: '1 capsule morning, 1 capsule evening',
      anupana: 'Warm ginger water or pure warm water',
      tip: 'Pairs exceptionally well with our Organic Amla tablets for total metabolic cleanse.',
    },
    ayurvedicCitation: {
      text: '“गुडूची कटुका तिक्ता स्वादुपाका रसायनी...” — Guduchi is pungent, bitter, sweet in digestion, and a supreme Rasayana.',
      reference: 'Bhavaprakasha Nighantu, Guduchyadi Varga',
    },
    faqs: [
      {
        question: 'Why is it marked 100% Vegan?',
        answer:
          'EGA Nano Giloy Extract uses 100% plant-cellulose vegetarian capsules, containing zero dairy, gelatin, beeswax, or animal biproducts.',
      },
      {
        question: 'How does Nano Giloy differ from raw giloy powder?',
        answer:
          'Raw powder requires large dosages and can be difficult for weak digestive systems to break down. Our nano-micellar extraction ensures 4x higher cellular absorption with zero digestive burden.',
      },
    ],
    reviews: [
      {
        id: 'rev-4',
        author: 'Ananya Deshmukh',
        location: 'Hyderabad, Telangana',
        rating: 5,
        date: '10 Feb 2026',
        title: 'Cleared persistent skin flareups within 3 weeks',
        comment:
          'My Ayurvedic practitioner recommended Giloy for persistent Pitta heat and redness. This nano formulation is gentle on the stomach and works wonders.',
        verified: true,
      },
    ],
    category: 'Daily Wellness',
  },
  {
    id: 'ega-wild-forest-amla-tablets',
    slug: 'wild-forest-organic-amla-tablets',
    name: 'EGA Wild Forest Amla Tablets',
    sanskritName: 'वन्य आमलकी रस',
    shortPurpose: 'Natural Collagen Synthesis & Digestive Fire (Agni)',
    subtitle: 'Cold-Pressed Wild Himalayan Indian Gooseberry with Bio-Active Tannoids',
    description:
      'Harvested from ancient, slow-growing wild Amla trees nestled in unpolluted Himalayan foothills. Naturally rich in stable vitamin C and heat-resilient emblicanins, this daily formulation kindles digestive agni without aggravating pitta, defending against oxidative breakdown.',
    traditionalPreparationStory:
      'Unlike commercially cultivated grafted Amla, wild forest Amla is smaller, more pungent, and significantly denser in therapeutic bio-tannoids. Fruits are shade-dried and cold-pressed without excessive heat to protect delicate phytocompounds.',
    price: 780,
    originalPrice: 920,
    rating: 4.91,
    reviewCount: 289,
    badge: '100% Vegan',
    isBestseller: false,
    elementHighlight: 'botanical',
    featureBadges: ['100% Vegan', 'Wild Himalayan Harvest', 'Shade-Dried', 'Zero Binders'],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1608248597359-0a6e0a8169e5?auto=format&fit=crop&w=1200&q=85'
    ],
    weightVolume: '120 Pure Botanical Pressed Tablets',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Cools',
      kapha: 'Balances',
    },
    keyIngredients: [
      {
        name: 'Wild Forest Amalaki',
        sanskrit: 'धात्रीफल (Dhatriphala)',
        botanical: 'Phyllanthus Emblica',
        benefit: 'Known as the "Earthly Mother" in Sanskrit; nourishes hair, eyes, skin, and mucosal tissues.',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80',
      },
    ],
    ritualHowToUse: {
      timing: 'Immediately after meals or with lunch',
      dosage: '2 tablets once or twice daily',
      anupana: 'Room temperature water',
      tip: 'Take regularly with meals to assist healthy iron assimilation from your plant-based diet.',
    },
    ayurvedicCitation: {
      text: '“वयःस्थापनं आयुष्करं रसायनं...” — Amalaki preserves youthfulness, promotes longevity, and balances all three Doshas.',
      reference: 'Sushruta Samhita, Sutra Sthana',
    },
    faqs: [
      {
        question: 'Are any synthetic binders or chemical glues used in these tablets?',
        answer:
          'Zero synthetic chemicals. We use a proprietary cold-compression technique using only organic acacia gum fibre as a natural binder.',
      },
      {
        question: 'Is it completely 100% Vegan?',
        answer:
          'Yes, 100% certified plant-based and suitable for pure vegan lifestyles.',
      },
    ],
    reviews: [
      {
        id: 'rev-5',
        author: 'Siddharth Sen',
        location: 'New Delhi',
        rating: 5,
        date: '19 Jan 2026',
        title: 'Authentic sour-astringent taste of real wild amla',
        comment:
          'You can smell the pure botanical honesty when opening the bottle. My gut health and morning acidity have improved dramatically.',
        verified: true,
      },
    ],
    category: 'Gut & Digestion',
  },
  {
    id: 'ega-kumkumadi-saffron-elixir',
    slug: 'kumkumadi-saffron-radiance-elixir',
    name: 'EGA Kumkumadi Radiance Elixir',
    sanskritName: 'कुंकुमादि कान्ति तैलम्',
    shortPurpose: 'Cellular Radiance, Complexion Glow & Deep Hydration',
    subtitle: 'Vedic Infusion of Kashmiri Mongra Saffron, Red Sandalwood & 26 Rare Botanicals',
    description:
      'An exquisite, golden-hued face nectar steeped with Grade-1 Kashmiri Mongra saffron stigma, Chandana, Manjistha, and cold-pressed sesame oil. Formulated to enhance micro-circulation, fade hyperpigmentation spots, and impart the luminous signature "Tejas" glow.',
    traditionalPreparationStory:
      'Prepared in brass vessels through the classic Sneha Paka ritual over a low flame for 72 continuous hours. Hand-inspected Kashmiri saffron threads are folded in during the final cooldown phase to preserve volatile aromatic esters.',
    price: 2150,
    originalPrice: 2600,
    rating: 4.98,
    reviewCount: 198,
    badge: '100% Vegan',
    isBestseller: true,
    elementHighlight: 'botanical',
    featureBadges: ['100% Vegan', 'Kashmiri Mongra Saffron', 'Cold-Pressed Sesame', 'Zero Fragrance'],
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85'
    ],
    weightVolume: '30ml Frosted Amber Dropper Bottle',
    inStock: true,
    dosha: {
      vata: 'Balances',
      pitta: 'Soothes',
      kapha: 'Balances',
    },
    keyIngredients: [
      {
        name: 'Kashmiri Mongra Saffron',
        sanskrit: 'कुंकुम (Kumkuma)',
        botanical: 'Crocus Sativus',
        benefit: 'Rich in crocin and safranal; promotes cellular turnover and imparts warmth and radiance.',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Red Sandalwood',
        sanskrit: 'रक्तचन्दन (Raktachandana)',
        botanical: 'Pterocarpus Santalinus',
        benefit: 'Intensely soothing for inflamed dermal tissues, uneven blemishes, and sun exposure.',
        image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Manjistha (Indian Madder)',
        sanskrit: 'मञ्जिष्ठा',
        botanical: 'Rubia Cordifolia',
        benefit: 'Classic lymphatic purifier that clears dermal congestion and promotes uniform skin tone.',
        image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=300&q=80',
      },
    ],
    ritualHowToUse: {
      timing: 'Night ritual before bed, on clean, damp skin',
      dosage: '3 to 4 drops warmed between palms',
      anupana: 'Applied directly with upward circular marma massage',
      tip: 'Mist face with rose water prior to application for enhanced lipid absorption and dewy finish.',
    },
    ayurvedicCitation: {
      text: '“कुंकुमाद्यमिदं तैलं वक्त्रकान्तिकरं परम्...” — This Kumkumadi oil is supreme in bestowing unmatched radiance and complexion upon the face.',
      reference: 'Ashtanga Hridaya, Uttarasthana 32:27',
    },
    faqs: [
      {
        question: 'Is this Kumkumadi oil 100% Vegan?',
        answer:
          'Yes. Traditional versions sometimes incorporated goat milk; EGA’s modernized formulation replaces dairy with nutrient-dense lotus seed and cold-pressed botanical lipids without losing therapeutic potency, making it 100% Vegan.',
      },
      {
        question: 'Will this oil feel heavy or cause clogged pores?',
        answer:
          'No. We micro-filter the herbal decoction through three ultra-fine filtration cycles, leaving a lightweight, fast-absorbing elixir that nourishes deeply without greasy residue.',
      },
    ],
    reviews: [
      {
        id: 'rev-6',
        author: 'Kavita Menon',
        location: 'Kochi, Kerala',
        rating: 5,
        date: '03 Feb 2026',
        title: 'Pure liquid gold for the skin',
        comment:
          'The aroma is intoxicating and calming—pure botanical saffron and sandalwood with zero synthetic perfumes. My skin wakes up noticeably plumper and glowing.',
        verified: true,
      },
    ],
    category: 'Skin & Radiance',
  },
];
