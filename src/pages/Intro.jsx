
import {AiOutlineArrowRight} from 'react-icons/ai'
const Intro = () => {
  return (
    
<div id="about" className="h-[1100px] w-full ss:mt-20 mt-40 ss:h-full sm:mt-20  sm:h-full md:h-[180vh] lg:h-[180vh] ">
  <div className="grid grid-cols-3 max-w-7xl mx-auto ss:grid-cols-1 ss:justify-items-center ss:mb-0 sm:grid-cols-1 sm:justify-items-center sm:mb-0 md:grid-cols-1 md:justify-items-center md:mb-0
  lg:grid-cols-1 lg:justify-items-center lg:mb-0">
    <div className="flex flex-col h-[402px] w-[348px]">
      <h1 className="font-[600] text-[32px]">Who we are</h1>
      <p className="font-[400] text-[18px] leading-6 mt-2"> We are a collaboration of Non Govt.  and professionals working to ensure that government spending is done fairly, openly, efficiently, and creates the best value for money and best outcomes for Europe. We are working at the national and EU levels to advance the principles of openness in spending of funds, procurement, and company ownership within the EU.</p>
      <button className="flex items-center gap-2 mt-9 mb-4 cursor-pointer text-[#1D6FA3]">See More <AiOutlineArrowRight/> </button>
    </div>
    <div className="flex flex-col gap-4 h-[1200px] w-[700px] ss:-mt-44 ss:flex ss:flex-col ss:justify-center ss:items-center sm:-mt-44 sm:flex sm:flex-col sm:justify-center sm:items-center md:-mt-5 md:grid md:grid-cols-2  lg:-mt-5 lg:grid lg:grid-cols-2  ">
      <div>
      <img src="/images/intro1.png" alt="" className="h-[371px] w-[328px] rounded-3xl" />
      <h1 className="font-[600] text-[24px] mt-3 md:text-center lg:text-center">Adriana Homolova</h1>
      </div>
      <div>
      <img src="/images/intro2.png" alt="" className="h-[371px] w-[328px] mt-4 rounded-3xl md:mt-0 lg:mt-0" />
      <h1 className="font-[600] text-[24px] mt-3 md:text-center lg:text-center ">Karolis Granickas</h1>
      </div>
    </div>
    <div className="flex flex-col gap-4 h-[1200px] w-[800px] mt-28  ss:-mt-72 ss:justify-center ss:flex ss:items-center sm:-mt-72 sm:justify-center sm:flex sm:items-center lg:-mt-[46rem] lg:grid lg:grid-cols-2 lg:justify-items-center md:-mt-[46rem] md:grid md:grid-cols-2 md:justify-items-center ">
      <div>
      <img src="/images/intro3.png" alt="" className="h-[371px] w-[328px] rounded-3xl -ml-20 md:ml-0 lg:ml-0 ss:ml-0 sm:ml-0" />
      <h1 className="font-[600] text-[24px] mt-3 rounded-3xl md:text-center">Sandor Lederer</h1>
      </div>
      <div>
      <img src=" /images/intro4.png" alt="" className="h-[371px] w-[328px] mt-4 md:mt-0 lg:mt-0 rounded-3xl -ml-20 md:ml-0 lg:ml-0 ss:ml-0 sm:ml-0" />
      <h1 className="font-[600] text-[24px] mt-3 md:text-center lg:text-center">Adriana Homolova</h1>
      </div>
    </div>
  </div>
</div>

  )
}

export default Intro
