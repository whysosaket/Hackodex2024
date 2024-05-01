import Mascot from "../../assets/mascot.png";
import pathvector from "../../assets/pathvector.svg";

const Hero = () => {
  return (
    <>
      <div className="flex my-8">
        <div className="">
          <img
            src={pathvector}
            alt="pathvector"
            className="w-full absolute -z-20 left-0 bottom-0"
          />
        </div>
        <div className="left w-1/2 flex justify-center align-middle">
          <div className="my-auto">
            <h1 className="text-[5rem] font-semibold tracking-wide leading-[6rem]">
              Hack and learn with Hackodex
            </h1>
            <div className="mt-8">
              <h2 className="font-semibold">
                Your open source journey begins with a pull request.
              </h2>
              <h2 className="font-semibold">
                We've curated a list of beginner friendly issues for you to
                check out.
              </h2>
            </div>
            <div className="mt-12">
              <button className="bg-[#4760FF] text-white px-8 py-2 rounded-xl font-semibold hover:bg-[#4730FF] border border-[#4760FF]">
                Get Started
              </button>
              <button className="border border-[#4760FF] hover:bg-[#4760FF]/20 text-white px-8 py-2 rounded-xl font-semibold ml-4">
                Learn More
              </button>
            </div>
            <div className="blur-3xl bg-indigo-400/15 -z-20 absolute left-0 top-44 h-[36rem] w-[20rem] rounded-b-[80rem] rounded-t-[80rem]"></div>
          </div>
        </div>
        <div className="right w-1/2 flex justify-center">
          <img src={Mascot} alt="mascot" className="w-4/5 mx-auto" />
          <div className="blur-3xl bg-indigo-400/20 -z-10 absolute h-[36rem] w-[20rem] rounded-b-[80rem] rounded-t-[80rem]"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
