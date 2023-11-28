
import Image from "next/image"
import women2 from "../../../public/women2.png"

const ContactHero = () => {
  return (
    <section className="h-96 flex flex-row max-md:flex-col max-sm:flex-col"> 

      <div className="w-2/5 max-md:w-full max-sm:w-full h-full bg-[#000000] ">
        <h1 className="text-[#fff] font-bold text-5xl pt-24 pl-40 max-md:pl-0 max-sm:pl-0 max-md:text-center max-sm:text-center">Contact Us</h1>
        <p className="text-[#fff] pl-20 pt-12 max-md:text-center max-sm:text-center max-md:p-8 max-sm:p-8">Whether you have questions,
         need a consultation, or want to discuss a project, our team at
         Ignytes Tech is here to assist you. </p>
      </div>
      <div className="w-3/5 h-full bg-[#272727] relative max-md:hidden max-sm:hidden">
        <Image src={women2} width={700} className="absolute bottom-0 left-40"/>
      </div>
    
    </section>
    
  )
}

export default ContactHero
