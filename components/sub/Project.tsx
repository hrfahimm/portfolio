'use client'
import { projectsData } from "@/utility/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import github from "@/public/gitblack.jpg";


type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
	webUrl, gitUrl,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({

		target: ref,
		offset: ["0 1", "1.33 1"]
	})

	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])


	return (
		<motion.div
			className=' relative group  mb-5 sm:mb-8 last:mb-0'
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}
			ref={ref}>


			<section
				className=' bg-purple-100 sm:w-[600px] w-[400px] h-[300px] pt-8 px-4  border border-black/5 overflow-hidden   relative  flex flex-row  hover:bg-purple-200 transition rounded-2xl  dark:bg-[#a8e5e5ec] dark:hover:bg-[#c8e4e4]  '>
				<div className=' static sm:px-2 px-1 w-[200px] sm:w-[300px] flex flex-col h-full  '>
					<h3 className='  text-2xl font-bold uppercase dark:text-gray-800 tracking-wide'>{title}</h3>

					<p className='mt-2 text-[10px]  leading-relaxed text-gray-700 pb-2'>{description}</p>
					<ul className='flex flex-wrap mt-2 gap-2  '>
						{tags.map((tag, index) => (
							<li
								key={index}
								className='bg-black/[0.8] px-3 py-1 text-[.5rem] uppercase tracking-wide text-white rounded-full'>
								{tag}
							</li>
						))}
					</ul>
					<a
						href={gitUrl}
						target='_blank'
						className='   absolute bottom-5  text-sm cursor-pointer font-bold  text-black flex items-center gap-2 rounded-full outline-none'>
						Sourch Code{" ->"}
						<Image
							src={github}
							alt='arrow'
							className='  rounded-xl outline-none focus:scale-110  hover:scale-110 active:scale-105 transition'
							width='25'
							height='25'
						/>
					</a>



				</div>
				<div className="w-[200px] sm:w-[300px] ">
					<a href={webUrl}
						target='_blank'>
						<Image
							src={imageUrl}
							alt='Project'
							quality={95}
							className='absolute top-8 rounded-3xl w-full shadow-xl pr-24  outline-none focus:scale-110  hover:scale-105 active:scale-105 transition '
						/>
					</a>
				</div>



			</section>


		</motion.div>
	);
}

//
{/* dark:bg-[#a8e5e5ec] dark:hover:bg-[#a9e9e9]   hover:bg-purple-200  bg-purple-100 
style={{ backgroundImage: `url(${imageUrl})` }} 
*/ }
// 