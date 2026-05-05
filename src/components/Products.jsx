import { useEffect, useRef, useState } from 'react'
import soapSandalwood from '../assets/sandalwood.jpeg'
import soapAloevera   from '../assets/aloevera.jpeg'
import soapManjistha  from '../assets/manjishtha.jpeg'
import soapMoringa  from '../assets/moringa.jpeg'

const products = [
  {
    id: 'sandalwood',
    name: 'Sandalwood',
    tagline: 'Warm & Grounding',
    image: soapSandalwood,
    color: '#C8845A',
    ingredients: ['Pure Sandalwood Powder', 'Cold-Pressed Coconut Oil', 'Olive Oil', 'Shea Butter', 'Sandalwood Essential Oil', 'Raw Honey'],
    benefit: 'Deeply moisturizing, anti-aging, and calming. Gives skin a natural warm glow.',
  },
  {
    id: 'aloevera',
    name: 'Aloe Vera',
    tagline: 'Cool & Soothing',
    image: soapAloevera,
    color: '#7D8E7B',
    ingredients: ['Fresh Aloe Vera Gel', 'Cold-Pressed Coconut Oil', 'Castor Oil', 'Vitamin E Oil', 'Tea Tree Essential Oil', 'Green Tea Extract'],
    benefit: 'Healing, hydrating, and cooling. Perfect for sensitive and sun-exposed skin.',
  },
  {
    id: 'manjistha',
    name: 'Manjistha',
    tagline: 'Radiant & Purifying',
    image: soapManjistha,
    color: '#C46B5A',
    ingredients: ['Manjistha Root Powder', 'Cold-Pressed Coconut Oil', 'Almond Oil', 'Rose Clay', 'Rose Essential Oil', 'Turmeric Extract'],
    benefit: 'Powerful detoxifier and skin brightener. Promotes a clear, radiant complexion.',
  },
  {
    id: 'moringa',
    name: 'Moringa',
    tagline: 'Nourishing & Revitalizing',
    image: soapMoringa,
    color: '#C46B5A',
    ingredients: ['Moringa Leaf Powder', 'Cold-Pressed Coconut Oil', 'Almond Oil', 'Green Clay', 'Lemongrass Essential Oil', 'Turmeric Extract'],
    benefit: 'Nutrient-rich superfood that detoxifies, nourishes, and revitalizes skin for a healthy glow.',
  },
  {
    id: 'lemongrass',
    name: 'Lemongrass',
    tagline: 'Radiant & Detoxifying',
    image: soapMoringa,
    color: '#C46B5A',
    ingredients: ['Lemongrass Powder', 'Cold-Pressed Coconut Oil', 'Almond Oil', 'Green Clay', 'Lemongrass Essential Oil', 'Turmeric Extract'],
    benefit: 'Citrusy and refreshing, lemongrass detoxifies and tones skin while imparting a radiant glow.',
  },
  {
    id: 'coffee',
    name: 'Coffee',
    tagline: 'Exfoliating & Energizing',
    image: soapManjistha,
    color: '#C46B5A',
    ingredients: ['Coffee Powder', 'Cold-Pressed Coconut Oil', 'Almond Oil', 'Green Clay', 'Lemongrass Essential Oil', 'Turmeric Extract'],
    benefit: 'Invigorating and exfoliating, coffee grounds slough away dead skin cells while caffeine energizes and tightens skin for a refreshed complexion.',
  },
]

function ProductCard({ product, index, vis }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`product-card reveal${vis ? ` visible anim-scaleIn` : ''}`}
      style={{ animationDelay: `${index * 180}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-img-wrap">
        <img src={product.image} alt={`Chaitanya ${product.name} soap`} className="product-img" />
        <div className="product-overlay">
          <p className="overlay-label">Natural Ingredients</p>
          <ul className="overlay-ingredients">
            {product.ingredients.map(ing => (
              <li key={ing}
                style={{
                  opacity: hovered ? 1 : 0,
                  transform: hovered ? 'translateY(0)' : 'translateY(8px)',
                  transition: `opacity 0.35s ease, transform 0.35s ease`,
                }}
              >{ing}</li>
            ))}
          </ul>
          <div
            className="overlay-divider"
            style={{ backgroundColor: product.color, transition: 'width 0.4s', width: hovered ? '36px' : '0' }}
          />
          <p className="overlay-benefit"
            style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.4s 0.3s' }}
          >{product.benefit}</p>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.tagline}</p>
        <div className="product-bar" style={{ backgroundColor: product.color }} />
      </div>
    </div>
  )
}

export default function Products() {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="products" className="section products-section" ref={ref}>
      <div className="container">
        <div className={`section-header reveal${vis ? ' visible anim-fadeInUp' : ''}`}>
          <span className="section-label clay">Our Collection</span>
          <h2 className="section-title em-clay">Nature in Every <em>Bar</em></h2>
          <p className="section-sub">
            Three handcrafted varieties, each inspired by ancient Ayurvedic wisdom.
            Hover over each soap to discover the pure, natural ingredients inside.
          </p>
        </div>

        <div className="products-grid">
          {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} vis={vis} />)}
        </div>

        <div className={`products-footer-note reveal${vis ? ' visible anim-fadeInUp d5' : ''}`}>
          <div className="trust-pill">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
            </svg>
            Safe for all skin types · Dermatologically gentle · Cruelty free
          </div>
        </div>
      </div>
    </section>
  )
}
