'use client'
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";
import { useEffect } from "react";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    
    const { ref, inView } = useInView({   threshold });
    
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, timeOfLastClick,sectionName]);
    return {
        ref, 
    }
}