'use client'
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/hooks/hooks";
import React from "react";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5)

    return (
        <section ref={ref} id="projects" className="scroll-mt-32">
            <h2 className='text-3xl text-center font-extrabold uppercase mb-8'>My  Projecs</h2>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
