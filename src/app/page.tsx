"use client";

import Profile from "@/components/shared/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Paragraph } from "@/components/ui/paragraph";
import { WorkInfo } from "@/components/ui/work-info";
import { ProjectInfo } from "@/components/ui/project-info";

export default function Home() {
    return (
        <div className="p-2 grid place-items-center">
            <div className="flex flex-col gap-6 sm:w-[40%] w-[95%]">
                <Profile />

                <div className="flex flex-col gap-2">
                    <SectionHeading title="A little about me!" />

                    <Paragraph>
                        Hi, I'm Kunal Gaur, a Full Stack Developer who enjoys building clean, reliable, and user-friendly applications. I work mainly with Node.js, React, and TypeScript, and I'm always learning new ways to make systems faster and smoother. For me, good code is about simplicity, clarity, and creating experiences that just work.
                    </Paragraph>
                </div>

                <div className="flex flex-col gap-2">
                    <SectionHeading title="My work experience!"/>
                        
                    <WorkInfo 
                      image="/poker.jpg" 
                      name="Deltatech Gaming Limited" 
                      role="Software Engineer" 
                      from="November 2024" 
                      to="September 2025" 
                    />

                    <WorkInfo 
                      image="/banking.jpg" 
                      name="Simplyfi Softech Private Limited" 
                      role="Innovation Engineer" 
                      from="October 2023" 
                      to="November 2024" 
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <SectionHeading title="Some of my projects."/>

                    <ProjectInfo
                      name="Adda52 Poker App" 
                      image="/adda52-bg.jpg" 
                      link="/" 
                    />
                </div>
            </div>
        </div>
    );
}
