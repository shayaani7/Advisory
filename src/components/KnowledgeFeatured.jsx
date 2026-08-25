import libraryBg from '../assets/image 142.png'
import quranImg from '../assets/quran.png'
import ayatImg from '../assets/ayat.png'
import './KnowledgeFeatured.css'

const FEATURED = [
  {
    id: 1,
    image: quranImg,
    category: 'Featured Book of the week',
    title: 'Trade and Business in Islam',
    description:
      'A comprehensive guide to the principles of ethical trade and commerce in Islamic jurisprudence. Covers the foundational rules governing Halal transactions, partnerships, and financial dealings as derived from the Quran, Sunnah, and classical Fiqh scholarship.',
    rating: 4,
  },
  {
    id: 2,
    image: ayatImg,
    category: 'Featured Book of the week',
    title: 'AAOIFI Standard No. 59 — Translated & Annotated',
    description:
      'A professionally translated and annotated version of AAOIFI Standard No. 59 on the sale of debt. Includes practical commentary for financial institutions implementing the standard within their product structuring and compliance workflows.',
    rating: 4,
  },
]

function StarRating({ count }) {
  return (
    <div className="kr-feat-item__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 13.8l-4.8 2.6.9-5.4-3.9-3.8 5.4-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

function KnowledgeFeatured() {
  return (
    <section className="kr-featured" id="kr-featured">
      <div
        className="kr-featured__bg"
        style={{ backgroundImage: `url(${libraryBg})` }}
        aria-hidden="true"
      />
      <div className="kr-featured__overlay" aria-hidden="true" />

      <div className="container kr-featured__inner">
        <div className="kr-featured__header">
          <h2 className="kr-featured__heading">Articles &amp; Publications</h2>
        </div>

        <p className="kr-featured__sub">
          Expert analyses on AAOIFI developments, RegTech integration, crypto
          compliance, and frontier market expansion.
        </p>

        <div className="kr-featured__list">
          {FEATURED.map((item) => (
            <article key={item.id} className="kr-feat-item">
              <div className="kr-feat-item__img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="kr-feat-item__img"
                />
              </div>
              <div className="kr-feat-item__body">
                <span className="kr-feat-item__category">{item.category}</span>
                <h3 className="kr-feat-item__title">{item.title}</h3>
                <StarRating count={item.rating} />
                <p className="kr-feat-item__desc">{item.description}</p>
                <a href="#" className="kr-feat-item__read-more">
                  VIEW MORE
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KnowledgeFeatured
