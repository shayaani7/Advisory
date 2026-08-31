import growthImg from '../assets/image 91.png'
import Reveal from './Reveal.jsx'
import './AboutCTA.css'

function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="container about-cta__inner">
        <div className="about-cta__text">
          <Reveal as="h2" className="about-cta__heading">
            Ready to Build on a Foundation of Trust?
          </Reveal>
          <Reveal as="p" className="about-cta__subtext" delay={90}>
            Schedule a confidential consultation with our Principal Advisor to
            <br />
            discuss your objectives.
          </Reveal>
          <Reveal as="a" href="#booking" className="about-cta__btn" delay={180} variant="scale">
            <span className="about-cta__btn-text">Schedule Executive Consultation</span>
          </Reveal>
        </div>
      </div>

      <Reveal className="about-cta__image-wrap" variant="up" delay={120} aria-hidden="true">
        <img src={growthImg} alt="" className="about-cta__image" />
      </Reveal>
    </section>
  )
}

export default AboutCTA
