import { Service, Stylist } from './types';

export const SERVICES: Service[] = [
  // --- HAIR SERVICES (FEMALE) ---
  {
    id: 'fh1',
    name: 'Head Wash + Haircut + Blowdry',
    duration: 60,
    price: 650,
    category: 'Hair (Female)',
    description: 'Complete hair makeover including wash, precision cut and styling.',
  },
  {
    id: 'fh2',
    name: 'Headwash + Blowdry (Styling)',
    duration: 45,
    price: 350,
    category: 'Hair (Female)',
    description: 'Refreshing wash followed by a professional blowout.',
  },
  {
    id: 'fh3',
    name: 'Root Touch-Up',
    duration: 90,
    price: 950,
    category: 'Hair (Female)',
    description: 'Color coverage for roots to match your existing shade.',
  },
  {
    id: 'fh4',
    name: 'Global Hair Colour (Basic)',
    duration: 120,
    price: 1950,
    category: 'Hair (Female)',
    description: 'Full head single process color transformation.',
  },
  {
    id: 'fh5',
    name: 'Balayage',
    duration: 180,
    price: 3999,
    category: 'Hair (Female)',
    description: 'Hand-painted highlights for a natural, sun-kissed gradient effect.',
  },
  {
    id: 'fh6',
    name: 'Ombre',
    duration: 180,
    price: 2999,
    category: 'Hair (Female)',
    description: 'Dramatic two-tone color effect fading from dark to light.',
  },
  {
    id: 'fh7',
    name: 'Highlights (Per Streak)',
    duration: 45,
    price: 229,
    category: 'Hair (Female)',
    description: 'Individual foil highlights to add dimension.',
  },

  // --- HAIR SERVICES (MALE) ---
  {
    id: 'mh1',
    name: 'Head Wash + Haircut + Blowdry',
    duration: 45,
    price: 250,
    category: 'Hair (Male)',
    description: 'Standard men\'s grooming package.',
  },
  {
    id: 'mh2',
    name: 'Cut + Beard Trimming',
    duration: 60,
    price: 350,
    category: 'Hair (Male)',
    description: 'Head wash, haircut, blowdry and professional beard shaping.',
  },
  {
    id: 'mh3',
    name: 'Beard Trimming',
    duration: 20,
    price: 100,
    category: 'Hair (Male)',
    description: 'Quick beard shape-up and trim.',
  },
  {
    id: 'mh4',
    name: 'Global Hair Colour',
    duration: 60,
    price: 650,
    category: 'Hair (Male)',
    description: 'Full head color service for men.',
  },
  {
    id: 'mh5',
    name: 'Hair Perming',
    duration: 90,
    price: 1999,
    category: 'Hair (Male)',
    description: 'Add texture and curls to straight hair.',
  },

  // --- TREATMENTS ---
  {
    id: 'tr1',
    name: 'Keratin Treatment',
    duration: 180,
    price: 2550,
    category: 'Treatments',
    description: 'Smoothing treatment to reduce frizz and add shine (Basic length).',
  },
  {
    id: 'tr2',
    name: 'Botox Hair Treatment',
    duration: 180,
    price: 4999,
    category: 'Treatments',
    description: 'Deep conditioning and anti-aging treatment for damaged hair.',
  },
  {
    id: 'tr3',
    name: 'Smoothening',
    duration: 180,
    price: 3099,
    category: 'Treatments',
    description: 'Semi-permanent hair straightening and smoothing.',
  },
  {
    id: 'tr4',
    name: 'Hair Spa + Deep Conditioning',
    duration: 60,
    price: 750,
    category: 'Treatments',
    description: 'Relaxing massage and deep conditioning mask for hair health.',
  },

  // --- SKIN & BEAUTY ---
  {
    id: 'sk1',
    name: 'Clean Up (Classic)',
    duration: 45,
    price: 650,
    category: 'Skin & Beauty',
    description: 'Essential pore cleansing and exfoliation.',
  },
  {
    id: 'sk2',
    name: 'Hydra Facial (Premium)',
    duration: 75,
    price: 4250,
    category: 'Skin & Beauty',
    description: 'Advanced hydration and extraction using hydra-dermabrasion technology.',
  },
  {
    id: 'sk3',
    name: 'Facial (Classic)',
    duration: 60,
    price: 1999,
    category: 'Skin & Beauty',
    description: 'Comprehensive facial treatment tailored to skin type.',
  },
  {
    id: 'sk4',
    name: 'O3+ Bleach',
    duration: 30,
    price: 550,
    category: 'Skin & Beauty',
    description: 'Brightening bleach treatment.',
  },
  {
    id: 'sk5',
    name: 'Threading (Eyebrow)',
    duration: 15,
    price: 100,
    category: 'Skin & Beauty',
    description: 'Precise brow shaping.',
  },

  // --- NAILS ---
  {
    id: 'nl1',
    name: 'Pedicure + Nail Paint',
    duration: 60,
    price: 1350,
    category: 'Nails',
    description: 'Complete foot care with exfoliation, massage and polish.',
  },
  {
    id: 'nl2',
    name: 'Manicure + Nail Paint',
    duration: 45,
    price: 950,
    category: 'Nails',
    description: 'Complete hand care with cuticle work, massage and polish.',
  },
  {
    id: 'nl3',
    name: 'Nail Extension (Basic)',
    duration: 90,
    price: 2150,
    category: 'Nails',
    description: 'Length enhancement with gel or acrylic.',
  },
  {
    id: 'nl4',
    name: 'Press on Nails',
    duration: 30,
    price: 1150,
    category: 'Nails',
    description: 'Temporary high-quality nail enhancements.',
  },

  // --- BODY & SPA ---
  {
    id: 'bd1',
    name: 'Body Polishing (Classic)',
    duration: 90,
    price: 2500,
    category: 'Body & Spa',
    description: 'Full body exfoliation and hydration treatment.',
  },
  {
    id: 'bd2',
    name: 'Full Body Waxing',
    duration: 90,
    price: 1999,
    category: 'Body & Spa',
    description: 'Complete hair removal service.',
  },
  {
    id: 'bd3',
    name: 'Full Arms + Under Arms Wax',
    duration: 45,
    price: 400,
    category: 'Body & Spa',
    description: 'Smooth skin for arms and underarms.',
  },
];

export const STYLISTS: Stylist[] = [
  {
    id: 'st1',
    name: 'Tania',
    specializations: ['Makeup Artist', 'Bridal Makeup'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'st2',
    name: 'Shivani',
    specializations: ['Nail Artist', 'Nail Extensions'],
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'st3',
    name: 'Ashish',
    specializations: ['Hair Dresser', 'Hair Cutting'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'st4',
    name: 'Arif',
    specializations: ['Hair Dresser', 'Colorist'],
    // Placeholder image. User should host their specific image and replace this URL.
    image: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=800&auto=format&fit=crop', 
  },
  {
    id: 'st5',
    name: 'Deepak',
    specializations: ['Hair Dresser', 'Men\'s Grooming'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
];

export const LOYALTY_REWARD = "Free Luxury Blowout or Manicure";
export const MAX_STAMPS = 10;