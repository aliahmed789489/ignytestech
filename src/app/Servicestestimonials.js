"use client"
import Image from "next/image"
import servicesImage from "../../public/IMAGE.png"
import { useRouter } from "next/navigation"
const Servicestestimonials = (props) => {
  const  router = useRouter()
  const toServices=(name)=>{
   router.push(name)
  }
  return (
  
    
      <div className="box-border  max-md:w-full max-sm:w-full">
      <div className=" z-5 w-full h-40 mb-8">
      <Image src={props.name}/>
      </div>
        <div className="w-full box-border flex flex-col items-center bg-[#262626] pb-10 pt-20 pl-4 pr-4 text-center ">
          <h1 className="text-[#DEE1E6] text-3xl font-bold pt-8">{props.servicetitle}</h1>
          <p className="text-[#C1C1D1] text-sm font-normal text-center  pt-2 pb-2">{props.servicedescription}</p>
          <button className="text-[#FF9E18] bg-[#515151] p-2 mt-4 hover:bg-[#fff] hover:text-[#000]" 
          onClick={()=>toServices("/services")}>Read More</button>
        </div>
      </div>


  )
}

export default Servicestestimonials
