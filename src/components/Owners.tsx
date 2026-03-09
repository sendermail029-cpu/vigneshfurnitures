'use client'
import { useInView } from './hooks/useInView'

const owners = [
  {
    name: 'Boddu Paparao',
    role: 'Founder & Owner',
    image: '/founder.png',
    quote: 'Our mission has always been simple — give every family the best quality at a fair price.',
    desc: 'With over 25 years of experience in the furniture and electronics trade, Paparao has built Vignesh Furniture into the most trusted name in Hanuman Junction.',
  },
  {
    name: 'Boddu Mani Babu',
    role: 'Co-Owner & Operations',
    image: '/cofounder.png',
    quote: 'Every customer who walks in is like family to us. We treat them with honesty and respect.',
    desc: 'Mani Babu manages day-to-day operations and customer relations, ensuring every family leaves the store satisfied.',
  },
]

export default function Owners() {
  const { ref, inView } = useInView()

  return (
    <section className="section bg-warm-gray" ref={ref}>
      <div className="container">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">
            <span className="w-6 h-px bg-gold" />
            Our Story
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-3 gold-line gold-line-center">
            Meet the Owners
          </h2>
          <p className="font-body text-navy-700 text-base max-w-xl mx-auto mt-6">
            Serving the community of Hanuman Junction with honesty, quality products, and customer trust for more than two decades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {owners.map((owner, i) => (
            <div
              key={owner.name}
              className={`group bg-white rounded-2xl overflow-hidden shadow-product hover:shadow-luxury transition-all duration-500 hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.1 + i * 0.15}s`, transitionDuration: '0.7s' }}
            >
              <div className="flex gap-0">
                {/* Image */}
                <div className="relative w-36 shrink-0 overflow-hidden">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ minHeight: '220px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="inline-block bg-gold/10 text-gold text-xs font-heading font-bold px-3 py-1 rounded-full tracking-wide mb-3">
                      {owner.role}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-navy mb-2">{owner.name}</h3>
                    <p className="font-body text-navy-700 text-sm leading-relaxed mb-4">{owner.desc}</p>
                  </div>
                  {/* Quote */}
                  <div className="border-l-3 border-gold pl-4">
                    <p className="font-display italic text-navy text-sm leading-relaxed">
                      &ldquo;{owner.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div
          className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          {[
            { value: '25+', label: 'Years in Business' },
            { value: '1000+', label: 'Happy Families' },
            { value: '500+', label: 'Products In Stock' },
            { value: '0%', label: 'EMI Available' },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white rounded-xl p-5 shadow-sm">
              <div className="font-heading font-extrabold text-3xl text-gold mb-1">{stat.value}</div>
              <div className="font-body text-navy-700 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
