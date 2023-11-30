"use client"
import { useState } from "react";
import WebPortfolio from "./WebPortfolio";
import WebDesPortfolio from "./WebDesPortfolio";

import LogoPortfolio from "./LogoPortfolio";
import MobilePortfolio from "./MobilePortfolio";


const contentItems = {
  "Website Development": <WebPortfolio />,
  "Website Designing": <WebDesPortfolio />,
  "Mobile App Development": <MobilePortfolio />,
  "Logo Designing": <LogoPortfolio />,
 
  
};

const PortfolioImageGrid = () => {
    const [activeIndex, setActiveIndex] = useState("Website Development"); 
  
    const handleSwitch = (index) => {
      setActiveIndex(index);
    };

  return (
    <section className=" h-full flex justify-center  pt-20 ">
    <div className="w-[80%] text-center">
    <div className="text-[#DEE1E6] flex flex-col items-center">
        <p className="text-sm font-normal pb-4">Vitae tortor condimentum</p>
        <h1 className="text-4xl font-bold pb-4">Portfolio</h1>
        <div className='bg-[#E9B756] h-[1px] w-56 mt-8'></div>
    </div>
    <div className="pt-8 grid grid-cols-4 grid-rows-1 max-md:grid-cols-3 max-sm:grid-cols-1">
        
    {Object.keys(contentItems).map((index) => (
            <button key={index} onClick={() => handleSwitch(index)} 
            className="text-[#fff] p-4 bg-[#262626] m-2 rounded-lg hover:bg-[#fff] hover:text-[#000]">
              {index}
            </button>
          ))}

    </div> 
    {contentItems[activeIndex]}
    </div>
    
    </section>
  )
}

export default PortfolioImageGrid
