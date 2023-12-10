/** @format */
"use client";

import BioImage from "@/sub/BioImage";
import BioText from "@/sub/BioText";
import BioItems from "@/sub/BioItems";

export default function bio() {
    return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <BioImage />
            <BioText />
            <BioItems />
        </section>
    );
}
