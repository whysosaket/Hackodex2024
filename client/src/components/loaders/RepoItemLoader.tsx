const RepoItemLoader = () => {
  return (
    <div className="md:w-4/5 mx-auto flex justify-center items-center border-b-2 border-blue-200/30 pt-8 pb-4 animate-pulse">
      <div className="left w-1/2">
        <div className="h-6 bg-gray-300/30 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300/30 rounded w-1/2 mb-2"></div>
      </div>
      <div className="right w-1/2 flex justify-end items-center">
        <div className="bg-gray-300/30 h-8 w-24 rounded-xl border border-gray-300/30"></div>
      </div>
    </div>
  );
};

export default RepoItemLoader;
