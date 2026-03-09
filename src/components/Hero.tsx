'use client'
import { useEffect, useState } from 'react'
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#091224]" />
        <img
          src="/home1.png"
          alt="Vignesh Furniture showroom"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] opacity-40 scale-[1.03] sm:object-[74%_center] lg:object-[78%_center]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(232,200,74,0.16),transparent_24%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091224]/95 via-[#0b1730]/76 to-[#0b1730]/18 sm:to-[#0b1730]/22 lg:to-transparent" />
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
      <div className="relative z-10 container pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-[min(100%,34rem)] rounded-[1.75rem] border border-white/10 bg-navy/28 px-4 py-6 shadow-[0_28px_70px_rgba(9,18,36,0.38)] backdrop-blur-[2px] sm:max-w-[32rem] sm:px-6 sm:py-8 lg:max-w-[36rem] lg:px-8 lg:py-9 xl:max-w-[38rem]">
          {/* Top label */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <span className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold text-[11px] font-heading font-bold px-3 py-1.5 rounded-full tracking-[0.2em] uppercase mb-5 sm:text-xs sm:px-4 sm:py-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              Hanuman Junction's #1 Store
            </span>
          </div>

          {/* Headline */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h1 className="font-heading font-extrabold text-[2.75rem] sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] text-white leading-[0.98] mb-4 sm:mb-5">
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
            <p className="font-body max-w-xl text-white/85 text-base leading-relaxed mb-3 sm:text-lg lg:text-xl sm:mb-4">
              Serving families of Hanuman Junction, Bapulapadu & nearby villages
              with quality products and honest service for over
            </p>
            <p className="font-display italic text-gold text-xl mb-6 sm:text-2xl lg:text-3xl sm:mb-8">25+ Years.</p>
          </div>

          {/* Animated product highlight */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0.45s' }}
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-10">
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
            className={`flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-10 sm:mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
              className="btn-whatsapp justify-center text-base px-7 py-4">
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div
            className={`grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0.65s' }}
          >
            {trustBadges.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="trust-badge">
                <Icon size={18} className="text-gold mb-1" />
                <span className="font-heading font-bold text-base">{label}</span>
                <span className="font-body text-white/65 text-xs">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  )
}
