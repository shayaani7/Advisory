import { useState } from 'react'
import './KnowledgeAdvisor.css'

function KnowledgeAdvisor() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
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

  return (
    <section className="kr-advisor" id="kr-advisor">
      <div className="container kr-advisor__inner">
        <div className="kr-advisor__header">
          <h2 className="kr-advisor__heading">Ask the Advisor</h2>
          <p className="kr-advisor__sub">
            Got a question for our Shariah advisory team? Ask anything about Islamic finance,
            Shariah compliance, product structuring, or our advisory process.
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
                <label htmlFor="kr-first-name">First Name</label>
                <input
                  type="text"
                  id="kr-first-name"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="kr-advisor__field">
                <label htmlFor="kr-last-name">Last Name</label>
                <input
                  type="text"
                  id="kr-last-name"
                  name="lastName"
                  placeholder="Last Name"
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
                placeholder="Enter your email address"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="kr-advisor__field">
              <label htmlFor="kr-phone">Phone No.</label>
              <div className="kr-advisor__phone-wrap">
                <span className="kr-advisor__phone-code" aria-hidden="true">+92</span>
                <input
                  type="tel"
                  id="kr-phone"
                  name="phone"
                  placeholder="Phone number"
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
                placeholder="Write your question or query here..."
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
