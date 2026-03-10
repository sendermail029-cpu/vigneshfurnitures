export interface Product {
  id: number
  name: string
  category: 'furniture' | 'electronics'
  subcategory: string
  description: string
  image: string
  badge?: string
  featured?: boolean
}

export const products: Product[] = [
  // Furniture
  {
    id: 1,
    name: 'Bed Cot',
    category: 'furniture',
    subcategory: 'Bed Cots',
    description: 'Available in wooden, storage, designer, single, queen and king-size models with multiple finish options.',
    image: '/bedcoats.webp',
    badge: 'Best Seller',
    featured: true,
  },
  {
    id: 2,
    name: 'Storage Lockers',
    category: 'furniture',
    subcategory: 'Lockers',
    description: 'Available in box storage, drawer storage and regular cot models for bedrooms and family homes.',
    image: '/beruvaa.webp',
    featured: true,
  },
  {
    id: 3,
    name: 'Mattress',
    category: 'furniture',
    subcategory: 'Mattresses',
    description: 'Available in spring, foam, orthopaedic and branded varieties in single, queen and king sizes.',
    image: '/peps.webp',
    badge: 'Peps Brand',
    featured: true,
  },
  {
    id: 4,
    name: 'Branded Mattress',
    category: 'furniture',
    subcategory: 'Mattresses',
    description: 'Available in comfort, orthopaedic, hard, soft and premium mattress varieties for all sleeping needs.',
    image: '/beds.webp',
    featured: true,
  },
  {
    id: 5,
    name: 'Sofa Set',
    category: 'furniture',
    subcategory: 'Sofa Sets',
    description: 'Available in 3-seater, 5-seater, L-shape, fabric and leatherette varieties in multiple colours.',
    image: '/sofas.webp',
    badge: 'Popular',
    featured: true,
  },
  {
    id: 6,
    name: 'Dining Table',
    category: 'furniture',
    subcategory: 'Dining Tables',
    description: 'Available in 4-seater, 6-seater and family dining varieties with different chair and finish options.',
    image: '/dining.webp',
    featured: true,
  },
  {
    id: 7,
    name: 'Plastic Chairs',
    category: 'furniture',
    subcategory: 'Plastic Chairs',
    description: 'Durable plastic chairs for homes, functions, and bulk orders. Easy to clean and stack.',
    image: '/chairs.webp',
    badge: 'Best Value',
  },
  {
    id: 8,
    name: 'Wardrobe',
    category: 'furniture',
    subcategory: 'Wardrobes',
    description: 'Available in steel, mirror, multi-door and family storage varieties with useful shelf arrangements.',
    image: '/wardrobe.webp',
    featured: true,
  },
  {
    id: 9,
    name: 'Dressing Table',
    category: 'furniture',
    subcategory: 'Dressing Tables',
    description: 'Stylish dressing table with mirror and storage shelves. Useful for modern bedrooms.',
    image: '/miror.webp',
  },
  {
    id: 10,
    name: 'Divan Cot',
    category: 'furniture',
    subcategory: 'Divan Cots',
    description: 'Simple and affordable divan cot for homes, guest rooms, and rental spaces.',
    image: '/diwan.webp',
    badge: 'Budget Pick',
  },

  // Electronics
  {
    id: 11,
    name: 'Television',
    category: 'electronics',
    subcategory: 'TVs',
    description: 'Available in LED, smart, Android and multiple screen-size varieties from leading brands.',
    image: '/tv.webp',
    badge: 'LG / Samsung',
    featured: true,
  },
  {
    id: 12,
    name: 'Refrigerator',
    category: 'electronics',
    subcategory: 'Refrigerators',
    description: 'Available in single door, double door, frost-free and family-size refrigerator varieties.',
    image: '/refrigerator.webp',
    badge: 'Budget Pick',
  },

  {
    id: 14,
    name: 'Washing Machine',
    category: 'electronics',
    subcategory: 'Washing Machines',
    description: 'Available in semi-automatic, fully automatic, top-load and front-load varieties for different family needs.',
    image: '/washing.avif',
    featured: true,
  },
  {
    id: 15,
    name: 'Air Conditioner',
    category: 'electronics',
    subcategory: 'Air Conditioners',
    description: 'Available in split, inverter and seasonal cooling varieties from trusted brands.',
    image: '/ac.webp',
    badge: 'Season Offer',
    featured: true,
  },

  {
    id: 17,
    name: 'Mixer Grinder',
    category: 'electronics',
    subcategory: 'Kitchen Appliances',
    description: 'Available in different motor capacities and jar combinations for daily kitchen use.',
    image: '/mixi.webp',
    badge: 'Best Value',
  },
  {
    id: 18,
    name: 'Rice Cooker',
    category: 'electronics',
    subcategory: 'Kitchen Appliances',
    description: 'Available in electric cooking and daily-use home appliance varieties for simple meal preparation.',
    image: '/cooker.webp',
  },
  {
    id: 19,
    name: 'Induction Stove',
    category: 'electronics',
    subcategory: 'Kitchen Appliances',
    description: 'Compact induction stove for fast and efficient cooking with modern safety features.',
    image: '/induc.webp',
  },
  {
    id: 20,
    name: 'Audio System',
    category: 'electronics',
    subcategory: 'Audio Systems',
    description: 'Available in home theatre, speaker and entertainment audio varieties for TV and music use.',
    image: '/audio.avif',
  },
  {
    id: 21,
    name: 'Ceiling Fan',
    category: 'electronics',
    subcategory: 'Fans',
    description: 'Durable ceiling fan with strong air delivery and power-saving performance.',
    image: '/fan.webp',
  },
  {
    id: 22,
    name: 'Iron Box',
    category: 'electronics',
    subcategory: 'Home Appliances',
    description: 'Lightweight and efficient iron box for smooth daily ironing at home.',
    image: '/ironbox.webp',
  },
]

export const getFeatured = () => products.filter((p) => p.featured)
export const getFurniture = () => products.filter((p) => p.category === 'furniture')
export const getElectronics = () => products.filter((p) => p.category === 'electronics')

export const WHATSAPP_NUMBER = '919866344294'

export function getWhatsAppLink(productName: string) {
  const msg = encodeURIComponent(
    `Hello, I am interested in this product from Vignesh Furniture's & Electronics.\n\nProduct Name: ${productName}\n\nPlease share the price and availability.`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
}

export function getGeneralWhatsApp() {
  const msg = encodeURIComponent(
    `Hello! I visited your website and would like to know more about your furniture and electronics products. Please share details.`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
}
