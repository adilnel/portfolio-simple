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
        <div className="relative w-full max-w-[600px] aspect-[944/530]">
          <ProjectImage
            src={proverDashboardGoalImg}
            alt="Certora Prover Dashboard Goal"
            priority
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">THE</span>
        GOAL
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
