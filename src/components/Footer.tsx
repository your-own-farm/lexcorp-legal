import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: 36, height: 36, background: 'var(--gold)',
                borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Georgia, serif', fontWeight: 800, color: '#fff', fontSize: '1rem',
              }}>L</div>
              <div>
                <div className="footer-brand-name">LexCorp</div>
                <div className="footer-brand-tag">Legal &amp; Compliance</div>
              </div>
            </div>
            <p className="footer-desc">
              Delivering principled legal counsel and strategic compliance advisory
              to businesses across India since 2004. Trusted by 500+ clients.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/founder">Our Founder</Link></li>
              <li><Link to="/history">Our History</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="footer-col-title">Practice Areas</div>
            <ul className="footer-links">
              <li><a href="#">Corporate Law</a></li>
              <li><a href="#">Regulatory Compliance</a></li>
              <li><a href="#">Mergers &amp; Acquisitions</a></li>
              <li><a href="#">Intellectual Property</a></li>
              <li><a href="#">Dispute Resolution</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Reach Us</div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span className="footer-contact-text">
                14th Floor, Prestige Tower,<br />
                Nariman Point, Mumbai — 400 021
              </span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <span className="footer-contact-text">+91 22 6600 4400</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <span className="footer-contact-text">contact@lexcorplegal.in</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">🕐</span>
              <span className="footer-contact-text">Mon – Fri, 9:00 AM – 6:00 PM IST</span>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span>© {year} LexCorp Legal &amp; Compliance LLP. All rights reserved.</span>
          <span style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Disclaimer</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
