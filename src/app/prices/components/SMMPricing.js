
import Image from "next/image"

import PricingTestimonial from "../../../../components/PricingTestimonial"

const SMMPricing = () => {
  return (
   
    <div className="w-[100%] flex flex-col mt-12">

        {/* heading */}
        <div className="flex flex-col items-center pb-8 pt-8">
        {/* <h5 className="text-[#ffff] text-base font-normal">Vitae tortor condimentum</h5> */}
        <h1 className="font-bold text-5xl text-[#ffff]">Socail Media Marketing Pricing Plans</h1>
        <div className='bg-[#FF9E18] h-[1px] w-56 mt-8'></div>
    </div>
    {/* ///////////////////////// */}

    {/* whole div */}
    <div className="flex flex-row max-sm:flex-col gap-8 justify-center mt-6 relative mb-20">
    <div className="pr-10 pl-10 bg-[#E9B756] absolute right-[32%] z-40 rotate-[30deg] max-sm:hidden"><span className=" text-[#3C1152] font-semibold ">popular</span></div>
            <PricingTestimonial
                package={"PRO"}
                price={"$700"}
                color={"#262626"}
                slogan={"Professional plan"}

                item1={"2 platforms of our choice"}
               item2={"3 post week"}
               item3={"business page optimization"}
               item4={"content creation"}
               item5={"community management"}
            
                
            />
            <PricingTestimonial
                package={"PREMIUM"}
                price={"$1500"}
               color={"#262626"}
               slogan={"Business plan"}

               item1={"3 platforms of your choice"}
               item2={"5 posts per week"}
               item3={"community management"}
               item4={"business page optimization"}
               item5={"monthly progress report"}
               item6={"copy writing"}
               item7={"likes campaign"}
               
           />
           <PricingTestimonial
                package={"ENTERPRISE"}
                price={"$2500"}
               color={"#262626"}
               slogan={"Ultimate plan"}

               item1={"4 platforms of your choice"}
               item2={"7 posts per week"}
               item3={"copywriting & visual design"}
               item4={"business page optimization"}
               item5={"business page optimization"}
               item6={"ad campaign management"}
               item7={"spam monitoring"}
               item9={"monthly progress report"}
               item10={"reputation management"}
               item11={"social account setup"}
               item12={"content creation"}
               item13={"social media hearing"}
               item14={"query and comments reply"}
               
           />
            

    </div>
    </div>
    

  )
}

export default SMMPricing
