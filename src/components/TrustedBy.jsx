import musaffaLogo from '../assets/musafalogo.png'
import metaLogo from '../assets/metalogo.png'
import muroodsoLogo from '../assets/muroodso.png'
import marsLogo from '../assets/mars.png'
import sofanceLogo from '../assets/sofance.png'
import smartSolutionsLogo from '../assets/smartsolutions.png'
import alimUniLogo from '../assets/alimuni.png'
import theBigWordLogo from '../assets/thbigword.png'
import australianLogo from '../assets/australian.png'
import systemRapidLogo from '../assets/systemrapid.png'
import stepesLogo from '../assets/stepes.png'
import eqrazLogo from '../assets/eqraz.png'
import goldenLogo from '../assets/golden.png'
import amplifyLogo from '../assets/amplify.png'
import malcoLogo from '../assets/malco.png'
import zycusLogo from '../assets/zycus.png'
import quanLogo from '../assets/quan.png'
import './TrustedBy.css'

const ROWS = [
  {
    duration: 38,
    logos: [
      { src: musaffaLogo, alt: 'Musaffa' },
      { src: metaLogo, alt: 'Meta' },
      { src: muroodsoLogo, alt: 'Muroodso' },
      { src: marsLogo, alt: 'MARS' },
      { src: sofanceLogo, alt: 'Sofance', chip: true },
      { src: smartSolutionsLogo, alt: 'Smart Solutions' },
      { src: alimUniLogo, alt: 'Alim University' },
    ],
  },
  {
    duration: 44,
    logos: [
      { src: theBigWordLogo, alt: 'thebigword' },
      { src: australianLogo, alt: 'Australian Institute of Business' },
      { src: systemRapidLogo, alt: 'SystemRapid' },
      { src: stepesLogo, alt: 'S.tepes' },
      { src: eqrazLogo, alt: 'EQRAZ' },
      { src: goldenLogo, alt: 'Golden Promise Nig. Ltd.', chip: true },
      { src: amplifyLogo, alt: 'Amplify' },
    ],
  },
  {
    duration: 34,
    logos: [
      { src: malcoLogo, alt: 'Malco Capital' },
      { src: zycusLogo, alt: 'ZYCUS' },
      { src: quanLogo, alt: 'Quan2um', chip: true },
    ],
  },
]

function MarqueeRow({ logos, duration }) {
  const track = [...logos, ...logos]

  return (
    <div className="trusted__marquee">
      <div
        className="trusted__marquee-track"
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {track.map((logo, index) => (
          <div
            className={`trusted__logo-item${logo.chip ? ' trusted__logo-item--chip' : ''}`}
            key={`${logo.alt}-${index}`}
          >
            <img src={logo.src} alt={logo.alt} loading="lazy" draggable="false" />
          </div>
        ))}
      </div>
    </div>
  )
}

function TrustedBy() {
  return (
    <section className="trusted">
      <div className="container trusted__inner">
        <h2 className="trusted__heading">
          Trusted by Leading Organizations
        </h2>
        <span className="trusted__badge highlight">Worldwide</span>

        <div className="trusted__marquees">
          {ROWS.map((row, index) => (
            <MarqueeRow key={index} logos={row.logos} duration={row.duration} />
          ))}
        </div>

        <p className="trusted__regions">
          USA · UK · UAE · KSA · Kuwait · Canada · Australia · Germany · France · MENA Region
        </p>
      </div>
    </section>
  )
}

export default TrustedBy
