'use client'
import { useSectionInView } from "@/hooks/hooks";
import { experiencesData } from "@/lib/data";
import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';




export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.5)

    return (
        <section className="scroll-mt-28 mb-28 sm:mb-40 " id="experience" ref={ref}>
            <h2 className='text-5xl text-center font-extrabold uppercase m-8 p-5'>Experience</h2>
            <VerticalTimeline className="text-black" lineColor="">

                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    background: '#f3f4f6',
                                    boxShadow: 'nome',
                                    border: '1px solid rgba(0, 0, 0 ,0.05)',
                                    textAlign: 'left',
                                    padding: '1.3rem 2rem'

                                }}
                                contentArrowStyle={{
                                    borderRight: '0.4rem solid #9ca3af'
                                }}
                                iconStyle={{
                                    background: 'white',
                                    fontSize: '1.5rem'
                                }}
                                date={item.date}
                                icon={item.icon}
                            >
                                <h3 className="capitalize font-semibold">{item.title}</h3>
                                <p className="font-normal !mt-0">{item.location}</p>
                                <p className="font-normal !mt-0 text-gray-950">{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>

                    ))
                }
            </VerticalTimeline>

        </section>
    )
}


