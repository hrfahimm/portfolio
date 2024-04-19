
"use client";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";


export default function About() {
    const { ref } = useSectionInView("About", 0.75)



    return (
        <motion.section
            id="about"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className='  max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-32'>
            <h2 className='text-4xl font-extrabold uppercase mb-16'>About Me</h2>

            <p className='text-xl leading-10'>
                I am Fahim. I am a self learner MERN Stack & Font-End Developer. I learned most things
                from Google and YouTube. I have 2 years of programing experience. I understand codeing
                very well. I am experienced to doing full projects. I also have some Full Stack knowledge.


            </p>

        </motion.section>
    );
}
