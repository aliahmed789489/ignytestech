import React from 'react'

const AdditionalPrices = () => {
  return (
    <section className='w-full flex justify-center mt-48'>
    <div className='w-[80%] flex flex-col text-[#DEE1E6] mb-20'>
        <div><h1 className='font-bold text-4xl mb-8'>Additional Services</h1></div>
      <div>
      <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-8'>
            {/* each addition service with price */}
            <div>
                <div className='text-base flex  gap-8 items-center mb-4 font-bold w-[100%]'>
                    <h4 >Custom Reporting and Analytics</h4>
                    <div className='h-[2px] bg-[#fff] w-[100%]'></div>
                    <h5>$20</h5>
                </div>
                <p>Develop customised reporting tools to track and analyse your software's performance.</p>
            </div>
            {/* ////////////////////// */}
            {/* each addition service with price */}
            <div>
                <div className=' font-bold text-base flex gap-8 items-center mb-4'>
                    <h5>IT Consultation Services</h5>
                    <div className='h-[2px] bg-[#fff] w-[100%]'></div>
                    <h5>$20</h5>
                </div>
                <p>Get expert advice on IT strategies, software solutions,
                     and digital transformation to align your business goals with technology.</p>
            </div>
            {/* ////////////////////// */}{/* each addition service with price */}
            <div>
                <div className=' font-bold text-base flex gap-8 items-center mb-4'>
                    <h5>Custom API Development</h5>
                    <div className='h-[2px] bg-[#fff] w-[100%]'></div>
                    <h5>$20</h5>
                </div>
                <p>Build custom APIs to connect your software with other systems, 
                    enhancing functionality and data sharing.
</p>
            </div>
            {/* ////////////////////// */}{/* each addition service with price */}
            <div>
                <div className=' font-bold text-base flex gap-8 items-center mb-4'>
                    <h5>Database Optimization </h5>
                    <div className='h-[2px] bg-[#fff] w-[100%]'></div>
                    <h5>$20</h5>
                </div>
                <p>Optimise and fine-tune your database for improved performance and data retrieval speed</p>
            </div>
            {/* ////////////////////// */}{/* each addition service with price */}
            <div>
                <div className=' font-bold text-base flex gap-8 items-center mb-4'>
                    <h5>E-book</h5>
                    <div className='h-[2px] bg-[#fff] w-[100%]'></div>
                    <h5>$20</h5>
                </div>
                <p>Elevate your content with interactive digital publications, perfect for sharing knowledge, stories, and more</p>
            </div>
            {/* ////////////////////// */}{/* each addition service with price */}
            <div>
                <div className=' font-bold text-base flex gap-8 items-center mb-4'>
                    <h5>(CMS) Customization</h5>
                    <div className='h-[2px] bg-[#fff] w-[100%]'></div>
                    <h5>$20</h5>
                </div>
                <p>Tailor your CMS to manage your website content efficiently and maintain an up-to-date online presence.</p>
            </div>
            {/* ////////////////////// */}
      </div>
    </div>
    </div>
    </section>
  )
}

export default AdditionalPrices
