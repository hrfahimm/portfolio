
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
            <h2 className='text-4xl font-extrabold uppercase mb-8'>About Me</h2>
            <p className='mb-3'>
                Passionate about crafting seamless and captivating digital experiences, I am a skilled Frontend and MEARN Stack Developer. Specializing in technologies like Next.js, React, JavaScript, and TypeScript, I bring creativity and efficiency to every project. My expertise extends to MongoDB and Firebase for robust backend solutions, while proficiency in Tanstack Query and Tailwind CSS ensures a polished user interface.
            </p>
            <p className=''>
                With a keen eye for design, I leverage Framer Motion, Material UI, Dausi UI, and Figma to create visually stunning and user-friendly applications. Node.js is also in my toolkit for server-side scripting. My commitment to staying at the forefront of technology allows me to adapt swiftly and deliver cutting-edge solutions. Whether {"it's"} building responsive web applications or implementing innovative features, I thrive on the dynamic challenges of the tech world. {"Let's"} collaborate to transform ideas into beautifully functional digital realities.


            </p>

        </motion.section>
    );
}
