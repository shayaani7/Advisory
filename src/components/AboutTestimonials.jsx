import dpIcon from '../assets/dpsvg.png'
import Reveal from './Reveal.jsx'
import './AboutTestimonials.css'

const TESTIMONIALS = [
  {
    stars: 5,
    title: 'True Professional!',
    text: `I asked Habib to translate an Arabic document from English — it was the AAOIFI Standard 59. Habib did a FANTASTIC job on time and within budget. It looked effortless working with him despite the fact that he is based in Pakistan and we are in Canada. Habib is a true professional, takes his work seriously, and it is a pleasure to deal with. We intend to use his services regularly going ahead. Thank you very much Habib Sir! Much appreciation.`,
    author: '— Head of Compliance, BDC Digital Bank',
    rating: '5.0',
  },
  {
    stars: 5,
    title: 'Highly Recommend!',
    text: `Habib is very knowledgeable in finance and Islamic finance specifically. He is a very good communicator and goes above and beyond to help his clients. He helped us develop an Islamic Mobile Insurance product and answered many complicated questions we had. I highly recommend Habib if you have any need for consultation related to Islamic Finance.`,
    author: '— VP of Product, European Investment Firm',
    rating: '5.0',
  },
  {
    stars: 5,
    title: 'Detailed Communication!',
    text: `I had an excellent experience working with Habib. His knowledge of banking, AAOIFI standards was impressive. He provided precise, actionable, and value-added insights, and his thoroughness in all analysis gave me total confidence in the accuracy and completeness of his work. His ability to create and explain finance concepts in a remaining professional, ethical and not just theoretic…`,
    author: '— CEO, U.S. FinTech Platform',
    rating: '5.0',
  },
]

function StarRow({ count }) {
  return (
    <div className="testimonial-card__stars" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
          <path d="M7 .5l1.55 3.14L12 4.24l-2.5 2.44.59 3.44L7 8.54l-3.09 1.58.59-3.44L2 4.24l3.45-.6z" />
        </svg>
      ))}
    </div>
  )
}

function AboutTestimonials() {
  return (
    <section className="about-testimonials">
      <div className="container">
        <Reveal className="about-testimonials__head">
          <span className="eyebrow">What Our Clients Say</span>
          <h2 className="about-testimonials__heading">
            Client <span className="about-testimonials__heading-light">Testimonials</span>
          </h2>
        </Reveal>

        <div className="about-testimonials__grid">
          {TESTIMONIALS.map((t, index) => (
            <Reveal as="article" className="testimonial-card" key={t.title} delay={index * 120}>
              <div className="testimonial-card__header">
                <div className="testimonial-card__meta">
                  <span className="testimonial-card__rating">{t.rating}</span>
                  <StarRow count={t.stars} />
                </div>
                <span className="testimonial-card__dp-wrap" aria-hidden="true">
                  <img
                    src={dpIcon}
                    alt=""
                    className="testimonial-card__dp-icon"
                  />
                </span>
              </div>
              <h3 className="testimonial-card__title">{t.title}</h3>
              <p className="testimonial-card__author">{t.author}</p>
              <p className="testimonial-card__text">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTestimonials
