import React from 'react'
import WorkBtn from './WorkBtn'

const GetStarted = () => {
    return (
        <div >
            <section className='flex justify-center items-center py-12	sm:py-36	flex-col '>
                <div className=' md:max-w-[50%] contents'>
                    <h2 className='text-white text-4xl font-light  sm:text-5xl md:text-7xl tracking-wide  sm:leading-loose text-center'>Get started  Today.</h2>
                    <p className='text-gray-400 my-3 sm:my-5 font-base s  text-normal  sm:text-xl text-center	md:max-w-[70%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis rem, esse doloribus sint eaque at debitis enim vitae minus expedita ratione dignissimos sit nostrum optio sequi. Ipsa at beatae quam.</p>
                    <div className='w-64'>
                        <WorkBtn />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GetStarted