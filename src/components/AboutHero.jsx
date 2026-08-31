import { useReady } from '../hooks/useInView'
import blackDotBg from '../assets/blackdotbg.png'
import bgImage from '../assets/image 93.png'
import exploreArrow from '../assets/Polygon 2.png'
import './AboutHero.css'

function AboutHero() {
  const ready = useReady(60)

  return (
    <section className={`about-hero${ready ? ' is-inview' : ''}`} id="about">
      <div
        className="about-hero__dot-bg"
        style={{ backgroundImage: `url(${blackDotBg})` }}
        aria-hidden="true"
      />
      <div
        className="about-hero__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />
      <div className="about-hero__overlay" aria-hidden="true" />

      <a
        href="#mission"
        className="about-hero__explore-badge"
        aria-label="Explore more"
      >
        <span className="about-hero__explore-ring" aria-hidden="true">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
              <path
                id="about-explore-circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text>
              <textPath href="#about-explore-circle" startOffset="0%">
                EXPLORE MORE  EXPLORE MORE 
              </textPath>
            </text>
          </svg>
        </span>
        <span className="about-hero__explore-icon" aria-hidden="true">
          <img src={exploreArrow} alt="" />
        </span>
      </a>

      <div className="container about-hero__inner">
        <h1 className="about-hero__heading">
          Dual-Expertise.<br />
          <span className="about-hero__heading-keep">Uncompromising Governance</span>
        </h1>
        <p className="about-hero__eyebrow">
          An agile, institutional model that delivers both rapid execution and
          rigorous oversight.
        </p>
      </div>
    </section>
  )
}

export default AboutHero
