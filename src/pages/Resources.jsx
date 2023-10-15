import {AiOutlineArrowRight} from 'react-icons/ai'

function Resources() {
  return (
    <>
    <div className="h-[700px] bg-[#F3F6FF] font-inter ss:h-full sm:h-full md:h-full lg:h-full xl:h-full">
        <div className="mx-auto max-w-7xl rounded-2xl  ">
            <div className="flex flex-col ">
                <h1 className="text-[32px] font-[600] text-center mt-10" >Latest Resources</h1>
                <p className="font-[400] text-[18px] text-center mt-5">The latest resources includes Transparency Toolkit, <br /> Evidence, Best Practices</p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4 max-w-7xl mx-auto  ss:grid ss:grid-cols-1 ss:justify-items-center sm:grid sm:grid-cols-1 sm:justify-items-center md:grid md:grid-cols-2 md:justify-items-center lg:grid lg:grid-cols-3 lg:justify-items-center ">
                <div className="bg-white w-[352px] h-[337px] rounded-2xl p-8">
                <div className=" flex gap-2 items-center">
                    <img src="images/Outline.png" alt="repair" className="bg-[#F8F1FF] w-[60px] h-[60px] " />
                    <h1 className="text-[15px] font-[600] text-[#66686D]">Tool</h1>
                </div>
                <div className="flex flex-col gap-3 ">
                    <h1 className="text-[24px] font-[600] mt-7">Defence Elvis</h1>
                    <p className="text-[12px] font-[400]">It allows creating networks of public <br /> spending on goods services used in <br /> defense in 28 EU countries...</p>
                </div>
                <button className="flex items-center font-[700] gap-1 text-left text-[12px] cursor-pointer text-[#1D6FA3] mt-12">Learn More <AiOutlineArrowRight /> </button>
                </div>
                <div className="bg-white w-[352px] h-[337px] rounded-2xl p-8">
                <div className=" flex gap-2 items-center">
                    <img src="images/Outline.png" alt="repair" className="bg-[#F8F1FF] w-[60px] h-[60px] " />
                    <h1 className="text-[15px] font-[600] text-[#66686D]">Tool</h1>
                </div>
                <div className="flex flex-col gap-3 ">
                    <h1 className="text-[24px] font-[600] mt-7">Defence Elvis</h1>
                    <p className="text-[12px] font-[400]">It allows creating networks of public <br /> spending on goods services used in <br /> defense in 28 EU countries...</p>
                </div>
                <button className="flex items-center font-[700] gap-1 text-left text-[12px] cursor-pointer text-[#1D6FA3] mt-12">Learn More <AiOutlineArrowRight /> </button>
                </div>
                <div className="bg-white w-[352px] h-[337px] rounded-2xl p-8">
                <div className=" flex gap-2 items-center">
                    <img src="images/Outline.png" alt="repair" className="bg-[#F8F1FF] w-[60px] h-[60px] " />
                    <h1 className="text-[15px] font-[600] text-[#66686D]">Tool</h1>
                </div>
                <div className="flex flex-col gap-3 ">
                    <h1 className="text-[24px] font-[600] mt-7">Defence Elvis</h1>
                    <p className="text-[12px] font-[400]">It allows creating networks of public <br /> spending on goods services used in <br /> defense in 28 EU countries...</p>
                </div>
                <button className="flex items-center font-[700] gap-1 text-left text-[12px] cursor-pointer text-[#1D6FA3] mt-12">Learn More <AiOutlineArrowRight /> </button>
                </div>

            </div>
            <div className="flex justify-center items-center">
        <button className="text-center w-[200px] h-[39px] text-[16px] font-[600] border border-blue-600 mt-10 mb-10">View all Resources</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Resources
