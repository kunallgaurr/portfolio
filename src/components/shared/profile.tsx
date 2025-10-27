"use client"

import Image from "next/image";
import { Blinker } from "../ui/blinker";
import { IconType } from "react-icons";
import { useState, useRef } from "react";
import { FiCode, FiDownload, FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { motion, useInView } from 'framer-motion'
import Link from "next/link";
import { constants } from "@/utils/constants";
import { SocialLink } from "../ui/social-link";
import { Button } from "../ui/button";

export default function Profile() {

    const randomImage = constants.IMAGES[Math.floor(Math.random() * constants.IMAGES.length)]

    return (
        <div className="w-full flex flex-col items-center justify-center gap-1 pt-20">
            <div 
                className="flex flex-col items-center gap-1 w-full"
            >
                <motion.div {...constants.ANIMATIONS.animateOnScroll}>
                    <Image 
                        src={randomImage} 
                        alt="Profile" 
                        width={100} 
                        height={100} 
                        className="object-cover rounded-full border-2 border-white aspect-square" 
                    />
                </motion.div>
                
                <motion.h1 {...constants.ANIMATIONS.animateOnScroll} className="text-2xl font-bold">
                    Kunal Gaur
                </motion.h1>
                
                <motion.div {...constants.ANIMATIONS.animateOnScroll} className="flex gap-2">
                    <p className="text-sm text-gray-400">Software Engineer</p>
                    <Blinker />
                </motion.div>

                <div className="flex gap-1">
                    {constants.SOCIAL_LINKS.map((link, index) => (
                        <SocialLink key={index} {...link}/>
                    ))}
                </div>

                <div className="grid grid-cols-[1fr_1fr] gap-2 w-full mt-4">
                    <Button
                        label="Shoot me an email" 
                        icon={FiMail} 
                        href="mailto:http.kunalgaur@outlook.com" 
                        className="bg-white rounded-[5px] text-black"
                    />
                    <Button 
                        label="Download resume" 
                        icon={FiDownload} 
                        href="https://drive.google.com/file/d/1c9fmbuacN5fq1YzA3sudLPyhpN0RtI8q/view?usp=sharing" 
                        className="rounded-[5px] border-1 border-gray-300"
                    />
                </div>
            </div>
        </div>
    )
}