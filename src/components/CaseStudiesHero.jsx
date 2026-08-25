import heroGraphic from '../assets/csheropng.png'
import './CaseStudiesHero.css'

function CaseStudiesHero() {
  return (
    <section className="cs-hero" id="insights">
      <div
        className="cs-hero__graphic"
        style={{ backgroundImage: `url(${heroGraphic})` }}
        aria-hidden="true"
      />
      <div className="cs-hero__overlay" aria-hidden="true" />

      <div className="container cs-hero__inner">
        <h1 className="cs-hero__heading">
          Proven Execution Across
          <br />
          Global Markets.
        </h1>
        <p className="cs-hero__eyebrow">
          An agile, institutional model that delivers both rapid execution and
          rigorous oversight.
        </p>
      </div>
    </section>
  )
}

export default CaseStudiesHero
