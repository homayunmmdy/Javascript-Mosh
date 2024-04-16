import Link from 'next/link'
import React from 'react'

const SkillsSec = () => {
    return (
        <div className=' py-12 sm:py-36'>
            <div className='grid grid-cols-12  gap-4 md:gap-16'>
                <div className='col-span-12 md:col-span-6 xl:col-span-7'>
                    <section>
                        <div className="text-yellow-600 mb-2 text-2xl">
                            Expertise

                        </div>
                        <h1 className="text-4xl font-light  sm:text-5xl md:text-7xl tracking-wide">
                            My key areas of expertise.
                        </h1>
                        <p className=' font-base text-xl my-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam
                            ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam
                            fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos
                            iure, eos consequatur est deleniti cum id aliquid neque.
                        </p>
                        <button className="btn btn-outline my-6  hover:bg-black">
                            <Link href="/" className='text-xl   hover:text-white'> View all Services</Link>
                        </button>
                    </section>

                </div>
                <div className='col-span-12 md:col-span-6 xl:col-span-5'>
                    <div>

                    <section className="mb-4">
                        <div className='flex items-center gap-2'>
                            <span className="text-yellow-600 text-2xl pr-1" >01.</span>
                            <h1 className="text-2xl font-light  sm:text-4xl ">Frontend Developer</h1>
                        </div>
                        <p className='font-light md:font-base md:text-xl my-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam
                            ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam
                            fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos
                            iure, eos consequatur est deleniti cum id aliquid neque.
                        </p>
                    </section>
                    <section className="mb-4">
                        <div className='flex items-center gap-2'>
                            <span className="text-yellow-600 text-2xl pr-1" >02.</span>
                            <h1 className="text-2xl font-light  sm:text-4xl ">Frontend Developer</h1>
                        </div>
                        <p className='font-light md:font-base md:text-xl my-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam
                            ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam
                            fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos
                            iure, eos consequatur est deleniti cum id aliquid neque.
                        </p>
                    </section>
                    <section className="mb-4">
                        <div className='flex items-center gap-2'>
                            <span className="text-yellow-600 text-2xl pr-1" >03.</span>
                            <h1 className="text-2xl font-light  sm:text-4xl ">Frontend Developer</h1>
                        </div>
                        <p className='font-light md:font-base md:text-xl my-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam
                            ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam
                            fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos
                            iure, eos consequatur est deleniti cum id aliquid neque.
                        </p>
                    </section>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default SkillsSec