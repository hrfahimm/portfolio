/** @format */

import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./Project";

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-32">
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
