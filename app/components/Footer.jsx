import React from 'react'
import SiteConfig from '../config/site'
import { FaXTwitter , FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Support</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <FaXTwitter size={24} />
                        <FaLinkedinIn size={24}/>
                        <FaYoutube size={24}/>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by {SiteConfig.name}</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer