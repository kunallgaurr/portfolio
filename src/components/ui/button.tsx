import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { constants } from "@/utils/constants";
import Link from "next/link";

export const Button = ({ label, icon, href, className }: { label: string; icon: IconType; href: string; className: string }) => {
    const Icon = icon;
    return (
        <motion.div className={`${className} w-full`} {...constants.ANIMATIONS.animateOnScroll}>
            <Link href={href} className="flex gap-2 items-center justify-center w-full" target="__blank">
                {label} <Icon />
            </Link>
        </motion.div>
    );
};
