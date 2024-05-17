
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ContacDetails from '../components/ContactDetails'

function Contact() {
  return (
    <>
       <NavBar />
      <div className="min-h-screen  flex items-center justify-center text-black">
        <ContacDetails />
      </div>
      <Footer />
    </>
  )
}

export default Contact
