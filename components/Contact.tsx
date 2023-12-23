"use client";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";
import { register } from "module";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";



export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5)

    return (
        <section
            id="contact"
            className='mb-20 sm:mb-28 scroll-mt-32 items-center text-center w-[min(100%,38rem)]'
            ref={ref}>
            
            <h2 className='text-4xl font-bold mb-8'>Contacts</h2>

            <p className=" ">
                Please contact me direactly at
                <a className="underline text-fuchsia-500 px-2 " href="mailto:hrfahimm@gmail.com"> {""} hrfahimm@gmail.com  {""}</a>
                or through this mail
            </p>
            
            <form  >
                <input type="email" placeholder="Your Email" />
                <textarea />
                <button type='submit' placeholder="Your Massage">
                    Submit <FaPaperPlane />
                </button>
            </form>

        </section>)
}
