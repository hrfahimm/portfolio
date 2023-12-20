'use client'
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { useSectionInView } from "@/app/hooks/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects")

    return (
        <section ref={ref} id="projects" className="scroll-mt-32">
            <h2 className='text-3xl text-center font-extrabold uppercase mb-8'>My  Projecs</h2>
            <div className=''>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
