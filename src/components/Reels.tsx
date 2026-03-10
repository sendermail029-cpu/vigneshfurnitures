'use client'

import Image from 'next/image'
import { Instagram, Play, ArrowUpRight } from 'lucide-react'
import { useInView } from './hooks/useInView'

const reels = [
  {
    title: 'Customer Review Videos',
    subtitle: 'Watch real feedback from customers who visited our store',
    href: 'https://www.instagram.com/reel/DL-GHbhyUeH/?igsh=ZThzZTRwY3NkeGs4',
    tone: 'from-[#fdf2d5] via-[#fff9ec] to-[#ffffff]',
    thumbnail: '/founder.webp',
  },
  {
    title: 'Latest Promotions',
    subtitle: 'See current offers, featured products, and store highlights',
    href: 'https://www.instagram.com/reel/DL6L8zhyolN/?igsh=MTN3NGF5aWRveHJ0dQ%3D%3D',
    tone: 'from-[#e5eefc] via-[#f7faff] to-[#ffffff]',
    thumbnail: '/home1.webp',
  },
  {
    title: 'More Customer & Store Videos',
    subtitle: 'Explore showroom moments, product clips, and customer reactions',
    href: 'https://www.instagram.com/reel/DL2GlNjSkFl/?igsh=MWg3d3hmdXN3ZGpvOQ%3D%3D',
    tone: 'from-[#f7e7ef] via-[#fff7fb] to-[#ffffff]',
    thumbnail: '/cofounder.webp',
  },
]

export default function Reels() {
  const { ref, inView } = useInView()

  return (
    <section id="reels" className="section bg-white" ref={ref}>
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">
            <span className="w-6 h-px bg-gold" />
            Reviews & Services
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-3 gold-line gold-line-center">
            See Our Customer Trust in Action
          </h2>
          <p className="font-body text-navy-700 text-base max-w-2xl mx-auto mt-6">
            Watch Instagram reels featuring customer review videos, random promotions, showroom moments, and product highlights from our store.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reels.map((reel, index) => (
            <a
              key={reel.title}
              href={reel.href}
              target={reel.href === '#' ? undefined : '_blank'}
              rel={reel.href === '#' ? undefined : 'noopener noreferrer'}
              className={`group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-gradient-to-b ${reel.tone} p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.08 * index}s`, transitionDuration: '0.65s' }}
            >
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-navy shadow-sm">
                <ArrowUpRight size={18} />
              </div>

              <div className="flex items-center gap-2 text-[#E1306C]">
                <Instagram size={18} />
                <span className="font-heading text-xs font-bold uppercase tracking-[0.2em]">Video Highlight</span>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-white/60 bg-[#0f172a] p-3 shadow-inner">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[1.2rem] bg-slate-900">
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full border border-white/40 bg-white/15 backdrop-blur-sm" />
                      <div>
                        <div className="font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                          Vignesh Furniture
                        </div>
                        <div className="font-body text-[10px] text-white/70">Customer video</div>
                      </div>
                    </div>
                    <div className="font-body text-xs text-white/75">0:30</div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <Play size={28} className="ml-1 text-white" fill="currentColor" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-heading text-sm font-bold text-white">{reel.title}</div>
                    <div className="mt-1 font-body text-xs leading-relaxed text-white/75">{reel.subtitle}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
