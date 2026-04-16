"use client";

import certoraProblemImg from "@/assets/certora-problem.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraProblem() {
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
      backLink="/projects/certora"
      nextLink="/projects/certora/result"
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530]">
          <ProjectImage
            src={certoraProblemImg}
            alt="Certora CLI Interface"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        Problem
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        The challenge I faced was to simplify the process of using certoraRun through the VSCode interface, 
        making it more accessible than the cumbersome command line interface.
      </p>
    </ProjectLayout>
  );
}
