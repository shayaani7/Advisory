import crypto3d from '../assets/crypto-3d.png'
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
          <span className="process__eyebrow">Our Process</span>
          <h2 className="process__heading">
            A Framework Built for Clarity and Speed
          </h2>
          <p className="process__text">
            Our six-step process ensures your project moves from strategy to
            deployment with precision.
          </p>

          <div className="process__actions">
            <a href="#booking" className="btn btn--primary process__btn">
              Get in Contact
            </a>
            <a href="#insights" className="process__link">
              Case Studies
            </a>
          </div>

          <img
            className="process__graphic"
            src={crypto3d}
            alt=""
            aria-hidden="true"
          />
        </div>

        <ol className="process__timeline">
          {STEPS.map((step, index) => (
            <li
              className={`process__step ${
                index % 2 === 0 ? 'process__step--left' : 'process__step--right'
              }`}
              key={step.num}
            >
              <div className="process__card">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <span className="process__num">{step.num}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
