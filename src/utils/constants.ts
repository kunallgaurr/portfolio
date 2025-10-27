import { TargetAndTransition, Transition, VariantLabels, ViewportOptions } from "framer-motion"
import { FiCode, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"

export interface IAnimations {
    animateOnScroll: {
        initial: boolean | TargetAndTransition | VariantLabels | undefined,
        whileInView: VariantLabels | TargetAndTransition | undefined,
        viewport: ViewportOptions | undefined,
        transition: Transition | undefined
    }
}

const ANIMATIONS: IAnimations = {
    animateOnScroll: {
        initial: { opacity: 0, y: '-50%' },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
            // ease: [0.42, 0, 0.58, 1],
            duration: 0.5,
            staggerChildren: 0.5,
            delayChildren: 0.1
        }
    }
}

const SOCIAL_LINKS = [
    { label: 'Instagram', icon: FiInstagram, href: 'https://www.instagram.com/kunall_gaurr' },
    { label: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/kunal-gaur-connect/' },
    { label: 'GitHub', icon: FiGithub, href: 'https://github.com/kunallgaurr' },
    { label: 'Leetcode', icon: FiCode, href: 'https://leetcode.com/u/kunalgaur/' },
]

const IMAGES = [
    "/kunal-1.jpeg",
    "/kunal-2.jpeg",
    "/kunal-3.jpeg",
    "/kunal-4.jpg",
    "/kunal-5.jpg",
    "/kunal-6.jpeg",
    "/kunal-7.jpeg",
    "/kunal-8.jpeg",
    "/kunal-9.jpg",
];

export const constants = {
    ANIMATIONS,
    SOCIAL_LINKS,
    IMAGES
}