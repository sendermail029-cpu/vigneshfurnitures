'use client'
import { useState } from 'react'
import { MessageCircle, Tag } from 'lucide-react'
import { products, getWhatsAppLink } from '@/data/products'
import { useInView } from './hooks/useInView'

const categories = ['All', 'Furniture', 'Electronics']
const subcategories: Record<string, string[]> = {
  All: [],
  Furniture: ['Bed Cots', 'Mattresses', 'Sofa Sets', 'Dining Tables', 'Plastic Chairs', 'Wardrobes', 'Dressing Tables', 'Divan Cots'],
  Electronics: ['TVs', 'Refrigerators', 'Washing Machines', 'Air Conditioners', 'Kitchen Appliances', 'Audio Systems', 'Fans', 'Home Appliances'],
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeSub, setActiveSub] = useState('')
  const { ref, inView } = useInView()

  const filtered = products.filter((p) => {
    if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false
    if (activeSub && p.subcategory !== activeSub) return false
    return true
  })

  return (
    <section id="products" className="section bg-white" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">
            <span className="w-6 h-px bg-gold" />
            Our Collection
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-3 gold-line gold-line-center">
            Products We Offer
          </h2>
          <p className="font-body text-navy-700 text-base max-w-lg mx-auto mt-6">
            Furniture, bed cots, mattresses, wardrobes, TVs, refrigerators, ACs and more. Replace the product images later with your own store photos.
          </p>
        </div>

        {/* Category tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-5 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setActiveSub('') }}
              className={`px-5 py-2.5 rounded-lg font-heading font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-navy text-white shadow-navy'
                  : 'bg-gray-100 text-navy hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sub-category pills */}
        {subcategories[activeCategory].length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {subcategories[activeCategory].map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSub(activeSub === sub ? '' : sub)}
                className={`px-4 py-1.5 rounded-full text-xs font-heading font-semibold border transition-all ${
                  activeSub === sub
                    ? 'bg-gold border-gold text-navy'
                    : 'border-gray-200 text-navy-700 hover:border-gold'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className={`product-card transition-all ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${0.05 * i}s`, transitionDuration: '0.6s' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-heading font-bold px-2.5 py-1 rounded-full ${
                    product.category === 'furniture'
                      ? 'bg-navy text-white'
                      : 'bg-blue-600 text-white'
                  }`}>
                    {product.subcategory}
                  </span>
                </div>
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1 text-xs font-heading font-bold bg-gold text-navy px-2 py-1 rounded-full">
                      <Tag size={10} /> {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-heading font-bold text-navy text-base mb-1.5 group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <p className="font-body text-navy-700 text-xs leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>
                {/* WhatsApp CTA */}
                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-xs py-2.5"
                >
                  <MessageCircle size={14} />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-body text-navy-700 text-sm mb-4">Don't see what you're looking for?</p>
          <a
            href={`https://wa.me/919866344294?text=${encodeURIComponent("Hello! I am looking for a product that I couldn't find on your website. Can you help me?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={16} />
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
