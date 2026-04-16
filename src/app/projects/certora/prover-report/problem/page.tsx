"use client";

import proverReportProblemImg from "@/assets/certora-prover-report-problem.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraProverReportProblem() {
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
      backLink="/projects/certora/prover-report"
      nextLink="/projects/certora/prover-report/result"
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530]">
          <ProjectImage
            src={proverReportProblemImg}
            alt="Certora Prover Report Problem"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        Problem
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        Building user-friendly UI for the Certora Prover report. 
        The revamped dynamic interface should replace the old table layout, 
        allowing non-technical users to effortlessly monitor the CertoraRun 
        command&apos;s progress and view results on a straightforward HTML page.
      </p>
    </ProjectLayout>
  );
}
