'use client'
import { useSectionInView } from "@/hooks/hooks";
import { experiencesData } from "@/lib/data";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';




export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.5)

    return (
        <section className=" " id="experience" ref={ref}>
            <h2 className='text-5xl text-center font-extrabold uppercase m-8 p-5'>Experience</h2>
            <VerticalTimeline>
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement  >
                                <h3>{item.title}</h3>
                                <p>{item.location}</p>
                                <p>{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>

                    ))
                }
            </VerticalTimeline>

        </section>
    )
}


