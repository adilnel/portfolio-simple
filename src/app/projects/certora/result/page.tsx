"use client";

import certoraResultImg from "@/assets/certora-result.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraResult() {
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
      backLink="/projects/certora/problem"
      nextLink="/projects/certora/part"
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530]">
          <ProjectImage
            src={certoraResultImg}
            alt="Certora VSCode Plugin Interface"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        RESULT
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        Configuring & running certoraRun using VSCode UI, sometimes running 
        apps from command line interface can be just to many lines to type.
      </p>
    </ProjectLayout>
  );
}
