import islamicFinanceImg from '../assets/Rectangle 4376.png'
import scaleIcon from '../assets/weighting_scale.png'
import playIcon from '../assets/playicon.png'
import './AboutMission.css'

function AboutMission() {
  return (
    <section className="about-mission" id="mission">
      <div className="container about-mission__inner">
        <div className="about-mission__text-col">
          <h2 className="about-mission__heading">
            An agile, institutional model that delivers both rapid execution and
            rigorous oversight.
          </h2>
          <p className="about-mission__para">
            Elaf Shariah Advisory operates on a highly agile, institutional model. For rapid
            product structuring and fintech consulting, our Principal Advisor directly leads
            engagements to ensure aggressive time-to-market. When regulatory frameworks require
            official institutional certification, we immediately convene our full Shariah
            Supervisory Board (SSB) to issue binding, globally recognised Fatwas.
          </p>
          <a href="#contact" className="btn btn--primary about-mission__cta">
            Start Exploring
            <span className="btn__icon btn__icon--play">
              <img src={playIcon} alt="" />
            </span>
          </a>
        </div>

        <div className="about-mission__media-col">
          <div className="about-mission__image-wrap">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMission
