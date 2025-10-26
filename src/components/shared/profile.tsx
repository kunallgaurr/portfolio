"use client"

import Image from "next/image";
import { Blinker } from "../ui/blinker";
import { IconType } from "react-icons";
import { useState, useRef } from "react";
import { FiCode, FiDownload, FiGithub, FiInstagram, FiLinkedin, FiMail, FiPhoneCall } from "react-icons/fi";
import { motion, useInView } from 'framer-motion'
import Link from "next/link";

const images = [
    "/kunal-1.jpeg",
    "/kunal-2.jpeg", 
    "/kunal-4.jpg",
    "/kunal-5.jpg",
]

const socialLinks = [
    { label: 'Instagram', icon: FiInstagram, href: 'https://www.instagram.com/kunall_gaurr' },
    { label: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/kunal-gaur-connect/' },
    { label: 'GitHub', icon: FiGithub, href: 'https://github.com/kunallgaurr' },
    { label: 'Leetcode', icon: FiCode, href: 'https://leetcode.com/u/kunalgaur/' },
]

const SocialLink = ({ label, icon, href, variants }: { 
    label: string
    icon: IconType
    href: string
    variants: any 
}) => {
    const [isHovered, setIsHovered] = useState(false)
    const Icon = icon

    return (
        <motion.a 
            variants={variants}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center aspect-square relative hover:cursor-pointer hover:bg-black/10 rounded-md p-2" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <Icon />
            {isHovered && (
                <span className="absolute p-1 bg-black text-white rounded-md text-sm font-medium bottom-[10%] translate-y-[100%]">
                    {label}
                </span>
            )}
        </motion.a>
    )
}

const Button = ({ label, icon, href , variants, className}: { label: string, icon: IconType, href: string, variants: any, className: string}) => {
    const Icon = icon
    return (
        <motion.div className={`${className} w-full`} variants={variants}>
            <Link href={href} className="flex gap-2 items-center justify-center w-full" target="__blank">{label} <Icon/></Link>
        </motion.div>
    )
}

export default function Profile() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: "-50%" },
        visible: { opacity: 1, y: 0 }
    }

    const randomImage = images[Math.floor(Math.random() * images.length)]

    return (
        <div className="w-full flex flex-col items-center justify-center gap-1 pt-20">
            <motion.div 
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col items-center gap-1 w-full"
            >
                <motion.div variants={itemVariants}>
                    <Image 
                        src={randomImage} 
                        alt="Profile" 
                        width={100} 
                        height={100} 
                        className="object-cover rounded-full border-2 border-white aspect-square" 
                    />
                </motion.div>
                
                <motion.h1 variants={itemVariants} className="text-2xl font-bold">
                    Kunal Gaur
                </motion.h1>
                
                <motion.div variants={itemVariants} className="flex gap-2">
                    <p className="text-sm text-gray-400">Software Engineer</p>
                    <Blinker />
                </motion.div>

                <div className="flex gap-1">
                    {socialLinks.map((link, index) => (
                        <SocialLink key={index} {...link} variants={itemVariants} />
                    ))}
                </div>

                <div className="grid grid-cols-[1fr_1fr] gap-2 w-full mt-4">
                    <Button 
                        label="Shoot me an email" 
                        icon={FiMail} 
                        href="mailto:http.kunalgaur@outlook.com" 
                        variants={itemVariants} 
                        className="bg-white rounded-[5px] text-black"
                    />
                    <Button 
                        label="Download resume" 
                        icon={FiDownload} 
                        href="https://drive.google.com/file/d/1c9fmbuacN5fq1YzA3sudLPyhpN0RtI8q/view?usp=sharing" 
                        variants={itemVariants} 
                        className="rounded-[5px] border-1 border-gray-300"
                    />
                </div>
            </motion.div>
        </div>
    )
}