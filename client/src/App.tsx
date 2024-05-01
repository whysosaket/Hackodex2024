import Hero from "./components/home/Hero"
import Navbar from "./components/Navbar"
import Events from "./components/home/Events"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <div className="">
        <Navbar />
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
