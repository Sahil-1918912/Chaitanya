import { useEffect, useRef, useState } from 'react'

export default function OrderCTA() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const phoneNumber = '9421680527'

  return (
    <section
      id="order"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-soap-sage/5 via-soap-cream to-soap-clay/5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-soap-sage/30" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className={visible ? 'animate-fade-in-up' : 'opacity-0'}>
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-soap-sage mb-4 block">
            Get Yours Today
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-soap-text mb-6">
            Ready for{' '}
            <span className="italic text-soap-clay">Natural</span> Skin Care?
          </h2>
          <p className="text-soap-text-light text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Each soap is made to order with fresh, natural ingredients. Simply call us to
            place your order — we'd love to hear from you and help you choose the perfect bar.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${visible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          {/* Primary — Call Now */}
          <a
            href={`tel:+91${phoneNumber}`}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-soap-sage text-soap-white font-sans text-sm tracking-widest uppercase rounded-full hover:bg-soap-sage-dark transition-all duration-300 hover:shadow-xl hover:shadow-soap-sage/25 group"
          >
            <svg className="w-5 h-5 group-hover:animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
            </svg>
            Call to Order
          </a>

          {/* Secondary — WhatsApp */}
          <a
            href={`https://wa.me/91${phoneNumber}?text=Hi!%20I%20am%20interested%20in%20ordering%20Chaitanya%20cold-processed%20soaps.%20Could%20you%20share%20more%20details%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#25D366] text-white font-sans text-sm tracking-widest uppercase rounded-full hover:bg-[#1DA851] transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/25 group"
          >
            <svg className="w-5 h-5 group-hover:animate-float" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Contact Info */}
        <div className={`mt-12 space-y-3 ${visible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
          <p className="text-soap-text-light text-sm">
            📞 <a href={`tel:+91${phoneNumber}`} className="hover:text-soap-sage transition-colors">+91 94216 80527</a>
          </p>
          <p className="text-soap-text-light text-sm">
            🌐 <a href="https://www.chaitanyacpsoap.com" target="_blank" rel="noopener noreferrer" className="hover:text-soap-sage transition-colors">www.chaitanyacpsoap.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
