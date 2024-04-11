import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaRegNewspaper } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const About = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-6 xl:col-span-7'>
                    <div className="text-yellow-600 relative mb-2 text-2xl">
                        About
                    </div>
                    <h1 className="text-4xl font-light  sm:text-5xl md:text-7xl leading-10 tracking-wide leading-loose	 text-white">
                        life is began when fear ends. High Risk High Reward don't fear just keep pushing more
                    </h1>
                    <button className="btn btn-outline my-6 text-white hover:bg-white">
                        <span className='text-xl text-white  hover:text-black'> More About Me</span>
                    </button>
                    <ul className='flex gap-4 mt-10'>
                        <li>
                            <Link href="/"><FaInstagram size={25} color='#fff' />
                            </Link>
                        </li>
                        <li>
                            <Link href="/"><FaXTwitter size={25} color='#fff' />
                            </Link>
                        </li>
                        <li>
                            <Link href="/"><FaLinkedinIn size={25} color='#fff' />
                            </Link>
                        </li>
                        <li>
                            <Link href="/"><FaRegNewspaper size={25} color='#fff' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='col-span-12 md:col-span-6 xl:col-span-5'>
                    <div>

                        <p className='text-white font-base text-xl mb-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam
                            ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam
                            fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos
                            iure, eos consequatur est deleniti cum id aliquid neque.
                        </p>
                        <p className='text-white font-base text-xl mb-3'>
                            Autem tenetur commodi maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Est eligendi fugit, facilis velit reiciendis iure laudantium. Praesentium repellat
                            corrupti dolor sit sint obcaecati. Modi aut quo molestiae a explicabo maiores necessitatibus
                            nemo repellendus architecto? Corrupti numquam ullam nostrum, eveniet at doloribus blanditiis
                            aliquid a est porro aspernatur pariatur culpa soluta nesciunt odio quasi maxime debitis illum.
                        </p>
                        <p className='text-white font-base text-xl mb-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam
                            ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam
                            fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos
                            iure, eos consequatur est deleniti cum id aliquid neque.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About