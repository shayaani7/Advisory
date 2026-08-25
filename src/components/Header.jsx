import { useState } from 'react'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Advisory Services', href: '#services' },
  { label: 'Case Studies', href: '#insights' },
  { label: 'Knowledge & Resources', href: '#contact' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#home" className="site-header__logo">
          ELAF SHARIAH ADVISORY
        </a>

        <nav className={`site-header__nav ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a href="#contact" className="btn btn--ghost">
            Book Executive Consultation
          </a>
          <button
            type="button"
            className={`site-header__burger ${open ? 'is-open' : ''}`}
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
