import { useEffect, useState } from 'react'
import muftiImran from '../assets/mufti_imran-removebg-preview.png'
import luqman from '../assets/luqman.jpeg'
import halah from '../assets/halah.jpg'
import Reveal from './Reveal.jsx'
import './AboutSSB.css'

const BOARD_MEMBERS = [
  {
    id: 'imran',
    headerClass: 'ssb-card__header',
    photoClass: 'ssb-card__photo ssb-card__photo--cutout',
    wrapClass: 'ssb-card__photo-wrap',
    img: muftiImran,
    imgAlt: 'Mufti Dr. Imran Ullah',
    role: 'BOARD MEMBER & SENIOR JURIST',
    name: 'Mufti Dr. Imran Ullah',
    degrees: 'Ph.D. in Islamic Studies | MBA in Islamic Finance | AAOIFI CSAA | Takhassus fil Fiqh',
    bio: [
      'With over 16 years of elite institutional experience, Mufti Dr. Imran Ullah bridges classical Islamic jurisprudence with modern corporate finance. Holding a Ph.D. specializing in Islamic Finance, an MBA, and the globally recognized AAOIFI Certified Shariah Advisor and Auditor (CSAA) designation, he provides authoritative Shariah governance, compliance monitoring, and risk mitigation strategies.',
      'As a graduate of the rigorous Takhassus fil Fiqh (Specialization in Islamic Jurisprudence) and Dars-e-Nizami programs from Jamia Darul Uloom Karachi, he leads the board in issuing formal Fatawa and structuring complex financial ecosystems. He works directly with business stakeholders and the Ulama community to ensure that corporate contracts and financial transactions maintain absolute adherence to global AAOIFI Shariah standards.',
    ],
  },
  {
    id: 'luqman',
    headerClass: 'ssb-card__header ssb-card__header--mint',
    photoClass: 'ssb-card__photo ssb-card__photo--cover ssb-card__photo--luqman',
    wrapClass: 'ssb-card__photo-wrap',
    img: luqman,
    imgAlt: 'Muhammad Luqman',
    role: 'BOARD MEMBER',
    name: 'Muhammad Luqman',
    degrees: 'MS in Shariah Finance | Shahadatul Alimiyyah | Educator in Islamic Commerce',
    bio: [
      'With over 13 years of expertise in Islamic jurisprudence and institutional research, Muhammad L. brings deep specialization in Shariah-compliant transactions and Islamic economics to the advisory board. He bridges traditional scholarship with modern financial frameworks, translating complex classical Fiqh into practical, regulator-ready guides for modern businesses and educational institutions.',
      'His analytical precision is grounded in a robust, dual-track academic foundation: an MS in Shariah Finance and an MS in Islamic Theology from Riphah International University, alongside the rigorous Shahadatul Alimiyyah (Dars-e-Nizami) from Jamia Faisalabad. An authoritative voice in ethical commerce, he served as a university lecturer for six years focusing on Trade and Business in Islam, ensuring that all corporate financial literature and business contracts strictly adhere to elite scholarly standards.',
    ],
  },
  {
    id: 'halah',
    headerClass: 'ssb-card__header ssb-card__header--peach',
    photoClass: 'ssb-card__photo ssb-card__photo--cover',
    wrapClass: 'ssb-card__photo-wrap',
    img: halah,
    imgAlt: 'Halah Ghazi',
    role: 'SHARIAH RESEARCH ANALYST',
    name: 'Halah Ghazi',
    degrees: 'Islamic Finance | Digital Product Innovation | Fintech Structuring',
    bio: [
      'As a Shariah Research Analyst, Halah supports the Shariah Supervisory Board by conducting rigorous qualitative and quantitative screening of client operations and modern financial products. She bridges the gap between raw market data and Islamic jurisprudence, ensuring that all frameworks are meticulously pre-audited before final board certification.',
      'Concurrently serving as an Associate Editor at Cambridge IFA, Halah leads research-driven editorial content and product innovation across Islamic banking, capital markets, and wealth management. She played a central role in developing the data framework and content architecture for the Islamic Financial Times (IFT) App. Working closely with the senior advisory team on curriculum design and Shariah-compliant product structuring, her unique expertise ensures that modern fintech innovations meet uncompromising ethical, regulatory, and sustainability standards.',
    ],
  },
]

function AboutSSB() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [selected])

  return (
    <section className="about-ssb" id="ssb">
      <div className="container">
        <Reveal className="about-ssb__head">
          <h2 className="about-ssb__heading">
            The Elaf Shariah Supervisory Board{' '}
            <span className="about-ssb__heading-accent">(SSB)</span>
          </h2>
          <p className="about-ssb__subtext">
            When formal Fatwa issuance is required, we convene a full quorum of elite scholars
            and compliance architects.
          </p>
        </Reveal>

        <div className="about-ssb__grid">
          {BOARD_MEMBERS.map((member, index) => (
            <Reveal as="article" className="ssb-card" key={member.id} delay={index * 120}>
              <div className={member.headerClass}>
                <div className={member.wrapClass}>
                  <img
                    src={member.img}
                    alt={member.imgAlt}
                    className={member.photoClass}
                  />
                </div>
                <span className="ssb-card__role">{member.role}</span>
              </div>

              <div className="ssb-card__body">
                <h3 className="ssb-card__name">{member.name}</h3>
                <p className="ssb-card__degrees">{member.degrees}</p>
                <p className="ssb-card__bio">{member.bio.join(' ')}</p>
                <button
                  type="button"
                  className="ssb-card__read-more"
                  onClick={() => setSelected(member)}
                >
                  Read More →
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="ssb-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ssb-modal-title"
          onClick={() => setSelected(null)}
        >
          <div
            className="ssb-modal__panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="ssb-modal__close"
              aria-label="Close profile"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <div className={`ssb-modal__photo ${selected.headerClass}`}>
              <img
                src={selected.img}
                alt={selected.imgAlt}
                className={selected.photoClass}
              />
            </div>
            <div className="ssb-modal__content">
              <span className="ssb-modal__role">{selected.role}</span>
              <h3 id="ssb-modal-title" className="ssb-modal__name">
                {selected.name}
              </h3>
              <p className="ssb-modal__degrees">{selected.degrees}</p>
              {selected.bio.map((para) => (
                <p key={para.slice(0, 40)} className="ssb-modal__bio">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AboutSSB
