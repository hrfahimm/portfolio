'use client'
import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/hooks/hooks";
import { experiencesData } from "@/utility/data";
import React, { useContext } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';




export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.5);
    const { theme } = useTheme()

    return (
        <section className="scroll-mt-28   " id="experience" ref={ref}>
            <div className="mb-28 sm:mb-40">
                <h2 className='text-5xl text-center font-extrabold uppercase m-8 p-5'>Experience</h2>

                <VerticalTimeline className="text-black " lineColor="">

                    {experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    background: theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255,0.05)',
                                    boxShadow: 'nome',
                                    border: '1px solid rgba(0, 0, 0 ,0.05)',
                                    textAlign: 'left',
                                    padding: '1.3rem 2rem'

                                }}
                                contentArrowStyle={{
                                    borderRight: theme === 'light' ? '0.4rem solid #9ca3af' : "0.4rem solid rgba(255,255,255,0.5)"
                                }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{
                                    background: theme === 'light' ? '#fff' : 'rgba(255,255,255,0.15)',
                                    fontSize: '1.5rem'
                                }}

                            >
                                <h3 className="capitalize dark:text-gray-100 text-gray-700  font-semibold">{item.title}</h3>
                                <p className="font-normal dark:text-gray-100 text-gray-700  !mt-0">{item.location}</p>
                                <p className="font-normal !mt-1 dark:text-gray-100 text-gray-700  ">{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>

                    ))
                    }
                </VerticalTimeline>
            </div>


        </section>
    )
}


