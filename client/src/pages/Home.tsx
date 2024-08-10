import { useEffect } from "react";
import Events from "../components/home/Events";
import Hero from "../components/home/Hero";
import Timer3 from "../components/Timer/Timer";
import { FlipWords } from "../ui/flip-words";
const Home = () => {

  
  useEffect(() => {
    // don't touch this line below
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <div className="md:mt-20 mb-8 md:mb-0">
        <h1 className="text-center md:mt-16 md:mb-16 mb-8 text-4xl md:text-5xl font-semibold">
          Event <FlipWords duration={10000} words={["Starts", "Begins"]} className=" text-white" /> In
        </h1>
        <Timer3 />
      </div>
      <Events />
    </div>
  );
};

export default Home;
