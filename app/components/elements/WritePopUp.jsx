import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const WritePopUp = () => {
    return (
        <div>
            <div className="fixed w-10 bottom-0 rounded-full right-0  md:bottom-8 md:right-12 md:w-auto z-50">
                <Link href="/post/new" className="bg-blue-600 text-slate-50  p-2 text-sm  rounded-full shadow-lg flex justify-between">
                   <FaPlus size={24}/>
                </Link>
            </div>
        </div>
    )
}

export default WritePopUp