import Link from 'next/link'
import React from 'react'

const GradientBtn = ({ title, link }) => {
    return (
        <>
            <button aria-label={`دکمه ${title}`} className="transition duration-300 ease-in-out hover:to-blue-500 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-center text-sm p-3 shadow-lg flex justify-between">
                <Link className="font-medium  text-white" href={link}>{title}</Link>
            </button>
        </>
    )
}

export default GradientBtn