import { useEffect } from 'react'
import Header from './components/Header.jsx'
import BookingHero from './components/BookingHero.jsx'
import BookingForm from './components/BookingForm.jsx'
import AdvisoryFooter from './components/AdvisoryFooter.jsx'

function BookingPage() {
  useEffect(() => {
    if (window.location.hash !== '#get-in-touch') return undefined

    const timer = window.setTimeout(() => {
      document.getElementById('get-in-touch')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <Header darkText />
      <main>
        <BookingHero />
        <BookingForm />
      </main>
      <AdvisoryFooter />
    </>
  )
}

export default BookingPage
