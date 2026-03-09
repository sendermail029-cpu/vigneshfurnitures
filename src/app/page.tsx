import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import SocialConnect from '@/components/SocialConnect'
import Owners from '@/components/Owners'
import Products from '@/components/Products'
import Brands from '@/components/Brands'
import Offers from '@/components/Offers'
import Reels from '@/components/Reels'
import Reviews from '@/components/Reviews'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: "Vignesh Furniture's & Electronics | Best Furniture & Electronics Shop Hanuman Junction",
  description:
    "Shop premium furniture and electronics at Vignesh Furniture's & Electronics, Hanuman Junction. Beds, sofas, dining tables, TVs, refrigerators at best prices. 0% EMI with Bajaj Finserv. 25+ years of trusted service.",
  keywords: [
    'furniture shop Hanuman Junction',
    'electronics shop Hanuman Junction',
    'best furniture store Bapulapadu',
    'mattress shop Hanuman Junction',
    'sofa set Hanuman Junction',
    'TV shop Bapulapadu',
    'refrigerator Hanuman Junction',
    '0% EMI furniture Andhra Pradesh',
  ],
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialConnect />
      <Brands />
      <Owners />
      <Products />
      <Offers />
      <Reels />
      <Reviews />
      <Gallery />
      <Contact />
    </>
  )
}
