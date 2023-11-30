import "../globals.css"
// import Parallelx from '../../../components/Parallelx'

import PortfolioHero from "./components/PortfolioHero"
import PortfolioImageGrid from "./components/PortfolioImageGrid"
import PortfolioLogoSection from "./components/PortfolioLogoSection"

export const metadata = {
  title: 'IGNYTES TECH | OUR PORTFOLIIO | SOFTWARE HOUSE',
  description: "Through 𝐎𝐔𝐑 𝐏𝐎𝐑𝐓𝐅𝐎𝐋𝐈𝐎, you can find out about Ignytes Tech's growthas a leading 𝐒𝐎𝐅𝐓𝐖𝐀𝐑𝐄 𝐇𝐎𝐔𝐒𝐄. See the power of customized solutions for yourself. ",
}
const Portfolio = () => {
  return (
    <div>
   
           <PortfolioHero/>
          <PortfolioImageGrid/>
        
          <PortfolioLogoSection/>
    </div>
  )
}

export default Portfolio
