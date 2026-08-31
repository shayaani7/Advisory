import { useReady } from '../hooks/useInView'
import bgDots from '../assets/bg-dots.png'
import heroBg from '../assets/newbc.png'
import playIcon from '../assets/playicon.png'
import avatarTim from '../assets/timcook.png'
import avatarBlue from '../assets/girlwithbluebg.png'
import avatarStripes from '../assets/girlwitgdottedlineshirt.png'
import './Hero.css'

const TRUST_AVATARS = [
  { src: avatarTim, alt: 'Client portrait' },
  { src: avatarBlue, alt: 'Client portrait' },
  { src: avatarStripes, alt: 'Client portrait' },
]

function Hero() {
  const ready = useReady(60)

  return (
    <section className={`hero${ready ? ' is-inview' : ''}`} id="home">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div
        className="hero__dots"
        style={{ backgroundImage: `url(${bgDots})` }}
        aria-hidden="true"
      />

      <div className="container hero__inner">
        <div className="hero__top">
          <div className="hero__heading-col">
            <h1 className="hero__heading">
              Global Shariah
              <br />
              Advisory &amp; Islamic
              <br />
              <span className="hero__heading-keep">Financial Architecture</span>
            </h1>
            <p className="hero__subtitle">GLOBAL SHARIAH ADVISORY FIRM</p>
          </div>

          <div className="hero__info-col">
            <p className="hero__description">
              <span className="hero__description-line">
                We design Shariah-compliant financial solutions that combine ethical
              </span>
              <span className="hero__description-line">
                principles with commercial viability and regulatory readiness.
              </span>
            </p>

            <a href="#services" className="btn btn--primary hero__cta">
              Explore Advisory Services
              <span className="btn__icon btn__icon--play">
                <img src={playIcon} alt="" />
              </span>
            </a>

            <div className="hero__trust">
              <div className="hero__trust-avatars">
                {TRUST_AVATARS.map((avatar) => (
                  <img
                    key={avatar.src}
                    className="hero__trust-avatar"
                    src={avatar.src}
                    alt={avatar.alt}
                  />
                ))}
              </div>
              <div className="hero__trust-copy">
                <span className="hero__trust-global">250+ Global</span>
                <span className="hero__trust-clients">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
