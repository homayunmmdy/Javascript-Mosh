import { Inter } from "next/font/google";
import "./Font.css";
import "./globals.css";
import SiteConfig from "@/app/config/site"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
const inter = Inter({ subsets: ["greek"] });

export const metadata = {
  title: SiteConfig.name_en,
  description: SiteConfig.description,
};

const header = (
  <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TMH041X0TK"/>
    <Script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
  
        gtag('config', 'G-TMH041X0TK');
            `,
      }}
    />
  </>
);

export default function RootLayout({ children }) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
      {header}
      <body className={inter.className}>
        <Navbar />
        <main className="mt-[76px] bg-base-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
