import React from 'react'
import Image from 'next/image'
import WebPort1 from "../../../public/webdevport1.jpg"
import WebPort2 from "../../../public/webdevport2.jpg"
import WebPort3 from "../../../public/webdevport3.jpg"
import WebPort4 from "../../../public/webdevport4.jpg"
import WebPort5 from "../../../public/webdevport5.jpg"
import WebPort6 from "../../../public/webdevport6.jpg"

const WebPortfolio = () => {
  return (
    <div>
      <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-12 mt-20'>

        <div><Image src={WebPort1} width={550}/></div>
        <div><Image src={WebPort2} width={550}/></div>
        <div><Image src={WebPort3} width={550}/></div>
        <div><Image src={WebPort4} width={550}/></div>
        <div><Image src={WebPort5} width={550} /></div>
        <div><Image src={WebPort6} width={550}/></div>

      </div>
    </div>
  )
}

export default WebPortfolio
