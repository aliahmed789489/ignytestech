import Image from "next/image"
import Link from "next/link"
const ContactTestimonial = (props) => {
  return (
    <>
     {/* each contact testemonial */}
 <div className="bg-[#262626] w-1/3 max-md:w-full max-sm:w-full  max-h-80 box-border text-center flex flex-col items-center p-8">
 <Image src={props.icon} width={100}/>
 <h4 className="text-[#DEE1E6] text-xl font-semibold pb-4">{props.heading}</h4>
 <p className="text-sm font-normal text-[#C1C1D1] pb-8">{props.description}</p>
 <Link  href={props.contactRed} className="text-[#FF9E18]  text-base font-normal">{props.contact}</Link>
</div>
{/* ////////////////////////////// */}
</>

  )
}

export default ContactTestimonial
