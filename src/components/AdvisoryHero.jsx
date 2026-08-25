import heroPhoto from '../assets/advisoryservicehero.jpg'
import exploreArrow from '../assets/Polygon 2.png'
import noiseTexture from '../assets/Noise.png'
import './AdvisoryHero.css'

function AdvisoryHero() {
  return (
    <section className="adv-hero" id="services">
      <div
        className="adv-hero__bg"
        style={{ backgroundImage: `url(${heroPhoto})` }}
        aria-hidden="true"
      >
        <div
          className="adv-hero__noise"
          style={{ backgroundImage: `url(${noiseTexture})` }}
        />
      </div>
      <div className="adv-hero__overlay" aria-hidden="true" />

      <a
        href="#adv-services-list"
        className="adv-hero__explore-badge"
        aria-label="Explore services"
      >
        <span className="adv-hero__explore-ring" aria-hidden="true">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
              <path
                id="adv-explore-circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text>
              <textPath href="#adv-explore-circle" startOffset="0%">
                EXPLORE MORE  EXPLORE MORE
              </textPath>
            </text>
          </svg>
        </span>
        <span className="adv-hero__explore-icon" aria-hidden="true">
          <img src={exploreArrow} alt="" />
        </span>
      </a>

      <div className="container adv-hero__inner">
        <h1 className="adv-hero__heading">
          <span className="adv-hero__heading-line">End-to-End Islamic Financial</span>
          <br />
          Engineering.
        </h1>
        <p className="adv-hero__eyebrow">
          Highly specialized, commercially viable structuring across traditional
          and frontier financial sectors.
        </p>
      </div>
    </section>
  )
}

export default AdvisoryHero
