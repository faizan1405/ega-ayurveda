import { BotanicalIngredient } from '../types';

export const BOTANICAL_INGREDIENTS: BotanicalIngredient[] = [
  {
    id: 'turmeric',
    name: 'Turmeric',
    sanskritName: 'हरिद्रा (Haridra)',
    botanicalName: 'Curcuma Longa',
    shortDescription: 'The Golden Goddess of internal purity and cellular defense.',
    traditionalUsage:
      'Traditionally prized in the Charaka Samhita as Varnya (complexion-enhancing) and Vishaghna (toxin-neutralizing). Possesses natural curcuminoids that modulate inflammatory cascades.',
    doshaAffinity: 'Pacifies Kapha & Vata, Balances Pitta in moderation',
    rasa: 'Tikta (Bitter), Katu (Pungent)',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    featuredIn: ['Immunity Elixirs', 'Digestive Teas', 'Golden Milk Rituals'],
  },
  {
    id: 'amla',
    name: 'Wild Amla',
    sanskritName: 'आमलकी (Amalaki)',
    botanicalName: 'Phyllanthus Emblica',
    shortDescription: 'The sacred nectar fruit holding five of the six Ayurvedic tastes.',
    traditionalUsage:
      'A supreme Rasayana containing thermostable bioflavonoids and natural Vitamin C. Nourishes the rasa (plasma) and rakta (blood) tissues without heating the digestive tract.',
    doshaAffinity: 'Tridoshic (Harmonizes Vata, Pitta & Kapha simultaneously)',
    rasa: 'Amla (Sour), Kashaya (Astringent), Madhura (Sweet), Tikta, Katu',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    featuredIn: ['EGA Swarna Chyawanprash', 'EGA Wild Forest Amla Tablets'],
  },
  {
    id: 'neem',
    name: 'Neem',
    sanskritName: 'निम्ब (Nimba)',
    botanicalName: 'Azadirachta Indica',
    shortDescription: 'The divine village dispensary and master skin cooling botanical.',
    traditionalUsage:
      'Extensively referenced in Sushruta Samhita for clearing deep seated metabolic heat (Pitta) and systemic impurities from the dermal barrier.',
    doshaAffinity: 'Pacifies Pitta & Kapha',
    rasa: 'Tikta (Intensely Bitter)',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80',
    featuredIn: ['EGA Nano Giloy Extract (Neem-Grown)', 'Skin Purifiers'],
  },
  {
    id: 'saffron',
    name: 'Kashmiri Saffron',
    sanskritName: 'कुंकुम (Kumkuma)',
    botanicalName: 'Crocus Sativus',
    shortDescription: 'Hand-picked royal stigma of the crimson flower of the valley.',
    traditionalUsage:
      'Revered by Ayurvedic royalty for centuries as a Sattvic botanical that elevates mood, bestows golden skin radiance, and supports heart prana.',
    doshaAffinity: 'Balances all three Doshas, especially Vata & Kapha',
    rasa: 'Tikta (Bitter), Madhura (Sweet)',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    featuredIn: ['EGA Kumkumadi Radiance Elixir', 'EGA Swarna Chyawanprash'],
  },
  {
    id: 'giloy',
    name: 'Giloy (Guduchi)',
    sanskritName: 'अमृता (Amrita / Guduchi)',
    botanicalName: 'Tinospora Cordifolia',
    shortDescription: 'Heavenly botanical nectar that safeguards immunity and liver agni.',
    traditionalUsage:
      'Held as one of the three primary Rasayanas in Ayurvedic texts. Protects the body against cellular exhaustion while keeping the digestive fire luminous.',
    doshaAffinity: 'Tridoshic (Balances Vata, Pitta & Kapha)',
    rasa: 'Tikta (Bitter), Kashaya (Astringent)',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80',
    featuredIn: ['EGA Nano Giloy Extract'],
  },
  {
    id: 'brahmi',
    name: 'Brahmi',
    sanskritName: 'ब्राह्मी (Medhya Rasayana)',
    botanicalName: 'Bacopa Monnieri',
    shortDescription: 'The herb of divine consciousness and profound neuro-nourishment.',
    traditionalUsage:
      'Celebrated for opening the crowns of the intellect, soothing emotional turbulence, enhancing memory recall, and cooling the nervous channels (Majja Dhatu).',
    doshaAffinity: 'Pacifies Vata & Pitta',
    rasa: 'Tikta (Bitter), Madhura (Sweet)',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    featuredIn: ['EGA Nervega Gold & Silver'],
  },
];
