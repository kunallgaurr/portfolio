"use client"

import { motion } from "framer-motion";


export function Blinker () {
    return (
        <div className="relative grid place-items-center">
            <motion.div
                className="absolute h-1.5 aspect-square bg-[#15ff00] rounded-full"
                animate={{
                    scale: [1, 3],
                    opacity: [1, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeIn"
                }}
            >
            </motion.div>
            <div className="h-1.5 aspect-square bg-[#15ff00] rounded-full"></div>
        </div>
    )
}