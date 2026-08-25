import { useState } from 'react'
import './AdvisoryFooter.css'

const QUICK_LINKS = [
  { label: 'Advisory Services', href: '#services' },
  { label: 'Case Studies', href: '#insights' },
  { label: 'Knowledge & Resources', href: '#contact' },
  { label: 'Ask the Advisor', href: '#contact' },
  { label: 'Client Portal Login', href: '#contact' },
]

function AdvisoryFooter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer className="adv-footer" id="contact">
      <div className="container adv-footer__inner">
        {/* Column 1: Brand */}
        <div className="adv-footer__brand">
          <a href="#home" className="adv-footer__logo">
            <span className="adv-footer__logo-elaf">Elaf</span>
            <span className="adv-footer__logo-advisory">Advisory</span>
          </a>
          <p className="adv-footer__tagline">
            Bridging Classical Authority with Global Digital Infrastructure.
          </p>
          <ul className="adv-footer__contact-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" fill="currentColor"/>
              </svg>
              Flat # 67/2, Civic Centre, Wah Model Town Phase 2, Wah Cantt
              <br />
              Rawalpindi 47040
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" fill="currentColor"/>
              </svg>
              habib@elafsystems.com
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" fill="currentColor"/>
              </svg>
              +92 3452553381 (WhatsApp / Direct)
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Mon – Sat: 8:00 AM – 5:00 PM (PKT)
            </li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <nav className="adv-footer__links" aria-label="Footer quick links">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Newsletter */}
        <div className="adv-footer__newsletter">
          <h4>Executive Intelligence Briefing</h4>
          <p>
            Get the latest updates on Islamic finance regulations and fintech innovations.
          </p>
          <form className="adv-footer__form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address for newsletter"
            />
            <button type="submit" className="adv-footer__subscribe">
              {submitted ? 'Thank you' : 'Subscribe'}
            </button>
          </form>

          <div className="adv-footer__social">
            <a href="#" aria-label="LinkedIn" className="adv-footer__social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.98h4v11H3v-11Zm7 0h3.8v1.5h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v6.46h-4v-5.73c0-1.37-.02-3.13-1.9-3.13-1.9 0-2.2 1.5-2.2 3.03v5.83h-4v-11Z" />
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="adv-footer__social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4 4h4.6l4 5.7L17.2 4H20l-6.3 8.1L20.4 20h-4.6l-4.3-6-5.2 6H3l6.7-8.6L4 4Z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="adv-footer__social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"/>
              </svg>
            </a>
          </div>

          <div className="adv-footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Disclaimer</a>
            <a href="#">FAQs</a>
          </div>
        </div>
      </div>

      <div className="adv-footer__bottom">
        <div className="container adv-footer__bottom-inner">
          <span>© 2026 Elaf Shariah Advisory. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default AdvisoryFooter
