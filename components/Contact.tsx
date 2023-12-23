"use client";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";
import { register } from "module";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";



export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.2)

    return (
        <section
            id="contact"
            className='mb-20 sm:mb-28 scroll-mt-32 items-center text-center w-[min(100%,38rem)]'
            ref={ref}>

            <h2 className='text-4xl font-bold mb-8'>Contacts</h2>

            <p className=" ">
                Please contact me direactly at
                <a className="underline text-fuchsia-500 -mt-3 px-2 " href="mailto:hrfahimm@gmail.com"> {""} hrfahimm@gmail.com  {""}</a>
                or through this mail
            </p>

            <form className="mt-10 flex flex-col group ">

                <input className="h-14 rounded-xl borderBlack p-4 hover:border-gray-300 " type="email" placeholder="Your Email" />

                <textarea className="h-52 my-3 rounded-xl borderBlack p-4      " placeholder="Your Massage" />

                <button type='submit' className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110  hover:scale-110  active:scale-105 hover:bg-gray-950  " >
                    Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 
                    " />
                </button>
            </form>

        </section>)
}
