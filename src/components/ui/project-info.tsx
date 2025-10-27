import { motion } from "framer-motion";
import { constants } from "@/utils/constants";
import { useRouter } from "next/navigation";

type TProjectInfo = {
    name: string;
    image: string;
    link: string;
};

export const ProjectInfo = ({ name, image, link }: TProjectInfo) => {
    const router = useRouter()
    return (
        <motion.div 
            {...constants.ANIMATIONS.animateOnScroll} 
            className="w-full p-2 bg-[var(--navbar-background)] rounded-[10px]" 
            onClick={() => router.push('/')}
        >
            <span className="text font-bold">{name}</span>
            <img src={image} className="w-full rounded-[10px] aspect-video object-cover mt-1" />
        </motion.div>
    );
};
