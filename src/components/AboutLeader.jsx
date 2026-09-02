import habibPic from '../assets/habibpic.png'
import Reveal from './Reveal.jsx'
import './AboutLeader.css'

const CREDENTIALS = [
  { label: 'AAOIFI-Certified Shariah Advisor', variant: 'outline' },
  { label: 'Top 1% Global Expert', variant: 'outline' },
  { label: '8-Year Classical Shariah Degree', variant: 'outline' },
  { label: "Master's in Arabic", variant: 'outline' },
  { label: 'Certified in Entrepreneurship', variant: 'outline' },
  { label: '15+ Years Experience', variant: 'outline' },
  { label: '200+ Clients Advised', variant: 'outline' },
  { label: 'MBA/MS in Islamic Finance', variant: 'outline' },
]

function AboutLeader() {
  return (
    <section className="about-leader" id="leadership">
      <div className="container about-leader__inner">
        <Reveal className="about-leader__portrait-col" variant="left">
          <div className="about-leader__photo-wrap">
            <img
              src={habibPic}
              alt="Habib Ur Rahman Awan – Founder & Principal Director/CEO"
              className="about-leader__photo"
            />
          </div>
          <div className="about-leader__caption">
            <span className="about-leader__role">LEADERSHIP</span>
            <h3 className="about-leader__name">Habib Ur Rahman Awan</h3>
            <p className="about-leader__title">FOUNDER & PRINCIPAL DIRECTOR/CEO</p>
          </div>
        </Reveal>

        <div className="about-leader__bio-col">
          <Reveal className="about-leader__bio-text" delay={80}>
            <p>
              An AAOIFI-Certified Shariah Advisor and globally recognized scholar with over 15 years
              of experience advising 200+ clients.
            </p>
            <p>
              Consistently ranked as a Top 1% Global Expert, Habib possesses a uniquely powerful
              multi-dimensional background: an 8-Year Classical Shariah Degree paired with a
              Master&apos;s Degree in Arabic, structurally reinforced by an MBA/MS in Islamic Finance
              and a Certification in Entrepreneurship.
            </p>
            <p>
              His absolute mission is to provide clear, practical guidance that bridges the gap
              between classical theology and modern profitability.
            </p>
          </Reveal>

          <div className="about-leader__credentials">
            {CREDENTIALS.map((c, index) => (
              <Reveal
                as="span"
                key={c.label}
                delay={140 + index * 55}
                variant="scale"
                className={`about-leader__badge about-leader__badge--${c.variant}`}
              >
                {c.label}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutLeader
