import Mascot from "../../assets/mascot.png";
import pathvector from "../../assets/pathvector.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="flex my-8">
        <div className="">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            src={pathvector}
            alt="pathvector"
            className="w-full absolute -z-20 left-0 bottom-0"
          />
        </div>
        <div className="left w-1/2 flex justify-center align-middle">
          <div className="my-auto">
            <motion.h1
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[4rem] font-semibold tracking-wide leading-[6rem]"
            >
              Begin Your Open Source Journey with Hackodex 2.0
            </motion.h1>
            <div className="mt-8">
              <motion.h2
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-semibold"
              >
                Your open source journey begins with a pull request.
              </motion.h2>
              <motion.h2
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-semibold"
              >
                We've curated a list of beginner friendly issues for you to
                check out.
              </motion.h2>
            </div>
            <div className="mt-12">
              <motion.button
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="bg-[#4760FF] text-white px-8 py-2 rounded-xl font-semibold hover:bg-[#4730FF] border border-[#4760FF]"
              >
                Get Started
              </motion.button>
              <motion.button
                initial={{ x: -370, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="border border-[#4760FF] hover:bg-[#4760FF]/20 text-white px-8 py-2 rounded-xl font-semibold ml-4"
              >
                Learn More
              </motion.button>
            </div>
            <div className="blur-3xl bg-indigo-400/15 -z-20 absolute left-0 top-44 h-[36rem] w-[20rem] rounded-b-[80rem] rounded-t-[80rem]"></div>
          </div>
        </div>
        <div className="right w-1/2 flex justify-center">
          <motion.img
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            src={Mascot}
            alt="mascot"
            className="w-4/5 mx-auto"
          />
          <div className="blur-3xl bg-indigo-400/20 -z-10 absolute h-[36rem] w-[20rem] rounded-b-[80rem] rounded-t-[80rem]"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
