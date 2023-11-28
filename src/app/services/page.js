import React from 'react'
import ServicesHero from './ServicesHero'
import ServicesTestimonials from './ServicesTestimonials'
import ServicesList from './ServicesList'
import "../globals.css"
import Head from 'next/head'

export const metadata = {
  title: 'IGNYTES TECH | SERVICES | SOFTWARE HOUSE',
  description: "Ignytes Tech, a leading 𝐒𝐎𝐅𝐓𝐖𝐀𝐑𝐄 𝐇𝐎𝐔𝐒𝐄, can help you grow your business with tailored 𝐒𝐄𝐑𝐕𝐈𝐂𝐄𝐒.Discover new approaches for digital quality and achievement.",
}

const page = () => {
  return (
    <>
     

      <ServicesHero/>
      <ServicesTestimonials/>
      <ServicesList/>
      </>
  )
}

export default page
