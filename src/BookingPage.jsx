import Header from './components/Header.jsx'
import BookingHero from './components/BookingHero.jsx'
import BookingForm from './components/BookingForm.jsx'
import AdvisoryFooter from './components/AdvisoryFooter.jsx'

function BookingPage() {
  return (
    <>
      <Header />
      <main>
        <BookingHero />
        <BookingForm />
      </main>
      <AdvisoryFooter />
    </>
  )
}

export default BookingPage
