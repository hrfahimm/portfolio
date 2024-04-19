/** @format */

import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import p1 from "@/public/p1.png";
import p2 from "@/public/p2.png";
import p3 from "@/public/p3.png";
import p4 from "@/public/p4.png";
import p5 from "@/public/p5.png";
import p6 from "@/public/p6.png";
import p10 from "@/public/p10.png";
import marketplace from "@/public/marketplace.png";
import woom from "@/public/woom.png";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa6";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated  ",
        location: "Laxmipur Govt Collage",
        description:
            "HSC Complited ,",
        icon: React.createElement(LuGraduationCap),
        date: "2019",

    },
    {
        title: "Front-End Developer",
        location: "null",
        description:
            "As an aspiring Frontend Developer, I'm passionate about creating user-centric experiences. Proficient in Next.js, React, and Tailwind CSS, I bring creativity and dedication to every project.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Mern-Stack Developer",
        location: "null",
        description:
            "As an aspiring MEARN Stack Developer, I'm passionate about crafting dynamic web solutions. Proficient in Next.js, React, MongoDB, and Node.js, I bring creativity and a commitment to learning in every projects.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "WOOM ",
        description:
            "It is a zoom copy website, working on it. Can't Complite",
        tags: ["Next.js", "React", "TypeScript", , "Tailwind",],
        imageUrl: woom,
        webUrl: "https://woom.vercel.app/",
        gitUrl: 'https://github.com/hrfahimm/zoom'

    },
    {
        title: "Marketplace",
        description:
            "It is a marketplace website, Can not complite . It is a Full Stack Project",
        tags: ["Next.js", "React", "TypeScript", , "Tailwind",],
        imageUrl: marketplace,
        webUrl: "https://marketplace9.vercel.app/",
        gitUrl: 'https://github.com/hrfahimm/marketplace'

    },
    {
        title: "Hotel Booking",
        description:
            "It is a hotel booking website, only room booked ang login is avaleable.",
        tags: ["Next.js", "React", "TypeScript", , "Tailwind", "Framer", "sanity.io"],
        imageUrl: p10,
        webUrl: "https://hotel-bookingg.vercel.app/",
        gitUrl: 'https://github.com/hrfahimm/hotel-booking'

    },
    {
        title: "Protfolio",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer"],
        imageUrl: p1,
        webUrl: "http://hrfahimm.vercel.app/",
        gitUrl: 'https://github.com/hrfahimm/portfolio'

    },

    {
        title: "Mac Price",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["js", "css", "html",],
        imageUrl: p2,
        webUrl: "https://macprice.netlify.app/",
        gitUrl: 'https://github.com/hrfahimm/portfolio'

    },
    {
        title: "Shoping Card",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", 'vite', 'Tailwind',],
        imageUrl: p3,
        webUrl: "https://emajohn-router.netlify.app/shop",
        gitUrl: 'https://github.com/hrfahimm/portfolio'


    },
    {
        title: "Portfolio -> copy",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "Tailwind", "Typescript", "Framer"],
        imageUrl: p4,
        webUrl: "https://hrfahimm2.vercel.app/",
        gitUrl: 'https://github.com/hrfahimm/portfolio'


    },
    {
        title: "E-com",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: p5,
        webUrl: "https://clothing-appp.netlify.app/home",
        gitUrl: 'https://github.com/hrfahimm/portfolio'


    },
    // {
    //     title: "movie",
    //     description:
    //         "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    //     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    //     imageUrl: p6,
    //     webUrl: "http://hrfahimm.vercel.app/",
    //     gitUrl:'https://github.com/hrfahimm/portfolio'


    // },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;


/** @format */
export const Skill_data = [
    {
        skill_name: "Html 5",
        Image: "/html.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Css",
        Image: "/css.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Java Script",
        Image: "/js.png",
        width: 65,
        height: 65,
    },
    {
        skill_name: "Tailwind Css",
        Image: "/tailwind.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "React",
        Image: "/react.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Redux",
        Image: "/redux.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "TanStack Query",
        Image: "/reactquery.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Type Script",
        Image: "/ts.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Next js 14",
        Image: "/next.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Framer Motion",
        Image: "/framer.png",
        width: 80,
        height: 80,
    },
    // {
    //     skill_name: "Stripe Payment",
    //     Image: "/stripe.webp",
    //     width: 80,
    //     height: 80,
    // },
    {
        skill_name: "Node js",
        Image: "/node-js.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Mongo db",
        Image: "/mongodb.png",
        width: 40,
        height: 40,
    },
] as const;

export const Socials = [
    {
        name: "Instagram",
        src: "/insta.png",
        width: 30,
        height: 30,
    },
    {
        name: "Facebook",
        src: "/fb.webp",
        width: 30,
        height: 30,
    },
    {
        name: "LinkedIn",
        src: "/linkedin.jpg",
        width: 30,
        height: 30,
    },
] as const;


export const Frontend_skill = [
    {
        skill_name: "Html 5",
        Image: "/html.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Css",
        Image: "/css.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Java Script",
        Image: "/js.png",
        width: 65,
        height: 65,
    },
    {
        skill_name: "Tailwind Css",
        Image: "/tailwind.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Material UI",
        Image: "/mui.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "React",
        Image: "/react.png",
        width: 80,
        height: 80,
    },
    // {
    //     skill_name: "Redux",
    //     Image: "/redux.png",
    //     width: 80,
    //     height: 80,
    // },
    {
        skill_name: "TanStack Query",
        Image: "/reactquery.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Type Script",
        Image: "/ts.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Next js 14",
        Image: "/next.png",
        width: 80,
        height: 80,
    },
] as const;

export const Backend_skill = [
    {
        skill_name: "Node js",
        Image: "/node-js.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Express js",
        Image: "/express.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Mongo db",
        Image: "/mongodb.png",
        width: 40,
        height: 40,
    },
    {
        skill_name: "Fire base",
        Image: "/Firebase.png",
        width: 55,
        height: 55,
    },
    // {
    //     skill_name: "Postger SQL",
    //     Image: "/postger.png",
    //     width: 70,
    //     height: 70,
    // },
    // {
    //     skill_name: "My SQL",
    //     Image: "/mysql.png",
    //     width: 70,
    //     height: 70,
    // },
    // {
    //     skill_name: "Prisma",
    //     Image: "/prisma.webp",
    //     width: 70,
    //     height: 70,
    // },
    // {
    //     skill_name: "Graphql",
    //     Image: "/graphql.png",
    //     width: 80,
    //     height: 80,
    // },
] as const;


export const Other_skill = [
    {
        skill_name: "Figma",
        Image: "/figma.png",
        width: 50,
        height: 50,
    },
] as const;




// export const Full_stack = [
//     {
//         skill_name: "React Native",
//         Image: "/ReactNative .png",
//         width: 70,
//         height: 70,
//     },
//     {
//         skill_name: "Tauri",
//         Image: "/tauri.svg",
//         width: 70,
//         height: 70,
//     },
//     {
//         skill_name: "Docker",
//         Image: "/docker.webp",
//         width: 70,
//         height: 70,
//     },

//     {
//         skill_name: "Figma",
//         Image: "/figma.png",
//         width: 50,
//         height: 50,
//     },
// ];