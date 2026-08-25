import './AdvisoryCTA.css'

function AdvisoryCTA() {
  return (
    <section className="adv-cta">
      <div className="container adv-cta__inner">
        <div className="adv-cta__content">
          <h2 className="adv-cta__heading">
            Ready to Scope Your Next Project?
          </h2>
          <p className="adv-cta__sub">
            Schedule a confidential service scoping call with our Principal Advisor.
          </p>
          <a href="#booking" className="adv-cta__btn" id="adv-schedule-btn">
            Schedule a Service Scoping Call
          </a>
        </div>
      </div>
    </section>
  )
}

export default AdvisoryCTA
