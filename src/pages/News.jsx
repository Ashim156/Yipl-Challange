import { NewsModal } from "../constants/NewsModel"
import {AiOutlineArrowRight} from 'react-icons/ai'

const News = () => {
  return (
    <div className="h-[1100px] ss:h-full sm:h-full md:h-full lg:h-full font-inter text-8xl mt-20">
     <div className="flex flex-col text-center gap-8">
        <h1 className="font-[600] text-[32px]">News</h1>
        <p className="font-[400] text-[16px] text-gray-500">We aim to stop public funds siphoning off and we have a plan that will <br /> help. We are working at the national and EU levels to advance.</p>

        <div className="grid grid-cols-3 gap-3 mt-4 max-w-7xl mx-auto sm:grid ss:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">

         {NewsModal.map(news=>(<>
        
           <div className="flex flex-col w-[357px] h-[400px] bg-[#F3F6FF] rounded-xl p-3 text-left">
            <img src={news.image} alt="news"  />
            <h1 className="font-[600] text-[24px] mt-2">{news.name}</h1>
            <p className="font-[400] text-[15px] mt-3">{news.description}</p>
            <button className="flex items-center gap-2 mt-9 mb-4 cursor-pointer text-[#1D6FA3] font-[600] text-[16px]">Learn More <AiOutlineArrowRight/> </button>

           </div>
           
         
            </>
         ))}

        </div>
        <div className="flex justify-center items-center">
        <button className="text-center w-[130px] h-[39px] text-[16px] font-[600] border border-blue-600 mb-10">View all news</button>
        </div>

     </div>
    </div>
  )
}

export default News
