import heroImage from '../assets/hero-soaps.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-soap-sage/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-soap-clay/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-24 pb-16">
        {/* Left — Copy */}
        <div className="text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-soap-sage/30 bg-soap-sage/5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-soap-sage animate-float" />
            <span className="text-xs font-sans tracking-widest uppercase text-soap-sage-dark">
              100% Natural · Handmade
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-soap-text leading-[1.1] mb-6 animate-fade-in-up">
            Pure &{' '}
            <span className="italic text-soap-sage">Nourished</span>
          </h1>

          <p className="text-soap-text-light text-lg md:text-xl leading-relaxed max-w-lg mb-8 animate-fade-in-up delay-200">
            Cold-processed soaps crafted by hand with nothing but nature's finest
            ingredients. Zero chemicals, pure skin nourishment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-400">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-soap-sage text-soap-white font-sans text-sm tracking-widest uppercase rounded-full hover:bg-soap-sage-dark transition-all duration-300 hover:shadow-lg hover:shadow-soap-sage/20"
            >
              Explore Soaps
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-soap-text/20 text-soap-text font-sans text-sm tracking-widest uppercase rounded-full hover:border-soap-sage hover:text-soap-sage-dark transition-all duration-300"
            >
              Our Story
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 mt-10 justify-center md:justify-start animate-fade-in-up delay-600">
            <div className="flex items-center gap-2 text-soap-text-light">
              <svg className="w-4 h-4 text-soap-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-xs tracking-wide">Chemical Free</span>
            </div>
            <div className="flex items-center gap-2 text-soap-text-light">
              <svg className="w-4 h-4 text-soap-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-xs tracking-wide">Cold Processed</span>
            </div>
            <div className="flex items-center gap-2 text-soap-text-light">
              <svg className="w-4 h-4 text-soap-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-xs tracking-wide">Handmade</span>
            </div>
          </div>
        </div>

        {/* Right — Hero Image */}
        <div className="relative flex justify-center animate-fade-in-up delay-300">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-3xl border border-soap-sage/10 rotate-3" />
            <img
              src={heroImage}
              alt="Collection of Chaitanya handmade cold-processed soaps with natural botanicals"
              className="relative w-full max-w-lg rounded-2xl shadow-2xl shadow-soap-text/10 object-cover aspect-square"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-soap-white rounded-xl shadow-lg px-5 py-3 animate-float">
              <p className="font-serif text-soap-sage-dark text-sm italic">Made with love</p>
              <p className="text-xs text-soap-text-light mt-0.5">at home, by hand</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
        <span className="text-xs tracking-widest uppercase text-soap-text-light/60">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-soap-text-light/40 to-transparent" />
      </div>
    </section>
  )
}
