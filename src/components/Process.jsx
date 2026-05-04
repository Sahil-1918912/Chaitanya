import { useEffect, useRef, useState } from 'react'
import processImage from '../assets/process.png'

const steps = [
  {
    title: 'Cold Processed',
    desc: 'Our soaps are made using the traditional cold-process method, preserving the natural glycerin that nourishes your skin deeply.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
      </svg>
    ),
  },
  {
    title: 'Zero Chemicals',
    desc: 'Absolutely no SLS, parabens, artificial fragrances, or preservatives. Only pure, natural, skin-loving ingredients from the earth.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
      </svg>
    ),
  },
  {
    title: 'Made with Love',
    desc: 'Each bar is handcrafted at home with personal care and attention. Cured for weeks to achieve the perfect texture and lather.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
      </svg>
    ),
  },
  {
    title: 'Skin Nourishment',
    desc: 'Unlike commercial soaps that strip your skin, our bars retain natural oils and glycerin — leaving skin soft, hydrated, and healthy.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
      </svg>
    ),
  },
]

export default function Process() {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.12 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="process" className="section process-section" ref={ref} style={{ position: 'relative' }}>
      <div className="process-bg-shape" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className={`section-header reveal${vis ? ' visible' : ''}`}>
          <span className="section-label sage">Our Story</span>
          <h2 className="section-title em-sage">
            Crafted by Nature, <em>Perfected by Hand</em>
          </h2>
          <p className="section-sub">
            Every bar begins with a handful of pure, natural ingredients — cold-pressed oils,
            herbs, and botanicals — mixed by hand and cured patiently over weeks.
            No factory lines. No shortcuts. Just honest, nourishing soap.
          </p>
        </div>

        {/* Grid */}
        <div className="process-grid">
          {/* Image */}
          <div className={`process-img-wrap reveal${vis ? ' visible anim-slideLeft d2' : ''}`}>
            <div className="process-img-bg" />
            <img src={processImage} alt="Handcrafting cold-processed soap" className="process-img" />
            <div className="chem-badge">
              <div className="chem-dot anim-float" />
              <span>100% Chemical Free</span>
            </div>
          </div>

          {/* Steps */}
          <div className="process-steps">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`process-step reveal${vis ? ` visible anim-slideRight` : ''}`}
                style={{ animationDelay: `${(i + 2) * 120}ms` }}
              >
                <div className="step-icon">{s.icon}</div>
                <div className="step-text">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
