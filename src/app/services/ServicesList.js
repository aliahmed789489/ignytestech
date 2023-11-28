
import bulb from "../../../public/bulb.svg"
import ServicesListItem from "./ServicesListItem"
import WebDesImage from "../../../public/web-design.jpg"
import AppDevImage from "../../../public/app-development.jpg"
import BrandingImage from "../../../public/branding.jpg"
import LogoImage from "../../../public/logo.jpg"
import SEOImage from "../../../public/seo.jpg"
import SoftwareDevImage from "../../../public/software-development.jpg"
import VideoAnimationImage from "../../../public/video-animation.jpg"
import SMMImage from "../../../public/smm.jpg"
import WebDevImage from "../../../public/web-development.jpg"

import WebDesIcon from "../../../public/web-design-icon.png"
import AppDevIcon from "../../../public/app-development-icon.png"
import BrandingIcon from "../../../public/branding-icon.png"
import LogoIcon from "../../../public/logo-icon.png"
import SEOIcon from "../../../public/seo-icon.png"
import SoftwareDevIcon from "../../../public/software-icon.png"
import VideoAnimationIcon from "../../../public/video-icon.png"
import SMMIcon from "../../../public/smm-icon.png"
import WebDevIcon from "../../../public/web-development-icon.png"



const ServicesList = () => {
  return (
    <div className="h-full relative max-h-full  flex justify-center pb-20 ">
        <div className="w-[80%] flex flex-col text-[#DEE1E6]">
            <div className="flex flex-col max-sm:items-center pb-8 pt-20">
              <div className="w-[100%] flex flex-row  max-sm:flex-col  max-sm:items-center  gap-2 pb-8 pt-8">
              <h5 className="text-base font-normal">High Value</h5>
              <div className='bg-[#E9B756] h-[1px] w-56 mt-4 pr-10 max-sm:pr-0 '></div>
              
              </div>
            
            <h2 className="text-4xl font-bold">The Services</h2> 
            </div>  
            <div>
                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4 max-sm:grid-cols-1 gap-4 ">

                    <ServicesListItem
                    serviceImage={SoftwareDevImage}
                    image={SoftwareDevIcon}
                    heading="Software Development"
                    description="We craft custom software solutions to address your unique business needs,
                       boosting efficiency and productivity."
                    />
                    <ServicesListItem
                    serviceImage={WebDevImage}
                    image={WebDevIcon}
                    heading="Website development"
                    description="Our team specializes in creating bespoke websites to help you establish a robust online presence 
                    while meeting your specific requirements."
                    /><ServicesListItem
                    serviceImage={WebDesImage}
                    image={WebDesIcon}
                    heading="website designing"
                    description="We offer expert web design services to ensure your online presence is
                     engaging and visually appealing, leaving a lasting impression on visitors."
                    />
                    
                    <ServicesListItem
                    serviceImage={AppDevImage}
                    image={AppDevIcon}
                    heading="Mobile App Development"
                    description="We excel in developing mobile applications for iOS and Android platforms, 
                    providing seamless experiences for your users."
                    />
                    <ServicesListItem
                    serviceImage={SEOImage}
                    image={SEOIcon}
                    heading="SEO"
                    description="We are SEO trailblazers, 
                    dedicated to ensuring that your brand's online presence shines brightly in the vast digital landscape."
                    />
                    <ServicesListItem
                    serviceImage={LogoImage}
                    image={LogoIcon}
                    heading="Logo Designing"
                    description="We are skilled in crafting memorable logos that represent your brand identity and leave a lasting 
                    impression on your audience"
                    />
                    <ServicesListItem
                    serviceImage={BrandingImage}
                    image={BrandingIcon}
                    heading="Branding"
                    description="we're passionate about helping brands discover their unique voice and craft a compelling 
                    identity that resonates with their audience. "
                    />
                    <ServicesListItem
                    serviceImage={SMMImage}
                    image={SMMIcon}
                    heading="Social Media Marketing"
                    description="Our social media marketing services are designed to boost your brand's presence on popular platforms, 
                    engaging with your target audience and driving growth."
                    />
                    <ServicesListItem
                    serviceImage={VideoAnimationImage}
                    image={VideoAnimationIcon}
                    heading="Video Animation"
                    description="We specialize in creating video animations that are not only visually 
                    stunning but also convey your message effectively."
                    />

                   


                </div>
            </div>         
        </div>
      
    </div>
  )
}

export default ServicesList
