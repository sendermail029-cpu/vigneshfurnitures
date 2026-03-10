import Image from 'next/image'
import { MapPin, Phone, Clock, MessageCircle, Facebook, Instagram, Mail, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#080f1e] text-white">
      <div className="container py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-white/10 ring-1 ring-white/10">
                <Image
                  src="/logo.webp"
                  alt="Vignesh Furniture logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-heading text-sm font-bold text-white">VIGNESH</div>
                <div className="font-body text-[10px] uppercase tracking-widest text-gold">Furniture & Electronics</div>
              </div>
            </div>
            <p className="mb-5 font-body text-sm leading-relaxed text-white/50">
              Hanuman Junction&apos;s most trusted furniture and electronics store serving the community for 25+ years.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/VIGNESHFURNITURES?rdid=V5L5jq0I2w2NzMJW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Kma74cF75%2F#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-blue-600"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://www.instagram.com/vign_esh9323?utm_source=qr&igsh=MXRoYXhxNmlvcnNnNA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-pink-600"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://wa.me/919866344294"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-[#25D366]"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-red-600"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '#products', label: 'Our Products' },
                { href: '#brands', label: 'Brands We Carry' },
                { href: '#offers', label: 'Offers & EMI' },
                { href: '#reviews', label: 'Customer Reviews' },
                { href: '#contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 font-body text-sm text-white/50 transition-colors hover:text-gold"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold/50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-gold">Products</h4>
            <ul className="space-y-3">
              {[
                'Beds & Mattresses',
                'Sofas & Chairs',
                'Dining Tables',
                'Wardrobes',
                'Smart TVs',
                'Refrigerators',
                'Washing Machines',
                'Kitchen Appliances',
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="flex items-center gap-2 font-body text-sm text-white/50 transition-colors hover:text-gold"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold/50" />
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-gold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gold" />
                <p className="font-body text-sm leading-relaxed text-white/50">
                  Vijayawada Rd, Hanuman Junction,
                  <br />
                  Bapulapadu, AP 521105
                </p>
              </div>
              <a
                href="tel:9849639368"
                className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-gold"
              >
                <Phone size={15} className="shrink-0 text-gold" /> 98496 39368
              </a>
              <a
                href="tel:9866344294"
                className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-gold"
              >
                <Phone size={15} className="shrink-0 text-gold" /> 98663 44294
              </a>
              <a
                href="mailto:bmanibabu5@gmail.com"
                className="flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-gold"
              >
                <Mail size={15} className="shrink-0 text-gold" /> bmanibabu5@gmail.com
              </a>
              <div className="flex items-start gap-3">
                <Clock size={15} className="mt-0.5 shrink-0 text-gold" />
                <div className="font-body text-sm text-white/50">
                  <div>Mon-Sat: 9 AM - 8 PM</div>
                  <div>Sunday: 10 AM - 6 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-body text-xs text-white/30">
            &copy; {new Date().getFullYear()} Vignesh Furniture&apos;s & Electronics. All rights reserved.
          </p>
           <a
              href="https://www.pandjtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition-colors hover:bg-white/10"
            >
              <span className="font-body text-white/75">Designed by</span>
              <Image
                src="/pj.webp"
                alt="P & J Technologies logo"
                width={22}
                height={22}
                className="h-[22px] w-[22px] object-contain"
              />
              <span className="font-body font-semibold text-white">P &amp; J Technologies</span>
            </a>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6 lg:justify-end">
            <p className="text-center font-body text-xs text-white/20 sm:text-left">
              Serving Hanuman Junction, Bapulapadu & nearby villages since 1999
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  )
}
