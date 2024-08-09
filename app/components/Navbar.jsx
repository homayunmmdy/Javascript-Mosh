"use client"
import React from "react";
import SiteConfig from "@/app/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GradientBtn from "./elements/GradientBtn";

const Navbar = () => {
    const pathname = usePathname();
    const nav = SiteConfig.nav;
    return (
        <div className="fixed top-0 left-0 right-0 navbar bg-white z-[50]">
            <div className='w-[94%] md:w-[92%] mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <button tabIndex={0} className="px-3 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-slate-950	"
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
                                    {pathname === item.link ? <Link href={item.link} className="bg-base-300 text-slate-950	 rounded-xl">{item.name}</Link> :
                                        <Link className="text-slate-950" href={item.link}>{item.name}</Link>}
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
                                {pathname === item.link ? <Link href={item.link} className="text-slate-950 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white">{item.name}</Link> :
                                    <Link className="border-transparent	 border-2 text-slate-950	  hover:border-sky-400 ease-in-out hover:bg-base-100" href={item.link}>{item.name}</Link>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex navbar-end">
                    <Link href="/sign-up" className="m-1">
                       <GradientBtn title="Sign Up for free"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;