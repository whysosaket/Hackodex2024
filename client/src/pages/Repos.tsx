import RepoItem from "../components/repos/RepoItem";
import { motion } from "framer-motion";

const repos = [
  1, 2, 3, 4, 56, 67, 8, 87, 64, 5, 45, 45, 45, 45, 45, 454, 23, 3, 3,
];

const Repos = () => {
  return (
    <div className="my-8">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-center text-4xl font-bold">List Of Repositories</h1>
        <hr className="w-[18rem] mx-auto border-2 border-[#4760FF] my-4" />
      </motion.div>
      <div className="md:flex justify-between flex-wrap">
        {repos.map((repo, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index / 10 }}
              className="md:w-1/2 flex justify-center"
              key={index}
            >
              <RepoItem />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Repos;
