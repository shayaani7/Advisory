import heroPhoto from '../assets/desk.png'
import noiseTexture from '../assets/Noise.png'
import './BookingHero.css'

function BookingHero() {
  return (
    <section className="bk-hero">
      <div
        className="bk-hero__bg"
        style={{ backgroundImage: `url(${heroPhoto})` }}
        aria-hidden="true"
      >
        <div
          className="bk-hero__noise"
          style={{ backgroundImage: `url(${noiseTexture})` }}
        />
      </div>
      <div className="bk-hero__overlay" aria-hidden="true" />

      <div className="container bk-hero__inner">
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
