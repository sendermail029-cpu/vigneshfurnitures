'use client'
import { Percent, Gift, CreditCard, Package, Phone, MessageCircle } from 'lucide-react'
import { useInView } from './hooks/useInView'

const offers = [
  {
    icon: CreditCard,
    title: '0% Finance with Bajaj Finserv',
    desc: 'Buy now, pay later with 0% EMI financing through Bajaj Finserv. Easy monthly installments with no hidden charges.',
    color: 'from-blue-600 to-blue-800',
    badge: 'Most Popular',
  },
  {
    icon: Gift,
    title: 'Festival Season Discounts',
    desc: 'Special discounts on Diwali, Ugadi, Sankranti and other festivals. Watch out for our seasonal sale offers!',
    color: 'from-amber-500 to-amber-700',
    badge: 'Limited Time',
  },
  {
    icon: Percent,
    title: 'Affordable Village Pricing',
    desc: 'We offer the best prices in the region — fair pricing for every family in Hanuman Junction and nearby villages.',
    color: 'from-emerald-600 to-emerald-800',
    badge: 'Always On',
  },
  {
    icon: Package,
    title: 'Bulk Purchase Offers',
    desc: 'Special pricing for bulk orders — ideal for offices, hostels, wedding events. Contact us for a quote.',
    color: 'from-purple-600 to-purple-800',
    badge: 'Special Deal',
  },
]

export default function Offers() {
  const { ref, inView } = useInView()

  return (
    <section id="offers" className="section bg-warm-gray" ref={ref}>
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">
            <span className="w-6 h-px bg-gold" />
            Special Deals
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-3 gold-line gold-line-center">
            Offers & Finance
          </h2>
          <p className="font-body text-navy-700 text-base max-w-xl mx-auto mt-6">
            Making quality furniture and electronics affordable for every family in our community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offers.map((offer, i) => (
            <div
              key={offer.title}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              {/* Gradient card */}
              <div className={`bg-gradient-to-br ${offer.color} p-6 h-full flex flex-col`}>
                {/* Badge */}
                <div className="self-start mb-4">
                  <span className="bg-white/20 text-white text-xs font-heading font-bold px-3 py-1 rounded-full">
                    {offer.badge}
                  </span>
                </div>
                {/* Icon */}
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-4">
                  <offer.icon size={22} className="text-white" />
                </div>
                {/* Content */}
                <h3 className="font-heading font-bold text-white text-base mb-2 leading-snug">{offer.title}</h3>
                <p className="font-body text-white/75 text-sm leading-relaxed flex-1">{offer.desc}</p>
                {/* Decorative circle */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full" />
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/5 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className={`mt-10 bg-navy rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.6s' }}
        >
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-1">Ready to furnish your home?</h3>
            <p className="font-body text-white/60 text-sm">Visit our store or call us to get the best deal today.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="tel:9849639368" className="btn-gold">
              <Phone size={15} /> Call Now
            </a>
            <a
              href={`https://wa.me/919849639368?text=${encodeURIComponent('Hello! I want to know about the current offers at Vignesh Furniture\'s & Electronics.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
