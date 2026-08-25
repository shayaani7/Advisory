import Header from './components/Header.jsx'
import AdvisoryHero from './components/AdvisoryHero.jsx'
import AdvisoryServices from './components/AdvisoryServices.jsx'
import AdvisoryCTA from './components/AdvisoryCTA.jsx'
import AdvisoryFooter from './components/AdvisoryFooter.jsx'

function AdvisoryPage() {
  return (
    <>
      <Header />
      <main>
        <AdvisoryHero />
        <AdvisoryServices />
        <AdvisoryCTA />
      </main>
      <AdvisoryFooter />
    </>
  )
}

export default AdvisoryPage
