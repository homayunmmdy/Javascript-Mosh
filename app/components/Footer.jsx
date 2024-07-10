import SiteConfig from "../config/site"

const Footer = () => {
    return (
        <footer className="w-full py-10">
            <div className="mx-auto w-[94%] md:w-[92%] px-4 sm:px-6 lg:px-8">
                <div className=" ">
                    <ul className="text-lg  flex items-center justify-center flex-col md:flex-row  py-10 gap-6 md:gap-8 transition-all duration-500">
                        <li ><a href="/" className="text-gray-800 hover:text-blue-600">خانه</a></li>
                        <li ><a href="/contacts" className="text-gray-800 hover:text-blue-600">تماس با ما</a></li>
                        <li ><a href="/archive" className="text-gray-800 hover:text-blue-600">آرشیو</a></li>
                        <li ><a href="/privacy_policy" className="text-gray-800 hover:text-blue-600">حریم خصوصی</a></li>
                        <li ><a href="/FAQs" className="text-gray-800 hover:text-blue-600">سوالات متدول</a></li>
                    </ul>
                </div>

                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center flex-col-reverse justify-between md:flex-row">
                        <span className="text-sm text-gray-500 mt-7 md:mt-0"> تمام حقوق مادی و معنوی این سایت متعلق به <a href="/">{SiteConfig.name}</a> می باشد و استفاده از مطالب با ذکر منبع بلامانع است.</span>
                        <div className="flex items-center flex-col  gap-4 md:flex-row">
                            <input type="text" name="email" className="py-3 px-6 h-12 border border-gray-300 shadow-sm rounded-full focus:outline-none" placeholder="ایمیل خود را وارد کنید.." />
                            <button className="h-12 py-3.5 px-7 text-sm bg-blue-600 shadow-sm rounded-full text-white font-bold hover:bg-blue-700">سابسکرایب</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer