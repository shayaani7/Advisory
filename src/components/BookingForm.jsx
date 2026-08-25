import { useState } from 'react'
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
    <section className="bk-form-section">
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
          <div className="bk-form-section__purple-panel" aria-hidden="true" />

          <aside className="bk-contact-card">
            <div className="bk-contact-card__accent" aria-hidden="true" />

            <h3 className="bk-contact-card__heading">Direct Contact</h3>

            <ul className="bk-contact-card__list">
              <li>
                <span className="bk-contact-card__icon bk-contact-card__icon--purple">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" fill="currentColor"/>
                  </svg>
                </span>
                <div>
                  <strong>Office</strong>
                  <p>
                    Flat # 67/2, Civic Centre, Wah Model Town Phase 2, Wah Cantt
                    <br />
                    Rawalpindi 47040
                  </p>
                </div>
              </li>

              <li>
                <span className="bk-contact-card__icon bk-contact-card__icon--red">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" fill="currentColor"/>
                  </svg>
                </span>
                <div>
                  <strong>Email</strong>
                  <p>habib@elafsystems.com</p>
                </div>
              </li>

              <li>
                <span className="bk-contact-card__icon bk-contact-card__icon--green">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.47 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.15-.198.296-.767.966-.94 1.164-.174.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.174-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.174-.008-.372-.01-.57-.01a1.09 1.09 0 0 0-.793.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347Z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.983-1.397A9.94 9.94 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18a7.96 7.96 0 0 1-4.29-1.248l-.308-.184-3.19.836.852-3.108-.202-.32A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8Z" />
                  </svg>
                </span>
                <div>
                  <strong>WhatsApp / Direct</strong>
                  <div className="bk-contact-card__phone-row">
                    <p>+92 3452553381</p>
                    <button type="button" className="bk-contact-card__phone-btn">
                      Request Phone Number
                    </button>
                  </div>
                </div>
              </li>

              <li>
                <span className="bk-contact-card__icon bk-contact-card__icon--blue">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <strong>Operating Hours</strong>
                  <p>Monday – Saturday<br />9:00 AM – 5:00 PM (GST/PKT)<br />Sunday: CLOSED</p>
                </div>
              </li>
            </ul>

            <div className="bk-contact-card__map">
              <iframe
                title="Elaf Advisory Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.5669!2d72.7!3d33.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d93ea!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: '14px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default BookingForm
