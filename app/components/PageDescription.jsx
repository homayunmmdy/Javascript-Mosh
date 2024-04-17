import React from 'react'

const PageDescription = ({title , description}) => {
    return (
        <div className=' py-12 sm:py-36'>
            <div className='grid grid-cols-12  gap-4 md:gap-8'>
                <div className='col-span-12 md:col-span-6 xl:col-span-7'>
                    <section>
                        <h1 className="text-5xl font-light text-black  sm:text-6xl md:text-8xl tracking-wide racking-wide leading-loose">
                            {title}
                        </h1>
                    </section>
                </div>
                <div className='col-span-12 md:col-span-6 xl:col-span-5'>
                    <div>
                        <p className='font-light md:font-base md:text-3xl my-2  leading-relaxed'>
                            {description}
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PageDescription