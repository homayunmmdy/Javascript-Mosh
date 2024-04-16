import React from 'react'

const Footer = () => {
    return (
        <div style={{ background: "linear-gradient(20deg, hsl(130deg, 8%, 14%) 40%, hsl(0deg, 0%, 13%) 100%)" }}>
            <hr className=" border-b-1 border-gray-500 " />
            <footer className=" p-5 w-[98%] md:w-[92%] mx-auto  text-base-content">
                <div className='grid grid-cols-12 gap-4 w-full'>
                    <div className="col-span-12 md:grid-span-12 xl:col-span-6">
                        <nav>
                            <h6 className="footer-title text-4xl font-light text-gray-50 ">About Monica</h6>
                            <p className='mt-2 font-bold leading-loose text-white tracking-wide pr-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum quasi facere libero, fugiat laboriosam possimus reprehenderit eveniet vero voluptatum fugit ad quis veritatis suscipit beatae incidunt perferendis tempore earum hic repellendus quisquam recusandae ipsa id esse. Nobis, aut deleniti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ratione dignissimos.
                            </p>
                        </nav>
                    </div>
                    <div className="col-span-12 md:grid-span-6 xl:col-span-3">
                        <h6 className="footer-title text-4xl font-light text-gray-50">Services</h6>
                        <nav className='flex flex-col gap-3 pl-3'>
                            <a className="text-white hover:text-gray-100 text-xl">Branding</a>
                            <a className="text-white hover:text-gray-100 text-xl">Design</a>
                            <a className="text-white hover:text-gray-100 text-xl">Marketing</a>
                            <a className="text-white hover:text-gray-100 text-xl">Advertisement</a>
                        </nav>
                    </div>
                    <div className="col-span-12 md:grid-span-6 xl:col-span-3">
                        <h6 className="footer-title text-4xl font-light text-gray-50">Newsletter</h6>
                        <p className='my-4 font-bold leading-loose text-white tracking-wide pr-2 text-xl'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ratione dignissimos.
                        </p>
                        <form>
                            <fieldset className="form-control  sm:w-full">
                                <div className="join">
                                    <input type="text" placeholder="username@site.com" className="max-w-48  sm:w-full input input-bordered join-item text-gray-500 bg-gray-800" />
                                    <button className="btn btn-warning join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer