
import Image from 'next/image'
import './globals.css'
import women from "../../public/women.png"
import playBtn from "../../public/play.svg"
import downVector from "../../public/Vector 4.png"
import upperVector from "../../public/Vector 5.png"
import upperVectorRight from "../../public/Vector 7.png"
import centerVector from "../../public/Vector 6.png"
import facebook from "../../public/icons8-facebook-50.png"
import twitterx from "../../public/twitterx.png"
import linkedin from "../../public/linkedin.png"
import heroVector from "../../public/herovector.svg"
import anime from 'animejs'
import Link from 'next/link'

const Hero = () => {

  return (
    <main className='h-screen flex relative ' >
      <div className='absolute bottom-0 w-9/12 max-sm:hidden'>
  
      
      </div>
      <div className='h-full w-2/5 bg-[#000000] max-md:hidden max-sm:hidden'>
      <div>
      <Image src={upperVectorRight} className='w-96'/>

      </div>
       <div className='flex gap-x-10 ml-24 mt-[100px]'>
        <Link href='https://www.facebook.com/profile.php?id=61551752947120' target="_blank"> 
        <Image src={facebook} className='w-8 h-8'/></Link>
        <Link href="https://twitter.com/ignytestech" target="_blank">
          <Image src={twitterx} className='w-8 h-8'/></Link>
        <Link href="https://www.linkedin.com/company/ignytes-tech/" target="_blank">
          <Image src={linkedin} className='w-8 h-8'/></Link>
        
       </div>
      </div>
      <div className='h-full w-3/5 max-md:w-full max-sm:w-full bg-[#272727]  flex items-center justify-center flex-col'>
      <div className='-z-5 absolute top-0 right-0 w-1/2 max-sm:hidden max-md:hidden'>
        <Image src={upperVector}/>
        </div>
        <div className='-z-5 absolute bottom-0 right-0 max-md:hidden max-sm:hidden'>
        <Image src={downVector}/>
        </div>
      <div className='text-white w-3/5 max-md:w-full max-sm:w-full max-md:p-8 max-sm:p-8 max-md:text-center max-sm:text-center'>
          <div>
            <h5>Ignytes Tech</h5>
          </div>
          <div><h1 className='text-5xl capitalize font-bold text-[#DEE1E6] '> WE AMPLIFY YOUR BUSINESS ON A GLOBAL STAGE</h1></div>
          <div className='flex items-space gap-x-3  flex-row max-md:flex-col max-sm:flex-col max-md:items-center max-sm:items-center justify-end mt-20 items-start'>
           
            <div className='w-1/2 max-md:w-full  max-sm:w-full  ml-10 max-md:ml-0 max-sm:ml-0 max-sm:order-1'>
              <p className='text-sm text-[#C1C1D1]'> We deliver innovative solutions that drive tangible results.
                Our customer-centric approach ensures tailor-made solutions to meet your unique needs, while our 
                unwavering commitment to excellence and innovation gives you a competitive edge. 
                </p></div>
          </div>
        </div>
      </div>
      <div className='absolute w-1/2 bottom-0 left-[230px] max-md:hidden max-sm:hidden'>
      <Image
        src= {women}
      
      />
      </div>
    </main>
    
  )
}

export default Hero
