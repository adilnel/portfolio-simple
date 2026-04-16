"use client";

import proverDashboardGoalImg from "@/assets/certora-prover-dashboard-goal.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraProverDashboardGoal() {
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
      backLink="/projects/certora/prover-report/part"
      nextLink="/projects/certora/prover-dashboard/problem"
      rightContent={
        <div className="flex items-center justify-center w-full h-full">
          <div className="relative w-full max-w-[600px] aspect-[944/530] rounded-2xl overflow-hidden">
            <ProjectImage
              src={proverDashboardGoalImg}
              alt="Certora Prover Dashboard Goal"
              priority
            />
          </div>
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">THE</span>
        GOAL
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        Create a centralized, intuitive dashboard to manage and monitor multiple Certora verification jobs. The goal was to replace fragmented command-line outputs with a unified visual interface that provides clear, real-time status updates for all active and historical runs.
      </p>
    </ProjectLayout>
  );
}
