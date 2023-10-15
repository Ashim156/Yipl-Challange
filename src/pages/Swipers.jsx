
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

const Swipers = () => {
  return (
    <div  className="h-[200px] ss:h-[110px] sm:[150px] md:[180px] cursor-pointer w-full bg-[#F9F9FF] flex items-center justify-center" >
  <div className="max-w-7xl mx-auto ">
  <Swiper

        slidesPerView={4}
        spaceBetween={10}
        // navigation={true}
        cssMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className="flex gap-4 mt-4 items-center">
           <img src="images/swiper1.png" alt="layers" className="w-10 h-108 ml-28"/> <span className="text-2xl font-bold"> Layers</span>
           </div>
           </SwiperSlide> 
           <SwiperSlide >
          <div className="flex gap-4 mt-4">
           <img src="images/swiper2.png" alt="layers" className="w-10 h-108 ml-28"/> <span className="text-2xl font-bold"> Quotient</span>
           </div>
           </SwiperSlide> 
           <SwiperSlide >
          <div className="flex gap-4 mt-4">
           <img src="images/swiper3.png" alt="layers" className="w-10 h-108 ml-28"/> <span className="text-2xl font-bold">Sisphyus</span>
           </div>
           </SwiperSlide> 
           <SwiperSlide >
          <div className="flex gap-4 mt-4">
           <img src="images/swiper4.png" alt="layers" className="w-10 h-108 ml-28"/> <span className="text-2xl font-bold"> Hourglass</span>
           </div>
           </SwiperSlide> 
           <SwiperSlide >
          <div className="flex gap-4 mt-4">
           <img src="images/swiper5.png" alt="layers" className="w-10 h-108 ml-28"/> <span className="text-2xl font-bold">Circooles</span>
           </div>
           </SwiperSlide> 
       
          
     
        
      </Swiper>


  </div>
  
  </div>
  )
}

export default Swipers
