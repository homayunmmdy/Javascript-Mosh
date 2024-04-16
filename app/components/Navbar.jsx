"use client"
import React, { useState } from "react";
import SiteConfig from "@/app/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu } from "react-icons/lu";
import WorkBtn from "./WorkBtn";

const Navbar = () => {
    const pathname = usePathname();
    const nav = SiteConfig.nav;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header style={{ background: "linear-gradient(20deg, hsl(130deg, 8%, 14%) 40%, hsl(0deg, 0%, 13%) 100%)" }}>
                <div className="navbar px-6 w-[98%] md:w-[92%] mx-auto py-7 ">
                    <div className="navbar-start">

                        <Link href="/" className="text-3xl font-bold text-white">
                            {SiteConfig.name}.
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex ml-23">
                        <ul className="menu menu-horizontal px-1">
                            {nav.map((item) => (
                                <li key={item.id} className="mx-1">
                                    {pathname === item.link ? <Link href={item.link} className="font-light text-gray-50 text-xl">{item.name}</Link> :
                                        <Link href={item.link} className="font-light text-gray-400 hover:text-gray-50 text-xl">{item.name}</Link>}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div >
                            <div >
                                <button className="px-3 lg:hidden" onClick={toggleMenu}>
                                    <svg
                                        className="h-10 w-10 ease-in-out duration-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#fff"
                                        viewBox="0 0 24 24"
                                        stroke="#fff"
                                    >
                                        {isOpen ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h16m-7 6h7"
                                            />
                                        )}
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden lg:block"><WorkBtn /></div>
                        </div>
                    </div>
                </div>
                <hr className=" border-b-1 border-gray-500 lg:hidden" />
                {isOpen && (<ul
                    className=" w-[98%] md:w-[92%] mx-auto px-6 lg:hidden"
                >
                    {nav.map((item) => (
                        <li key={item.id} className="mx-1 py-3">
                            {pathname === item.link ? <Link href={item.link} className="font-light text-gray-50 text-xl">{item.name}</Link> :
                                <Link href={item.link} className="font-light text-gray-400 hover:text-gray-50 text-xl">{item.name}</Link>}
                        </li>
                    ))}
                    <li className="w-full">
                        <WorkBtn />
                    </li>
                </ul>)}
            </header>
        </>
    );
};

export default Navbar;