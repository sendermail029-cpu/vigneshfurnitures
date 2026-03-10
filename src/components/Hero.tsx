'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Phone, MessageCircle, ShoppingBag, ChevronDown, Star, Shield, Clock } from 'lucide-react'
import { getGeneralWhatsApp } from '@/data/products'

const highlights = ['Premium Beds', 'Luxury Sofas', 'Smart TVs', 'Refrigerators', 'Dining Sets', 'Washing Machines']

const trustBadges = [
  { icon: Clock, label: '25+ Years', sub: 'Experience' },
  { icon: Star, label: '1000+', sub: 'Happy Families' },
  { icon: Shield, label: '100%', sub: 'Trusted Store' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const t = setInterval(() => setCurrent((c) => (c + 1) % highlights.length), 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden sm:min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#091224]" />
        <Image
          src="/home1.webp"
          alt="Vignesh Furniture showroom"
          fill
          priority
          quality={72}
          sizes="100vw"
          className="absolute inset-0 h-full w-full scale-110 object-cover object-[74%_center] opacity-28 sm:scale-[1.03] sm:object-[74%_center] sm:opacity-40 lg:object-[78%_center]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(232,200,74,0.16),transparent_24%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091224]/98 via-[#0b1730]/90 to-[#0b1730]/58 sm:from-[#091224]/95 sm:via-[#0b1730]/76 sm:to-[#0b1730]/22 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091224]/84 via-transparent to-[#091224]/34" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,1) 60px,rgba(255,255,255,1) 61px),
              repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,1) 60px,rgba(255,255,255,1) 61px)`,
          }}
        />
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-20 pb-8 sm:pt-28 sm:pb-16">
        <div className="max-w-[min(100%,22rem)] rounded-[1.5rem] border border-white/10 bg-navy/28 px-4 py-5 shadow-[0_28px_70px_rgba(9,18,36,0.38)] backdrop-blur-[2px] sm:max-w-[32rem] sm:rounded-[1.75rem] sm:px-6 sm:py-8 lg:max-w-[36rem] lg:px-8 lg:py-9 xl:max-w-[38rem]">
          {/* Top label */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/15 px-3 py-1.5 text-[10px] font-heading font-bold uppercase tracking-[0.18em] text-gold sm:mb-5 sm:text-xs sm:px-4 sm:py-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              Hanuman Junction's #1 Store
            </span>
          </div>

          {/* Headline */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h1 className="mb-4 font-heading text-[2.3rem] font-extrabold leading-[0.94] text-white sm:mb-5 sm:text-5xl sm:leading-[0.98] lg:text-[4.25rem] xl:text-[4.75rem]">
              Hanuman Junction's
              <br />
              <span className="text-gold-gradient">Most Trusted</span>
              <br />
              Furniture & Electronics
            </h1>
          </div>

          {/* Subtext */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.35s' }}
          >
            <p className="mb-3 max-w-xl font-body text-[0.95rem] leading-relaxed text-white/85 sm:mb-4 sm:text-lg lg:text-xl">
              Serving families of Hanuman Junction, Bapulapadu & nearby villages
              with quality products and honest service for over
            </p>
            <p className="mb-5 font-display text-xl italic text-gold sm:mb-8 sm:text-2xl lg:text-3xl">25+ Years.</p>
          </div>

          {/* Animated product highlight */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0.45s' }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-2 sm:mb-10 sm:gap-3">
              <span className="text-white/65 font-body text-sm">Shop now:</span>
              <div className="overflow-hidden h-7">
                <div
                  key={current}
                  className="animate-fade-up font-heading font-bold text-gold text-sm tracking-wide"
                >
                  {highlights[current]}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mb-8 flex flex-col gap-3 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} sm:mb-12 sm:flex-row sm:flex-wrap`}
            style={{ transitionDelay: '0.55s' }}
          >
            <a href="#products" className="btn-gold justify-center text-base px-7 py-4">
              <ShoppingBag size={18} />
              View Products
            </a>
            <a href="tel:9849639368" className="btn-outline justify-center text-base px-7 py-4">
              <Phone size={18} />
              Call Now
            </a>
            <a href={getGeneralWhatsApp()} target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp hidden justify-center px-7 py-4 text-base sm:inline-flex">
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div
            className={`grid grid-cols-3 gap-2 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} sm:flex sm:flex-wrap sm:gap-3`}
            style={{ transitionDelay: '0.65s' }}
          >
            {trustBadges.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="trust-badge px-3 py-2 sm:px-5 sm:py-3">
                <Icon size={16} className="mb-1 text-gold sm:h-[18px] sm:w-[18px]" />
                <span className="font-heading text-sm font-bold sm:text-base">{label}</span>
                <span className="font-body text-white/65 text-xs">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 sm:flex">
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  )
}
