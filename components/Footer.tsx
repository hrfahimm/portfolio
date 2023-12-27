import React from "react";
import fb from "@/public/fb.webp";
import li from "@/public/linkedin.jpg";
import insgram from "@/public/insta.png";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return <footer className="items-center text-center">
        <div className='flex flex-row justify-center flex-wrap mt-4 gap-6 items-center  py-2'>
            <Link className="transition-all focus:scale-110  hover:scale-110  active:scale-105 " href="https://facebook.com/hrfahimm" target='_blank'>
                <Image
                    src={fb}
                    width={30}
                    height={30}
                    alt="fb"
                />
            </Link>
            <Link className="transition-all focus:scale-110  hover:scale-110  active:scale-105 " href="https://instagram.com/hrfahimm" target='_blank'>
                <Image
                    src={insgram}
                    width={30}
                    height={30}
                    alt="fb"
                />
            </Link>
            <Link className="transition-all focus:scale-110  hover:scale-110  active:scale-105 " href="https://linkedin.com/in/hrfahimm" target='_blank'>
                <Image
                    src={li}
                    width={30}
                    height={30}
                    alt="fb"
                />
            </Link>

        </div>
        <div className="p-2">
            <small className="py-2">
                &copy; {(new Date().getFullYear())} fahim. All rights reserved
            </small>
            <p className="text-xs text-gray-500">
                <span className="underline font-semibold px-1">
                    About This Website :
                </span>
                Build with React & Next.JS (App Router & Server Action ), Typescript ,Tailwind CSS ,Framer Motion, React Email & Resend , Vercel hosting,
            </p>
        </div>

    </footer>;
}


