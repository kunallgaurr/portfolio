"use client"

import Link from "next/link";
import { useState, useRef } from "react";
import { IconType } from "react-icons"
import { FiBriefcase, FiFolder, FiHome, FiMail, FiUser } from "react-icons/fi";
import { motion, useInView } from 'framer-motion'

const NavbarItem = ({ label, icon, href, variants }: {
    label: string
    icon: IconType
    href: string
    variants: any
}) => {
    const [isHovered, setIsHovered] = useState(false)
    const Icon = icon

    return (
        <motion.div variants={variants}>
            <Link
                href={href}
                className="flex items-center justify-center aspect-square relative hover:cursor-pointer hover:bg-black/10 rounded-md p-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Icon />
                {isHovered && (
                    <span className="absolute top-0 left-[105%] p-1 bg-black text-white rounded-md text-sm font-medium top-[50%] translate-y-[-50%]">
                        {label}
                    </span>
                )}
            </Link>
        </motion.div>
    )
}

const navbarItems = [
    { label: "Home", icon: FiHome, href: "/" },
    { label: "About", icon: FiUser, href: "/about" },
    { label: "Work", icon: FiBriefcase, href: "/work" },
    { label: "Projects", icon: FiFolder, href: "/projects" },
    { label: "Contact", icon: FiMail, href: "/contact" },
]

export default function Navbar() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const navbarVariants = {
        hidden: { opacity: 0, x: "-50%" },
        visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: "-50%" },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
    }

    return (
        <motion.div
            ref={ref}
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            className="w-[var(--navbar-dimension)] h-full bg-[var(--navbar-background)] p-1 flex flex-col gap-1 justify-center sticky top-0 left-0"
        >
            {navbarItems.map((item, index) => (
                <NavbarItem
                    key={index}
                    {...item}
                    variants={itemVariants}
                />
            ))}
        </motion.div>
    )
}