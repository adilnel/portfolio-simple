"use client";

import proverDashboardProblemImg from "@/assets/certora-prover-dashboard-problem.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraProverDashboardProblem() {
  const navItems = [
    { label: "VSCode Plugin", href: "/projects/certora" },
    { label: "Prover report", href: "/projects/certora/prover-report" },
    { label: "Prover dashboard", href: "/projects/certora/prover-dashboard", active: true },
    { label: "Mutation testing", href: "/projects/certora/mutation-testing" },
  ];

  return (
    <ProjectLayout
      title="CERTORA"
      navItems={navItems}
      backLink="/projects/certora/prover-dashboard"
      nextLink="/projects/certora/prover-dashboard/result"
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530] rounded-2xl overflow-hidden">
          <ProjectImage
            src={proverDashboardProblemImg}
            alt="Certora Prover Dashboard Problem"
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        Problem
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        Tracking multiple verification jobs was inefficient, as each command-line execution generated an isolated URL. Without a centralized view, users struggled to monitor concurrent tasks or manage their job history in one convenient location.
      </p>
    </ProjectLayout>
  );
}
