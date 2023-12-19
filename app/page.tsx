/** @format */
import Bio from "@/components/bio";
import Image from "next/image";
import fVideo from "@/public/f.gif";
import SectionDivider from "@/components/Section-divider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Intro from "@/components/bio";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <main className='flex flex-col items-center px-4'>
            {/* <Image
                src={fVideo}
                alt='logo'
                width={80}
                height={80}
                className='top-1  m-4 fiexd left-1   '
            /> */}
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
        </main>
    );
}
