import Mascot from "../../assets/mascot.png";
import { motion } from "framer-motion";
import pathvector from "../../assets/pathvector.svg";

const LMhero = () => {
  return (
    <>
      <div className="flex md:flex-row-reverse flex-col my-8 justify-center">
        <div className="">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            src={pathvector}
            alt="pathvector"
            className="w-full absolute -z-20 left-0 bottom-0"
          />
        </div>
        <div className="left md:w-1/2 flex justify-center align-middle">
          <div className="my-auto">
            <motion.h1
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[2rem] uppercase md:text-[4.5rem] font-semibold md:tracking-wide md:leading-[6rem] text-center md:text-left"
            >
              <span className="md:font-bold md:text-transparent md:font-outline-2 md:hover:font-outline-4">
                BEGIN
              </span>{" "}
              Your Open Source Journey with{" "}
              <span className="md:font-bold md:text-transparent md:font-outline-2 md:hover:font-outline-4">
                Hackodex
              </span>
            </motion.h1>

            <div className="blur-3xl bg-indigo-400/15 -z-20 absolute left-0 top-44 h-[36rem] w-[20rem] rounded-b-[80rem] rounded-t-[80rem]"></div>
          </div>
        </div>
        <div className="right md:w-1/2 flex justify-center mt-12 md:mt-0">
          <motion.img
            initial={{ x: 600, opacity: 0.0, rotateY: 0 }}
            animate={{ x: 0, opacity: 1, rotateY: 180 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            src={Mascot}
            alt="mascot"
            className="md:w-4/5 mx-auto"
          />
          <div className="blur-3xl bg-indigo-400/20 -z-10 absolute h-[36rem] w-[20rem] rounded-b-[80rem] rounded-t-[80rem]"></div>
        </div>
      </div>
    </>
  );
};

export default LMhero;
