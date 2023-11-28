
import Image from "next/image"
import manImage from "../../../public/man.png"
import serviceVectorLeft from "../../../public/servicesVleft.png"
import serviceVectorRight from "../../../public/servicesVright.png"



const ServicesHero = () => {
  return (
    <section className="h-96 flex flex-row  max-md:flex-col max-sm:flex-col"> 
      <div className="absolute top-20 left-0 z-10 max-md:hidden max-sm:hidden">
        <Image src={serviceVectorRight} width={700}/>
      </div>
      <div className="w-2/5 max-md:w-full max-sm:w-full  h-full bg-[#000000] ">
        <h1 className="text-[#fff] font-bold text-5xl pt-24 pl-40 max-md:text-center max-sm:text-center max-md:pl-0 max-sm:pl-0">Services</h1>
        <p className="text-[#fff] pl-20 pt-12 max-md:text-center max-sm:text-center max-md:p-4 max-sm:p-4"> 
        Our services are more than just solutions; they are strokes on the canvas of your digital journey, 
        each one designed to transform your vision into a captivating masterpiece.</p>
      </div>
      <div className="w-3/5 h-full bg-[#272727] relative max-md:hidden max-sm:hidden">
        <Image src={manImage} width={500} className="absolute bottom-0 left-40"/>
        <div className="absolute bottom-0 right-0 max-md:hidden max-sm:hidden"> 
            <Image src={serviceVectorLeft} width={500}/>
        </div>
      </div>
    
    </section>
    
  )
}

export default ServicesHero
