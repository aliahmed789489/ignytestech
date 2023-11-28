import Image from "next/image"

const ServicesListItem = (props) => {
  return (
  <div className="hover:scale-[1.1] mb-4">
    {/* individual service  */}
    <div className="box-border h-full">
    <div className=" h-56 bg-[#fff]" style={{backgroundImage:`url(${props.serviceImage.src})`, 
    backgroundPosition:"center",
    backgroundSize:"cover"
    }}>
      
        
    </div>
    <div className="bg-[#262626] h-56 p-4 flex flex-col gap-2">
        <Image src={props.image} height={55} 
        style={{filter: "invert(96%) sepia(62%) saturate(2%) hue-rotate(329deg) brightness(115%) contrast(101%)"}} />
        <h4 className="text-xl font-semibold">{props.heading}</h4>
        <p className="text-sm font-normal">{props.description}</p>
    </div>
</div>
{/* ///////////////// */}
</div>
  )
}

export default ServicesListItem
