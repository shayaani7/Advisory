import { useState } from 'react'
import { COUNTRY_CODES, getCountryByCode } from '../data/countryCodes'
import './KnowledgeAdvisor.css'

function KnowledgeAdvisor() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: 'US',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const selectedCountry = getCountryByCode(form.countryCode)

  return (
    <section className="kr-advisor" id="kr-advisor">
      <div className="container kr-advisor__inner">
        <div className="kr-advisor__header">
          <h2 className="kr-advisor__heading">Ask the Advisor</h2>
          <p className="kr-advisor__sub">
            A streamlined portal for entrepreneurs, retail investors, and students to submit
            short, simple questions regarding Shariah compliance and Halal income for rapid,
            authoritative answers.
          </p>
        </div>

        {submitted ? (
          <div className="kr-advisor__success">
            <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <circle cx="24" cy="24" r="20" fill="rgba(79,63,240,0.12)" stroke="var(--color-primary)" strokeWidth="2" />
              <path d="M15 24l6 6 12-12" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>Thank you for your inquiry!</h3>
            <p>Our advisory team will review your question and respond within 2–3 business days.</p>
          </div>
        ) : (
          <form className="kr-advisor__form" onSubmit={handleSubmit}>
            <div className="kr-advisor__row kr-advisor__row--half">
              <div className="kr-advisor__field">
                <label htmlFor="kr-first-name">First name</label>
                <input
                  type="text"
                  id="kr-first-name"
                  name="firstName"
                  placeholder="First name"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="kr-advisor__field">
                <label htmlFor="kr-last-name">Last name</label>
                <input
                  type="text"
                  id="kr-last-name"
                  name="lastName"
                  placeholder="Last name"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="kr-advisor__field">
              <label htmlFor="kr-email">Email</label>
              <input
                type="email"
                id="kr-email"
                name="email"
                placeholder="you@company.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="kr-advisor__field">
              <label htmlFor="kr-phone">Phone number</label>
              <div className="kr-advisor__phone-wrap">
                <div className="kr-advisor__country-select">
                  <select
                    id="kr-country-code"
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    aria-label="Country code"
                  >
                    {COUNTRY_CODES.map(({ code, dial }) => (
                      <option key={code} value={code}>
                        {code} ({dial})
                      </option>
                    ))}
                  </select>
                  <svg className="kr-advisor__country-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <input
                  type="tel"
                  id="kr-phone"
                  name="phone"
                  placeholder={selectedCountry ? `${selectedCountry.dial} (555) 000-0000` : '+1 (555) 000-0000'}
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="kr-advisor__field">
              <label htmlFor="kr-message">Message</label>
              <textarea
                id="kr-message"
                name="message"
                rows="5"
                placeholder="Leave us a message..."
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="kr-advisor__submit">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default KnowledgeAdvisor
