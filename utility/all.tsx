/** @format */

// /** @format */
// "use client";
// import Image from "next/image";
// import fahim from "@/public/fahim.jpg";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import BsArrowRight from "react-icons";
// import arrow from "@/public/arrow.png";
// import github from "@/public/gitblack.jpg";
// import linkin from "@/public/linkedin.jpg";
// import cv from "@/public/fahim.jpg";
// import { TbArrowBigRightLinesFilled } from "react-icons/tb";
// import { FaFileArrowDown } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import { IoLogoLinkedin } from "react-icons/io5";

// export default function bio() {
//     return (
//         <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
//             <div className='flex items-center justify-center '>
//                 <div className='pt-28'>
//                     <motion.div
//                         className=' '
//                         initial={{ opacity: 0, scale: 0 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{
//                             type: "tween",
//                             duration: 0.5,
//                             delay: 0.7,
//                         }}>
//                         <Image
//                             src={fahim}
//                             alt='fahimImage'
//                             className='rounded-b-full object-cover shadow-2xl from-purple-500 via-teal-500  to-cyan-500  p-0.5 bg-gradient-to-r   '
//                             width='200'
//                             height='200'
//                             quality='95'
//                         />
//                     </motion.div>
//                 </div>
//             </div>
//             <motion.p
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{
//                     duration: 0.5,
//                     delay: 0.7,
//                 }}
//                 className='  mb-10 pt-10 mt-4 px-4 text-2xl font-medium sm:text-4xl  '>
//                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
//                     As-salamu alaykum, {""}
//                 </span>{" "}
//                 I am {""}
//                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
//                     Fahim.{""}
//                 </span>
//                 <br />
//                 {""} I am a {""}
//                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
//                     MERN Stack Development.
//                     <br />
//                 </span>
//                 with{""}
//                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
//                     {""} 2 years{" "}
//                 </span>
//                 of experience.
//                 <br /> Life runs on Code. My focus is on
//                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
//                     {" "}
//                     React(Next js)
//                 </span>
//             </motion.p>

//             <motion.div
//                 className='pt-8 flex  flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
//                 initial={{ x: 100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{
//                     duration: 0.5,
//                     delay: 0.7,
//                 }}>
//                 <Link
//                     href='#contact'
//                     className='cursor-pointer  group text-white bg-gray-800 flex px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-110  hover:scale-110 hover:bg-gray-900 active:scale-105 transition '>
//                     Contact Me Here
//                     <TbArrowBigRightLinesFilled className='opacity-70 group-hover:translate-x-1 transition  ' />
//                 </Link>
//                 <a
//                     href='/fahim.jpg'
//                     download
//                     className='cursor-pointer group text-black bg-cyan-100 flex px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-110  hover:scale-110 hover:bg-cyan-200 active:scale-105 transition'>
//                     CV Download{" "}
//                     <FaFileArrowDown className='opacity-70 group-hover:translate-y-1 transition  ' />{" "}
//                 </a>
//                 <a
//                     href='https://linkedin.com/hrfahimm/'
//                     target='_blank'>
//                     {" "}
//                     <Image
//                         src={linkin}
//                         alt='arrow'
//                         className='  rounded-3xl outline-none focus:scale-110  hover:scale-110 hover:bg-cyan-200 active:scale-105 transition'
//                         width='40'
//                         height='40'
//                     />
//                 </a>
//                 <a
//                     href='https://github.com/hrfahimm/'
//                     target='_blank'>
//                     <Image
//                         src={github}
//                         alt='arrow'
//                         className=' rounded-3xl outline-none focus:scale-110  hover:scale-110 hover:bg-cyan-200 active:scale-105 transition'
//                         width='40'
//                         height='40'
//                     />
//                 </a>
//             </motion.div>
//         </section>
//     );
// }

// {
//     /* <Image
//     src={arrow}
//     alt='arrow'
//     className=' '
//     width='40'
//     height='40'
// />; */
// }

// //
// //
// {
//     /* <a
//                     href=''
//                     className='     '>
//                     <IoLogoLinkedin />
//                 </a>
//                 <a
//                     href=''
//                     className=' '>
//                     <FaGithub />
//                 </a> */
// }

// /** @format */
// "use client";
// import { links } from "@/lib/data";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const Navbar = () => {
//     return (
//         <header className='z-[999] relative'>
//             <motion.div
//                 initial={{ y: -100, x: "-50%", opacity: 0 }}
//                 animate={{ y: 0, x: "-50%", opacity: 1 }}
//                 className='fixed top-0 left-1/2 h-16 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-14 sm:w-[36rem] sm:rounded-full'></motion.div>

//             <nav className=' flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
//                 <ul className='flex   w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 '>
//                     {links.map((link) => (
//                         <motion.li
//                             initial={{ y: -100, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{
//                                 duration: 0.5,
//                                 delay: 0.5,
//                             }}
//                             className='h-3/4 flex items-center justify-center'
//                             key={link.hash}>
//                             <Link
//                                 className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 hover:bg-slate-200 rounded-full'
//                                 href={link.hash}>
//                                 {link.name}
//                             </Link>
//                         </motion.li>
//                     ))}
//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default Navbar;

// //text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500
