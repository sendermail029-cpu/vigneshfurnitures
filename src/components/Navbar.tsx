'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '#products', label: 'Products' },
  { href: '#brands', label: 'Brands' },
  { href: '#offers', label: 'Offers' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white/10 ring-1 ring-white/10">
              <Image
                src="/logo.png"
                alt="Vignesh Furniture logo"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="leading-none">
              <div className="font-heading font-bold text-white text-sm tracking-wide">VIGNESH</div>
              <div className="font-body text-gold text-[10px] tracking-[0.15em] uppercase">Furniture & Electronics</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:9849639368" className="flex items-center gap-1.5 text-gold text-sm font-heading font-semibold hover:text-gold-light transition-colors">
              <Phone size={14} /> 98496 39368
            </a>
            <a href="#contact" className="btn-gold text-xs py-2.5 px-5">Visit Store</a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/10">
          <div className="container py-5 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-4 text-white/80 hover:text-gold hover:bg-white/5 rounded-lg font-heading font-medium text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 space-y-2">
              <a href="tel:9849639368" className="btn-gold w-full justify-center">
                <Phone size={15} /> Call: 98496 39368
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
