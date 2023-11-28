import PricingTestimonial from "../../../../components/PricingTestimonial"

import Image from "next/image"



const WebDesPricing = () => {
  return (
   
    <div className="w-[100%] flex flex-col mt-12">

        {/* heading */}
    <div className="flex flex-col items-center pb-8 pt-8">
        <h3 className="font-bold text-3xl text-[#ffff]">Website Designing Pricing Plans</h3>
        <div className='bg-[#FF9E18] h-[1px] w-56 mt-8'></div>
    </div>
    {/* ///////////////////////// */}

    {/* whole div */}
    <div className="flex flex-row max-sm:flex-col gap-8 justify-center mt-6 relative mb-20">
    <div className="pr-10 pl-10 bg-[#E9B756] absolute right-[32%] z-40 rotate-[30deg] max-sm:hidden"><span className=" text-[#3C1152] font-semibold ">popular</span></div>
            <PricingTestimonial
                package={"PRO"}
                price={"$300"}
                color={"#262626"}
               slogan={"Wordpress"}
               item1={"High End Design"}
               item2={"Custom UI/UX"}
               item3={"3 page Website"}
               item4={"Complete W3C Certified HTML"}
               item5={"Complete Deployment"}
               item6={"100% Ownership Rights"}
               
                
            />
            <PricingTestimonial
                package={"PREMIUM"}
                price={"$450"}
               color={"#262626"}
               slogan={"Startup Website Package"}
               item1={"Wordpress"}
               item2={"Custom UI/UX"}
               item3={"5 page Website"}
               item4={"Complete W3C Certified HTML"}
               item5={"5 stock Images"}
               item6={"FREE Google Friendly Sitemap"}
               
           />
           <PricingTestimonial
                package={"ENTERPRISE"}
                price={"$850"}
               color={"#262626"}
               slogan={"Professional Website Package"}
               item1={"High End Design"}
               item2={"Custom UI/UX"}
               item3={"10 Unique page Website"}
               item4={"CMS/ Pages Website"}
               item5={"5 banner Design"}
               item6={"FREE Google Friendly Sitemap"}
               item7={"Complete Deployment"}
               
           />
            

    </div>
    </div>
    

  )
}

export default WebDesPricing
