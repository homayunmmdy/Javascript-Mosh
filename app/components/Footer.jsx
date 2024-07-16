"use client"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const [formData, setFormData] = useState({
        emails: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/emails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ formData }),
            });

            const data = await response.json();
            toast.success(data.message);
            setFormData({
                emails: "",
            });
        } catch (error) {
            console.error("Error:", error);
            toast.error("Please Try One more time")
        }
    };
    return (
        <>
            <ToastContainer />
            <footer className="w-full py-10 bg-base-200">
                <div className="mx-auto w-[94%] md:w-[92%] px-4 sm:px-6 lg:px-8">
                    <div>
                        <ul className="text-lg  flex items-center justify-center flex-col md:flex-row  py-10 gap-6 md:gap-8 transition-all duration-500">
                            <li ><a href="/" className="text-slate-950 hover:text-blue-600">خانه</a></li>
                            <li ><a href="/contacts" className="text-slate-950 hover:text-blue-600">تماس با ما</a></li>
                            <li ><a href="/archive" rel="nofollow noopener" className="text-slate-950 hover:text-blue-600">آرشیو</a></li>
                            <li ><a href="/privacy_policy" rel="nofollow noopener" className="text-slate-950 hover:text-blue-600">حریم خصوصی</a></li>
                            <li ><a href="/FAQs" rel="nofollow noopener" className="text-slate-950 hover:text-blue-600">سوالات متدول</a></li>
                        </ul>
                    </div>

                    <div className="py-7 border-t border-gray-200">
                        <div className="flex items-center flex-col-reverse justify-between md:flex-row">
                            <span className="text-xs text-gray-500 mt-7 md:mt-0"> تمام حقوق مادی و معنوی این سایت متعلق به <a href="https://magnitify.vercel.app/">مگ منتی فای</a> می باشد و استفاده از مطالب با ذکر منبع بلامانع است.</span>
                            <form onSubmit={handleSubmit} className="flex items-center flex-col  gap-4 md:flex-row">
                                <input value={formData.emails}
                                    onChange={handleChange} type="emails" id="emails" name="emails" placeholder="ایمیل خود را اضافه کنید" required className="py-3 px-6 h-12 border border-gray-300 text-center shadow-sm rounded-full focus:outline-none" />
                                <button type="submit" className="h-12 py-3.5 px-7 text-sm bg-blue-600 shadow-sm rounded-full text-white font-bold hover:bg-blue-700">سابسکرایب</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer