import calculator3d from '../assets/calculator-3d.png'
import desk from '../assets/desk.png'
import weightingScale from '../assets/weighting_scale.png'
import './Disconnect.css'

function Disconnect() {
  return (
    <section className="disconnect" id="about">
      <div className="container disconnect__inner">
        <div className="disconnect__left">
          <h2 className="disconnect__heading">
            The Industry Disconnect: Compliance Without Commercial Strategy
          </h2>
          <p className="disconnect__text">
            Many global organizations face critical structural bottlenecks when
            scaling in the Islamic finance sector.
          </p>
          <a href="#services" className="btn btn--primary disconnect__cta">
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
          </a>
          <img
            className="disconnect__calculator"
            src={calculator3d}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="disconnect__right">
          <div className="disconnect__cert">
            <img src={weightingScale} alt="" aria-hidden="true" />
            <div className="disconnect__cert-copy">
              <strong>AAOIFI Certified</strong>
              <span>Leadership</span>
            </div>
          </div>

          <div className="disconnect__photo-wrap">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Disconnect
