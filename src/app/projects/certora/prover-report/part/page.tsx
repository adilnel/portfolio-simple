"use client";

import proverReportPartImg from "@/assets/certora-prover-report-part.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraProverReportPart() {
  const navItems = [
    { label: "VSCode Plugin", href: "/projects/certora" },
    { label: "Prover report", href: "/projects/certora/prover-report", active: true },
    { label: "Prover dashboard", href: "/projects/certora/prover-dashboard" },
    { label: "Mutation testing", href: "/projects/certora/mutation-testing" },
  ];

  return (
    <ProjectLayout
      title="CERTORA"
      subtitle="Smart Contract Auditing using FV"
      navItems={navItems}
      backLink="/projects/certora/prover-report/result"
      nextLink={{ label: "Prover dashboard", href: "/projects/certora/prover-dashboard" }}
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530] rounded-2xl overflow-hidden">
          <ProjectImage
            src={proverReportPartImg}
            alt="Certora Prover Report Flowchart"
            expandable={false}
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">My</span>
        Part
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        I interviewed security researchers to define the POC, then used flowcharts and wireframes to redesign the legacy report into a dynamic, modern interface for all users.
      </p>
    </ProjectLayout>
  );
}
