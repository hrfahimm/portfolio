/** @format */

import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./Project";

export default function Projects() {
    return (
        <section>
            <h2 className='text-3xl font-bold uppercase mb-8'>My Projecs</h2>
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
