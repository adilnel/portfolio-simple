"use client";

import proverReportGoalImg from "@/assets/certora-prover-report-goal.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraProverReportGoal() {
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
      backLink="/projects/certora/part"
      nextLink="/projects/certora/prover-report/problem"
      rightContent={
        <div className="flex items-center justify-center w-full h-full">
          <div className="relative w-full max-w-[600px] aspect-[944/530] rounded-2xl overflow-hidden">
            <ProjectImage
              src={proverReportGoalImg}
              alt="Certora Prover Report"
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
        Transform the Certora <a href="https://prover.certora.com/output/3060/8f9bc651b2ef43829e8c729be4bcb345/?anonymousKey=e8915beca1e9c97a19825bc3bea01a1e1f18355b" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">Prover report</a> into a user-friendly interface that allows all users to effortlessly monitor progress and results without the clutter of legacy table
      </p>
    </ProjectLayout>
  );
}
