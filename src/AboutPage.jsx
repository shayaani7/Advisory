import Header from './components/Header.jsx'
import AboutHero from './components/AboutHero.jsx'
import AboutMission from './components/AboutMission.jsx'
import AboutLeader from './components/AboutLeader.jsx'
import AboutSSB from './components/AboutSSB.jsx'
import AboutTestimonials from './components/AboutTestimonials.jsx'
import AboutCTA from './components/AboutCTA.jsx'
import Footer from './components/Footer.jsx'

function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutLeader />
        <AboutSSB />
        <AboutTestimonials />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
