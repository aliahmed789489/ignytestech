import Image from "next/image"
const FeaturesServices = (props) => {
  return (
    <>
    {/*single feature */}
    <div className="h-full box-border text-[#DEE1E6] flex flex-col items-start gap-4 p-8 max-sm:col-span-2 "
    style={{border:"2px solid #5E78BB"}}
    >
        <div className="bg-[#424153] p-2 rounded-full"><Image src={props.image}/></div>
        <h3 className="font-bold text-sm">{props.heading}</h3>
        <p>{props.description}</p>
    </div>
{/* ################################## */}
</>
  )
}

export default FeaturesServices
