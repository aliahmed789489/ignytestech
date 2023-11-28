
import PricingTestimonial from '../../components/PricingTestimonial'
import available from "../../public/tick.svg"
const HomePricing = () => {
  return (
    <section className="h-full bg-[#fff] flex flex-row justify-center pb-20">
        <div className="w-[80%] flex flex-col mt-12">
        <div className="text-center">
            {/* <h5 className="text-[#20142D] text-base font-noarmal">Our Pricing Plans</h5> */}
            <h1 className="font-bold text-5xl text-[#20142D]">Awesome Pricing Plan</h1>
            <div><span className="text-[#FF9E18]">________________</span></div>
        </div>
        {/* whole div */}
        <div className="flex flex-row max-sm:flex-col gap-8 justify-center mt-6 relative">
        <div className="pr-10 pl-10 bg-[#E9B756] absolute right-[32%] z-40 rotate-[30deg]"><span className=" text-[#3C1152] font-semibold max-sm:hidden ">popular</span></div>

        <PricingTestimonial
                    package={"Pro"}
                    price={"500"}
                    color={"#262626"}
                    item1={"Feugiat nisl pretium"}
                    status1={available}
                    item2={"Feugiat nisl pretium"}
                    status2={available}
                    item3={"Feugiat nisl pretium"}
                    status3={available}
                    item4={"Feugiat nisl pretium"}
                    status4={available}
                    item5={"Feugiat nisl pretium"}
                    status5={available}
                    item6={"Feugiat nisl pretium"}
                    status6={available}
                    item7={"Feugiat nisl pretium"}
                    status7={available}
                    
                />
            <PricingTestimonial
                    package={"Enterprise"}
                    price={"500"}
                    color={"#262626"}
                    item1={"Feugiat nisl pretium"}
                    status1={available}
                    item2={"Feugiat nisl pretium"}
                    status2={available}
                    item3={"Feugiat nisl pretium"}
                    status3={available}
                    item4={"Feugiat nisl pretium"}
                    status4={available}
                    item5={"Feugiat nisl pretium"}
                    status5={available}
                    item6={"Feugiat nisl pretium"}
                    status6={available}
                    item7={"Feugiat nisl pretium"}
                    status7={available}
                    
                />
                <PricingTestimonial
                    package={"Premium"}
                    price={"500"}
                    color={"#262626"}
                    item1={"Feugiat nisl pretium"}
                    status1={available}
                    item2={"Feugiat nisl pretium"}
                    status2={available}
                    item3={"Feugiat nisl pretium"}
                    status3={available}
                    item4={"Feugiat nisl pretium"}
                    status4={available}
                    item5={"Feugiat nisl pretium"}
                    status5={available}
                    item6={"Feugiat nisl pretium"}
                    status6={available}
                    item7={"Feugiat nisl pretium"}
                    status7={available}
                    
                />
        
            

        </div>
        </div>
    </section>
  )
}

export default HomePricing
