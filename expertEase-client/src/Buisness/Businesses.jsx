import NavBar from "./../components/NavBar";
import Business from "./../components/Business";
import Footer from "./../components/Footer";

function Businesses() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-center">
        <Business />
      </div>
      <Footer />
    </>
  );
}

export default Businesses;
