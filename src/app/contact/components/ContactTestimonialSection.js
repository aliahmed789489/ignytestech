import Map from "../../../../public/map.png"
import Email from "../../../../public/phone.png"
import Phone from "../../../../public/email.png"

import Image from "next/image"
import ContactTestimonial from "../../../../components/ContactTestimonial"

const ContactTestimonialSection = () => {
  return (
    <section className="w-[100%] absolute max-sm:static top-[23rem]">

    <div className="w-[80%] ml-auto mr-auto flex flex-row justify-center max-sm:flex-col max-md:gap-10 gap-40 text-[#DEE1E6] ">
      
       <ContactTestimonial
        icon={Map}
        heading={"Official Address"}
        description={"Here is our official address"}
        contact={"18601 FM 1431 Ste 104 #2053 Jonestown, TX 78645"}
        contactRed={"mailto:"}
        alternate ={"map icon in  blue"}
       />
       <ContactTestimonial
        icon={Email}
        heading={"Support Email"}
        description={"You can contact us by this email"}
        contact={"inquiry@ignytestech.com"}
        contactRed={"mailto:inquiry@ignytestech.com"}
        alternate={"email icon in blue"}
       />
      

    </div>
    </section>
  )
}

export default ContactTestimonialSection
