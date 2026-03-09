'use client'
import { Phone, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function FloatingButtons() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 200)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className={`transition-all duration-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/919866344294?text=${encodeURIComponent('Hello! I visited your website and want to enquire about products.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn bg-[#25D366] text-white"
        style={{ bottom: '80px', right: '20px', position: 'fixed', zIndex: 50 }}
        aria-label="WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline text-sm">WhatsApp</span>
      </a>

      {/* Call */}
      <a
        href="tel:9849639368"
        className="floating-btn bg-navy text-white animate-pulse-gold"
        style={{ bottom: '20px', right: '20px', position: 'fixed', zIndex: 50 }}
        aria-label="Call Now"
      >
        <Phone size={20} />
        <span className="hidden sm:inline text-sm">Call Now</span>
      </a>
    </div>
  )
}
