import heroImage from '../assets/hero-soaps.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-blob-1" />
      <div className="hero-blob-2" />

      <div className="container">
        <div className="hero-grid">
          {/* ── Copy ── */}
          <div className="hero-copy">
            <div className="hero-badge anim-fadeIn">
              <div className="hero-badge-dot anim-float" />
              <span>100% Natural · Handmade</span>
            </div>

            <h1 className="hero-h1 anim-fadeInUp d1">
              Pure &amp; <em>Nourished</em>
            </h1>

            <p className="hero-sub anim-fadeInUp d2">
              Cold-processed soaps crafted by hand with nothing but nature's finest
              ingredients. Zero chemicals, pure skin nourishment.
            </p>

            <div className="hero-btns anim-fadeInUp d3">
              <a href="#products" className="btn-primary">Explore Soaps</a>
              <a href="#process"  className="btn-outline">Our Story</a>
            </div>

            <div className="hero-trust anim-fadeInUp d4">
              {['Chemical Free', 'Cold Processed', 'Handmade'].map(t => (
                <div className="hero-trust-item" key={t}>
                  <svg className="trust-check" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l4 4 6-6" />
                  </svg>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Image ── */}
          <div className="hero-img-wrap anim-fadeInUp d2">
            <div className="hero-img-ring" />
            <img
              src={heroImage}
              alt="Collection of Chaitanya handmade cold-processed soaps with natural botanicals"
              className="hero-img"
            />
            <div className="hero-float-card anim-float">
              <p>Made with love</p>
              <span>at home, by hand</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
