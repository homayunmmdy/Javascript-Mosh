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
                    <div className="m-1">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1">
                                تم ها
                                <svg
                                    width="12px"
                                    height="12px"
                                    className="inline-block h-2 w-2 fill-current opacity-60"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 2048 2048">
                                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                                </svg>
                            </div>
                            <ul tabIndex={0} className="dropdown-content left-0 bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
                                <li>
                                    <input
                                        type="radio"
                                        name="theme-dropdown"
                                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-slate-950	"
                                        aria-label="پیش فرض"
                                        value="cupcake" />
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        name="theme-dropdown"
                                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-slate-950	"
                                        aria-label="مشکی"
                                        value="dark" />
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        name="theme-dropdown"
                                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-slate-950	"
                                        aria-label="روشن"
                                        value="light" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;