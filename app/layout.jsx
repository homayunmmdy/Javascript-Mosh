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
import { currentUser } from "@clerk/nextjs/server";

if (!user) {
  return (<div className="flex justify-center py-5 "><SignIn /></div>)
}

const user = await currentUser();

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
              <div className="flex flex-wrap md:flex-nowrap gap-3">
                <div className="w-full md:w-[25%]">
                  <ProfileSec />
                </div>
                <div className="w-full md:w-[50%]">
                  <div className='px-2'>
                    {children}
                  </div>
                </div>
                <div className="hidden md:block md:w-[25%]">
                  <div className="text-center">

                    <h1 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{SiteConfig.name}</h1>
                    <p>{SiteConfig.description}</p>
                  </div>
                </div>
              </div>
            </Suspense>
          </main>
          <WritePopUp />
        </body>
      </html>
    </ClerkProvider>
  );
}
