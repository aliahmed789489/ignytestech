import React from 'react'
import Image from 'next/image'
import AppPort1 from "../../../public/appport1.jpg"
import AppPort2 from "../../../public/appport2.jpg"
import AppPort3 from "../../../public/appport3.jpg"
import AppPort4 from "../../../public/homeport3.jpg"
import AppPort5 from "../../../public/homeport4.jpg"


const MobilePortfolio = () => {
  return (
    <div>
      <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-12 mt-20'>

        <div><Image src={AppPort1} width={550}/></div>
        <div><Image src={AppPort2} width={550}/></div>
        <div><Image src={AppPort3} width={550}/></div>
        <div><Image src={AppPort4} width={550}/></div>
        <div><Image src={AppPort5} width={550} /></div>


      </div>
    </div>
  )
}

export default MobilePortfolio
