
import Image from "next/image"
import client01 from "../../../../public/2.png"
import client02 from "../../../../public/3.png"
import client03 from "../../../../public/4.png"
import client04 from "../../../../public/5.png"
import client05 from "../../../../public/6.png"



const PortfolioLogoSection = () => {
  return (
    <section className="w-full flex justify-center ">
    <div className="w-[80%] text-[#DEE1E6] ">
      <div className="pt-20 flex items-center">
        <h5 className="text-sm font-normal">Our Clients </h5>
        <div className='bg-[#FF9E18] h-[1px] w-52 ml-4 '></div>
    
      </div>
      <div className="grid grid-cols-4 gap-x-56 pt-10 pb-10">
        <div><Image src={client01} /></div>
        <div><Image src={client02} /></div>
        <div><Image src={client03} /></div>
        <div><Image src={client04} /></div>
        <div><Image src={client05} /></div>


      
        
        
      </div>
    </div>
    </section>
  )
}

export default PortfolioLogoSection
