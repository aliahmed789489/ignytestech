import React from 'react'
import Image from 'next/image'
import WebDesPort1 from "../../../../public/webdesport1.jpg"
import WebDesPort2 from "../../../../public/webdesport2.jpg"
import WebDesPort3 from "../../../../public/webdesport3.jpg"
import WebDesPort4 from "../../../../public/webdesport4.jpg"
import WebDesPort5 from "../../../../public/webdesport5.jpg"
import WebDesPort6 from "../../../../public/webdesport6.jpg"

const WebDesPortfolio = () => {
  return (
    <div>
      <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-12 mt-20'>

        <div><Image src={WebDesPort1} width={550}/></div>
        <div><Image src={WebDesPort2} width={550}/></div>
        <div><Image src={WebDesPort3} width={550}/></div>
        <div><Image src={WebDesPort4} width={550}/></div>
        <div><Image src={WebDesPort5} width={550} /></div>
        <div><Image src={WebDesPort6} width={550}/></div>

      </div>
    </div>
  )
}

export default WebDesPortfolio
