import heroPhoto from '../assets/krhero.png'
import exploreArrow from '../assets/Polygon 2.png'
import noiseTexture from '../assets/Noise.png'
import './KnowledgeHero.css'

function KnowledgeHero() {
  return (
    <section className="kr-hero">
      <div
        className="kr-hero__bg"
        style={{ backgroundImage: `url(${heroPhoto})` }}
        aria-hidden="true"
      >
        <div
          className="kr-hero__noise"
          style={{ backgroundImage: `url(${noiseTexture})` }}
        />
      </div>
      <div className="kr-hero__overlay" aria-hidden="true" />

      <a
        href="#kr-articles"
        className="kr-hero__explore-badge"
        aria-label="Explore knowledge resources"
      >
        <span className="kr-hero__explore-ring" aria-hidden="true">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
              <path
                id="kr-explore-circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text>
              <textPath href="#kr-explore-circle" startOffset="0%">
                EXPLORE MORE  EXPLORE MORE
              </textPath>
            </text>
          </svg>
        </span>
        <span className="kr-hero__explore-icon" aria-hidden="true">
          <img src={exploreArrow} alt="" />
        </span>
      </a>

      <div className="container kr-hero__inner">
        <p className="kr-hero__eyebrow">Knowledge &amp; Resources</p>
        <h1 className="kr-hero__heading">
          Institutional Insights &amp; Thought
          <br />
          Leadership.
        </h1>
        <p className="kr-hero__sub">
          Deep-dive analyses, foundational texts, and a direct portal for your
          Shariah compliance questions.
        </p>
      </div>
    </section>
  )
}

export default KnowledgeHero
