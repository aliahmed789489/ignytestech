
import Footer from '../../components/Footer'
import './globals.css'
import { Poppins } from 'next/font/google'
import Contactform from '../../components/Contactform'
import { Providers } from './providers'
import NavBarHeader from '../../components/NavBarHeader'


// const poppins = Poppins({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: 'Ignytes Digital Website',
  description: "Welcome to Ignytes Tech's 𝐇𝐎𝐌𝐄 𝐏𝐀𝐆𝐄, a digital paradise where creativity and experience merge. Your one stop shop for modern software and seamless user experiences",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth"'>
      
      <body className={poppins.className}>
     <Providers>
     {/* <Modal/> */}
      <NavBarHeader/>
      
        {children}
      
      <Contactform/>
      <Footer/>
      </Providers>
        </body>
    </html>
  )
}
