import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Disconnect from './components/Disconnect.jsx'
import Barriers from './components/Barriers.jsx'
import Solution from './components/Solution.jsx'
import Engineering from './components/Engineering.jsx'
import Process from './components/Process.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import Footer from './components/Footer.jsx'
import AboutPage from './AboutPage.jsx'
import AdvisoryPage from './AdvisoryPage.jsx'
import CaseStudiesPage from './CaseStudiesPage.jsx'
import KnowledgePage from './KnowledgePage.jsx'
import BookingPage from './BookingPage.jsx'

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Disconnect />
        <Barriers />
        <Solution />
        <Engineering />
        <Process />
        <TrustedBy />
      </main>
      <Footer />
    </>
  )
}

function getPage() {
  const hash = window.location.hash
  if (hash === '#about') return 'about'
  if (hash === '#services') return 'services'
  if (hash === '#insights') return 'insights'
  if (hash === '#contact') return 'knowledge'
  if (hash === '#booking') return 'booking'
  return 'home'
}

function App() {
  const [page, setPage] = useState(() => getPage())

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (page === 'about') return <AboutPage />
  if (page === 'services') return <AdvisoryPage />
  if (page === 'insights') return <CaseStudiesPage />
  if (page === 'knowledge') return <KnowledgePage />
  if (page === 'booking') return <BookingPage />
  return <HomePage />
}

export default App
