
'use client'
import { useActiveSectionContext } from "@/context/active-section-context";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Skills() {
    const { ref, inView } = useInView({
        threshold: 0.75,
    });
    const { setActiveSection } = useActiveSectionContext();
    useEffect(() => {
        if (inView) {
            setActiveSection("Skills")
        }
    }, [inView, setActiveSection]);

    return <div ref={ref} className="h-[100rem] mt-[100rem]">Skills</div>;
}
