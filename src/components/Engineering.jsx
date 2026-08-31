import architectureBg from '../assets/architecture-bg.png'
import groupIcon from '../assets/Group.png'
import savingBankIcon from '../assets/saving-bank-1-24.png'
import cryptoIcon from '../assets/virtual-coin-crypto-bitcoin-40.png'
import abacusIcon from '../assets/accounting-abacus-26.png'
import goldBarsIcon from '../assets/gold-bars-18.png'
import visaIcon from '../assets/credit-card-visa-13.png'
import Reveal from './Reveal.jsx'
import { smoothScrollToId } from '../utils/smoothScroll.js'
import './Engineering.css'

const ICONS = {
  group: <img src={groupIcon} alt="" aria-hidden="true" />,
  bank: <img src={savingBankIcon} alt="" aria-hidden="true" />,
  crypto: <img src={cryptoIcon} alt="" aria-hidden="true" />,
  abacus: <img src={abacusIcon} alt="" aria-hidden="true" />,
  bars: <img src={goldBarsIcon} alt="" aria-hidden="true" />,
  visa: <img src={visaIcon} alt="" aria-hidden="true" />,
}

const SERVICES = [
  {
    icon: 'group',
    title: 'Financial Product Structuring',
    text: 'Murabaha, Musharakah, Ijarah, Sukuk, and Takaful frameworks for banks and corporates.',
  },
  {
    icon: 'bank',
    title: 'Digital Banking Compliance',
    text: 'End-to-end Shariah compliance for digital-only Islamic banks and Islamic Windows.',
  },
  {
    icon: 'crypto',
    title: 'FinTech, Crypto & Digital Assets',
    text: 'Fatwa on cryptocurrencies, tokenized RWAs, and digital lending platforms.',
  },
  {
    icon: 'abacus',
    title: 'RegTech Integration',
    text: 'Automating Shariah screening and compliance protocols in your platform\'s workflow.',
  },
  {
    icon: 'visa',
    title: 'Frontier Market Expansion',
    text: 'Regulatory advisory for central banks and institutions in emerging markets.',
  },
  {
    icon: 'bars',
    title: 'Sustainable Finance & Green Sukuk',
    text: 'ESG funds, ethical portfolios, and Green Sukuk aligned with Maqasid al-Shariah.',
  },
]

function Engineering() {
  return (
    <section className="engineering" id="services">
      <div className="engineering__shell">
        <div
          className="engineering__bg"
          style={{ backgroundImage: `url(${architectureBg})` }}
          aria-hidden="true"
        />
        <div className="engineering__overlay" aria-hidden="true" />

        <div className="container engineering__inner">
          <Reveal className="engineering__head" variant="up">
            <div>
              <h2 className="engineering__heading">
                End-to-End Islamic <br />
                Engineering
              </h2>
              <p className="engineering__text">
                Highly specialized, commercially viable structuring across
                traditional and frontier financial sectors.
              </p>
            </div>
            <a
              href="#engineering-services"
              className="btn btn--primary engineering__cta"
              onClick={(event) => smoothScrollToId(event, 'engineering-services')}
            >
              Explore our services below
              <span className="btn__icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14M5 12l7 7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </Reveal>

          <div className="engineering__grid" id="engineering-services">
            {SERVICES.map((service, index) => (
              <Reveal
                as="article"
                className="service-card"
                key={service.title}
                delay={index * 90}
              >
                <div className="service-card__head">
                  <h3>{service.title}</h3>
                  <span className="service-card__icon">{ICONS[service.icon]}</span>
                </div>
                <p>{service.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Engineering
