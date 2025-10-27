"use client";

import InfiniteCarousel from "@/components/ui/carousel";
import { Paragraph } from "@/components/ui/paragraph";
import { SectionHeading } from "@/components/ui/section-heading";
import { constants } from "@/utils/constants";
import Image from "next/image";

const skills = [
    { name: "Typescript", image: "/Typescript.png" },
    { name: "Javascript", image: "/js.png" },
    { name: "Node.js", image: "/Node.js.png" },
    { name: "PostgreSQL", image: "/PostgresSQL.png" },
    { name: "MongoDB", image: "/MongoDB.png" },
    { name: "Redis", image: "/Redis.png" },
    { name: "React", image: "/atom.png" },
    { name: "Next.js", image: "/Next.js.png" },
    { name: "Nest.js", image: "/Nest.js.png" },
    { name: "Express", image: "/Express.png" },
    { name: "Git", image: "/Git.png" },
    { name: "GitHub", image: "/GitHub.png" },
    { name: "GitLab", image: "/GitLab.png" },
    { name: "Kubernetes", image: "/Kubernetes.png" },
    { name: "Docker", image: "/Docker.png" },
];

function Skill({ image, name }: { image: string; name: string }) {
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

export default function AboutPage() {
    return (
        <div className="p-4 sm:p-8 grid place-items-center">
            <div className="flex flex-col gap-6 sm:w-[40%] w-full max-w-2xl">
                <InfiniteCarousel images={constants.IMAGES} />
                <h1 className="text-2xl font-bold text-gray-100">About Me</h1>

                <Paragraph>
                    Hey 👋 I'm <span className="text-white font-medium">Kunal Gaur</span>, and if I had to sum up my story in one line — I started with curiosity and stayed because of passion.
                </Paragraph>

                <SectionHeading title="Where It All Began" />
                <Paragraph>
                    My journey into the world of programming started the way it does for many developers — with HTML, CSS, and JavaScript. It felt magical that a few lines of code could turn into a
                    working webpage. I’d spend hours tweaking layouts, playing with hover effects, and breaking things just to fix them again. That curiosity slowly became a habit.
                </Paragraph>

                <Paragraph>
                    Soon, I started to wonder — what happens after I click a button? Where does the data go? How does it come back? That question pulled me toward backend development.
                </Paragraph>

                <SectionHeading title="Stepping Into the Backend" />
                <Paragraph>
                    I began exploring Node.js and MongoDB. Suddenly, everything felt deeper — it wasn’t just about the UI anymore; it was about logic, structure, and data flow. During this phase, I
                    built small projects, culminating in a social media website that became a turning point for me. Seeing it work — with real-time updates, authentication, and posts — was pure joy.
                </Paragraph>

                <SectionHeading title="The Internship — My First Real Step" />
                <Paragraph>
                    My first professional opportunity came at <span className="text-white font-medium">Simplyfi</span>, where I worked on two main products — a Chatbot App and Asset Fractio, a
                    platform for asset tokenization. It was my first real taste of working on live systems, handling production data, and building scalable backends.
                </Paragraph>

                <Paragraph>The internship became my launchpad — after months of learning and contributing, I received a full-time offer.</Paragraph>

                <SectionHeading title="Growing as a Professional" />
                <Paragraph>
                    As a Full-Time Node.js Developer at Simplyfi, I deepened my knowledge of Express.js and integrated Redis for performance improvements. I learned how to collaborate with teams,
                    manage features end-to-end, and write maintainable code. My work with Prisma, TypeORM, and PostgreSQL helped me strengthen my backend foundation.
                </Paragraph>

                <SectionHeading title="Expanding My Horizons — SQL and Beyond" />
                <Paragraph>
                    After mastering NoSQL, I explored SQL — understanding relationships, joins, and transactions opened new doors for data handling. This phase led me to{" "}
                    <span className="text-white font-medium">Deltatech Gaming</span>, where I entered the world of high-performance, event-driven systems.
                </Paragraph>

                <SectionHeading title="The Deltatech Chapter" />
                <Paragraph>
                    At Deltatech Gaming, I worked with Redis, RabbitMQ, and microservices to build reliable and scalable systems. It was both challenging and rewarding — I learned how distributed
                    systems communicate, handle failures, and stay performant at scale. This experience refined my system design and architectural thinking.
                </Paragraph>

                <SectionHeading title="Technologies I Love Working With" />

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {skills.map((skill, i) => (
                        <Skill key={i} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}
