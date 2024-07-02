import { useEffect } from "react";
import Events from "../components/home/Events";
import Hero from "../components/home/Hero";

const Home = () => {
  useEffect(() => {
    // don't touch this line below
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <Events />
    </div>
  );
};

export default Home;
