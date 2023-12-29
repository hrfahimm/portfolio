'use client'
import { projectsData } from "@/utility/data";
import Project from "./sub/Project";
import { useSectionInView } from "@/hooks/hooks";
import React from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import Link from "next/link";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.2)

    return (
        <section ref={ref} id="projects" className="scroll-mt-32 mt-32">
            <h2 className='text-4xl text-center font-extrabold uppercase '>My  Projecs</h2>
            <div className="mx-4 mb-16 mt-10">
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
















//








//






// <div className="flex justify-around item center py-4">
//     <Link
//         className='cursor-pointer group text-black font-semibold  bg-cyan-100 flex px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-110  hover:scale-110 hover:bg-cyan-200 active:scale-105 transition '
//         href='https://github.com/hrfahimm/'
//         target='_blank'>
//         View ToDo
//         <TfiMoreAlt className='opacity-70 group-hover:translate-x-1 transition  ' />{" "}

//     </Link>
//     <Link
//         className='cursor-pointer group text-black font-semibold  bg-cyan-100 flex px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-110  hover:scale-110 hover:bg-cyan-200 active:scale-105 transition '
//         href='https://github.com/hrfahimm/'
//         target='_blank'>
//         View More
//         <TfiMoreAlt className='opacity-70 group-hover:translate-x-1 transition  ' />{" "}

//     </Link>

// </div>