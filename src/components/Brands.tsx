'use client'
import { useInView } from './hooks/useInView'

const brands = [
  { name: 'LG', color: '#A50034' },
  { name: 'Samsung', color: '#1428A0' },
  { name: 'Whirlpool', color: '#003087' },
  { name: 'Sansui', color: '#E31837' },
  { name: 'Videocon', color: '#0066CC' },
  { name: 'Kelvinator', color: '#005EB8' },
  { name: 'Kurlon', color: '#D62828' },
  { name: 'Peps', color: '#2D6A4F' },
  { name: 'Bajaj', color: '#003087' },
]

const marqueeBrands = [...brands, ...brands]

export default function Brands() {
  const { ref, inView } = useInView()

  return (
    <section
      id="brands"
      className="section relative overflow-hidden bg-[linear-gradient(180deg,#f5efe2_0%,#fffaf1_58%,#ffffff_100%)]"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#091224]/10 to-transparent" />
      <div className="absolute -top-16 right-[-4rem] h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute bottom-0 left-[-3rem] h-40 w-40 rounded-full bg-[#b9d2ff]/35 blur-3xl" />

      <div className="container relative">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label text-gold">
            <span className="w-6 h-px bg-gold" />
            Authorised Dealer
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-3 mt-1">
            Brands We <span className="text-gold-gradient">Carry</span>
          </h2>
          <p className="font-body text-navy-700 text-base mt-4 max-w-2xl mx-auto">
            We are authorised dealers for India's most trusted home appliance and furniture brands.
          </p>
        </div>

        <div
          className={`relative overflow-hidden rounded-[2rem] border border-[#eadfc4] bg-white/80 px-4 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:px-6 sm:py-6 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } transition-all duration-700`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fffaf1] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fffaf1] to-transparent sm:w-24" />

          <div className="flex w-max gap-3 animate-slide-left sm:gap-4">
            {marqueeBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex min-h-[92px] min-w-[170px] items-center justify-center rounded-2xl border border-[#efe4ca] bg-[linear-gradient(180deg,#ffffff_0%,#fbf5e8_100%)] px-6 py-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)] sm:min-w-[220px]"
              >
                <span
                  className="text-center font-heading text-lg font-extrabold tracking-[0.03em] transition-colors sm:text-[2rem]"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
