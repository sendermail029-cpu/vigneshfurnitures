import type { Metadata } from 'next'
import { Poppins, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vigneshfurniture.in'),
  title: {
    default: "Vignesh Furniture's & Electronics | Best Furniture & Electronics Shop in Hanuman Junction",
    template: "%s | Vignesh Furniture's & Electronics",
  },
  description:
    "Hanuman Junction's most trusted furniture and electronics store for 25+ years. Best furniture shop in Bapulapadu. Buy beds, sofas, TVs, refrigerators at affordable prices. 0% EMI with Bajaj Finserv.",
  keywords: [
    'furniture shop Hanuman Junction',
    'electronics shop Hanuman Junction',
    'best furniture store Bapulapadu',
    'mattress shop Hanuman Junction',
    'home appliances Hanuman Junction',
    'affordable furniture Hanuman Junction',
    'furniture store Andhra Pradesh',
    'sofa set Hanuman Junction',
    'TV shop Hanuman Junction',
    'refrigerator shop Bapulapadu',
    'Vignesh Furniture',
    'furniture Vijayawada Road',
  ],
  authors: [{ name: "Vignesh Furniture's & Electronics" }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vigneshfurniture.in',
    siteName: "Vignesh Furniture's & Electronics",
    title: "Best Furniture & Electronics Shop in Hanuman Junction | 25+ Years Trusted",
    description:
      'Shop furniture and electronics at Hanuman Junction. Beds, sofas, TVs, refrigerators at best prices. 0% EMI available.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://vigneshfurniture.in' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FurnitureStore',
              name: "Vignesh Furniture's & Electronics",
              description: "Hanuman Junction's most trusted furniture and electronics store for 25+ years",
              url: 'https://vigneshfurniture.in',
              email: 'bmanibabu5@gmail.com',
              telephone: ['+919849639368', '+919866344294'],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Vijayawada Rd',
                addressLocality: 'Hanuman Junction, Bapulapadu',
                addressRegion: 'Andhra Pradesh',
                postalCode: '521105',
                addressCountry: 'IN',
              },
              geo: { '@type': 'GeoCoordinates', latitude: 16.5677, longitude: 81.0234 },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '09:00',
                  closes: '20:00',
                },
                { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '18:00' },
              ],
              priceRange: '₹₹',
              servesCuisine: [],
              sameAs: [
                'https://www.facebook.com/VIGNESHFURNITURES?rdid=V5L5jq0I2w2NzMJW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Kma74cF75%2F#',
                'https://www.instagram.com/vign_esh9323?utm_source=qr&igsh=MXRoYXhxNmlvcnNnNA%3D%3D',
                'https://www.youtube.com/',
              ],
            }),
          }}
        />
      </head>
      <body className="font-body bg-white text-navy antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
