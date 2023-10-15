import { useState } from "react"
import { NavModel } from "../constants/navModel"
import {AiOutlineDown,AiOutlineArrowRight} from "react-icons/ai"
import {LuSearch} from "react-icons/lu"
import {BsBook} from "react-icons/bs"
import {Modal} from "antd";
import Search from "../search/Search"
import { Link } from "react-scroll"
import { Close, Menu } from "../images"




const Headers = () => {
    const [active,setActive]=useState(!false)
    const[visible,setVisible]=useState(false);
    const [menu,setMenu]=useState(false)
  return (<>
  <div id="headers">
    <div  className=" text-white relative min-h-screen images  ">
    <div className="  flex-wrap  border-b-2 border-b-black flex items-center ">
        <div className=" max-w-7xl mx-auto w-full h-16 flex items-center justify-start ">
        <h1 className="  flex items-center gap-2 font-extrabold text-3xl font-inter mr-6 ss:ml-4"><img src="/images/Logomark.png" alt="" /> <span className="font-semibold text-xl ">Catalog</span></h1>
        <div className="flex items-center justify-start gap-16 ss:hidden text-center sm:hidden  ">
           
            {
            NavModel.map(nav=>(
                <>
                
               <div className=" cursor-pointer hover:text-yellow-200">
                <Link to={nav.id} smooth={true} offset={200} duration={500}> {nav.title}</Link></div>
             
                </>
            ))
                  

              

            }
            <div onClick={()=>setActive(!active)} className="flex font-sans font-semibold items-center gap-1  ">
                <div className="cursor-pointer">
                    <div className={`${!active?'text-yellow-200':'text-white'}`}>
                       
                        Resources 
                        <div 
                     className={`${!active?'flex':'hidden'}`}>
                       <div className="bg-white text-black w-72 h-64 sm:right-4 sm:top-16 z-20 absolute flex flex-col rounded-lg ">
                        <div className="flex m-3 hover:bg-slate-100 hover:rounded-lg ">
                          <BsBook size={40}/>
                          <div className="flex flex-col mt-2 ml-3 ">
                            <h1 className="text-sm ">Blog</h1>
                            <p className="text-xs text-gray-500"> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                        <div className="flex m-3  hover:bg-slate-100 hover:rounded-lg ">
                          <BsBook size={40}/>
                          <div className="flex flex-col mt-2 ml-3">
                            <h1 className="text-sm ">Blog</h1>
                            <p className="text-xs text-gray-500"> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                        <div className="flex m-3  hover:bg-slate-100 hover:rounded-lg ">
                          <BsBook size={40}/>
                          <div className="flex flex-col mt-2 ml-3 ">
                            <h1 className="text-sm ">Blog</h1>
                            <p className="text-xs text-gray-500"> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      
                       </div>
                     </div>
                    </div>
            </div>
            <AiOutlineDown className="cursor-pointer" />
            
            </div>
         
          
        </div>
        <h1 className="2xl:ml-96 xl:ml-96 lg:ml-96 ml-9  cursor-pointer ss:absolute sm:absolute sm:top-20 sm:left-11 ss:top-20 ss:left-11" onClick={()=>setVisible(true)}><LuSearch size={25}/></h1>
        <div className="flex">
          
        </div>
        <div onClick={()=>setMenu(!menu)} className="hidden ss:flex sm:flex">
<img src={menu?Close:Menu} className="ml-48 sm:absolute sm:right-12  z-50 cursor-pointer" />
<div className={`${!menu?'hidden':'flex'} bg-blue-700 min-w-[50%] flex-col min-h-[50%] flex absolute -mr-8 right-8 top-1 rounded-2xl`}>
{
            NavModel.map(nav=>(
                <>
                
               <div className=" cursor-pointer hover:text-yellow-200 flex justify-center items-center text-3xl mt-16">
                <Link to={nav.id} smooth={true} offset={200} duration={500}> {nav.title}</Link></div>
             
                </>
            ))
            }
            

</div>
        </div>
        
        
        </div>
        </div>

        <div className="font-inter flex flex-col justify-center items-center mt-36 text-white ">
          <h1 className="font-bold text-6xl ss:text-4xl ss:text-center md:text-center lg:text-center sm:text-center   ">Beautiful analytics to grow smarter</h1>
          <p className="text-xl text-center mt-4 ss:text-lg  ">Powerful, self-serve product and growth analytics to help you convert, engage, <br /> and retain more users. Trusted by over 4,000 startups.</p>

          <button className="flex items-center justify-center border-2 border-[#FFE500] shadow-inner ss:w-52 ss:h-12 ss:text-base  w-64 h-16 mt-10 text-xl font-bold rounded-lg transition ease-in hover:ease-out hover:bg-yellow-100 hover:text-black">Why Catalog? <AiOutlineArrowRight/> </button>

        </div>
        <Modal onCancel={()=>setVisible(false)} footer={null} open={visible} >
  <Search  />
  </Modal>
        </div>
        </div>
    </>
  )
}

export default Headers
