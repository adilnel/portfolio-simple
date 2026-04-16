"use client";

import ProjectLayout from "@/components/ProjectLayout";
import ImageCarousel from "@/components/ImageCarousel";

// Import runConfigSolidity images
import frame0 from "@/assets/runConfigSolidity-0.png";
import frame1 from "@/assets/runConfigSolidity-1.png";
import frame2 from "@/assets/runConfigSolidity-2.png";
import frame3 from "@/assets/runConfigSolidity-3.png";
import frame4 from "@/assets/runConfigSolidity-4.png";
import frame5 from "@/assets/runConfigSolidity-5.png";
import frame6 from "@/assets/runConfigSolidity-6.png";
import frame7 from "@/assets/runConfigSolidity-7.png";
import frame8 from "@/assets/runConfigSolidity-8.png";
import frame9 from "@/assets/runConfigSolidity-9.png";
import frame10 from "@/assets/runConfigSolidity-10.png";

export default function CertoraPart() {
  const runConfigImages = [
    frame0, frame1, frame2, frame3, frame4, 
    frame5, frame6, frame7, frame8, frame9, frame10
  ];

  const navItems = [
    { label: "VSCode Plugin", href: "/projects/certora", active: true },
    { label: "Prover report", href: "/projects/certora/prover-report" },
    { label: "Prover dashboard", href: "/projects/certora/prover-dashboard" },
    { label: "Mutation testing", href: "/projects/certora/mutation-testing" },
  ];

  return (
    <ProjectLayout
      title="CERTORA"
      navItems={navItems}
      backLink="/projects/certora/result"
      nextLink={{ label: "Prover report", href: "/projects/certora/prover-report" }}
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530] rounded-2xl overflow-hidden">
          <ImageCarousel 
            images={runConfigImages} 
            alt="Certora VSCode Plugin Run Configuration" 
            interval={1500}
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">My</span>
        Part
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        Configuring & running certoraRun using VSCode UI, sometimes running 
        apps from command line interface can be just to many line to type.
      </p>
    </ProjectLayout>
  );
}
