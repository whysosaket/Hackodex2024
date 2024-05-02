import { motion } from "framer-motion";
import ContributionItem from "../components/contributions/ContributionItem";
import ProgressBar from "../components/contributions/ProgressBar";

const repos = [
  1, 2, 3, 4, 56, 67, 8, 87, 64, 5, 45, 45, 45, 45, 45, 454, 23, 3, 3,
];

const Contributions = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse w-full my-6">
      <div className="md:w-4/6">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold">List Of Repositories</h1>
          <hr className="w-[18rem] border-2 border-[#4760FF] my-1" />
        </motion.div>
        <div className="h-[36.5rem] overflow-y-scroll no-scrollbar">
          {
            repos.map((repo, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index / 10 }}
                  className="md:w-4/5 flex justify-center"
                  key={index}
                >
                  <ContributionItem />
                </motion.div>
              );
            })
          }
        </div>
      </div>
      <div className="md:w-2/6 mb-8 md:mb-0">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold">Progress</h1>
          <hr className="w-[8rem] border-2 border-[#4760FF] my-1" />
        </motion.div>
        <ProgressBar />
      </div>
    </div>
  );
};

export default Contributions;
