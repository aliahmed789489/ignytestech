import Image from 'next/image'
import './globals.css'
import OurServices from './OurServices'
import OurPortfolio from './OurPortfolio'
import HomePricing from './HomePricing'
import Homecontact from './Homecontact'
import Hero from './Hero.js'
import PricesTestimonials from './prices/PricesTestimonials'


export const metadata = {
  title: 'IGNYTES TECH | HOME | SOFTWARE HOUSE',
  description: "Welcome to Ignytes Tech's 𝐇𝐎𝐌𝐄 𝐏𝐀𝐆𝐄, a digital paradise where creativity and experience merge. Your one stop shop for modern software and seamless user experiences",
}
export default function Home() {
  return (
    <>
    
   
    <Hero/>
    <OurServices/>
    <OurPortfolio/>
    <PricesTestimonials/>
    
    <Homecontact/>
    
    
    
    
    
    </>
  )
}
