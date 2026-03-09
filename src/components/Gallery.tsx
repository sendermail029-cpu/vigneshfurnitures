'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { useInView } from './hooks/useInView'

const galleryImages = [
  { src: '/gal1.png', alt: 'Sofa Collection', label: 'Shop' },
  { src: '/pooja.webp', alt: 'Bedroom Set', label: 'pooja store' },
  { src: 'cus.webp', alt: 'Smart TVs', label: 'chairs' },
  { src: '/beruvaa.png', alt: 'Dining Table', label: 'Lockers' },
  { src: '/cu2.webp', alt: 'Refrigerator', label: 'sofas' },
  { src: '/whel.jpeg', alt: 'Mattress', label: 'wheel chairs' },
  { src: '/whel1.jpeg', alt: 'Wardrobe', label: 'wheel chairs' },
  { src: '/homes.jpg', alt: 'Chairs', label: 'kitchen Appeliance' },
{ src: '/ele.webp', alt: 'Chairs', label: 'Electronics Appeliance' },
]

export default function Gallery() {
  const { ref, inView } = useInView()
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox((i) => i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null)
  const next = () => setLightbox((i) => i !== null ? (i + 1) % galleryImages.length : null)

  return (
    <section className="section bg-warm-gray" ref={ref}>
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">
            <span className="w-6 h-px bg-gold" />
            Our Store
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-3 gold-line gold-line-center">
            Product Gallery
          </h2>
          <p className="font-body text-navy-700 text-base max-w-lg mx-auto mt-6">
            Browse our collection of premium furniture and electronics available at our store.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              onClick={() => setLightbox(i)}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              } transition-all duration-700 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${0.05 * i}s`, aspectRatio: i === 0 ? '1' : '4/3' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ minHeight: i === 0 ? '280px' : '140px' }}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors duration-300 group-hover:bg-navy/50">
                <ZoomIn className="text-white opacity-0 transition-opacity group-hover:opacity-100" size={24} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-navy/80 to-transparent p-3 transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-xs font-heading font-semibold text-white">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/80 hover:text-white"
          >
            <X size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-4 top-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 -translate-y-1/2"
          >
            <ChevronLeft size={22} />
          </button>
          <div className="mx-16 h-[80vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="h-full w-full object-contain"
            />
            <div className="mt-3 text-center text-sm font-body text-white/60">
              {galleryImages[lightbox].label} - {lightbox + 1} / {galleryImages.length}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 top-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 -translate-y-1/2"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  )
}
