import "../globals.css"

import PricesHero from "./PricesHero"
import PricesTestimonials from "./PricesTestimonials"
import AdditionalPrices from "./AdditionalPrices"

export const metadata = {
  title: 'IGNYTES TECH | PRICES | SOFTWARE HOUSE',
  description: "Through 𝐎𝐔𝐑 PRICING, you can find out about Ignytes Tech's growth as a leading 𝐒𝐎𝐅𝐓𝐖𝐀𝐑𝐄 𝐇𝐎𝐔𝐒𝐄. See the power of customized solutions for yourself. ",
}
const Prices = () => {
  return (
    <div>
     
            <PricesHero/>
            <PricesTestimonials/>
            <AdditionalPrices/>
            

    </div>
  )
}

export default Prices
