import bankingIcon from '../assets/homesvg.png'
import fintechIcon from '../assets/fintech.png'
import corporateIcon from '../assets/corporate.png'
import stcBankLogo from '../assets/stcbank.png'
import ruyaLogo from '../assets/ruya.png'
import eqrazLogo from '../assets/eqraz.png'
import musaffaLogo from '../assets/musafalogo.png'
import systemRapidLogo from '../assets/systemrapid.png'
import htcLogo from '../assets/image 109.png'
import malcoLogo from '../assets/malco.png'
import nokDecor from '../assets/nok.png'
import './CaseStudiesTrusted.css'

const SECTORS = [
  {
    id: 'banking',
    label: '01',
    category: 'BANKING',
    icon: bankingIcon,
    layout: 'row',
    logos: [
      { src: stcBankLogo, alt: 'STC Bank logo' },
      { src: ruyaLogo, alt: 'Ruya logo' },
    ],
  },
  {
    id: 'fintech',
    label: '02',
    category: 'FINTECH',
    icon: fintechIcon,
    layout: 'triangle',
    logos: [
      { src: eqrazLogo, alt: 'EQRAZ logo' },
      { src: musaffaLogo, alt: 'Musaffa logo' },
      { src: systemRapidLogo, alt: 'SystemRapid logo' },
    ],
  },
  {
    id: 'corporate',
    label: '03',
    category: 'CORPORATE',
    icon: corporateIcon,
    layout: 'stack',
    logos: [
      { src: htcLogo, alt: 'HTC logo' },
      { src: malcoLogo, alt: 'Malco Capital logo' },
    ],
  },
]

function LogoList({ sector }) {
  if (sector.layout === 'triangle') {
    const [first, second, third] = sector.logos
    return (
      <div className="cs-trusted__logos cs-trusted__logos--triangle">
        <div className="cs-trusted__logos-row">
          <img src={first.src} alt={first.alt} className="cs-trusted__logo-img" />
          <img src={second.src} alt={second.alt} className="cs-trusted__logo-img" />
        </div>
        <img src={third.src} alt={third.alt} className="cs-trusted__logo-img" />
      </div>
    )
  }

  return (
    <div className={`cs-trusted__logos cs-trusted__logos--${sector.layout}`}>
      {sector.logos.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt}
          className="cs-trusted__logo-img"
        />
      ))}
    </div>
  )
}

function CaseStudiesTrusted() {
  return (
    <section className="cs-trusted">
      <div className="container cs-trusted__inner">
        <p className="cs-trusted__eyebrow">Our Corporate Clients</p>
        <h2 className="cs-trusted__heading">
          Trusted by Leading Organizations
        </h2>

        <div className="cs-trusted__badge-row">
          <span className="cs-trusted__pill">
            Across Banking, Telecom, Fintech and Beyond
          </span>
        </div>

        <div className="cs-trusted__sectors">
          {SECTORS.map((sector) => (
            <article key={sector.id} className="cs-trusted__card">
              <div className="cs-trusted__icon-circle">
                <img
                  src={sector.icon}
                  alt=""
                  className="cs-trusted__icon-img"
                  aria-hidden="true"
                />
              </div>

              <div className="cs-trusted__sector-header">
                <span className="cs-trusted__sector-num">{sector.label}</span>
                <span className="cs-trusted__sector-label">{sector.category}</span>
                <span className="cs-trusted__sector-line" aria-hidden="true" />
              </div>

              <LogoList sector={sector} />

              {sector.id === 'corporate' && (
                <img
                  src={nokDecor}
                  alt=""
                  className="cs-trusted__card-decor"
                  aria-hidden="true"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesTrusted
