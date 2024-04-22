"use client"
import React from "react";
import SiteConfig from "@/app/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const nav = SiteConfig.nav;
    return (
        <div className="fixed top-0 left-0 right-0 navbar bg-base-100 z-[50]">
            <div className='w-[98%] md:w-[95%] mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <button tabIndex={0} className="px-3 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {nav.map((item) => (
                                <li key={item.id} className="mx-1">
                                    {pathname === item.link ? <Link href={item.link} className="bg-base-300 rounded-xl">{item.name}</Link> :
                                        <Link href={item.link}>{item.name}</Link>}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                        {SiteConfig.name}
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-1">
                        {nav.map((item) => (
                            <li key={item.id} className="mx-1">
                                {pathname === item.link ? <Link href={item.link} className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white">{item.name}</Link> :
                                    <Link className="border-transparent	 border-2  hover:border-sky-400 ease-in-out hover:bg-base-100" href={item.link}>{item.name}</Link>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex navbar-end">
                    <div className="m-1">
                        <div className="relative inline-flex  group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-70 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <a href="#" title="Pro Member"
                                className="relative inline-flex items-center justify-center p-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button">Pro Member
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;