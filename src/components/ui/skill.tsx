import Image from "next/image";

export function Skill({ image, name }: { image: string; name: string }) {
    return (
        <div
            className="flex flex-col items-center justify-center bg-[var(--navbar-background)] rounded-xl p-3 
      transition-all duration-300 hover:scale-105 hover:bg-[var(--card-hover)] border border-gray-800"
        >
            <Image src={image} alt={name} width={50} height={50} className="rounded-lg object-cover" />
            <span className="text-xs mt-2 text-gray-300 font-medium">{name}</span>
        </div>
    );
}