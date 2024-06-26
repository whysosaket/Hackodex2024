import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Signin from "./components/Signin"
import Home from "./pages/Home";
import _404 from "./pages/_404";
import Contributions from "./pages/Contributions";
import Repos from "./pages/Repos";
import About from "./pages/About";
import LearnMore from "./pages/LearnMore";

function App() {

  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
    <Router>
    {isVisible &&
      <div className="w-full fixed flex justify-center align-middle h-screen bg-opacity-15 backdrop-blur-md">
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
            <Route path="/about" element={<About />} />
            <Route path="/learnmore" element={<LearnMore />} />
            <Route path="*" element={<_404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </Router>
    </>
  )
}

export default App
