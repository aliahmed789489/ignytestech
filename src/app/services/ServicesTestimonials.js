import FeaturesServices from "./FeaturesServices"
import Image from "next/image"
import team from "../../../public/team.svg"
import chat from "../../../public/chat.svg"
import send from "../../../public/send.svg"
import trophy from "../../../public/trophy.svg"
import idea from "../../../public/idea.svg"
import star from "../../../public/star.svg"
import CeoImage from "../../../public/ceo1.png"


// import styles from "module.css"
const ServicesTestimonials = () => {
  return (
    <section className="h-full   flex justify-center ">
        <div className="w-[80%] flex flex-col ">
         
        <div className="text-[#fff] flex flex-row max-md:flex-col max-sm:flex-col pt-20 pb-20 gap-12 max-md:text-center max-sm:text-center">
          <div className=" w-1/3 max-md:w-full max-sm:w-full flex flex-row max-md:flex-col max-sm:flex-col   ">
          <h2 className="text-3xl font-bold text-[#DEE1E6]">Problem Solver with Creative Solution</h2>
          <div className='bg-[#E9B756] h-[1px] w-56 mt-8'></div>
          </div>
      <div className="w-2/3 max-md:w-full max-sm:w-full">
      <p className="text-[#C1C1D1] font-sm text-normal"> Our agency's journey has been marked by innovation, 
      creativity, and a relentless pursuit of excellence. We're honored to have received awards that validate 
      our efforts and commitment to pushing the 
      boundaries of what's possible in the digital world.</p>
      </div>
       
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1  gap-4"> 
        <FeaturesServices 
         
         description="
          Our collective expertise, boundless creativity, 
         and unwavering dedication."
         image={team}
         heading="Best Team"
        />
        <FeaturesServices 
         description="our 24/7 support, we're always just a click or a call away, ready to assist you, 
         address your concerns."
         image={chat}
         heading="24/7 Support"
        />
       {/* testmonial */}
        <div className=" col-span-2 text-[#DEE1E6] flex flex-col  max-sm:items-center gap-2  max-md:order-last max-sm:order-last max-md:pt-10 max-sm:pt-10">
        <h2 className="font-bold text-4xl">Testimonial</h2>
        <section className="flex flex-row max-sm:flex-col  gap-8">
        <div className="w-[30%] max-sm:w-[100%] flex flex-col items-center gap-2">
          <div className="rounded-full "><Image src={CeoImage} style={{borderRadius:"50px"}}/></div>
          <h5>James William</h5>
          <p className="text-[#E9B756]">CEO</p>
        </div>
        <div className="w-[70%] max-sm:w-[100%] bg-[#262626] p-8">
            <p>
            our commitment to excellence in the digital realm is unwavering. As the CEO, 
            I am honored to lead a team of passionate and creative individuals dedicated to your success.
            </p>
        </div>
        </section>
        </div>
        {/* ################################## */}
            <FeaturesServices 
         description="Our commitment to providing the best value means 
         you not only receive exceptional 
         digital solutions but also enjoy a significant boost to your bottom line."
         image={send}
         heading="Best Value"
        />
            <FeaturesServices 
         description="We're proud to say that our commitment to delivering 
         top-notch digital solutions has been recognized and celebrated in the form of awards and accolades."
         image={trophy}
         heading="Win Award"
        />
            <FeaturesServices 
         description="It's a commitment that underlines every project,
          from web design to content creation, mobile apps, and SEO services."
         image={idea}
         heading="High Quality"
        />
            <FeaturesServices 
         description="We're honored to be celebrated by clients and peers alike, 
         marking our journey from a trusted partner to a popular agency in the digital landscape."
         image={star}
         heading="Popular Agency"
        />
        </div>
        </div>
    </section>
  )
}

export default ServicesTestimonials
