import structuringImg from '../assets/islamic-financial-structuring.png'
import gavel from '../assets/booklaw.png'
import moneyHands from '../assets/cash.png'
import dashboard from '../assets/transaction.png'
import handshake from '../assets/happypartner.png'
import officeDesk from '../assets/laptop.png'
import bulletIcon from '../assets/Vector.png'
import './AdvisoryServices.css'

const SERVICES = [
  {
    id: '01',
    title: 'Islamic Financial Product Structuring',
    description:
      'We design executable, regulator-compliant frameworks for banks and corporate institutions.',
    bullets: [
      'Mudarabah financing architectures & calculators.',
      'Musharakah & Musharakah corporate partnerships.',
      'Ijara (leasing) frameworks & Sukuk debt conceptualization.',
      'Takaful Islamic Insurance and supply chain financing models.',
    ],
    image: structuringImg,
    imageAlt: 'Global Islamic financial product structuring',
    imageOnRight: true,
  },
  {
    id: '02',
    title: 'Digital Banking Compliance & Islamic Windows',
    description:
      'End-to-end Shariah compliance for the next generation of banking.',
    bullets: [
      `Advising new, digital-only Islamic banks (mirroring frameworks like UAE's Raya Bank or Saudi's D360 Bank).`,
      `Structuring and launching digital "Islamic Windows" for conventional-tier 1 banks.`,
    ],
    image: gavel,
    imageAlt: 'Gavel on law books - regulatory compliance',
    imageOnRight: false,
  },
  {
    id: '03',
    title: 'Islamic FinTech, Crypto & Digital Assets',
    description:
      'We do not merely audit innovation - we engineer it ethically.',
    bullets: [
      {
        label: 'Crypto & Smart Contracts:',
        text: 'Providing definitive rulings (Fatwas) and structural advice on specific cryptocurrencies, stablecoins, and blockchain ecosystems.',
      },
      {
        label: 'Robo-advisors:',
        text: 'Structuring and advising AI-powered Shariah financial wellness apps for wealth management.',
      },
      {
        label: 'Digital Lending & Crowdfunding:',
        text: 'Peer-to-peer and embedded finance solutions.',
      },
    ],
    image: moneyHands,
    imageAlt: 'Digital assets and money exchange',
    imageOnRight: true,
  },
  {
    id: '04',
    title: 'RegTech Integration & Automation',
    description:
      'Bridging the gap between software and Shariah.',
    bullets: [
      'Advising financial technology platforms to automate Shariah screening and compliance protocols directly within their LEAP and backend workflows.',
    ],
    image: dashboard,
    imageAlt: 'RegTech dashboard and compliance automation',
    imageOnRight: false,
  },
  {
    id: '05',
    title: 'Frontier Market Expansion & Regulatory Advisory',
    description:
      'Islamic finance is rapidly expanding beyond the GCC and Southeast Asia. We guide institutions entering new territories.',
    bullets: [
      'New Market Entry: Advising banking institutions in Sub-Saharan Africa (e.g., Uganda, Ethiopia) and Central Asia to draft their first Islamic banking frameworks and applications.',
      'Liquidity Management: Helping newly established Islamic banks in frontier markets develop Shariah-compliant short-term liquidity tools to manage their treasury operations.',
    ],
    image: handshake,
    imageAlt: 'Business partnership and frontier market expansion',
    imageOnRight: true,
  },
  {
    id: '06',
    title: 'Sustainable Finance & Green Sukuk',
    description:
      'Structuring environmentally focused financial instruments that align with both global sustainability standards and Maqasid al-Shariah.',
    bullets: [
      'ESG fund structuring and ethical portfolio design.',
      'Green Sukuk issuance frameworks.',
      'Alignment with international sustainability reporting standards.',
    ],
    image: officeDesk,
    imageAlt: 'Sustainable finance and green office environment',
    imageOnRight: false,
  },
]

function AdvisoryServices() {
  return (
    <section className="adv-services" id="adv-services-list">
      <div className="container adv-services__inner">
        {SERVICES.map((svc) => (
          <article
            key={svc.id}
            className={`adv-card ${svc.imageOnRight ? 'adv-card--img-right' : 'adv-card--img-left'}`}
          >
            <div className="adv-card__content">
              <span className="adv-card__num">{svc.id}</span>
              <h2 className="adv-card__title">{svc.title}</h2>
              <p className="adv-card__desc">{svc.description}</p>
              <ul className="adv-card__bullets">
                {svc.bullets.map((b, i) => (
                  <li key={i}>
                    <img
                      src={bulletIcon}
                      alt=""
                      className="adv-card__bullet-icon"
                      aria-hidden="true"
                    />
                    <span>
                      {typeof b === 'object' ? (
                        <>
                          <strong className="adv-card__bullet-label">{b.label}</strong>{' '}
                          {b.text}
                        </>
                      ) : (
                        b
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="adv-card__img-wrap">
              <img
                src={svc.image}
                alt={svc.imageAlt}
                className="adv-card__img"
              />
            </div>

          </article>
        ))}
      </div>
    </section>
  )
}

export default AdvisoryServices
