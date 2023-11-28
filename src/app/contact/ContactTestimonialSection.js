import Map from "../../../public/map.png"
import Email from "../../../public/phone.png"
import Phone from "../../../public/email.png"

import Image from "next/image"
import ContactTestimonial from "../../../components/ContactTestimonial"

const ContactTestimonialSection = () => {
  return (
    <section className="w-[100%] absolute max-sm:static top-[23rem]">

    <div className="w-[80%] ml-auto mr-auto flex flex-row justify-center max-sm:flex-col max-md:gap-10 gap-40 text-[#DEE1E6] ">
      
       <ContactTestimonial
        icon={Map}
        heading={"Offical Address"}
        description={"Here is our offical address"}
        contact={"18601 FM 1431 Ste 104 #2053 Jonestown, TX 78645"}
        contactRed={"mailto:"}
       />
       <ContactTestimonial
        icon={Email}
        heading={"Support Email"}
        description={"You can contact us by this email"}
        contact={"contact@ignytestech.com"}
        contactRed={"mailto:contact@ignytestech.com"}
       />
      

    </div>
    </section>
  )
}

export default ContactTestimonialSection
