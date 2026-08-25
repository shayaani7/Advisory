import posMachineImg from '../assets/posmachine.png'
import umbrellaImg from '../assets/umbrella.png'
import homeImg from '../assets/home.png'
import partnerImg from '../assets/partner.png'
import coinsInHandImg from '../assets/coinsinhand.png'
import './CaseStudiesHighlights.css'

const CASE_STUDIES = [
  {
    id: '01',
    sector: 'BANKING',
    title: 'Shariah Compliant Credit Card',
    image: posMachineImg,
    paragraphs: [
      'Designed a fully compliant, regulator-ready Shariah credit card framework for a prominent U.S. banking institution.',
      'The engagement included product structuring, fee architecture design, and comprehensive Shariah documentation to satisfy both federal regulators and the bank\'s internal compliance board.',
    ],
  },
  {
    id: '02',
    sector: 'TELECOM',
    title: 'Islamic Insurance (Takaful) Model',
    image: umbrellaImg,
    paragraphs: [
      'Structured a comprehensive Islamic insurance (Takaful) model for a multinational telecom provider.',
      'The model addressed risk-sharing mechanisms, Wakala fee structures, and participant surplus distribution — all engineered for seamless integration into the provider\'s existing corporate insurance framework.',
    ],
  },
  {
    id: '03',
    sector: 'FINTECH',
    title: 'Digital Murabaha Calculator',
    image: homeImg,
    paragraphs: [
      'Designed a digital Murabaha pricing engine with automated profit-rate calculations, commodity flow tracking, and real-time Shariah compliance validation.',
      'The platform enabled institutions to model financing scenarios with full transparency across profit margins, commodity ownership transfers, and regulatory reporting requirements.',
    ],
  },
  {
    id: '04',
    sector: 'SOCIAL FINANCE',
    title: 'Islamic Microfinance Ecosystem',
    image: partnerImg,
    paragraphs: [
      'Developed a high-impact Islamic microfinance ecosystem designed for poverty alleviation.',
      'The framework includes peer-to-peer micro-lending strategy, Murabaha micro-financing, and Zakat distribution channels — creating a sustainable social impact model aligned with Shariah principles.',
    ],
  },
  {
    id: '05',
    sector: 'HALAL ASSETS',
    title: 'Halal Investment Strategies',
    image: coinsInHandImg,
    paragraphs: [
      'Proposed a digital asset framework, Halal products, and Halal investment strategies for high-net-worth individuals.',
      'We have developed comprehensive ratings and specific Shariah compliance systems for a wide spectrum of digital assets including Shariah-compliant digital portfolios.',
    ],
  },
]

function CaseStudiesHighlights() {
  return (
    <section className="cs-highlights" id="cs-highlights">
      <div className="container cs-highlights__inner">
        <div className="cs-highlights__header">
          <h2 className="cs-highlights__heading">
            Project{' '}
            <span className="highlight">Highlights</span>
          </h2>
          <p className="cs-highlights__sub">
            A selection of high-impact engagements that demonstrate the breadth
            and depth of our advisory capabilities.
          </p>
        </div>

        <div className="cs-highlights__grid">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.id} className="cs-card">
              <span className="cs-card__sector">{cs.sector}</span>
              <h3 className="cs-card__title">{cs.title}</h3>

              <div className="cs-card__img-wrap">
                <img src={cs.image} alt={cs.title} className="cs-card__img" />
              </div>

              <div className="cs-card__body">
                {cs.paragraphs.map((paragraph, i) => (
                  <p key={i} className="cs-card__desc">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesHighlights
