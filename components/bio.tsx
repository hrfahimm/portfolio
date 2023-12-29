/** @format */
"use client";
import Image from "next/image";
import fahim from "@/public/fahim.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import github from "@/public/gitblack.jpg";
import linkin from "@/public/linkedin.jpg";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { FaFileArrowDown } from "react-icons/fa6";
import { useSectionInView } from "@/hooks/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";



export default function Intro() {
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    const { ref } = useSectionInView("Home", 0.5)


    return (
        <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className='flex items-center justify-center '>
                <div className='pt-32'>
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
                            className='rounded-full object-cover shadow-2xl p-0.5 bg-gradient-to-r   '
                            width='300'
                            height='300'
                            quality='95'
                        />
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.7,
                }}
                className='mb-10 pt-10 mt-4 px-4 text-2xl font-medium sm:text-4xl gap-2   '>

                <div className="flex sm:flex-row flex-col sm:gap-2 py-4">
                    <p className=''>As-salamu alaykum,</p>
                    <p className=''> I am Fahim.</p>
                </div>

                <p className='font-bold italic'> Life Run On Code</p>

            </motion.div>

            <motion.div
                className='pt-8 flex  flex-col sm:flex-row  items-center justify-center sm:gap-3 gap-5 px-4 text-lg font-medium'
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.7,
                }}>
                <Link
                    href='#contact'
                    onClick={() => {
                        setActiveSection('Contact')
                        setTimeOfLastClick(Date.now())
                    }}
                    className='cursor-pointer font-semibold group text-white bg-gray-800 flex px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-110  hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-gray-900'>
                    Contact Me Here
                    <TbArrowBigRightLinesFilled className='opacity-70 group-hover:translate-x-1 transition  ' />
                </Link>
                <Link
                    href='/fahim.jpg'
                    download
                    className='cursor-pointer group text-black font-semibold  bg-cyan-100 flex px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-110  hover:scale-110 hover:bg-cyan-200 active:scale-105 transition '>
                    Download CV{" "}
                    <FaFileArrowDown className='opacity-70 group-hover:translate-y-1 transition  ' />{" "}
                </Link>
                <Link
                    className=""
                    href='https://linkedin.com/hrfahimm/'
                    target='_blank'>
                    {" "}
                    <Image
                        src={linkin}
                        alt='arrow'
                        className='  rounded-3xl outline-none focus:scale-110  hover:scale-110 hover:bg-cyan-200 active:scale-105 transition'
                        width='45'
                        height='45'
                    />
                </Link>
                <Link

                    href='https://github.com/hrfahimm/'
                    target='_blank'>
                    <Image
                        src={github}
                        alt='arrow'
                        className=' rounded-3xl outline-none focus:scale-110  hover:scale-110 hover:bg-cyan-200 active:scale-105 transition'
                        width='45'
                        height='45'
                    />
                </Link>
            </motion.div>
        </section>
    );
}

{
    /* <Image
    src={arrow}
    alt='arrow'
    className=' '
    width='40'
    height='40'
/>; */
}

//
//
{
    /* <a
                    href=''
                    className='     '>
                    <IoLogoLinkedin />
                </a>
                <a
                    href=''
                    className=' '>
                    <FaGithub />
                </a> */
}
{
    /* <motion.p
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
</motion.p>; */
}
