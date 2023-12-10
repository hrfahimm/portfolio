/** @format */

import { motion } from "framer-motion";

const BioText = () => {
    return (
        <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.7,
            }}
            className='  mb-10 pt-10 mt-4 px-4 text-2xl font-medium sm:text-4xl  '>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                As-salamu alaykum, {""}
            </span>{" "}
            I am {""}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                Fahim.{""}
            </span>
            <br />
            {""} I am a {""}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                MERN Stack Development.
                <br />
            </span>
            with{""}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                {""} 2 years{" "}
            </span>
            of experience.
            <br /> Life runs on Code. My focus is on
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                {" "}
                React(Next js)
            </span>
        </motion.p>
    );
};

export default BioText;
