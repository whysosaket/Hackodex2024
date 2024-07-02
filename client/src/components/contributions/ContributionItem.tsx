import { Link } from "react-router-dom";

interface ContributionItemProps {
  name: string;
  state: string;
  createdAt: string;
  url: string;
  username: string;
  title: string;
}

const ContributionItem: React.FunctionComponent<ContributionItemProps> = ({
  state,
  createdAt,
  url,
  title
}) => {

  const calculateCreatedDate = (date: string) => {
    if(date === null) return "Not Merged";
    const createdDate = new Date(date);
    return createdDate.toDateString();
  }

  const calculateRepoName = (url: string) => {
    // get reponame along with username
    const urlArray = url.split("/");
    return `${urlArray[3]}/${urlArray[4]}`;
  }

  const days = calculateCreatedDate(createdAt);
  const repoName = calculateRepoName(url);

  return (
    <div className="w-full py-2 mb-2 border-b-2 border-b-white flex justify-between">
      <div>
        <h1 className="text-[1.4rem] font-semibold text-start">{title}</h1>
        <h1 className="text-xs mb-2 font-light text-start">{repoName}</h1>
        <div className="text-sm">
          <span className="text-[#FFC700]">State: </span> {state}
          <span className="text-[#FF7A00] ml-3">Merged at: </span> {days}
        </div>
      </div>
      <div className="flex justify-center align-middle">
        <Link to={url} className="text-[#4760FF] hover:text-[#806ce4]">
          <button className="bg-[#5457A1] my-auto text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#5443A1] border border-[#5457A1]">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContributionItem;
