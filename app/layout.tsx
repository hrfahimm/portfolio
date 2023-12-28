/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ActiveSectionProvider from "@/context/active-section-context";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/theme-switch";
import StarsCanvas from "@/components/StarBackground";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HR Fahim",
    description: "hrfahimm portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className="!scroll-smooth ">
            <body
                className={`${inter.className} bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90    text-gray-950 relative mx-3  pt-7 sm:pt-9`}>

                <div className='bg-[#e5b3f5] absolute -z-10 top-[-6rem] right-[11rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem] '></div>
                <div className='bg-[#a8dfdf] absolute -z-10 top-[-1rem] left-[-35rem] h-[32rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] '></div>
                <ThemeContextProvider>
                    <ActiveSectionProvider>
                        <Navbar />
                        {children}
                        <Footer />

                        <Toaster position='bottom-center' />
                    </ActiveSectionProvider>
                    <ThemeSwitch />

                </ThemeContextProvider>


                {/* <StarsCanvas /> */}

                <div className='bg-[#a8dfdf] absolute -z-10 bottom-[-6rem] right-[11rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem] '></div>
                <div className='bg-[#e5b3f5d5] absolute -z-10 bottom-[-1rem] left-[-35rem] h-[32rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] '></div>

            </body>
        </html>
    );
}
