
import {AiOutlineArrowRight} from "react-icons/ai"


const Home = () => {

  return (
    
      <div id='home' className="bg-gray-50">
<div className=" min-h-[130vh] ss:h-full sm:full lg:h-full md:h-full  max-w-7xl mx-auto w-full h-16 flex flex-col ">
  <div className='text-center'>
    <h1 className=" mt-28 font-[600] text-[32px] mb-5 ss:text-[22px] sm:text-[28px]">Campaigns</h1>
    <p className="text-gray-500 text-[20px] sm:text-[18px] ss:text-[16px] font-[200] text-center">We aim to stop public funds siphoning off and we have a plan that will help. We <br /> are working at the national and EU levels to advance.</p>
    
    </div>
    <div className="w-full h-full   max-w-7xl mx-auto grid grid-cols-3 ss:grid ss:grid-cols-1 ss:justify-items-center sm:grid-cols-2 sm:justify-items-center md:grid md:justify-items-center  md:grid-cols-2 lg:grid lg:grid-cols-2 lg:justify-items-center">
  <div className="bg-white shadow-2xl flex flex-col w-[351px] h-[596px] ss:w-[300px]  ss:h-[480px] rounded-xl mt-9  sm:w-[300px]  sm:h-[480px]  md:w-[310px]  md:h-[500px] ">
    <img src="/images/camp1.png" alt="campians" className="w-[351px] h-[352px] rounded-xl " />

    <h1 className="text-[18px] font-medium text-center mt-3">Open Directives</h1>
    <p className="h-48"></p>
   
    
    <button className="flex items-center gap-1 text-left p-5 mb-4 cursor-pointer text-[#1D6FA3]">Learn More <AiOutlineArrowRight /> </button>
  </div>
  <div className="bg-white ss:w-[300px]  ss:h-[480px] shadow-2xl flex flex-col w-[351px] h-[596px]  rounded-xl mt-9  sm:w-[300px]  sm:h-[480px]  md:w-[310px]  md:h-[500px]   ">
    <img src="/images/camp2.png" alt="campians" className="w-[351px] h-[352px] rounded-xl " />

    <h1 className="text-[18px] font-medium text-center mt-3">Open Directives</h1>
    <p className="h-48"></p>
   
    
    <button className="flex items-center gap-1 text-left p-5 mb-4 cursor-pointer text-[#1D6FA3]">Learn More <AiOutlineArrowRight /> </button>
  </div>
  
  <div className="ss:w-[300px]  ss:h-[480px] bg-white shadow-2xl flex flex-col w-[351px] h-[596px]  rounded-xl mt-9  sm:w-[300px]  sm:h-[480px]  md:w-[310px]  md:h-[500px]   ">
    <img src="/images/camp3.png" alt="campians" className="w-[351px] h-[352px] rounded-xl " />

    <h1 className="text-[18px] font-medium text-center mt-3">Open Directives</h1>
    <p className="h-48"></p>
   
    
    <button className="flex items-center gap-1 text-left p-5 mb-4 cursor-pointer text-[#1D6FA3]">Learn More <AiOutlineArrowRight /> </button>
  </div>
  
  
  
</div>
    
</div>

</div>




  )
}

export default Home
