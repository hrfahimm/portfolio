
'use client'

import { links } from '@/lib/data'
import React, { useState, createContext, useContext } from 'react'



type SectionName = typeof links[number]["name"]

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionProvider({
    children }: ActiveSectionContextProviderProps
) {

    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

    return (

        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick

            }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {

    const context = useContext(ActiveSectionContext)

    if (context === null) {

        throw new Error(
            "useActiveContext must be use with an Active Section provider"
        )
    }
    return context
}