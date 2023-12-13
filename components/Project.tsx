/** @format */

import { projectsData } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
description,
tags,
	imageUrl,
}: ProjectProps) {


	return (
		<section
			className='group bg-purple-100  max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] 
mb-5 sm:mb-8  last:mb-0  even:pl-8 hover:bg-purple-200 transition rounded-2xl '>
			<div
				className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
                            flex flex-col h-full  group-even:ml-[18rem] '>
				<h3 className='text-2xl font-semibold '>{title}</h3>
				<p className='mt-2 leading-relaxed text-gray-700'>
					{description}
				</p>
				<ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto   '>
					{tags.map((tag, index) => (
						<li
							key={index}
							className='bg-black/[0.7] px-3 py-1 text-[.7rem] uppercase tracking-wide text-white rounded-full'>
							{tag}
						</li>
					))}
				</ul>
			</div>
			<Image
				src={imageUrl}
				alt='Project'
				quality={95}
				className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:right-[initial] group-even:-left-40 '
			/>
		</section>
	);
}
