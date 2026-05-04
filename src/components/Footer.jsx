export default function Footer() {
  const phoneNumber = '9421680527'
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-soap-text py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            {/* TODO: Replace with logo image if desired */}
            <h3 className="font-serif text-2xl text-soap-cream mb-3">Chaitanya</h3>
            <p className="text-soap-cream/60 text-sm leading-relaxed">
              Handmade cold-processed soaps crafted with love.
              Pure nature, zero chemicals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-soap-cream/80 text-xs tracking-[0.3em] uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-soap-cream/50 text-sm hover:text-soap-cream transition-colors">Home</a>
              </li>
              <li>
                <a href="#process" className="text-soap-cream/50 text-sm hover:text-soap-cream transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#products" className="text-soap-cream/50 text-sm hover:text-soap-cream transition-colors">Soaps</a>
              </li>
              <li>
                <a href="#order" className="text-soap-cream/50 text-sm hover:text-soap-cream transition-colors">Order</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h4 className="text-soap-cream/80 text-xs tracking-[0.3em] uppercase mb-4">Reach Us</h4>
            <p className="text-soap-cream/50 text-sm mb-1">
              <a href={`tel:+91${phoneNumber}`} className="hover:text-soap-cream transition-colors">
                +91 94216 80527
              </a>
            </p>
            <p className="text-soap-cream/50 text-sm">
              <a href="https://www.chaitanyacpsoap.com" target="_blank" rel="noopener noreferrer" className="hover:text-soap-cream transition-colors">
                www.chaitanyacpsoap.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-soap-cream/10 text-center">
          <p className="text-soap-cream/30 text-xs tracking-wider">
            © {currentYear} Chaitanya Cold Process Soaps. Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  )
}
