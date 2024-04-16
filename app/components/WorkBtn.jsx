import React from 'react'
import Link from "next/link";

const WorkBtn = () => {
    return (
        <>
            <button className="btn btn-warning w-full">
                <Link href="/contacts" className="font-bold text-xl">
                    Let's Work Together
                </Link>
            </button>
        </>
    )
}

export default WorkBtn