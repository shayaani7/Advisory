import Header from './components/Header.jsx'
import KnowledgeHero from './components/KnowledgeHero.jsx'
import KnowledgeArticles from './components/KnowledgeArticles.jsx'
import KnowledgeFeatured from './components/KnowledgeFeatured.jsx'
import KnowledgeAdvisor from './components/KnowledgeAdvisor.jsx'
import KnowledgeCTA from './components/KnowledgeCTA.jsx'
import AdvisoryFooter from './components/AdvisoryFooter.jsx'

function KnowledgePage() {
  return (
    <>
      <Header />
      <main>
        <KnowledgeHero />
        <KnowledgeArticles />
        <KnowledgeFeatured />
        <KnowledgeAdvisor />
        <KnowledgeCTA />
      </main>
      <AdvisoryFooter />
    </>
  )
}

export default KnowledgePage
