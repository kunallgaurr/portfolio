"use client";

import Profile from "@/components/shared/profile";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

type TWorkInfo = {
    image: string;
    name: string;
    from: string;
    to: string;
    role: string;
};

type TProjectInfo = {
    name: string;
    image: string;
    link: string;
};

function WorkInfo({ image, name, from, to, role }: TWorkInfo) {
    return (
        <Link href="/" className="flex gap-4 bg-[var(--navbar-background)] p-2 rounded-[10px] hover:cursor-pointer">
            <Image src={image} alt={name} width={70} height={50} className="aspect-square object-cover rounded-[5px]" />{" "}
            <div className="flex flex-col">
                <span className="">
                    <span className="text font-bold">{role}</span> at
                </span>
                <span className="text-sm text-gray-400 text-justify">{name}</span>
                <span className="text-sm text-gray-400 text-justify">
                    {from} - {to}
                </span>
            </div>
        </Link>
    );
}

function ProjectInfo({ name, image, link }: TProjectInfo) {
    return (
        <Link href={link} className="w-full p-2 bg-[var(--navbar-background)] rounded-[10px]">
            <span className="text font-bold">{name}</span>
            <img src={image} className="w-full rounded-[10px] aspect-video object-fill" />
        </Link>
    );
}

export default function Home() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const itemVariants = {
        hidden: { opacity: 0, y: "-50%" },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
    };
    return (
        <div className="p-2 grid place-items-center ">
            <div className="flex flex-col gap-6 sm:w-[40%] w-[95%]">
                <Profile />
                <div className="flex flex-col gap-2">
                    <motion.span className="text-xl font-medium " variants={itemVariants}>
                        A little about me!
                    </motion.span>
                    <motion.span className="text-sm text-gray-400 text-justify" variants={itemVariants}>
                        Hi, I'm Kunal Gaur, a Full Stack Developer who enjoys building clean, reliable, and user-friendly applications. I work mainly with Node.js, React, and TypeScript, and I'm
                        always learning new ways to make systems faster and smoother. For me, good code is about simplicity, clarity, and creating experiences that just work.
                    </motion.span>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-xl font-medium ">My work experience!</span>

                    <WorkInfo image="/poker.jpg" name="Deltatech Gaming Limited" role="Software Engineer" from="November 2024" to="September 2025" />

                    <WorkInfo image="/banking.jpg" name="Simplyfi Softech Private Limited" role="Innovation Engineer" from="October 2023" to="November 2024" />
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-xl font-medium ">Some of my projects.</span>

                    <ProjectInfo name="Adda52 Poker App" image="/adda52-bg.jpg" link="/"/>
                </div>
            </div>
        </div>
    );
}
