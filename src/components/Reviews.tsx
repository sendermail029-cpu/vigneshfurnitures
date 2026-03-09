'use client'
import { useInView } from './hooks/useInView'

const reviews = [
  {
    name: 'Sandeep Kumar',
    location: 'Hanuman Junction',
    rating: 5,
    text: 'Best furniture shop in Hanuman Junction! Bought a sofa set and king size bed. Excellent quality, very affordable. Paparao garu gave us great service.',
    product: 'Sofa Set + Bed',
    avatar: 'R',
    color: 'bg-blue-600',
  },
  {
    name: 'P. Suvarchala',
    location: 'Nuvidu',
    rating: 5,
    text: 'Good quality products and reasonable price. Got a Samsung TV with 0% EMI through Bajaj Finserv. Very happy with the purchase!',
    product: 'Samsung Smart TV',
    avatar: 'L',
    color: 'bg-pink-600',
  },
  {
    name: 'K Sudhakar',
    location: 'Meerjapuram',
    rating: 5,
    text: 'Friendly owners and excellent service. We furnished our entire home from here — dining table, beds, wardrobe, and refrigerator. All at the best price.',
    product: 'Complete Home Furniture',
    avatar: 'S',
    color: 'bg-emerald-600',
  },
  {
    name: 'Mahalakshmudu',
    location: 'Nuzvid',
    rating: 5,
    text: 'Bought Peps mattress from here. Very comfortable and great price. Delivery was on time. Highly recommend this store to everyone!',
    product: 'Peps Mattress',
    avatar: 'A',
    color: 'bg-amber-600',
  },
  {
    name: 'Praveen Prakash',
    location: 'Ganavaram',
    rating: 5,
    text: 'Trustworthy shop with 25 years of experience. They gave honest advice without pushing expensive products. Got a great Whirlpool fridge!',
    product: 'Whirlpool Refrigerator',
    avatar: 'V',
    color: 'bg-purple-600',
  },
  {
    name: 'Rama Krishna',
    location: 'Eluru',
    rating: 5,
    text: 'Excellent plastic chairs for our function hall at a bulk price. Mani Babu garu was very helpful and delivered on time. 100% recommended!',
    product: 'Bulk Plastic Chairs',
    avatar: 'P',
    color: 'bg-teal-600',
  },
]

function Stars({ count }: { count: number }) {
  return <div className="stars text-lg">{'★'.repeat(count)}</div>
}

export default function Reviews() {
  const { ref, inView } = useInView()

  return (
    <section id="reviews" className="section bg-white" ref={ref}>
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">
            <span className="w-6 h-px bg-gold" />
            Customer Love
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-3 gold-line gold-line-center">
            What Our Customers Say
          </h2>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="text-5xl font-heading font-extrabold text-navy">4.9</div>
            <div className="text-left">
              <Stars count={5} />
              <div className="font-body text-navy-700 text-sm mt-0.5">Based on 200+ reviews</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`bg-warm-gray rounded-2xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-product transition-all duration-500 hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.05 * i}s`, transitionDuration: '0.6s' }}
            >
              {/* Stars */}
              <Stars count={review.rating} />

              {/* Review text */}
              <p className="font-body text-navy-700 text-sm leading-relaxed mt-3 mb-4">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Product tag */}
              <div className="inline-block bg-gold/10 text-gold text-xs font-heading font-semibold px-2.5 py-1 rounded-full mb-4">
                Purchased: {review.product}
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className={`w-9 h-9 ${review.color} rounded-full flex items-center justify-center text-white font-heading font-bold text-sm shrink-0`}>
                  {review.avatar}
                </div>
                <div>
                  <div className="font-heading font-semibold text-navy text-sm">{review.name}</div>
                  <div className="font-body text-navy-700 text-xs">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google reviews CTA */}
        <div className={`text-center mt-10 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
          <p className="font-body text-navy-700 text-sm mb-3">Happy with your purchase?</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            ⭐ Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  )
}
