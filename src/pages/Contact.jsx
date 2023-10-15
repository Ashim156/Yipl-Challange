
const Contact = () => {
  return (
   <>
   <div className="h-[650px] font-inter">
    <div className="flex text-center items-center flex-col">
        <h1 className="font-[600] text-[32px] mt-20">Contact us</h1>
        <p className="font-[400] text-[16px] mt-6 text-[#7C7D82]">If you have any further inquires, please let us know by <br /> filling the form below</p>
    </div>
    <form className="mt-8" >
        <div className="flex ">
        <div className="flex gap-2 text-center mx-auto max-w-7xl flex-wrap ss:justify-center ss:h-full ">
           
        <div className="flex">
                <label className="flex flex-col text-left">First Name<input type="text" className="border border-gray-300 w-[267px] h-[44px] rounded-lg"/></label>
            </div>
        <div className="flex">
                <label className="flex flex-col text-left">Last Name<input type="text" className="border  border-gray-300 w-[267px] h-[44px] rounded-lg"/></label>
            </div>
            </div>
            
            </div>
        
            <div className="flex flex-col gap-2 justify-center items-center flex-wrap ss:justify-center ss:h-full">
<div>

                <label className="flex flex-col text-left" >Email<input type="email" className="border  border-gray-300 w-[550px] h-[44px] rounded-lg" /></label>
</div>
<div className=" flex flex-col">

                <label className="flex flex-col  " >Message<input type="text" className="border  border-gray-300 w-[550px] h-[117px] ss:h-[80px] sm:h-[80px] rounded-lg flext justify-start" /></label>
</div>
                
            </div>
            <div className="flex justify-center items-center">
            <button className="text-center border-2 w-[88px] h-[44px] border-[#1D6FA3]
             font-[700] text-[16px] mt-4 ss:h-7 ">Submit</button>
            </div>
           
       

    </form>
   </div>
   </>
  )
}

export default Contact
