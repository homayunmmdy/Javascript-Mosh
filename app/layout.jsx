import { Inter } from "next/font/google";
import "./Font.css";
import "./globals.css";
import SiteConfig from "@/app/config/site"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${SiteConfig.name}`,
  description: SiteConfig.description,
};
export default function RootLayout({ children }) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <div style={{ background: "hsla(127, 8%, 14%, 1)" }}>
        <div className='px-5 w-[98%] md:w-[92%] mx-auto'>
          <GetStarted />
        </div>
      </div>
        <Footer />
      </body>
    </html>
  );
}
