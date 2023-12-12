/** @format */
"use client";

import { motion } from "framer-motion";
export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'>
            <h2 className='text-3xl font-bold capitalize mb-8 italic underline'>
                About Me
            </h2>
            <p className='mb-3'>
                Hasibur Rahman Fahim is a skilled and dedicated MEAN stack
                developer with a passion for creating dynamic and efficient web
                applications. With a solid foundation in MongoDB, Express.js,
                Angular, and Node.js, Fahim brings expertise in full-stack
                development. He excels in designing and implementing responsive,
                user-friendly interfaces,
            </p>
            <p className=''>
                and his proficiency in server-side logic ensures seamless
                functionality. Fahim is adept at collaborating within agile
                development teams, delivering high-quality code, and staying
                updated on the latest industry trends. His commitment to
                continuous learning and problem-solving makes him a valuable
                asset in delivering innovative and reliable solutions.
            </p>
        </motion.section>
    );
}
