"use client"
import PricingTestimonial from "../../../components/PricingTestimonial";
import Image from "next/image";
import notAvailable from "../../../public/cross.svg";
import available from "../../../public/tick.svg";
import AdditionalPrices from "./AdditionalPrices";
import WebPricing from "./components/WebPricing";
import WebDesPricing from "./components/WebDesPricing";
import SMMPricing from "./components/SMMPricing";
import VideoPricing from "./components/VideoPricing";
import MobilePricing from "./components/MobilePricing";
import LogoPricing from "./components/LogoPricing";
import BrandingPricing from "./components/BrandingPricing";
import SEOPricing from "./components/SEOPricing";
import { useState } from "react";
import "../globals.css"

const contentItems = {
  "Website Development": <WebPricing />,
  "Website Designing": <WebDesPricing />,
  "SEO": <SEOPricing />,
  "Mobile App Development": <MobilePricing />,
  "Logo Designing": <LogoPricing />,
  "Branding": <BrandingPricing />,
  "Video Animation": <VideoPricing />,
  "Social Media Marketing": <SMMPricing />,
};

const PricesTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState("Website Development"); 

  const handleSwitch = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="h-full relative max-h-full  flex justify-center text-white w-[100%]">
      
      <div className="w-[80%] flex flex-col">
        
      <div className="flex flex-col items-center pb-8 pt-8">
        <h3 className="font-bold text-5xl text-[#ffff]">Pricing Plan</h3>
        <div className='bg-[#FF9E18] h-[1px] w-56 mt-8'></div> 
      </div>

        <div className="pt-20  grid grid-cols-4 max-md:grid-cols-4 gap-2 max-sm:grid-cols-2">

          {Object.keys(contentItems).map((index) => (
            <button key={index} onClick={() => handleSwitch(index)} 
            className="text-[#fff] p-4 max-sm:p-2 bg-[#262626]  rounded-lg hover:bg-[#fff] hover:text-[#000]
            ${
              activeButton === index ? 'active-001' : ''
            }`}"
    >
              {index}
            </button>
          ))}
        </div>

        {contentItems[activeIndex]}
        </div>
    </section>
  );
};

export default PricesTestimonials;
