'use client'
import { useSectionInView } from "@/hooks/hooks";
import SkillsProvider from "./SkillsProvider";
import { Backend_skill, Frontend_skill, Other_skill, Skill_data } from "@/utility/skills-logo";


export default function Skills() {

    const { ref } = useSectionInView("Skills", 0.5)

    return (
        <section
            id='skills'
            ref={ref}
            className='scroll-mt-32  '>
            <div className="mb-28 text-center leading-8 sm:mb-40 
            flex flex-col items-center justify-center gap-7 h-full relative overflow-hidden  ">

                <h2 className='text-5xl text-center font-extrabold uppercase  p-5 '>Skills</h2>

                <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center '>
                    {Skill_data.map((image, index) => (
                        <SkillsProvider
                            src={image.Image}
                            key={index}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
                <div className='flex flex-row justify-around flex-wrap mt-8 gap-5 items-center '>
                    {Frontend_skill.map((image, index) => (
                        <SkillsProvider
                            src={image.Image}
                            key={index}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
                <div className='flex flex-row justify-around flex-wrap mt-8 gap-5 items-center '>
                    {Backend_skill.map((image, index) => (
                        <SkillsProvider
                            src={image.Image}
                            key={index}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>

                <div className='flex flex-row justify-around flex-wrap mt-8 gap-5 items-center '>
                    {Other_skill.map((image, index) => (
                        <SkillsProvider
                            src={image.Image}
                            key={index}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
            </div>



        </section>)
}



{/* <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center '>
            {Full_stack.map((image, index) => (
                <SkillsProvider
                    src={image.Image}
                    key={index}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
            ))}
        </div> */}

{/* <div className='w-full h-full absolute '>
            <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                <video
                    src='/cards-video.webm'
                    className='w-full h-auto'
                    preload='false'
                    playsInline
                    loop
                    muted
                    autoPlay
                />
            </div>
        </div> */}