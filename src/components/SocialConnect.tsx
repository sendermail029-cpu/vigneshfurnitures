'use client'

import { Instagram, MessageCircle, Facebook, Youtube, ArrowUpRight } from 'lucide-react'
import { useInView } from './hooks/useInView'

const secondaryLinks = [
  {
    name: 'Facebook',
    action: 'See updates and customer stories',
    href: 'https://www.facebook.com/VIGNESHFURNITURES?rdid=V5L5jq0I2w2NzMJW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Kma74cF75%2F#',
    icon: Facebook,
    color: 'text-[#1877F2]',
    border: 'border-[#d7e5fb]',
    bg: 'bg-[#eef5ff]',
    cta: 'Follow',
  },
  {
    name: 'YouTube',
    action: 'Watch reviews and product videos',
    href: 'https://www.youtube.com/',
    icon: Youtube,
    color: 'text-[#FF0000]',
    border: 'border-[#f5d7d7]',
    bg: 'bg-[#fff1f1]',
    cta: 'Subscribe',
  },
]

export default function SocialConnect() {
  const { ref, inView } = useInView()

  return (
    <section
      id="social-connect"
      className="section relative overflow-hidden bg-[linear-gradient(180deg,#fffef9_0%,#f7f1e3_55%,#fffdfa_100%)]"
      ref={ref}
    >
      <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-200/25 blur-3xl" />

      <div className="container relative">
        <div
          className={`mx-auto mb-10 max-w-3xl text-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">
            <span className="w-6 h-px bg-gold" />
            Stay Connected
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-3 gold-line gold-line-center">
            Join Our Updates in One Tap
          </h2>
          <p className="font-body text-navy-700 text-base mt-6">
            For new arrivals, latest offers, customer videos, and service updates, join our WhatsApp group first and
            then follow us on Instagram.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <a
            href="https://wa.me/919866344294"
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-[2rem] border border-[#cfead9] bg-[linear-gradient(135deg,#1fa855_0%,#25D366_55%,#53df8b_100%)] p-6 text-white shadow-[0_24px_60px_rgba(37,211,102,0.24)] transition-all duration-700 hover:-translate-y-1 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <MessageCircle size={28} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <div className="mt-8 max-w-lg">
              <div className="font-heading text-3xl font-extrabold leading-tight">Join Our WhatsApp Group</div>
              <p className="mt-3 font-body text-base leading-relaxed text-white/90">
                Get instant updates about offers, new stock, festival deals, and useful customer service information.
              </p>
            </div>
            <div className="mt-6 inline-flex rounded-full bg-white px-5 py-3 font-heading text-sm font-bold uppercase tracking-[0.18em] text-[#128C4A]">
              Join Now
            </div>
          </a>

          <a
            href="https://www.instagram.com/vign_esh9323?utm_source=qr&igsh=MXRoYXhxNmlvcnNnNA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-[2rem] border border-[#f4d4e0] bg-[linear-gradient(180deg,#fff1f7_0%,#ffffff_100%)] p-6 shadow-[0_18px_46px_rgba(15,23,42,0.08)] transition-all duration-700 hover:-translate-y-1 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.25s' }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#E1306C] shadow-sm">
                <Instagram size={28} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy shadow-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <div className="mt-8">
              <div className="font-heading text-2xl font-bold text-navy">Follow on Instagram</div>
              <p className="mt-3 font-body text-sm leading-relaxed text-navy-700">
                See real product videos, customer reviews, showroom highlights, and daily updates from our store.
              </p>
            </div>
            <div className="mt-6 inline-flex rounded-full bg-[#E1306C] px-5 py-3 font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
              Follow Now
            </div>
          </a>
        </div>

        <div
          className={`mt-5 rounded-[2rem] border border-[#eadfc4] bg-white/80 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.07)] backdrop-blur-sm transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.35s' }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-heading text-xl font-bold text-navy">Also follow us here</h3>
              <p className="mt-1 font-body text-sm text-navy-700">
                Keep Facebook and YouTube as simple secondary options for customers who want more updates.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {secondaryLinks.map(({ name, action, href, icon: Icon, color, border, bg, cta }) => (
                <a
                  key={name}
                  href={href}
                  target={href === '#' ? undefined : '_blank'}
                  rel={href === '#' ? undefined : 'noopener noreferrer'}
                  className={`flex min-w-[220px] items-center gap-4 rounded-2xl border ${border} bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(15,23,42,0.08)]`}
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${bg} ${color}`}>
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-heading text-base font-bold text-navy">{name}</div>
                    <div className="font-body text-xs text-navy-700">{action}</div>
                  </div>
                  <div className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-navy">{cta}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
