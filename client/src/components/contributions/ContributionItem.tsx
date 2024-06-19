const ContributionItem = ({ name, state, createdAt }) => {
  return (
    <div className="w-full py-2 mb-2 border-b-2 border-b-white">
        <h1 className="text-[1.4rem] font-semibold text-start">
            {name}
        </h1>
        <div className="text-sm">
            <span className="text-[#FFC700]">State: </span> {state}
            <span className="text-[#FF7A00] ml-3">created at: </span> {createdAt}
        </div>
    </div>
  );
};

export default ContributionItem;
