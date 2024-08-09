import SiteConfig from "@/app/config/site";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { Suspense } from "react";
import { WritePopUp } from "./components/elements";
import Navbar from "./components/Navbar";
import "./globals.css";
import Loading from "./loading";
import ProfileSec from "./components/ProfileSec";

export const metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description.slice(0, 160),
  keywords: SiteConfig.keywords,
  robots: SiteConfig.robots,
  verification: {
    google: "gTVvXWgVqXKU6AfSRkuQa4O39VGzRS9zcA4y9eT3uUo",
  },
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang={SiteConfig.lang} dir={SiteConfig.dir} data-theme="cupcake">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <body>
          <Navbar />
          <main className="mt-[80px] pb-2 bg-base-100">
            <Suspense fallback={<Loading />}>
              <div className="hidden md:block md:w-[25%]">
                <ProfileSec />
              </div>
              <div className="w-full md:w-[50%]">
                <div className='px-2'>
                  {children}
                </div>
              </div>
              <div className="hidden md:block md:w-[25%]">
                Left
              </div>

            </Suspense>
          </main>
          <WritePopUp />
        </body>
      </html>
    </ClerkProvider>
  );
}
