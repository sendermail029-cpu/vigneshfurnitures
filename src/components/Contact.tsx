'use client'
import { useState } from 'react'
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { useInView } from './hooks/useInView'

const hours = [
  { day: 'Monday - Saturday', time: '9:00 AM - 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM - 6:00 PM' },
]

const mapLink =
  "https://www.google.com/maps/place/Vignesh+Furniture's+%26+Electronics/@16.6346169,80.9654663,21z/data=!4m6!3m5!1s0x3a360de825218295:0x720ab54351f9f903!8m2!3d16.6345733!4d80.9656058!16s%2Fg%2F11bvt4g16y?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
const mapEmbed = 'https://maps.google.com/maps?q=16.63458721321878,80.96560135224603&z=18&output=embed'

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hello! I'm contacting from your website.\n\nName: ${form.name}\nPhone: ${form.phone}\n\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/919866344294?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="section relative overflow-hidden bg-[linear-gradient(180deg,#f4f7fb_0%,#eaf0f8_55%,#dfe7f2_100%)]"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/60 to-transparent" />
      <div className="absolute -top-8 right-[-2rem] h-44 w-44 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute bottom-0 left-[-2rem] h-52 w-52 rounded-full bg-blue-300/30 blur-3xl" />

      <div className="container relative">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label text-gold">
            <span className="w-6 h-px bg-gold" />
            Find Us
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-3 mt-1">
            Visit Our <span className="text-gold-gradient">Store</span>
          </h2>
          <p className="font-body text-navy-700 text-base mt-4">
            Come visit us at Hanuman Junction. We'd love to show you our collection in person.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div
            className={`space-y-5 transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="bg-white/90 border border-[#dbe4f0] rounded-2xl p-6 space-y-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/15 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-navy text-sm mb-1">Store Address</h4>
                  <p className="font-body text-navy-700 text-sm leading-relaxed">
                    Vijayawada Rd, Hanuman Junction,
                    <br />
                    Bapulapadu, Andhra Pradesh 521105
                  </p>
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gold text-xs font-heading font-semibold mt-2 hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/15 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-navy text-sm mb-1">Phone Numbers</h4>
                  <a href="tel:9849639368" className="block font-body text-navy-700 hover:text-gold text-sm transition-colors">
                    98496 39368
                  </a>
                  <a href="tel:9866344294" className="block font-body text-navy-700 hover:text-gold text-sm transition-colors">
                    98663 44294
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/15 rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-navy text-sm mb-1">Store Hours</h4>
                  {hours.map((h) => (
                    <div key={h.day} className="font-body text-navy-700 text-sm">
                      <span className="text-navy">{h.day}:</span> {h.time}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a href="tel:9849639368" className="btn-gold justify-center">
                <Phone size={16} /> Call Us
              </a>
              <a
                href={`https://wa.me/919866344294?text=${encodeURIComponent('Hello! I want to visit your store. Can you confirm the timings?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden h-52 border border-[#dbe4f0] shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <iframe
                src={mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Vignesh Furniture Store Location"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="bg-[#0f1b33] border border-white/10 rounded-2xl p-6 lg:p-8 shadow-[0_24px_55px_rgba(15,23,42,0.16)]">
              <h3 className="font-heading font-bold text-xl text-white mb-2">Send a Message</h3>
              <p className="font-body text-white/55 text-sm mb-6">We'll reply on WhatsApp within minutes.</p>

              {sent ? (
                <div className="flex items-center gap-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-5">
                  <CheckCircle size={20} className="text-emerald-400 shrink-0" />
                  <p className="font-body text-emerald-300 text-sm">Message opened in WhatsApp! We'll respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-heading font-semibold text-white/60 text-xs uppercase tracking-wider mb-2 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/30 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-heading font-semibold text-white/60 text-xs uppercase tracking-wider mb-2 block">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Your phone number"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/30 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-heading font-semibold text-white/60 text-xs uppercase tracking-wider mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what product you're looking for..."
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/30 text-sm font-body focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full justify-center text-base py-4">
                    <Send size={16} />
                    Send via WhatsApp
                  </button>
                  <p className="text-xs text-white/30 font-body text-center">Your message will open in WhatsApp</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
