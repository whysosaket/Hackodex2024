import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
import { isMobile,isTablet } from 'react-device-detect';

const HackodexLogoLoader = () => {
  // const [isMobile, setIsMobile] = useState(true);

  // useEffect(() => {
  //   console.log("hiii");
  //   if (window.innerWidth < 768) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // }, []);
  return (
    <>
      {isMobile&&!isTablet ? (
        <motion.img
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          src={logo}
          className="w-64 mx-auto mt-6"
        />
      ) : (
        <span className="font-bold text-transparent font-outline-2 hover:font-outline-4 md:font-glow">
          HACKODEX
        </span>
      )}
    </>
  );
};

export default HackodexLogoLoader;
