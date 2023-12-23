/** @format */
import Bio from "@/components/bio";
import Image from "next/image";
import fVideo from "@/public/f.gif";
import SectionDivider from "@/components/Section-divider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Intro from "@/components/bio";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
    return (
        <main className='flex flex-col items-center px-4'>S
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <SectionDivider />
            <Skills />
            <Experience />
        </main>
    );
}
