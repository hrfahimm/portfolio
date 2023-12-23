/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ActiveSectionProvider from "@/context/active-section-context";

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
                className={`${inter.className} bg-neutral-200 text-gray-950 relative   pt-7 sm:pt-9`}>
                <div className='bg-[#d5c2e9] absolute -z-10 top-[-6rem] right-[11rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem] '></div>

                <div className='bg-[#a8dfdf] absolute -z-10 top-[-1rem] left-[-35rem] h-[32rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] '></div>
                <ActiveSectionProvider>
                    <Navbar />
                    {children}
                </ActiveSectionProvider>

            </body>
        </html>
    );
}
