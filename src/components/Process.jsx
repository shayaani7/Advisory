import crypto3d from '../assets/crypto-3d.png'
import Reveal from './Reveal.jsx'
import './Process.css'

const STEPS = [
  {
    num: 1,
    title: 'Strategic Consultation',
    text: 'Defining your commercial and operational objectives.',
  },
  {
    num: 2,
    title: 'Diagnostic Review',
    text: 'Identifying structural and compliance gaps.',
  },
  {
    num: 3,
    title: 'Shariah Structuring',
    text: 'Engineering the financial model and workflow.',
  },
  {
    num: 4,
    title: 'Documentation',
    text: 'Drafting contracts and issuing binding rulings.',
  },
  {
    num: 5,
    title: 'Implementation',
    text: 'Guiding your teams through deployment.',
  },
  {
    num: 6,
    title: 'Ongoing Governance',
    text: 'Annual board representation and audit oversight.',
  },
]

function Process() {
  return (
    <section className="process" id="process">
      <div className="container process__inner">
        <div className="process__copy">
          <Reveal as="span" className="process__eyebrow" variant="fade">
            Our Process
          </Reveal>
          <Reveal as="h2" className="process__heading" delay={80}>
            A Framework Built for Clarity and Speed
          </Reveal>
          <Reveal as="p" className="process__text" delay={140}>
            Our six-step process ensures your project moves from strategy to
            deployment with precision.
          </Reveal>

          <Reveal className="process__actions" delay={200}>
            <a href="#get-in-touch" className="btn btn--primary process__btn">
              Get in Contact
            </a>
            <a href="#insights" className="process__link">
              Case Studies
            </a>
          </Reveal>

          <Reveal variant="left" delay={280} className="process__graphic-wrap">
            <img
              className="process__graphic"
              src={crypto3d}
              alt=""
              aria-hidden="true"
            />
          </Reveal>
        </div>

        <ol className="process__timeline">
          {STEPS.map((step, index) => (
            <Reveal
              as="li"
              className={`process__step ${
                index % 2 === 0 ? 'process__step--left' : 'process__step--right'
              }`}
              key={step.num}
              variant={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 70}
              threshold={0.35}
            >
              <div className="process__card">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <span className="process__num">{step.num}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
