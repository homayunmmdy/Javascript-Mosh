import React from 'react'

const PageTitle = ({ titr, title }) => {
    return (
        <div className='bg-gray-900'>
            <section className='flex justify-center items-center py-12	sm:py-36	flex-col '>
                <div className=' md:max-w-[50%] contents'>
                    <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-2 text-2xl">
                        {titr}
                    </div>
                    <h2 className='text-white text-4xl font-light  sm:text-5xl md:text-7xl tracking-wide  sm:leading-loose text-center'>{title}</h2>
                </div>
            </section>
        </div>
    )
}

export default PageTitle