

const EventItem = () => {
  return (
    <div className="">
        <div className="bg-white/10 mx-4 md:w-4/5 rounded-lg p-8">
            <h1 className="text-center font-semibold text-2xl">
                Trivia Time
            </h1>
            <hr className=" my-3" />
            <div>
            <h1 className="text-center font-semibold text-md">
                16th June, 2024
            </h1>
            <h1 className="text-center font-semibold text-md">
                6:00 PM - 8:00 PM
            </h1>
            </div>
            <div className="w-full flex justify-center">
            <button className="bg-[#4760FF]/50 text-white px-8 py-2 rounded-xl font-semibold hover:bg-[#4730FF] border border-[#4760FF] mt-4">
                Register
            </button>
            </div>
        </div>
    </div>
  )
}

export default EventItem