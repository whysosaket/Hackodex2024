const ContributionItemLoader = () => {
  return (
    <div className="w-full py-2 mb-2 border-b-2 border-b-white/30 flex justify-between animate-pulse">
    <div className="flex-1">
      <div className="h-6 bg-gray-300/30 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300/30 rounded w-1/2 mb-2"></div>
      <div className="flex flex-col gap-1">
        <div className="h-4 bg-gray-300/30 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300/30 rounded w-1/2"></div>
      </div>
    </div>
    <div className="flex items-center">
      <div className="bg-gray-300/30 h-8 w-24 rounded-xl border border-gray-300/30"></div>
    </div>
  </div>
  
  )
}

export default ContributionItemLoader