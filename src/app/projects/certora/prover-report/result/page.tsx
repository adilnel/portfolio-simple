"use client";

import proverReportResultImg from "@/assets/certora-prover-report-result.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraProverReportResult() {
  const navItems = [
    { label: "VSCode Plugin", href: "/projects/certora" },
    { label: "Prover report", href: "/projects/certora/prover-report", active: true },
    { label: "Prover dashboard", href: "/projects/certora/prover-dashboard" },
    { label: "Mutation testing", href: "/projects/certora/mutation-testing" },
  ];

  return (
    <ProjectLayout
      title="CERTORA"
      navItems={navItems}
      backLink="/projects/certora/prover-report/problem"
      nextLink="/projects/certora/prover-report/part"
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530] rounded-2xl overflow-hidden">
          <ProjectImage
            src={proverReportResultImg}
            alt="Certora Prover Report Result"
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        RESULT
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        Solved the usability issues of the original report, we developed a user-centric interface that prioritizes clarity and flow. The new design replaces dense, jumping tables with a clean, dynamic page, ensuring that tracking progress and viewing results is a seamless and intuitive process.
      </p>
    </ProjectLayout>
  );
}
