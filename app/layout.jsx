import { Inter } from "next/font/google";
import "./Font.css";
import "./globals.css";
import SiteConfig from "@/app/config/site"
import Navbar from "./components/Navbar";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["greek"] });

export const metadata = {
  title: SiteConfig.name_en,
  description: SiteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
      <body className={inter.className}>
        <Navbar />
        <main className="mt-16 bg-base-100">
          {children}
        </main>
        <Feedback />
        <Footer />
      </body>
    </html>
  );
}
