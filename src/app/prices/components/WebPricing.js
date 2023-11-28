import PricingTestimonial from "../../../../components/PricingTestimonial"

import Image from "next/image"

const WebPricing = () => {
  return (
   
    <div className="w-[100%] flex flex-col mt-12">

        {/* heading */}
    <div className="flex flex-col items-center pb-8 pt-8">
        <h1 className="font-bold text-5xl text-[#ffff]">Website Development Pricing Plans</h1>
        <div className='bg-[#FF9E18] h-[1px] w-56 mt-8'></div>
        
    </div>
    {/* ///////////////////////// */}

    {/* whole div */}
    <div className="flex flex-row max-md:flex-col max-sm:flex-col max-md:gap-8 gap-8 justify-center mt-6 relative mb-20">
    <div className="pr-10 pl-10 bg-[#E9B756] absolute right-[32%] z-40 rotate-[30deg] max-md:hidden max-sm:hidden"><span className=" text-[#3C1152] font-semibold ">popular</span></div>
            <PricingTestimonial
                package={"PRO"}
                price={"$244"}
                color={"#262626"}
               slogan={"Basic Website"}

                item1={"1 Page Website Design"}
            
                item2={"HTML Based"}
             
                item3={"1 Banner Design"}

                item4={"Contact/Query Form"}
                
                item5={"3 Revisions"}
                
                item6={"Complete W3C Certified HTML"}
                
                item7={"Complete Deployment"}
                
                
            />
            <PricingTestimonial
                package={"PREMIUM"}
                price={"$394"}
               color={"#262626"}
               slogan={"Wordpress"}

               item1={"3 Page Website Design"}
            
                item2={"HTML Based "}
             
                item3={"Hover Effects"}

                item4={"2 Banner Designs"}
                
                item5={"Sliding Banner"}
                
                item6={"2 Stock Photos (You can provide us more)"}
                
               
           />
           <PricingTestimonial
                package={"ENTERPRISE"}
                price={"$819"}
               color={"#262626"}
               slogan={"Up to 5 Pages Website Design"}

               item1={"3 Stock Photos"}
            
               item2={"Content Management System"}
            
               item3={"5 Professional Email ID’s"}

               item4={"Unlimited Revisions"}
               
               item5={"Complete Source Files"}
               
               item6={"Dedicated Project Manager"}
               
               item7={"Ownership Rights"}
               
           />
            

    </div>
    </div>
    

  )
}

export default WebPricing
