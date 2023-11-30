
import Image from "next/image"
import manTwoImage from "../../../../public/man2.png"
import serviceVectorLeft from "../../../../public/portfolioVleft.png"
import serviceVectorRight from "../../../../public/portfolioVright.png"

const PortfolioHero = () => {
  return (
    <section className="h-96 flex flex-row max-md:flex-col max-sm:flex-col "> 
        <div className="absolute top-20 left-0  max-md:hidden max-sm:hidden">
        <Image src={serviceVectorRight} width={800}/>
      </div>
      <div className="w-2/5 max-md:w-full max-sm:w-full h-full bg-[#000000] ">
        <h1 className="text-[#fff] font-bold text-5xl pt-24 pl-40 max-md:text-center max-sm:text-center max-md:pl-0 max-sm:pl-0">Portfolio</h1>
        <p className="text-[#fff] pl-20 pt-12 max-sm:text-center max-md:text-center max-sm:text-center  max-md:p-10 max-sm:p-10" >Our portfolio is a showcase of the projects,
         campaigns, and collaborations that have made us proud. It's a testament to our dedication, innovation, 
        and the remarkable partnerships we've built along the way.</p>
      </div>
      <div className="w-3/5 h-full bg-[#272727] relative max-md:hidden max-sm:hidden">
        <Image src={manTwoImage} width={400} className="absolute bottom-0 left-40 z-40"/>
        <div className="absolute top-0 right-0 max-md:hidden max-sm:hidden"> 
            <Image src={serviceVectorLeft} width={800}/>
        </div>
      </div>
    
    </section>
    
  )
}

export default PortfolioHero
