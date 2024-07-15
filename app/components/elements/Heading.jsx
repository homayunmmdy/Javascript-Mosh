import React from 'react'

const Heading = ({title}) => {
    return (
        <>
            <h2 className="flex flex-row flex-nowrap items-center mt-24">
                <span className="w-[5%] block border-t border-cyan-500"></span>
                <span className="flex-none block mx-4 px-4 py-2.5 text-xl leading-none font-medium bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white">
                    {title}
                </span>
                <span className="flex-grow block border-t border-blue-500"></span>
            </h2>
        </>
    )
}

export default Heading