"use client"
import MyCarousel from "../../components/MyCarousal"
import portImage1 from "../../public/homeport1.jpg"
import portImage2 from "../../public/homeport2.jpg"
import portImage3 from "../../public/homeport3.jpg"
import portImage4 from "../../public/homeport4.jpg"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Modal from "../../components/Modal"

const OurPortfolio = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  let slides =[
    portImage1,
    portImage2,
    portImage3,
    portImage4
  ] 
  const  router = useRouter()
 const navigate=(name)=>{
  router.push(name)
 }
  return (
    <>
  
    <section className='w-[100%] h-full relative max-h-full  flex justify-center  text-[#fff]  mt-20 mb-10 max-sm:h-full '>
      
      <div className="w-[80%] flex flex-col ">
        <div className="pt-[130px] flex flex-row max-sm:flex-col ">
      <div className="flex flex-col  content-between w-[50%] max-sm:w-[100%]">
      <div className="flex gap-10 mb-[100px]">
        <h5 className="font-normal	text-base">Our portfolio</h5>
         
        <div className='bg-[#FF8300] h-[1px] w-56 mt-4'></div>
      </div>
      <div>
        <p className="font-normal	text-base">Our portfolio is a testament to the transformative power of digital solutions, offering a 
        glimpse into the remarkable successes we've achieved for our clients.</p>
        <div className="grid grid-cols-2 sm-max:grid-cols-1 mt-8">
            <button className="bg-[#515151] p-2 pr-7 pl-7 mr-5 text-[#FF9E18]" 
            onClick={()=>navigate("/services")}>Check Services</button>
            <button className="border p-2 pr-7 pl-7" onClick={openModal}>Explore Now</button>
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </div>
      </div>
      <div className="w-[50%] max-sm:w-[100%]">
    
        <div className="w-[45%] max-sm:w-[100%] m-auto pt-11 overflow-hidden">

      <MyCarousel slides={slides}/>
      
        </div>
       </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default OurPortfolio
