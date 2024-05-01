import { useState } from "react"

import Hero from "./components/home/Hero"
import Navbar from "./components/Navbar"
import Events from "./components/home/Events"
import Footer from "./components/Footer"
import Signin from "./components/Signin"

function App() {

  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
    {isVisible &&
      <div className="w-full fixed flex justify-center align-middle h-screen bg-opacity-15 backdrop-blur-md">
        <Signin />
      </div>
    }
      <div className="">
        <Navbar setVisible={setIsVisible} />
        <div className="px-12">
          <Hero />
          <Events />
        </div>
        <Footer />
        
      </div>
    </>
  )
}

export default App
