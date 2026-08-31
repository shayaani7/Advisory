import { useState } from 'react'
import officeIcon from '../assets/office.png'
import emailIcon from '../assets/email.png'
import whatsappIcon from '../assets/whatsapp.png'
import clockIcon from '../assets/clock.png'
import mapImg from '../assets/mapp.png'
import './BookingForm.css'

const REGIONS = [
  'Select Region',
  'Middle East & North Africa (MENA)',
  'Gulf Cooperation Council (GCC)',
  'Southeast Asia',
  'Sub-Saharan Africa',
  'Central Asia',
  'Europe',
  'North America',
  'Other',
]

const INQUIRY_TYPES = [
  'How did you find us?',
  'Shariah Product Structuring',
  'Digital Banking Compliance',
  'Islamic FinTech Advisory',
  'RegTech Integration',
  'Frontier Market Expansion',
  'Sustainable Finance / Green Sukuk',
  'General Inquiry',
  'Other',
]

function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    corporateTitle: '',
    institution: '',
    region: '',
    email: '',
    inquiry: '',
    brief: '',
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
    <section className="bk-form-section" id="get-in-touch">
      <div className="bk-form-section__purple-panel" aria-hidden="true" />
      <div className="container bk-form-section__inner">
        <div className="bk-form-col">
          <h2 className="bk-form-col__heading">
            Get in <span className="bk-form-col__heading-accent">Touch</span>
          </h2>

          {submitted ? (
            <div className="bk-form-col__success">
              <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
                <circle cx="28" cy="28" r="24" fill="rgba(79,63,240,0.1)" stroke="var(--color-primary)" strokeWidth="2" />
                <path d="M18 28l7 7 13-13" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>Thank you!</h3>
              <p>Your consultation request has been received. We will respond within one business day.</p>
            </div>
          ) : (
            <form className="bk-form" onSubmit={handleSubmit}>
              <div className="bk-form__row bk-form__row--half">
                <div className="bk-form__field">
                  <label htmlFor="bk-name">Name</label>
                  <input
                    type="text"
                    id="bk-name"
                    name="name"
                    placeholder="Name *"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="bk-form__field">
                  <label htmlFor="bk-corp-title">Corporate Title</label>
                  <input
                    type="text"
                    id="bk-corp-title"
                    name="corporateTitle"
                    placeholder="Corporate Title"
                    value={form.corporateTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="bk-form__row bk-form__row--half">
                <div className="bk-form__field">
                  <label htmlFor="bk-institution">Institution/Company</label>
                  <input
                    type="text"
                    id="bk-institution"
                    name="institution"
                    placeholder="Institution/Company"
                    value={form.institution}
                    onChange={handleChange}
                  />
                </div>
                <div className="bk-form__field">
                  <label htmlFor="bk-region">Region</label>
                  <div className="bk-form__select-wrap">
                    <select
                      id="bk-region"
                      name="region"
                      value={form.region}
                      onChange={handleChange}
                    >
                      {REGIONS.map((r) => (
                        <option key={r} value={r === 'Select Region' ? '' : r}>
                          {r}
                        </option>
                      ))}
                    </select>
                    <svg className="bk-form__select-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bk-form__field">
                <label htmlFor="bk-email">Email Address</label>
                <input
                  type="email"
                  id="bk-email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="bk-form__field">
                <label htmlFor="bk-inquiry">Nature of Inquiry</label>
                <div className="bk-form__select-wrap">
                  <select
                    id="bk-inquiry"
                    name="inquiry"
                    value={form.inquiry}
                    onChange={handleChange}
                  >
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t === 'How did you find us?' ? '' : t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <svg className="bk-form__select-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="bk-form__field">
                <label htmlFor="bk-brief">Project Brief</label>
                <textarea
                  id="bk-brief"
                  name="brief"
                  rows="5"
                  placeholder="Share a brief about your project..."
                  value={form.brief}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="bk-form__submit">
                BOOK CONSULTATION CALL
              </button>
            </form>
          )}
        </div>

        <div className="bk-form-section__right">
          <aside className="bk-contact-card">
            <h3 className="bk-contact-card__heading">Direct Contact</h3>

            <ul className="bk-contact-card__list">
              <li>
                <span className="bk-contact-card__icon bk-contact-card__icon--office">
                  <img src={officeIcon} alt="" />
                </span>
                <div>
                  <strong>Office</strong>
                  <p>
                    Civic Centre, Wah Model Town Phase 2, Wah Cantt
                    <br />
                    Rawalpindi 47040
                  </p>
                </div>
              </li>

              <li>
                <span className="bk-contact-card__icon bk-contact-card__icon--invert">
                  <img src={emailIcon} alt="" />
                </span>
                <div>
                  <strong>Email</strong>
                  <p>habib@elafsystems.com</p>
                </div>
              </li>

              <li>
                <span className="bk-contact-card__icon bk-contact-card__icon--invert">
                  <img src={whatsappIcon} alt="" />
                </span>
                <div>
                  <strong>WhatsApp / Direct</strong>
                  <p>+92 3452553381</p>
                </div>
              </li>

              <li>
                <span className="bk-contact-card__icon bk-contact-card__icon--invert">
                  <img src={clockIcon} alt="" />
                </span>
                <div>
                  <strong>Operating Hours</strong>
                  <p>Monday – Saturday<br />10 AM – 5:00 PM (GST/PKT)<br />Sunday: CLOSED</p>
                </div>
              </li>
            </ul>

            <div className="bk-contact-card__map">
              <img src={mapImg} alt="Office location map" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default BookingForm
