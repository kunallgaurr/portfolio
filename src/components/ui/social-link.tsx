import { useState } from "react"
import { IconType } from "react-icons"
import {motion} from 'framer-motion'
import { constants } from "@/utils/constants"

export const SocialLink = ({ label, icon, href }: { 
    label: string
    icon: IconType
    href: string
}) => {
    const [isHovered, setIsHovered] = useState(false)
    const Icon = icon

    return (
        <motion.a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center aspect-square relative hover:cursor-pointer hover:bg-black/10 rounded-md p-2" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            {...constants.ANIMATIONS.animateOnScroll}
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