import Info from "../components/learnmore/Info";
import LMhero from "../components/learnmore/LMhero";
import { useEffect } from "react";

const LearnMore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <LMhero />
      <Info />
    </>
  );
};

export default LearnMore;
