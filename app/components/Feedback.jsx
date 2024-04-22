import React from 'react'
import Link from "next/link";

const Feedback = () => {
  return (
    <div>
         <div className="fixed bottom-0 left-0 w-full md:bottom-8 md:left-12 md:w-auto z-50">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold  text-sm p-3 shadow-lg flex justify-between">
                        <Link className="font-medium  text-white" href="/feedback" target="_blank" rel="noreferrer">Feedback</Link>
                </div>
            </div>
    </div>
  )
}

export default Feedback