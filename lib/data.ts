/** @format */

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import p1 from "@/public/p1.png";
import p2 from "@/public/p2.png";
import p3 from "@/public/p3.png";
import p4 from "@/public/p4.png";
import p5 from "@/public/p5.png";
import p6 from "@/public/p6.png";
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
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "rmtDev",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: p1,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: p2,
    },
    {
        title: "Food",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: p3,
    },
    {
        title: "Portfolio",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: p4,
    },
    {
        title: "Space",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: p5,
    },
    {
        title: "movie",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: p6,
    },
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
];

export const Socials = [
    {
        name: "Discord",
        src: "/instagram.svg",
    },
    {
        name: "Facebook",
        src: "/facebook.svg",
    },
    {
        name: "Instagram",
        src: "/discord.svg",
    },
];

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
];

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
];

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

export const Other_skill = [
    {
        skill_name: "Figma",
        Image: "/figma.png",
        width: 50,
        height: 50,
    },
];
