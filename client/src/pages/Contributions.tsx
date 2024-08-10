// Contributions.js
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContributionItem from "../components/contributions/ContributionItem";
import ProgressBar from "../components/contributions/ProgressBar";
import ContributionItemLoader from "../components/loaders/ContributionItemLoader";

const serverUrl = import.meta.env.VITE_SERVER;

const Contributions = () => {
  const [repos, setRepos] = useState([]); // State to store repositories
  const [progress, setProgress] = useState(0); // State to store progress
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) window.location.href = "/"; // Redirect to home if not logged in
    getPRs();

    // don't touch this line below
    window.scrollTo(0, 0);
  }, []);

  const getPRs = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${serverUrl}/api/contributions/${localStorage.getItem("username")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      setRepos(data.data);
      setLoading(false);

      // calculate progress
      let total = data.merged;
      total = total >= 3 ? 3 : total;
      // convert total to percentage
      const percentage = total / 3;
      setProgress(percentage);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex md:flex-row flex-col-reverse w-full my-6">
      <div className="md:w-4/6">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold">List Of PRs</h1>
          <hr className="w-[18rem] border-2 border-[#4760FF] my-1" />
        </motion.div>
        <div className="h-[36.5rem] overflow-y-scroll no-scrollbar">
          {repos.map((repo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index / 10 }}
              className="md:w-4/5 flex justify-center"
            >
              {/* @ts-ignore */}
              <ContributionItem title={repo.title} name={repo.repository} createdAt={repo.merged_at} state={repo.state} url={repo.url}/>{" "}
              {/* Pass repository data to ContributionItem */}
            </motion.div>
          ))}
          {loading && (
            <>
              <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + 0 / 10 }}
              className="md:w-4/5 flex justify-center">
                <ContributionItemLoader />
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + 0 / 10 }}
              className="md:w-4/5 flex justify-center">
                <ContributionItemLoader />
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + 0 / 10 }}
              className="md:w-4/5 flex justify-center">
                <ContributionItemLoader />
              </motion.div>
            </>
          )}
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
        <ProgressBar value={progress} /> {/* Pass progress to ProgressBar */}
      </div>
    </div>
  );
};

export default Contributions;
