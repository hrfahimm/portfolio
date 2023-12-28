
"use client";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from 'clsx'
import { useActiveSectionContext } from "@/context/active-section-context";

const Navbar = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <header className='z-[999] relative'>
            <motion.div

                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                className='fixed top-0 left-1/2 h-[75px] rounded-full px-2  w-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-14 sm:w-[36rem] sm:rounded-full dark:bg-gray-900 dark:border-black/40 dark:bg-opacity-75'></motion.div>

            <nav className=' flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
                <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-semibold text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 '>
                    {links.map((link) => (
                        <motion.li
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                            }}
                            className='h-3/4 flex items-center justify-center relative'
                            key={link.hash}>
                            <Link
                                className={clsx('flex w-full items-center justify-center sm:p-3 p-5  hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-200',
                                    {
                                        "text-gray-950 dark:text-gray-200 ": activeSection === link.name,
                                    }
                                )}
                                onClick={() => {
                                    setActiveSection(link.name),
                                        setTimeOfLastClick(Date.now())
                                }
                                }
                                href={link.hash}>

                                {link.name}

                                {
                                    link.name === activeSection && (
                                        <motion.span

                                            transition={{
                                                type: 'spring',
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                            layoutId="activeSection"

                                            className=" bg-slate-300 rounded-full absolute inset-0 -z-10 dark:bg-gray-800">

                                        </motion.span>

                                    )
                                }
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
