import Image from "next/image"
import Frame from "../public/Frame.png"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="h-full flex flex-row justify-center bg-[#fff]">
    <div className="w-[80%] flex flex-col item-between pt-20 pb-20 ">
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-sm:grid-cols-1">
          {/* -----------------------first row------------------- */}
        <div className=" max-sm:w-full max-md:hidden">
      <div className="grid grid-cols-2 gap-4">
      <div className="text-[#252738] ">
        <ul className="flex flex-col gap-4">
             <li className="font-bold"><Link href="/" >Who we are</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/prices">Prices</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>

        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
        <li className="font-bold">Social</li>
            <li><Link href='https://www.facebook.com/profile.php?id=61551752947120' target="_blank"> Facebook</Link></li>
            <li><Link href="https://twitter.com/ignytestech" target="_blank">Twitter</Link></li>
            <li><Link href="https://www.linkedin.com/company/ignytes-tech/" target="_blank">linkedin</Link></li>
          

        </ul>
      </div>
      <div>
       
      </div>
      </div>
      </div>

      <div className="col-span-2 max-md:col-span-1 max-md:w-full max-sm:w-full ">
        <h2 className="font-bold text-3xl pb-2">Weekly Newsletter</h2>
        <p className="mb-8">we believe that knowledge is the key to digital success. 
        Our weekly newsletter is your gateway to a world of valuable insights,
         updates, and expert tips to help you stay ahead in the digital landscape.</p>
        <div className="flex flex-row max-sm:flex-col" >
            <input type="email " placeholder="Your Email" className="bg-[#DEE1E6] " 
            style={{backgroundColor:"#DEE1E6" , padding:"1rem"}}
            />
            <button className="bg-[#000] text-[#E9B756] ml-4 max-sm:mt-8"
                style={{padding:"1rem"}}
            >Send</button>
        </div>
      </div>
      </div>
      <div className="bg-[#323444] w-full h-20 mt-10 pt-8	"
      style={{borderTop:"2px solid #323444", paddingTop:"8px"}}>
        <Link href="/" ><Image src={Frame} /></Link>
      </div>
      </div>
      

      </footer>
  )
}

export default Footer
