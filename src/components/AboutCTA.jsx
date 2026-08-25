import growthImg from '../assets/image 91.png'
import './AboutCTA.css'

function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="container about-cta__inner">
        <div className="about-cta__text">
          <h2 className="about-cta__heading">
            Ready to Build on a Foundation of Trust?
          </h2>
          <p className="about-cta__subtext">
            Schedule a confidential consultation with our Principal Advisor to
            <br />
            discuss your objectives.
          </p>
          <a href="#contact" className="about-cta__btn">
            <span className="about-cta__btn-text">Schedule Executive Consultation</span>
          </a>
        </div>
      </div>

      <div className="about-cta__image-wrap" aria-hidden="true">
        <img src={growthImg} alt="" className="about-cta__image" />
      </div>
    </section>
  )
}

export default AboutCTA
