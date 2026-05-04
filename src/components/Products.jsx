import { useEffect, useRef, useState } from 'react'
import soapSandalwood from '../assets/soap-sandalwood.png'
import soapAloevera from '../assets/soap-aloevera.png'
import soapManjistha from '../assets/soap-manjistha.png'

const products = [
  {
    id: 'sandalwood',
    name: 'Sandalwood',
    tagline: 'Warm & Grounding',
    image: soapSandalwood,
    color: '#D4A373',
    ingredients: [
      'Pure Sandalwood Powder',
      'Cold-Pressed Coconut Oil',
      'Olive Oil',
      'Shea Butter',
      'Sandalwood Essential Oil',
      'Raw Honey',
    ],
    benefit: 'Deeply moisturizing, anti-aging, and calming. Gives skin a natural warm glow.',
  },
  {
    id: 'aloevera',
    name: 'Aloe Vera',
    tagline: 'Cool & Soothing',
    image: soapAloevera,
    color: '#7D8E7B',
    ingredients: [
      'Fresh Aloe Vera Gel',
      'Cold-Pressed Coconut Oil',
      'Castor Oil',
      'Vitamin E Oil',
      'Tea Tree Essential Oil',
      'Green Tea Extract',
    ],
    benefit: 'Healing, hydrating, and cooling. Perfect for sensitive and sun-exposed skin.',
  },
  {
    id: 'manjistha',
    name: 'Manjistha',
    tagline: 'Radiant & Purifying',
    image: soapManjistha,
    color: '#C46B5A',
    ingredients: [
      'Manjistha Root Powder',
      'Cold-Pressed Coconut Oil',
      'Almond Oil',
      'Rose Clay',
      'Rose Essential Oil',
      'Turmeric Extract',
    ],
    benefit: 'Blood-purifying Ayurvedic herb that brightens skin, reduces blemishes, and evens tone.',
  },
]

function ProductCard({ product, index, visible }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`group relative ${visible ? 'animate-scale-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-soap-white shadow-md hover:shadow-2xl hover:shadow-soap-text/10 transition-all duration-500 cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={`Chaitanya ${product.name} handmade cold-processed soap`}
            className={`w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'scale-110 brightness-[0.3]' : 'scale-100'
            }`}
          />

          {/* Hover Overlay — Ingredients */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-500 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-white/70 mb-3">
              Natural Ingredients
            </span>
            <ul className="space-y-1.5 text-center">
              {product.ingredients.map((ing, i) => (
                <li
                  key={ing}
                  className="text-white text-sm font-light transition-all duration-300"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? 'translateY(0)' : 'translateY(10px)',
                  }}
                >
                  {ing}
                </li>
              ))}
            </ul>
            <div
              className="mt-4 w-12 h-px transition-all duration-500"
              style={{
                backgroundColor: product.color,
                width: hovered ? '3rem' : '0',
              }}
            />
            <p
              className="mt-3 text-white/80 text-xs text-center max-w-[200px] transition-all duration-500"
              style={{
                transitionDelay: '400ms',
                opacity: hovered ? 1 : 0,
              }}
            >
              {product.benefit}
            </p>
          </div>
        </div>

        {/* Card Info */}
        <div className="p-5 text-center">
          <h3 className="font-serif text-xl text-soap-text">{product.name}</h3>
          <p className="text-soap-text-light text-sm mt-1">{product.tagline}</p>
          <div
            className="mx-auto mt-3 h-0.5 rounded-full transition-all duration-500"
            style={{
              backgroundColor: product.color,
              width: hovered ? '3rem' : '1.5rem',
            }}
          />
        </div>
      </div>

      {/* Hover hint for mobile */}
      <p className="text-center text-xs text-soap-text-light/50 mt-3 md:hidden">
        Tap to see ingredients
      </p>
    </div>
  )
}

export default function Products() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-soap-clay mb-4 block">
            Our Collection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-soap-text mb-6">
            Nature in Every{' '}
            <span className="italic text-soap-clay">Bar</span>
          </h2>
          <p className="text-soap-text-light leading-relaxed">
            Three handcrafted varieties, each inspired by ancient Ayurvedic wisdom.
            Hover over each soap to discover the pure, natural ingredients inside.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className={`text-center mt-16 ${visible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-soap-border bg-soap-white/50">
            <svg className="w-5 h-5 text-soap-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
            </svg>
            <span className="text-sm text-soap-text-light">
              Safe for all skin types · Dermatologically gentle · Cruelty free
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
