"use client";

import proverDashboardResultImg from "@/assets/certora-prover-dashboard-result.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraProverDashboardResult() {
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
      backLink="/projects/certora/prover-dashboard/problem"
      nextLink="/projects/certora/prover-dashboard/part"
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530] rounded-2xl overflow-hidden">
          <ProjectImage
            src={proverDashboardResultImg}
            alt="Certora Prover Dashboard Result"
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        RESULT
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        A comprehensive Prover Dashboard that centralizes job tracking. The dynamic UI replaces static tables, allowing users to monitor multiple runs simultaneously and access detailed results through a stable, user-friendly interface.
      </p>
    </ProjectLayout>
  );
}
