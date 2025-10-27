import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { constants } from "@/utils/constants";

type TWorkInfo = {
    image: string;
    name: string;
    from: string;
    to: string;
    role: string;
};

export const WorkInfo = ({ image, name, from, to, role }: TWorkInfo) => (
    <motion.div {...constants.ANIMATIONS.animateOnScroll}>
        <Link href="/" className="flex gap-4 bg-[var(--navbar-background)] p-2 rounded-[10px] hover:cursor-pointer">
            <Image src={image} alt={name} width={70} height={50} className="aspect-square object-cover rounded-[5px]" />
            <div className="flex flex-col">
                <span>
                    <span className="text font-bold">{role}</span> at
                </span>
                <span className="text-sm text-gray-400 text-justify">{name}</span>
                <span className="text-sm text-gray-400 text-justify">
                    {from} - {to}
                </span>
            </div>
        </Link>
    </motion.div>
);
