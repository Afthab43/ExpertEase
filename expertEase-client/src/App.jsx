import { Routes, Route } from "react-router-dom";
import Learn from "./Home/Learn";
import Businesses from "./Buisness/Businesses";
import SignUp from "./components/SignUp";
import LoginOpen from "./components/Login";
function App() {
  return (
    <>
      <div className=" bg-white text-black dark:bg-slate-800 dark:text-white">
        <Routes>
          <Route path="/" element={<Learn />} />
          <Route path="/business" element={<Businesses />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginOpen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
