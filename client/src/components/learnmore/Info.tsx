import { about1, about2 } from "./lmseed"
import Timeline from "./Timeline/Timeline"
import { contributorGuidelines } from "./lmseed"
import Resources from "./Resources/Resources"
import Faq from "./Faq"


const Info = () => {
  return (
    <>
    
    <div className="mt-32">
     <h1 className="text-[3rem] font-bold text-[#919ffb]">About</h1>
     <p className="text-[1.2rem] mt-2 md:mt-2">{about1}</p>
     <p className="text-[1.2rem] mt-6 md:mt-2">{about2}</p>
    </div>

    <div className="mt-12">
        <h1 className="text-[2.5rem] font-bold text-[#919ffb]">Event Detials</h1>
        <Timeline />
    </div>

    <div className="mt-12">
        <h1 className="text-[2.5rem] md:text-[2.5rem] font-bold text-[#919ffb]">Contributor Guidelines</h1>
        {
            contributorGuidelines.map((item)=>{
                return(
                    <div key={item.id} className="">
                        <h1 className="font-semibold text-[#cad0f9] text-[1.5rem] mt-6">{item.title}</h1>
                        <p className="mt-2">{item.description}</p>
                    </div>
                )
            })
        }
    </div>


    <div className="mt-12">
        <h1 className="text-[2.5rem] font-bold text-[#919ffb]">Resources For Beginners</h1>
        <Resources />
    </div>

    <div className="mt-12">
        <h1 className="text-[2.5rem] font-bold text-[#919ffb]">FAQs</h1>
        <Faq />
    </div>


    </>
  )
}

export default Info