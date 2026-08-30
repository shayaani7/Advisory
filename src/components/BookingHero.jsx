import heroPhoto from '../assets/bec.png'
import './BookingHero.css'

function BookingHero() {
  return (
    <section className="bk-hero">
      <img
        src={heroPhoto}
        alt=""
        className="bk-hero__img"
        aria-hidden="true"
      />

      <div className="bk-hero__inner">
        <div className="bk-hero__card">
          <span className="bk-hero__eyebrow">Contact Us</span>
          <h1 className="bk-hero__heading">
            Initiate an Executive Consultation.
          </h1>
          <p className="bk-hero__sub">
            Tell us about your project and objectives. We will respond within one business day.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BookingHero
