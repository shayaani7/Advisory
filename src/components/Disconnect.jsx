import calculator3d from '../assets/calculator-3d.png'
import desk from '../assets/desk.png'
import weightingScale from '../assets/weighting_scale.png'
import Reveal from './Reveal.jsx'
import { smoothScrollToId } from '../utils/smoothScroll.js'
import './Disconnect.css'

function Disconnect() {
  return (
    <section className="disconnect" id="about">
      <div className="container disconnect__inner">
        <div className="disconnect__left">
          <Reveal
            as="h2"
            className="disconnect__heading"
            variant="ink"
            threshold={0.25}
          >
            The Industry Disconnect: Compliance Without Commercial Strategy
          </Reveal>
          <Reveal as="p" className="disconnect__text" delay={80}>
            Many global organizations face critical structural bottlenecks when
            scaling in the Islamic finance sector.
          </Reveal>
          <Reveal
            as="a"
            href="#barriers"
            className="btn btn--primary disconnect__cta"
            delay={160}
            onClick={(event) => smoothScrollToId(event, 'barriers')}
          >
            Start Exploring
            <span className="btn__icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Reveal>
          <Reveal variant="left" delay={220} className="disconnect__calculator-wrap">
            <img
              className="disconnect__calculator"
              src={calculator3d}
              alt=""
              aria-hidden="true"
            />
          </Reveal>
        </div>

        <div className="disconnect__right">
          <Reveal className="disconnect__cert" variant="right" delay={40}>
            <img src={weightingScale} alt="" aria-hidden="true" />
            <div className="disconnect__cert-copy">
              <strong>AAOIFI Certified</strong>
              <span>Leadership</span>
            </div>
          </Reveal>

          <Reveal
            className="disconnect__photo-wrap"
            variant="right"
            delay={140}
          >
            <div className="disconnect__photo">
              <img src={desk} alt="Advisory workspace with Shariah reference materials" />
            </div>
            <div className="disconnect__stat">
              <strong className="disconnect__stat-count">100+</strong>
              <span className="disconnect__stat-label">
                Financial Models Engineered
              </span>
            </div>

            <span className="disconnect__tag">
              <span className="disconnect__tag-text">
                <strong>Top 1%</strong>
                <small>Global Expert</small>
              </span>
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Disconnect
