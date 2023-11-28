import React from 'react'
import Image from 'next/image'
import LogoPort1 from "../../../public/logoport1.jpg"
import LogoPort2 from "../../../public/logoport2.jpg"
import LogoPort3 from "../../../public/logoport3.jpg"
import LogoPort4 from "../../../public/logoport4.jpg"
import LogoPort5 from "../../../public/logoport5.jpg"
import LogoPort6 from "../../../public/logoport6.jpg"
import LogoPort7 from "../../../public/logoport7.jpg"
import LogoPort8 from "../../../public/logoport8.jpg"
import LogoPort9 from "../../../public/logoport9.jpg"
import LogoPort10 from "../../../public/logoport10.jpg"
import LogoPort11 from "../../../public/logoport11.jpg"
import LogoPort12 from "../../../public/logoport12.jpg"


const LogoPortfolio = () => {
  return (
    <div>
      <div className='grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-12 mt-20'>

        <div><Image src={LogoPort1} width={550}/></div>
        <div><Image src={LogoPort2} width={550}/></div>
        <div><Image src={LogoPort3} width={550}/></div>
        <div><Image src={LogoPort4} width={550}/></div>
        <div><Image src={LogoPort5} width={550} /></div>
        <div><Image src={LogoPort6} width={550}/></div>
        <div><Image src={LogoPort7} width={550}/></div>
        <div><Image src={LogoPort8} width={550}/></div>
        <div><Image src={LogoPort9} width={550}/></div>
        <div><Image src={LogoPort10} width={550}/></div>
        <div><Image src={LogoPort11} width={550}/></div>
        <div><Image src={LogoPort12} width={550}/></div>

      </div>
    </div>
  )
}

export default LogoPortfolio



