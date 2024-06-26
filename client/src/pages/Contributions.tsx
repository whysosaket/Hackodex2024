// Contributions.js
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ContributionItem from "../components/contributions/ContributionItem";
import ProgressBar from "../components/contributions/ProgressBar";

const Contributions = () => {
  const [repos, setRepos] = useState([]); // State to store repositories
  const [token, setToken] = useState(""); // State to store the authentication token

  useEffect(() => {
    // Fetch the token from localStorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken); // Set the token in state
    }
  }, []);

  useEffect(() => {
    if (token) {
      // If token is available, fetch user's repositories from GitHub API
      axios
        .get("https://api.github.com/user/repos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("User's repositories:", response.data);
          setRepos(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user's repositories:", error);
        });
    }

    // don't touch this line below
    window.scrollTo(0, 0);
  }, [token]);

  // Calculate progress based on the number of repositories
  // This Logic we have to determine.
  const progress = repos.length / 10; // Example calculation

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
          {repos.map((repo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index / 10 }}
              className="md:w-4/5 flex justify-center"
            >
              {/* @ts-ignore */}
              <ContributionItem name={repo.name} createdAt={repo.created_at} />{" "}
              {/* Pass repository data to ContributionItem */}
            </motion.div>
          ))}
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
