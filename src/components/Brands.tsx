'use client'
import { useInView } from './hooks/useInView'

const brands = [
  { name: 'LG', color: '#A50034', surface: 'from-[#fff0f5] via-white to-[#fff7fa]', accent: '#f7d4e0', textClass: 'tracking-[0.18em]', textStyle: { fontWeight: 900 } },
  { name: 'Samsung', color: '#1428A0', surface: 'from-[#eef3ff] via-white to-[#f8faff]', accent: '#d6e1ff', textClass: 'italic uppercase tracking-[0.08em]', textStyle: { fontWeight: 800 } },
  { name: 'Whirlpool', color: '#003087', surface: 'from-[#eef6ff] via-white to-[#f7fbff]', accent: '#d7e7ff', textClass: 'tracking-[0.04em]', textStyle: { fontWeight: 800 } },
  { name: 'Voltas', color: '#E31837', surface: 'from-[#fff1f2] via-white to-[#fff8f8]', accent: '#ffd8dd', textClass: 'uppercase tracking-[0.12em]', textStyle: { fontWeight: 800 } },
  { name: 'Nilkamal', color: '#0066CC', surface: 'from-[#eef7ff] via-white to-[#f8fbff]', accent: '#d7eaff', textClass: 'tracking-[0.05em]', textStyle: { fontWeight: 800 } },
  { name: 'Sleepwell', color: '#005EB8', surface: 'from-[#eef6ff] via-white to-[#f8fbff]', accent: '#d7e8ff', textClass: 'normal-case tracking-[0.01em]', textStyle: { fontWeight: 700 } },
  { name: 'Kurlon', color: '#D62828', surface: 'from-[#fff3f2] via-white to-[#fff9f8]', accent: '#ffd9d6', textClass: 'tracking-[0.04em]', textStyle: { fontWeight: 800 } },
  { name: 'Peps', color: '#15803D', surface: 'from-[#effcf3] via-white to-[#f8fffa]', accent: '#d8f5e1', textClass: 'uppercase tracking-[0.14em]', textStyle: { fontWeight: 800 } },
  { name: 'Bajaj', color: '#FF5F1F', surface: 'from-[#fff4ed] via-white to-[#fffaf7]', accent: '#ffe0d1', textClass: 'uppercase tracking-[0.12em]', textStyle: { fontWeight: 800 } },
  { name: 'Haier', color: '#005BAC', surface: 'from-[#eef7ff] via-white to-[#f7fbff]', accent: '#d8eaff', textClass: 'tracking-[0.06em]', textStyle: { fontWeight: 800 } },
  { name: 'BPL', color: '#7B2CBF', surface: 'from-[#f7f0ff] via-white to-[#fcf8ff]', accent: '#ead8ff', textClass: 'uppercase tracking-[0.16em]', textStyle: { fontWeight: 900 } },
  { name: 'Preethi', color: '#C1121F', surface: 'from-[#fff1f2] via-white to-[#fff8f8]', accent: '#ffd9dc', textClass: 'tracking-[0.05em]', textStyle: { fontWeight: 800 } },
  { name: 'Crompton', color: '#0077B6', surface: 'from-[#eef8ff] via-white to-[#f7fcff]', accent: '#d8eeff', textClass: 'tracking-[0.08em]', textStyle: { fontWeight: 800 } },
  { name: 'V-Guard', color: '#F59E0B', surface: 'from-[#fff8eb] via-white to-[#fffdf7]', accent: '#ffe9bf', textClass: 'uppercase tracking-[0.12em]', textStyle: { fontWeight: 800 } },
  { name: 'Goldmedal', color: '#C98A00', surface: 'from-[#fff8ea] via-white to-[#fffdf7]', accent: '#ffe8ba', textClass: 'tracking-[0.03em]', textStyle: { fontWeight: 800 } },
  { name: 'Bediya', color: '#8D6E63', surface: 'from-[#f7f2f0] via-white to-[#fcfaf9]', accent: '#eadfd8', textClass: 'tracking-[0.05em]', textStyle: { fontWeight: 800 } },
  { name: 'Kenstar', color: '#6D28D9', surface: 'from-[#f5f0ff] via-white to-[#fbf9ff]', accent: '#e6d8ff', textClass: 'uppercase tracking-[0.12em]', textStyle: { fontWeight: 800 } },
  { name: 'Butterfly', color: '#E11D48', surface: 'from-[#fff1f5] via-white to-[#fff8fa]', accent: '#ffd9e2', textClass: 'tracking-[0.04em]', textStyle: { fontWeight: 800 } },
  { name: 'Prestige', color: '#B91C1C', surface: 'from-[#fff2f2] via-white to-[#fff8f8]', accent: '#ffd7d7', textClass: 'uppercase tracking-[0.12em]', textStyle: { fontWeight: 900 } },
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
                className={`group relative flex min-h-[96px] min-w-[170px] items-center justify-center overflow-hidden rounded-[1.7rem] border border-[#efe4ca] bg-gradient-to-br px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)] sm:min-w-[220px] ${brand.surface}`}
              >
                <div
                  className="absolute left-0 top-0 h-1.5 w-full opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: brand.color }}
                />
                <div
                  className="absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: brand.accent }}
                />
                <span
                  className={`relative text-center font-heading text-lg transition-transform duration-300 group-hover:scale-105 sm:text-[2rem] ${brand.textClass}`}
                  style={{ color: brand.color, ...brand.textStyle }}
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
