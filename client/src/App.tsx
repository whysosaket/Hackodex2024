import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Signin from "./components/Signin"
import Home from "./pages/Home";
import _404 from "./pages/_404";
import Contributions from "./pages/Contributions";
import Repos from "./pages/Repos";
import LearnMore from "./pages/LearnMore";
import MidSign from "./pages/MidSign";
import Mesh from "./components/Mesh";

function App() {

  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="">
    <Mesh />
    <Router>
    {isVisible &&
      <div className="w-full fixed flex justify-center align-middle h-screen bg-opacity-15 backdrop-blur-md z-50">
        <Signin />
      </div>
    }
      <div className="">
      <Navbar setVisible={setIsVisible} />
        <div className="md:px-12 px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contributions" element={<Contributions />} />
            <Route path="/repos" element={<Repos />} />
            <Route path="/learnmore" element={<LearnMore />} />
            <Route path="/midsign" element={<MidSign />} />
            <Route path="*" element={<_404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </Router>
    </div>
  )
}

export default App
