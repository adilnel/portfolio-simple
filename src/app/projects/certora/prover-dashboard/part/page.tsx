"use client";

import proverDashboardPartImg from "@/assets/certora-prover-dashboard-part.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraProverDashboardPart() {
  const navItems = [
    { label: "VSCode Plugin", href: "/projects/certora" },
    { label: "Prover report", href: "/projects/certora/prover-report" },
    { label: "Prover dashboard", href: "/projects/certora/prover-dashboard", active: true },
    { label: "Mutation testing", href: "/projects/certora/mutation-testing" },
  ];

  return (
    <ProjectLayout
      title="CERTORA"
      subtitle="Smart Contract Auditing using FV"
      navItems={navItems}
      backLink="/projects/certora/prover-dashboard/result"
      nextLink={{ label: "Mutation testing", href: "/projects/certora/mutation-testing" }}
      rightContent={
        <div className="relative w-fit max-w-[800px] rounded-2xl overflow-hidden">
          <ProjectImage
            src={proverDashboardPartImg}
            alt="Certora Prover Dashboard Part"
            fill={false}
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">

        <span className="font-normal block">My</span>
        Part
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        I led the design process by interviewing security researchers to identify workflow bottlenecks. I mapped the user flows for managing multiple jobs and created the wireframes and final UI to transform isolated data points into a cohesive monitoring system.
      </p>
    </ProjectLayout>
  );
}
