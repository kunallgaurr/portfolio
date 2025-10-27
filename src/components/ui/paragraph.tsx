import { constants } from "@/utils/constants";
import {motion} from 'framer-motion'


export function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <motion.p 
        className="text-sm text-gray-400 text-justify leading-relaxed" 
        {...constants.ANIMATIONS.animateOnScroll}
    >
      {children}
    </motion.p>
  );
}