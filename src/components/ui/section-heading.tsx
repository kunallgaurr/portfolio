import { constants } from '@/utils/constants';
import {motion} from 'framer-motion'

export function SectionHeading({ title }: { title: string }) {
  return (
    <motion.h2 
        className="text-xl font-semibold text-gray-200 mt-6" 
        {...constants.ANIMATIONS.animateOnScroll}>
            {title}
    </motion.h2>
    )
}
