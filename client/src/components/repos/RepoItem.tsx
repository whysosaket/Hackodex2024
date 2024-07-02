import { Link } from "react-router-dom";

interface RepoItemProps {
  repo: any;
}

const RepoItem: React.FunctionComponent<RepoItemProps> = ({ repo }) => {
  return (
    <>
      <div className="md:w-4/5 mx-auto flex justify-center align-middle border-b-2 border-blue-200 pt-8 pb-4">
        <div className="left w-1/2">
          <h1 className="text-[1.2rem] font-semibold my-2">
            <Link to={repo.url} className="hover:text-[#4760FF]">
              {repo.username}/{repo.name}
            </Link>
          </h1>
          <div>
            <span className="text-[#FFC700]">Lang: </span> {repo.lang}
            <span className="text-[#FF7A00] ml-3">Stars: </span> {repo.stars}
          </div>
        </div>
        <div className="right w-1/2 flex justify-end align-middle">
          <button className="bg-[#5457A1] my-auto text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#5443A1] border border-[#5457A1]">
            {repo.issues-1} Issues
          </button>
        </div>
      </div>
    </>
  );
};

export default RepoItem;
