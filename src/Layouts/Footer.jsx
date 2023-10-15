

import { Link } from 'react-scroll'

const Footer = () => {
  return (<>
    <div className='img w-full h-full text-white font-serif font-inter '>
      <div className='grid grid-cols-2 max-w-7xl mx-auto ss:grid-cols-1 ss:grid ss:justify-items-center sm:grid-cols-1 sm:grid sm:justify-items-center md:grid md:grid-cols-2 md:justify-items-center  lg:grid lg:grid-cols-2 lg:justify-items-center 
      '>
        <div className='grid  w-full h-[70vh] items-center '><div className="flex flex-col ml-6 ">
          <h1 className='font-sans font-bold text-6xl flex gap-2 ss:-mt-44 sm:-mt-44'><img src="images/Logomark.png" alt="" /> <span className='font-serif font-medium text-5xl'>Catalog</span></h1>
          <p className="mt-8 text-sm">Lorem ipsum dolor sit amet kdjscfsjdvjs <br /> consectetur adelit. Placeat esse accusamus <br /> voluptatum eligendi dignissimos exercitationem </p>
          <div className="flex mt-6 gap-2">
         <img src="images/LinkedIn.png" alt="" />
         <img src="images/Twitter.png" alt="" />
         <img src="images/YouTube.png" alt="" />
          </div>
        </div>
        </div>
        <div className=' h-[25vh] flex mt-36 ss:-mt-52 sm:-mt-52 gap-10'>
          <div className='text-center'>
            <h1 className='mb-6 text-lg'>Links</h1> 
            <div className='flex flex-col gap-2 text-sm font-thin'>
            <h2>campaigns</h2>
            <h2>Resources</h2>
            <h2>News</h2>
            <h2>About us</h2>
              </div>
          
          </div>
          <div className='text-center'>
            <h1 className='mb-6 text-lg'>Resources</h1> 
            <div className='flex flex-col gap-2 text-sm font-thin'>
            <h2>Transparency Toolkit</h2>
            <h2>Evidence</h2>
            <h2>Best practices</h2>
            
              </div>
          
          </div> <div className='text-center'>
            <h1 className='mb-6 text-lg'>work with us</h1> 
            <div className='flex flex-col gap-2 text-sm font-thin'>
            <h2>Contact us</h2>
            <h2>Join us</h2>
          
              </div>
          
          </div>
        </div>
     
     
      </div>
    
    </div>
    <div className='h-20 text-gray-500 max-w-7xl mx-auto lg:m-6 md:m-6 sm:m-6 ss:mx-6 flex items-center justify-between'>
      <div>Terms and Conditions</div>
      <div className='flex gap-20 items-center justify-center'> 
      <img src="images/cc-logo.png" />
     <Link to='headers' smooth={true} offset={200} duration={500}> 
     <div className='w-[48px] h-[48px] shadow-xl rounded-full flex justify-center items-center cursor-pointer'>
     <img src="images/arrow.png" className='w-24px h-[24px]  '  alt="arrow" />
     </div>
     </Link> </div>
    </div>
    </>
  )
}

export default Footer

