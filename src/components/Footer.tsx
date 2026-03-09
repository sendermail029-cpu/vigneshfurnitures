import Image from 'next/image'
import { MapPin, Phone, Clock, MessageCircle, Facebook, Instagram, Mail, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#080f1e] text-white">
      <div className="container py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white/10 ring-1 ring-white/10">
                <Image
                  src="/logo.png"
                  alt="Vignesh Furniture logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-sm">VIGNESH</div>
                <div className="font-body text-gold text-[10px] tracking-widest uppercase">Furniture & Electronics</div>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-5">
              Hanuman Junction's most trusted furniture and electronics store serving the community for 25+ years.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/VIGNESHFURNITURES?rdid=V5L5jq0I2w2NzMJW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Kma74cF75%2F#"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={15} />
              </a>
              <a href="https://www.instagram.com/vign_esh9323?utm_source=qr&igsh=MXRoYXhxNmlvcnNnNA%3D%3D"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={15} />
              </a>
              <a href="https://wa.me/919866344294" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors">
                <MessageCircle size={15} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-gold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '#products', label: 'Our Products' },
                { href: '#brands', label: 'Brands We Carry' },
                { href: '#offers', label: 'Offers & EMI' },
                { href: '#reviews', label: 'Customer Reviews' },
                { href: '#contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-body text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold/50 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-gold mb-5">Products</h4>
            <ul className="space-y-3">
              {['Beds & Mattresses', 'Sofas & Chairs', 'Dining Tables', 'Wardrobes', 'Smart TVs', 'Refrigerators', 'Washing Machines', 'Kitchen Appliances'].map((p) => (
                <li key={p}>
                  <a href="#products" className="font-body text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold/50 rounded-full" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-gold mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  Vijayawada Rd, Hanuman Junction,<br />Bapulapadu, AP 521105
                </p>
              </div>
              <a href="tel:9849639368" className="flex items-center gap-3 text-sm text-white/50 hover:text-gold transition-colors">
                <Phone size={15} className="text-gold shrink-0" /> 98496 39368
              </a>
              <a href="tel:9866344294" className="flex items-center gap-3 text-sm text-white/50 hover:text-gold transition-colors">
                <Phone size={15} className="text-gold shrink-0" /> 98663 44294
              </a>
              <a href="mailto:bmanibabu5@gmail.com" className="flex items-center gap-3 text-sm text-white/50 hover:text-gold transition-colors">
                <Mail size={15} className="text-gold shrink-0" /> bmanibabu5@gmail.com
              </a>
              <div className="flex items-start gap-3">
                <Clock size={15} className="text-gold mt-0.5 shrink-0" />
                <div className="font-body text-sm text-white/50">
                  <div>Mon–Sat: 9 AM – 8 PM</div>
                  <div>Sunday: 10 AM – 6 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30">
            © {new Date().getFullYear()} Vignesh Furniture's & Electronics. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/20">
            Serving Hanuman Junction, Bapulapadu & nearby villages since 1999
          </p>
        </div>
      </div>
    </footer>
  )
}
