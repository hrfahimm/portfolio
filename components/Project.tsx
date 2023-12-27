'use client'
import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

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
			className="group  mb-5 sm:mb-8 last:mb-0" style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}
			ref={ref}>
			<section
				className=' bg-purple-100 sm:max-w-[42rem] max-w-38rem   border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] h-[16rem]
				 hover:bg-purple-200 transition rounded-2xl group-even:pl-8 '>
				<div
					className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[17rem] max-w-[15rem]
                            flex flex-col h-full  group-even:ml-[18rem] '>
					<h3 className='sm:text-3xl text-xl font-semibold uppercase '>{title}</h3>
					<p className='mt-2 text-[10px] sm:text-base leading-relaxed text-gray-700'>
						{description}
					</p>
					<ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto   '>
						{tags.map((tag, index) => (
							<li
								key={index}
								className='bg-black/[0.7] px-3 py-1 sm:text-[.7rem] text-[.5rem] uppercase tracking-wide text-white rounded-full'>
								{tag}
							</li>
						))}
					</ul>
				</div>
				<Image
					src={imageUrl}
					alt='Project'
					quality={95}
					className='absolute top-8 -right-40 sm:w-[27rem] w-[25rem] rounded-t-lg shadow-xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3  group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40 '
				/>
			</section>
		</motion.div>
	);
}
