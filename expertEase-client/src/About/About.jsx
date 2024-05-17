
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AboutComponent from '../components/AboutComponent'

function About() {
  return (
    <>
       <NavBar />
      <div className="min-h-screen  flex items-center justify-center text-black">
        <AboutComponent />
      </div>
      <Footer />
    </>
  )
}

export default About
