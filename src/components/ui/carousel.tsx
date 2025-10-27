"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function InfiniteCarousel({images}: {images: string[]}) {
  return (
    <div className="hidden sm:block w-[100%] overflow-hidden py-4 relative">
      <div className="absolute top-0 left-0 w-8 sm:w-20 h-full z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 sm:w-20 h-full z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 sm:gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 w-32 sm:w-48 h-32 sm:h-48">
            <Image
              src={src}
              alt={`Carousel Image ${index}`}
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
