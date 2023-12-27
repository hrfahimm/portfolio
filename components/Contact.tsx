"use client";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";
import React from "react";
import Submit from "./Submit";
import toast from "react-hot-toast";
export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.2)




    return (
        <motion.section
            id="contact"
            className=' mb-20 sm:mb-28 scroll-mt-32 items-center text-center w-[min(100%,38rem)]'
            ref={ref}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}
        >

            <h2 className='text-4xl font-bold mb-8 uppercase'>Contacts</h2>
            <p className=" ">
                Please contact me direactly at
                <a className="underline text-fuchsia-500 -mt-3 px-2 " href="mailto:hrfahimm@gmail.com"> {""} hrfahimm@gmail.com  {""}</a>
                or through this mail
            </p>



            <form className="mt-10 flex flex-col group "
                action={async formData => {
                    const { data, error } = await sendEmail(formData)
                    if (error) {
                        toast.error(error)
                        return;
                    }
                    toast.success('Email sent successfully')
                }}
            >

                <input className="h-14 rounded-xl borderBlack p-4 hover:border-gray-200 " type="email" placeholder="Your Email" name="senderEmail"
                    required maxLength={500}
                />

                <textarea className="h-52 my-3 rounded-xl borderBlack p-4      " placeholder="Your Massage" required maxLength={5000} name="message" />

                <Submit />
            </form>

        </motion.section>)
}
