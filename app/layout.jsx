import "./globals.css";
import SiteConfig from "@/app/config/site"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import { WritePopUp } from "./components/elements";

export const metadata = {
  title: `${SiteConfig.name} | ${SiteConfig.name_en}`,
  description: SiteConfig.description.slice(0, 160),
  keywords: SiteConfig.keywords,
  robots: SiteConfig.robots,
  authors: SiteConfig.authors,
  verification: {
    google: "gTVvXWgVqXKU6AfSRkuQa4O39VGzRS9zcA4y9eT3uUo",
  },
};

const header = (
  <>
    <Script dangerouslySetInnerHTML={{
      __html: `
        !function(e,t,n){e.yektanetAnalyticsObject=n,e[n]=e[n]||function(){e[n].q.push(arguments)},e[n].q=e[n].q||[];var a=t.getElementsByTagName("head")[0],r=new Date,c="https://cdn.yektanet.com/superscript/1tavFZLi/native-mangnify.vercel.app-36551/yn_pub.js?v="+r.getFullYear().toString()+"0"+r.getMonth()+"0"+r.getDate()+"0"+r.getHours(),s=t.createElement("link");s.rel="preload",s.as="script",s.href=c,a.appendChild(s);var l=t.createElement("script");l.async=!0,l.src=c,a.appendChild(l)}(window,document,"yektanet");
        `}} />
    <link
      rel="preload"
      href="IRANSansWeb.woff2"
      as="font"
      crossOrigin=""
    />
  </>
);


export default function RootLayout({ children }) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir} data-theme="cupcake">
      {header}
      <body>
        <Navbar />
        <main className="mt-[76px] bg-base-100">
          {children}
        </main>
        <WritePopUp />
        <Footer />
      </body>
    </html>
  );
}
