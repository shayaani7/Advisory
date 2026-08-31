import islamicFinanceImg from '../assets/Rectangle 4376.png'
import scaleIcon from '../assets/weighting_scale.png'
import playIcon from '../assets/playicon.png'
import asterisk from '../assets/blue star.png'
import Reveal from './Reveal.jsx'
import './AboutMission.css'

function AboutMission() {
  return (
    <section className="about-mission" id="mission">
      <img className="about-mission__asterisk" src={asterisk} alt="" aria-hidden="true" />
      <div className="container about-mission__inner">
        <div className="about-mission__text-col">
          <Reveal as="h2" className="about-mission__heading" variant="ink">
            An agile, institutional model that delivers both rapid execution and
            rigorous oversight.
          </Reveal>
          <Reveal as="p" className="about-mission__para" delay={90}>
            Elaf Shariah Advisory operates on a highly agile, institutional model. For rapid
            product structuring and fintech consulting, our Principal Advisor directly leads
            engagements to ensure aggressive time-to-market. When regulatory frameworks require
            official institutional certification, we immediately convene our full Shariah
            Supervisory Board (SSB) to issue binding, globally recognised Fatwas.
          </Reveal>
          <Reveal as="a" href="#contact" className="btn btn--primary about-mission__cta" delay={180}>
            Start Exploring
            <span className="btn__icon btn__icon--play">
              <img src={playIcon} alt="" />
            </span>
          </Reveal>
        </div>

        <div className="about-mission__media-col">
          <Reveal className="about-mission__image-wrap" variant="right" delay={120}>
            <img
              src={scaleIcon}
              alt=""
              className="about-mission__scale-badge"
              aria-hidden="true"
            />
            <img
              src={islamicFinanceImg}
              alt="Islamic Finance magnifying glass over text"
              className="about-mission__image"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default AboutMission
