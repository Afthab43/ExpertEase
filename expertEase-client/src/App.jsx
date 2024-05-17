import { Routes, Route, Navigate } from "react-router-dom";
import Learn from "./Home/Learn";
import Businesses from "./Buisness/Businesses";
import SignUp from "./components/SignUp";
import LoginOpen from "./components/Login";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./About/About";
import Contact from "./contact/Contact";
function App() {
  //authuser
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className=" bg-white text-black dark:bg-slate-800 dark:text-white">
        <Routes>
          <Route path="/" element={<Learn />} />
          <Route path="/business" element={authUser?<Businesses />:<Navigate to='/signup'  />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginOpen />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
