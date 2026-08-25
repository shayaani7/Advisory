import laptopCardImg from '../assets/laptopcard.png'
import tradeImg from '../assets/trade.png'
import buildingImg from '../assets/building.png'
import codingImg from '../assets/coding.png'
import plantImg from '../assets/plant.png'
import handshakeImg from '../assets/handshake.png'
import './KnowledgeArticles.css'

const ARTICLES = [
  {
    id: 1,
    image: laptopCardImg,
    date: 'February 2024',
    title: 'AAOIFI Standard No. 62: What It Means for Digital Banks',
    description:
      'A comprehensive analysis of the latest AAOIFI pronouncement and its structural implications for digital-only Islamic banking platforms.',
  },
  {
    id: 2,
    image: tradeImg,
    date: 'January 2024',
    title: 'Cryptocurrency Compliance: A Shariah Framework for 2024',
    description:
      'Navigating the evolving regulatory landscape for crypto assets through the lens of classical Fiqh and modern financial engineering.',
  },
  {
    id: 3,
    image: buildingImg,
    date: 'December 2023',
    title: 'Islamic Finance in Sub-Saharan Africa: The Untapped Frontier',
    description:
      'How central banks in Uganda, Ethiopia, and Kenya are drafting their first Islamic banking frameworks—and what it means for global investors.',
  },
  {
    id: 4,
    image: codingImg,
    date: 'November 2023',
    title: 'RegTech Meets Shariah: Automating Compliance at Scale',
    description:
      'How fintech platforms can embed Shariah screening protocols directly into their backend workflows and user interfaces.',
  },
  {
    id: 5,
    image: plantImg,
    date: 'October 2023',
    title: 'Green Sukuk: Sustainability Through Islamic Finance',
    description:
      'Structuring environmentally focused Sukuk issuances that align with both ESG standards and Maqasid al-Shariah.',
  },
  {
    id: 6,
    image: handshakeImg,
    date: 'September 2023',
    title: 'Launching an Islamic Window: A Step-by-Step Guide',
    description:
      'A practical guide for conventional banks looking to launch a Shariah-compliant banking division with full regulatory approval.',
  },
]

function KnowledgeArticles() {
  return (
    <section className="kr-articles" id="kr-articles">
      <div className="container kr-articles__inner">
        <div className="kr-articles__header">
          <h2 className="kr-articles__heading">Articles &amp; Publications</h2>
        </div>

        <p className="kr-articles__sub">
          Expert analyses on AAOIFI developments, RegTech integration, crypto
          compliance, and frontier market expansion.
        </p>

        <div className="kr-articles__grid">
          {ARTICLES.map((article) => (
            <article key={article.id} className="kr-art-card">
              <div className="kr-art-card__img-wrap">
                <img
                  src={article.image}
                  alt={article.title}
                  className="kr-art-card__img"
                />
              </div>
              <div className="kr-art-card__body">
                <span className="kr-art-card__date">{article.date}</span>
                <h3 className="kr-art-card__title">{article.title}</h3>
                <p className="kr-art-card__desc">{article.description}</p>
              </div>
            </article>
          ))}
        </div>

        <button type="button" className="kr-articles__more">
          Load More
        </button>
      </div>
    </section>
  )
}

export default KnowledgeArticles
