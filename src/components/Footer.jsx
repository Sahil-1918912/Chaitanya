const PHONE = '9421680527'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* LOGO PLACEHOLDER — swap with <img src={logo} ... /> */}
            <h3>Chaitanya</h3>
            <p>Handmade cold-processed soaps crafted with love.<br />Pure nature, zero chemicals.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {[['Home','#'],['Our Story','#process'],['Soaps','#products'],['Order','#order']].map(([l,h]) => (
                <li key={l}><a href={h}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col" style={{textAlign:'right'}}>
            <h4>Reach Us</h4>
            <ul style={{alignItems:'flex-end'}}>
              <li><a href={`tel:+91${PHONE}`}>+91 94216 80527</a></li>
              <li><a href="https://www.chaitanyacpsoap.com" target="_blank" rel="noopener noreferrer">www.chaitanyacpsoap.com</a></li>
            </ul>
          </div>
        </div>
        <p className="footer-copy">© {year} Chaitanya Cold Process Soaps. Made with ❤️ in India.</p>
      </div>
    </footer>
  )
}
