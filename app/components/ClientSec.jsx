import Link from 'next/link'
import React from 'react'
import ClientList from './ClientList'

const ClientSec = () => {
    return (
        <div className=' py-12 sm:py-36'>
            <div className='grid grid-cols-12  gap-4 md:gap-16 pb-10'>
                <div className='col-span-12 md:col-span-6 xl:col-span-7'>
                    <section>
                        <div className="text-yellow-600 mb-2 text-2xl">
                            Clients

                        </div>
                        <h1 className="text-4xl font-light  sm:text-5xl md:text-7xl tracking-wide leading-loose" >
                            I have had the privilege of working with these incredible brands.

                        </h1>


                    </section>

                </div>
                <div className='col-span-12 md:col-span-6 xl:col-span-5'>
                    <div>
                        <section className="mb-4">
                            <p className='font-light md:font-base md:text-xl my-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam
                                ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam
                                fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos
                                iure, eos consequatur est deleniti cum id aliquid neque.
                            </p>
                        </section>

                        <section className="mb-4">
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
            <ClientList />
        </div>
    )
}

export default ClientSec