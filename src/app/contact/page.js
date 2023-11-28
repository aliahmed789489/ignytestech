import "../globals.css"
import ContactHero from "./ContactHero.js"
import ContactTestimonialSection from "./ContactTestimonialSection.js"
import Head from 'next/head'
export const metadata = {
  title: 'IGNYTES TECH | CONTACT US | SOFTWARE HOUSE',
  description: "For customized solutions and qualified guidance, 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐔𝐒 here at Ignytes Tech, your reliable 𝐒𝐎𝐅𝐓𝐖𝐀𝐑𝐄 𝐇𝐎𝐔𝐒𝐄. Today, take the next step in your digital journey.",
}
const Contact = () => {
  return (
    <div>
   
      <ContactHero/>
      <ContactTestimonialSection/>
      <div className="h-96 max-sm:hidden"></div>
    </div>
  )
}

export default Contact
