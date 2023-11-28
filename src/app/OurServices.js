import Image from "next/image"
import servicesImage from "../../public/IMAGE.png"
import servicesImage2 from "../../public/service2.png"
import Servicestestimonials from "./Servicestestimonials"


const OurServices = () => {

  return (
      <section className='h-full relative max-h-full  flex justify-center text-white w-[100%]'>
        <div className="w-[80%] flex flex-col">
      <div className='w-1/2 max-md:w-full max-sm:w-full max-md:p-8 max-md:text-center max-sm:p-8 flex  flex-col mr-auto  border-box pt-[70px] ml-auto flex-wrap flex-auto items-center '> 
      <h1 className='text-5xl pt-10 font-bold'>Our services</h1>
      <div className='bg-[#FF8300] h-[1px] w-56 mt-8'></div>
      <p className='text-sm text-center pt-8'>We understand that the online landscape is constantly evolving, 
      and our services are meticulously crafted to keep you ahead of the curve. Explore our range of services, 
      each dedicated to enhancing your online presence and achieving your digital aspirations.</p>
        
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-8 mt-10 ">
      <Servicestestimonials 
      name={servicesImage}
      servicedescription={"Our web development service is dedicated to crafting exceptional digital experiences that not only look great but also engage your audience and drive success."}
      servicetitle = {"Web Development"}
      />
      <Servicestestimonials name={servicesImage2}
      servicedescription={"Our logo designing service is dedicated to crafting unique, memorable, and visually striking logos that not only look great but also encapsulate your brand's essence."}
      servicetitle = {"Logo Designing"}/>
      
      <Servicestestimonials name={servicesImage}
      servicedescription={"Our SEO services are dedicated to putting your business in the spotlight, ensuring you're discovered by the right audience and dominating search engine rankings."}
      servicetitle = {"SEO"}/>
      </div>
      
      </div>

      
    </section>
    
  )
}

export default OurServices
