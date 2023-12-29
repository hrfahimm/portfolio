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
			className='group  mb-5 sm:mb-8 last:mb-0'
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}
			ref={ref}>
			<section
				className=' bg-purple-100 sm:w-[600px] w-[400px] h-[300px] p-8  border border-black/5 overflow-hidden   relative  flex flex-row  hover:bg-purple-200 transition rounded-2xl  dark:bg-[#a8e5e5ec] dark:hover:bg-[#c8e4e4]'>
				<div className=' px-2 w-[200px] sm:w-[300px] flex flex-col h-full  '>
					<h3 className='  text-xl font-bold uppercase dark:text-gray-800'>{title}</h3>

					<p className='mt-2 text-[10px]  leading-relaxed text-gray-700 pb-2'>{description}</p>
					<ul className='flex flex-wrap mt-4 gap-2  '>
						{tags.map((tag, index) => (
							<li
								key={index}
								className='bg-black/[0.7] px-3 py-1 text-[.5rem] uppercase tracking-wide text-white rounded-full'>
								{tag}
							</li>
						))}
					</ul>
				</div>
				<div className="w-[200px] sm:w-[300px]">
					<Link
						href='https://github.com/hrfahimm/'
						target='_blank'>
						<Image
							src={imageUrl}
							alt='Project'
							quality={95}
							className='absolute top-8 rounded-3xl w-full shadow-xl transition   '
						/>
					</Link>
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
