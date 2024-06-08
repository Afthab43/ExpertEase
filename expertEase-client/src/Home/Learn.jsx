import NavBar from "./../components/NavBar";
import Banner from "./../components/Banner";
import FreeCourses from "./../components/FreeCourses";
import Footer from "./../components/Footer";
function Learn() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-center">
        <Banner />
        <FreeCourses />
      </div>

      <Footer />
    </>
  );
}

export default Learn;
