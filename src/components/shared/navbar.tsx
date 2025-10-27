"use client";

import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";
import { FiBriefcase, FiFolder, FiHome, FiMail, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { constants } from "@/utils/constants";

const NavbarItem = ({ label, icon, href }: { label: string; icon: IconType; href: string}) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = icon;

    return (
        <motion.div {...constants.ANIMATIONS.animateOnScroll}>
            <Link
                href={href}
                className="flex items-center justify-center aspect-square relative hover:cursor-pointer hover:bg-black/10 rounded-md p-2 sm:w-full h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsHovered(false)}
            >
                <Icon />
                {isHovered && <span className="absolute top-0 left-[105%] p-1 bg-black text-white rounded-md text-sm font-medium top-[50%] translate-y-[-50%]">{label}</span>}
            </Link>
        </motion.div>
    );
};

const navbarItems = [
    { label: "Home", icon: FiHome, href: "/" },
    { label: "About", icon: FiUser, href: "/about" },
    { label: "Work", icon: FiBriefcase, href: "/work" },
    { label: "Projects", icon: FiFolder, href: "/projects" },
    { label: "Contact", icon: FiMail, href: "/contact" },
];

export default function Navbar() {

    return (
        <motion.div
            {...constants.ANIMATIONS.animateOnScroll}            
            className="
                bg-[var(--navbar-background)]
                p-1 flex gap-1
                fixed bottom-0 left-0 right-0 h-[50px] justify-around z-50
                sm:sticky sm:top-0 sm:left-0 sm:h-full sm:flex-col sm:justify-center sm:w-[67px]
            "
        >
            {navbarItems.map((item, index) => (
                <NavbarItem key={index} {...item} {...constants.ANIMATIONS.animateOnScroll} />
            ))}
        </motion.div>
    );
}
