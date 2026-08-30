import { useState, useEffect } from 'react'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Advisory Services', href: '#services' },
  { label: 'Case Studies', href: '#insights' },
  { label: 'Knowledge & Resources', href: '#contact' },
]

function getActiveHref() {
  const hash = window.location.hash
  if (!hash || hash === '#' || hash === '#home') return '#home'
  return hash
}

function Header({ darkText = false }) {
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(() => getActiveHref())

  useEffect(() => {
    const onHashChange = () => setActiveHref(getActiveHref())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <header className={`site-header${darkText ? ' site-header--dark-text' : ''}`}>
      <div className="container site-header__inner">
        <a href="#home" className="site-header__logo">
          ELAF SHARIAH ADVISORY
        </a>

        <nav className={`site-header__nav ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={isActive ? 'is-active' : undefined}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li className="site-header__nav-booking">
              <a
                href="#booking"
                className={activeHref === '#booking' ? 'is-active' : undefined}
                aria-current={activeHref === '#booking' ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                Book Executive Consultation
              </a>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions">
          <a href="#booking" className="btn btn--primary site-header__booking">
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
