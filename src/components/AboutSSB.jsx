import gregoryGill from '../assets/gregory-gill.png'
import nadia from '../assets/nadia.png'
import sarah from '../assets/sarah.png'
import './AboutSSB.css'

const BOARD_MEMBERS = [
  {
    img: gregoryGill,
    imgAlt: 'Mufti Dr. Imran Ullah',
    role: 'BOARD MEMBER & SENIOR JURIST',
    name: 'Mufti Dr. Imran Ullah',
    degrees: 'PhD in Shariah Finance | Fiqh al-Muamalat | Glasgow University',
    bio: `With over 18 years of elite institutional experience, Mufti Dr. Imran Ullah's previous practice area in jurisprudence with modern corporate finance. Holding a PhD, specialising in Islamic Finance, an MBA, and the globally recognized AAOIFI-Certified Shariah Advisor and Auditor (CSAA) designation, he advises on Shariah structuring, regulatory monitoring, compliance monitoring, and risk mitigation strategies.

As a graduate of the rigorous Takmeus fil-Fiqh Specialization in Islamic Jurisprudence) and Dars-e-Nizami programs from Jamia Darul Uloom Karachi, he brings the classical scholarship to modern finance. He works directly with business stakeholders and the Ulama community to ensure that corporate contracts and financial transactions maintain absolute adherence to global AAOIFI Shariah standards.`,
    link: '#',
  },
  {
    img: nadia,
    imgAlt: 'Muhammad Luqman',
    role: 'BOARD MEMBER & COMPLIANCE ARCHITECT',
    name: 'Muhammad Luqman',
    degrees: 'MA in Shariah Finance | Minhajul Uloom | Minister in Islamic Commerce',
    bio: `With over 11 years of expertise in Islamic jurisprudence and Islamic economics in the advisory sector, he brings deep specialisation in Shariah-compliant transactions and Islamic economics to the advisory room. He bridges traditional scholarship with modern financial frameworks, translating complex classical Islamic financial contracts into actionable frameworks for modern businesses and educational institutions.

His analytical precision is grounded in a robust foundation of Shariah law, with an MFI in Islamic Theology from Pakistan International University alongside the rigorous Dars-e-Nizami program from Jamia ul-Uloom al-Islamiyya in Faisalabad. An authoritative voice in official advisory circles, he is particularly sought for his expertise on Trade and Business in Islam, ensuring that all classical financial transactions and business contracts strictly adhere to elite scholarly standards.`,
    link: '#',
  },
  {
    img: sarah,
    imgAlt: 'Halah Ghazi',
    role: 'SHARIAH RESEARCH ANALYST',
    name: 'Halah Ghazi',
    degrees: 'Islamic Finance & Product Innovation | Fintech',
    bio: `As a Shariah Research Analyst, Halah supports the Shariah Supervisory Board by conducting rigorous qualitative and quantitative screening of client operations and modern financial products. She bridges the gap between market data and institutional rigor, ensuring that all frameworks are aligned with best-practice before their issuance of a final Shariah attestation.

Concurrently serving as an Associate Editor at Cambridge IFA, Halah leads research-driven initiatives spanning Shariah certification standards, Islamic banking, capital markets, and wealth management. She played a central role in developing the data framework and content architecture for the leading FinTech Issue NFT App. Working closely with the senior advisory team has solidified her background as a Shariah-compliant product design expert who can translate complex modern fintech innovations meet uncompromising ethical, regulatory, and sustainability standards.`,
    link: '#',
  },
]

function StarRow() {
  return (
    <span className="ssb-card__stars" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 1l1.76 3.57L14 5.24l-3 2.92.71 4.13L8 10.17l-3.71 2.12.71-4.13L2 5.24l4.24-.67z" />
        </svg>
      ))}
    </span>
  )
}

function AboutSSB() {
  return (
    <section className="about-ssb" id="ssb">
      <div className="container">
        <div className="about-ssb__head">
          <h2 className="about-ssb__heading">
            The Elaf Shariah Supervisory Board{' '}
            <span className="about-ssb__heading-accent">(SSB)</span>
          </h2>
          <p className="about-ssb__subtext">
            When formal Fatwa issuance is required, we convene a full quorum of elite scholars
            and compliance architects.
          </p>
        </div>

        <div className="about-ssb__grid">
          {BOARD_MEMBERS.map((member) => (
            <article className="ssb-card" key={member.name}>
              <div className="ssb-card__header">
                <div className="ssb-card__photo-wrap">
                  <img
                    src={member.img}
                    alt={member.imgAlt}
                    className="ssb-card__photo"
                  />
                </div>
                <span className="ssb-card__role">{member.role}</span>
              </div>

              <div className="ssb-card__body">
                <h3 className="ssb-card__name">{member.name}</h3>
                <p className="ssb-card__degrees">{member.degrees}</p>
                <p className="ssb-card__bio">{member.bio}</p>
                <a href={member.link} className="ssb-card__read-more">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSSB
