import { useEffect, useState } from "react";
import RepoItem from "../components/repos/RepoItem";
import { motion } from "framer-motion";
import ContributionItemLoader from "../components/loaders/RepoItemLoader";

const topic = "hackodex2024";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // don't touch this line below
    if(!localStorage.getItem("auth-token")) window.location.href = "/";
    getRepos();
    window.scrollTo(0, 0);
  }, []);

  const getRepos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/search/repositories?q=topic:${topic}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      const repositories = data.items;
      setLoading(false);
      const filteredRepos = repositories.map((repo: any) => {
        return {
          name: repo.name,
          stars: repo.stargazers_count,
          lang: repo.language,
          issues: repo.open_issues,
          username: repo.owner.login,
          url: repo.html_url,
        };
      });
      setRepos(filteredRepos);
    } catch (err) {
      setLoading(true);
    }
  };

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
              <RepoItem repo={repo} />
            </motion.div>
          );
        })}
         {
            loading&&<>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + 0 / 10 }}
              className="md:w-1/2 flex justify-center"
              
            >
              <ContributionItemLoader />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + 1 / 10 }}
              className="md:w-1/2 flex justify-center"
              
            >
              <ContributionItemLoader />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + 2 / 10 }}
              className="md:w-1/2 flex justify-center"
              
            >
              <ContributionItemLoader />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + 3 / 10 }}
              className="md:w-1/2 flex justify-center"
              
            >
              <ContributionItemLoader />
            </motion.div>
            </>
          }
      </div>
    </div>
  );
};

export default Repos;
