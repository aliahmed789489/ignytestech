import React from 'react'
import Image from "next/image"

import PricingTestimonial from "../../../../components/PricingTestimonial"

const VideoPricing = () => {
  return (
    
        <div className="w-[100%] flex flex-col mt-12">

            {/* heading */}
    
<div className="flex flex-col items-center pb-8 pt-8">
            {/* <h5 className="text-[#ffff] text-base font-normal">Vitae tortor condimentum</h5> */}
            <h1 className="font-bold text-5xl text-[#ffff]">Video Animation Pricing Plan</h1>
            <div className='bg-[#FF9E18] h-[1px] w-56 mt-8'></div>
        </div>
        {/* ///////////////////////// */}

        {/* whole div */}
        <div className="flex flex-row max-sm:flex-col gap-8 justify-center mt-6 relative mb-20">
        <div className="pr-10 pl-10 bg-[#E9B756] absolute right-[32%] z-40 rotate-[30deg] max-sm:hidden"><span className=" text-[#3C1152] font-semibold ">popular</span></div>
                <PricingTestimonial
                    package={"Pro"}
                    price={"$750"}
                    color={"#262626"}
               slogan={"Basic 2D Animation"}

                    item1={"2D animation"}
               item2={"30 second video animation"}
               item3={"Unlimited Revisions"}
               item4={"2 characters"}
               item5={" 2 objects"}
               item6={"2 scenic backgrounds"}
               item7={"Professional script"}
               item9={"Storyboard"}
               item10={"Voiceover"}
               item11={"Music & SFX"}
               item12={"4 weeks delivery"}
                    
                />
                <PricingTestimonial
                    package={"Enterprise"}
                    price={"$2500"}
                   color={"#262626"}
               slogan={"Premium 2D animation"}

                   item1={"2D animation"}
               item2={"1-5 minute video animation"}
               item3={"unlimited revisions"}
               item4={"5 characters"}
               item5={"10 objects"}
               item6={"5 scenic backgrounds"}
               item7={"Professional script"}
               item9={"Storyboard"}
               item10={"Voiceover"}
               item11={"Music & SFX"}
               item12={"6-8 weeks delivery"}
                   
               />
               <PricingTestimonial
                    package={"Premium"}
                    price={"$4000"}
                   color={"#262626"}
               slogan={"Ultimate 2D animation"}

                   item1={"2D animationn"}
               item2={"5-15 minute video animation"}
               item3={"Unlimited revisions "}
               item4={" 10 characters"}
               item5={"15 objects"}
               item6={"10 scenic backgrounds"}
               item7={"Professional scriptn"}
               item9={"Storyboard"}
               item10={"Voiceover"}
               item11={"Music & SFX"}
               item12={"10-12 weeks delivery"}
                   
               />
                
 
        </div>
        </div>
        
    
  )
}

export default VideoPricing
