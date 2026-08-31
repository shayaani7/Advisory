import { useState } from 'react'
import Reveal from './Reveal.jsx'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'Advisory Services', href: '#services' },
  { label: 'Case Studies', href: '#insights' },
  { label: 'Knowledge & Resources', href: '#contact' },
  { label: 'Ask the Advisor', href: '#contact' },
  { label: 'Client Portal Login', href: '#booking' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Disclaimer', href: '#' },
  { label: 'FAQs', href: '#' },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <Reveal className="footer__brand" variant="up">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-elaf">Elaf</span>
            <span className="footer__logo-advisory">Advisory</span>
          </a>
          <p className="footer__tagline">
            Bridging Classical Authority with Global Digital Infrastructure.
          </p>
          <ul className="footer__contact-list">
            <li>
              Flat # 67/2, Civic Centre, Wah Model Town Phase 2, Wah Cantt
              <br />
              Rawalpindi 47040
            </li>
            <li>habib@elafsystems.com</li>
            <li>+92 3452553381 (WhatsApp / Direct)</li>
            <li>Mon – Sat: 8:00 AM – 5:00 PM (PKT)</li>
          </ul>
        </Reveal>

        <Reveal className="footer__links" as="nav" aria-label="Footer quick links" delay={100}>
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="footer__newsletter" delay={180}>
          <h4>Executive Intelligence Briefing</h4>
          <p>
            Get the latest updates on Islamic finance regulations and fintech innovations.
          </p>
          <form className="footer__form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-label="Email address"
            />
            <button type="submit" className="footer__subscribe">
              {submitted ? 'Thank you' : 'Subscribe'}
            </button>
          </form>

          <div className="footer__social">
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.98h4v11H3v-11Zm7 0h3.8v1.5h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v6.46h-4v-5.73c0-1.37-.02-3.13-1.9-3.13-1.9 0-2.2 1.5-2.2 3.03v5.83h-4v-11Z" />
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4 4h4.6l4 5.7L17.2 4H20l-6.3 8.1L20.4 20h-4.6l-4.3-6-5.2 6H3l6.7-8.6L4 4Z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
              </svg>
            </a>
          </div>

          <div className="footer__legal">
            {LEGAL_LINKS.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2026 Elaf Shariah Advisory. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
