/** @format */

import Image from "next/image";
import fahim from "@/public/fahim.jpg";
import { motion } from "framer-motion";

const BioImage = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className='pt-30'>
                <motion.div
                    className=' '
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.5,
                        delay: 0.7,
                    }}>
                    <Image
                        src={fahim}
                        alt='fahimImage'
                        className='rounded-b-full object-cover shadow-2xl from-purple-500 via-teal-500  to-cyan-500  p-0.5 bg-gradient-to-r   '
                        width='200'
                        height='200'
                        quality='95'
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default BioImage;
