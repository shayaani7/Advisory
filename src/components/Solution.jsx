import asterisk from '../assets/blue star.png'
import yellowStar from '../assets/yellow star.png'
import financeStats from '../assets/finance-stats-3d.png'
import Reveal from './Reveal.jsx'
import './Solution.css'

function Solution() {
  return (
    <section className="solution">
      <div className="container solution__inner">
        <div className="solution__content-wrapper">
          <img className="solution__asterisk" src={asterisk} alt="" aria-hidden="true" />

          <Reveal as="h2" className="solution__heading" variant="up">
            The{' '}
            <span className="solution__highlight-wrap">
              <span className="highlight">solution?</span>
              <img className="solution__sparkle" src={yellowStar} alt="" aria-hidden="true" />
            </span>
          </Reveal>

          <Reveal className="solution__card" variant="scale" delay={120}>
            <h3>Elaf Solution</h3>
            <p>
              We solve these challenges at the foundational level. We seamlessly{' '}
              <em>align classical Fiqh</em> with modern financial engineering,
              ensuring your enterprise scales both ethically and profitably.
            </p>
          </Reveal>

          <Reveal className="solution__stats-wrap" variant="right" delay={280}>
            <img
              className="solution__stats"
              src={financeStats}
              alt=""
              aria-hidden="true"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Solution
