import type { Metadata } from 'next'
import Link from 'next/link'
import { products, getWhatsAppLink, WHATSAPP_NUMBER } from '@/data/products'
import { MessageCircle, ArrowLeft, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: "Product Catalog | Vignesh Furniture's & Electronics",
  description:
    "Browse our complete catalog of furniture and electronics. Beds, sofas, TVs, refrigerators and more at Vignesh Furniture's & Electronics, Hanuman Junction.",
}

export default function CatalogPage() {
  const furniture = products.filter((p) => p.category === 'furniture')
  const electronics = products.filter((p) => p.category === 'electronics')

  return (
    <>
      {/* Hero */}
      <div className="bg-navy pt-28 pb-14">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-gold text-sm font-heading font-semibold mb-6 hover:underline">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <h1 className="font-heading font-extrabold text-3xl lg:text-5xl text-white mb-3">
            Product <span className="text-gold-gradient">Catalog</span>
          </h1>
          <p className="font-body text-white/60 text-base max-w-xl">
            Browse all products. Click "Enquire on WhatsApp" to get price and availability instantly.
          </p>
        </div>
      </div>

      <div className="bg-warm-gray py-14">
        <div className="container space-y-14">
          {/* Furniture */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gray-200" />
              <h2 className="font-heading font-bold text-2xl text-navy px-4">🪑 Furniture</h2>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {furniture.map((p) => (
                <div key={p.id} className="product-card group">
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-navy text-white text-xs font-heading font-bold px-2.5 py-1 rounded-full">{p.subcategory}</span>
                    </div>
                    {p.badge && (
                      <div className="absolute top-3 right-3">
                        <span className="flex items-center gap-1 text-xs font-heading font-bold bg-gold text-navy px-2 py-1 rounded-full">
                          <Tag size={9} /> {p.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-navy text-sm mb-1.5">{p.name}</h3>
                    <p className="font-body text-navy-700 text-xs leading-relaxed mb-3 line-clamp-2">{p.description}</p>
                    <a href={getWhatsAppLink(p.name)} target="_blank" rel="noopener noreferrer"
                      className="btn-whatsapp w-full justify-center text-xs py-2">
                      <MessageCircle size={13} /> Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Electronics */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gray-200" />
              <h2 className="font-heading font-bold text-2xl text-navy px-4">📺 Electronics</h2>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {electronics.map((p) => (
                <div key={p.id} className="product-card group">
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white text-xs font-heading font-bold px-2.5 py-1 rounded-full">{p.subcategory}</span>
                    </div>
                    {p.badge && (
                      <div className="absolute top-3 right-3">
                        <span className="flex items-center gap-1 text-xs font-heading font-bold bg-gold text-navy px-2 py-1 rounded-full">
                          <Tag size={9} /> {p.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-navy text-sm mb-1.5">{p.name}</h3>
                    <p className="font-body text-navy-700 text-xs leading-relaxed mb-3 line-clamp-2">{p.description}</p>
                    <a href={getWhatsAppLink(p.name)} target="_blank" rel="noopener noreferrer"
                      className="btn-whatsapp w-full justify-center text-xs py-2">
                      <MessageCircle size={13} /> Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-navy rounded-2xl p-8 text-center">
            <h3 className="font-heading font-bold text-2xl text-white mb-2">Can't find what you need?</h3>
            <p className="font-body text-white/60 text-sm mb-5">We stock 500+ products. WhatsApp us and we'll help you find it.</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I am looking for a specific product. Can you help?')}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-gold inline-flex"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
