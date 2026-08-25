import yellowStar from '../assets/yellow star.png'
import './Barriers.css'

const BARRIERS = [
  {
    number: '01.',
    title: 'Theoretical Friction',
    text: (
      <>
        Static compliance opinions from traditional scholars that lack a viable
        go-to-market strategy. Your products remain <strong>stuck</strong> in
        committee review while <em>competitors launch</em>.
      </>
    ),
  },
  {
    number: '02.',
    title: 'Operational Incompatibility',
    text: (
      <>
        Financial Products that appear compliant on paper but cannot be
        integrated into modern fintech ecosystems or smart contracts. The gap
        between <strong>Fatwa and code</strong> is wide.
      </>
    ),
  },
  {
    number: '03.',
    title: 'Governance Gaps',
    text: (
      <>
        <em>Rapidly scaling digital banks and platforms</em> that lack the
        rigorous oversight required to satisfy institutional investors and
        central bank regulators.
      </>
    ),
  },
]

function Barriers() {
  return (
    <section className="barriers">
      <div className="container">
        <h2 className="barriers__heading">
          What are the{' '}
          <span className="barriers__highlight-wrap">
            <span className="highlight">Barriers?</span>
            <img className="barriers__sparkle" src={yellowStar} alt="" aria-hidden="true" />
          </span>
        </h2>

        <div className="barriers__grid">
          {BARRIERS.map((item) => (
            <article className="barrier-card barrier-card--frame" key={item.number}>
              <header className="barrier-card__head">
                <span className={`barrier-card__title ${item.number === '02.' ? 'barrier-card__title--long' : ''}`}>
                  {item.title}
                </span>
                <span className="barrier-card__number">{item.number}</span>
              </header>
              <div className="barrier-card__body">
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Barriers
