import Header from './components/Header.jsx'
import CaseStudiesHero from './components/CaseStudiesHero.jsx'
import CaseStudiesTrusted from './components/CaseStudiesTrusted.jsx'
import CaseStudiesHighlights from './components/CaseStudiesHighlights.jsx'
import CaseStudiesCTA from './components/CaseStudiesCTA.jsx'
import AdvisoryFooter from './components/AdvisoryFooter.jsx'

function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudiesTrusted />
        <CaseStudiesHighlights />
        <CaseStudiesCTA />
      </main>
      <AdvisoryFooter />
    </>
  )
}

export default CaseStudiesPage
