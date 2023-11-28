"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Modal from "./Modal"
import { useState } from "react"
const PricingTestimonial = (props) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const  router = useRouter()
  const navigate=(name)=>{
   router.push(name)
  }
  return (
    <>
    <Modal isOpen={isModalOpen} closeModal={closeModal} />
    <div className="w-1/3 max-md:w-full max-sm:w-full  text-[#DEE1E6] text-center pt-8 pb-8 box-border"
            style={{backgroundColor:props.color}}
    >
            <div className="mb-12  ">
            <h2 className="font-bold text-4xl max-md:text-lg ">{props.package}</h2>
            <h5 className=" font-normal text-base">{props.slogan}</h5>
            </div>
            <div className="">
            <h1 className=" font-bold text-5xl mb-8 mt-8">{props.price}</h1>
            <ul className="  overflow-scroll text-[#C1C1D1] mb-8 flex flex-col gap-4"
            style={{overflowY:"scroll", maxHeight:"300px"}}>
                <li className="flex gap-2 justify-center ">
                <p>{props.item1}</p></li>
                <li className="flex gap-2 justify-center">
               
                <p>{props.item2}</p></li>
                <li className="flex gap-2 justify-center">
              
                <p>{props.item3}</p></li>
                <li className="flex gap-2 justify-center">
              
                <p>{props.item4}</p></li>
                <li className="flex gap-2 justify-center">
              
                <p>{props.item5}</p></li>
                <li className="flex gap-2 justify-center">
              
                <p>{props.item6}</p></li>
                <li className="flex gap-2 justify-center">
            
                <p>{props.item7}</p></li>
                <li className="flex gap-2 justify-center">
            
                <p>{props.item8}</p></li>
                <li className="flex gap-2 justify-center">
            
                <p>{props.item9}</p></li>
                <li className="flex gap-2 justify-center">
            
                <p>{props.item10}</p></li>
                <li className="flex gap-2 justify-center">
            
                <p>{props.item11}</p></li>
                <li className="flex gap-2 justify-center">
            
                <p>{props.item12}</p></li>
                <li className="flex gap-2 justify-center">
            
                <p>{props.item13}</p></li>
                <li className="flex gap-2 justify-center">
            
                <p>{props.item14}</p></li>
                <li className="flex gap-2 justify-center">
            
                <p>{props.item15}</p></li>
               
            </ul>
            <button className="text-[#FF9E18] bg-[#515151] p-2 hover:bg-[#fff] hover:text-[#000]" 
            onClick={openModal}>Get Started</button>
            </div>
            
        </div>
        </>
  )
}

export default PricingTestimonial
