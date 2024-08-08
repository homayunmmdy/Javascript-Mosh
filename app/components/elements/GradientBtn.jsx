import React from 'react'

const GradientBtn = ({ title }) => {
    return (
        <>
            <button className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-lg rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">{title}</button>
        </>
    )
}

export default GradientBtn