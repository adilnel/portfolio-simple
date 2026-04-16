"use client";

import certoraGoalImg from "@/assets/certora-goal.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraGoal() {
  const navItems = [
    { label: "VSCode Plugin", href: "/projects/certora", active: true },
    { label: "Prover report", href: "/projects/certora/prover-report" },
    { label: "Prover dashboard", href: "/projects/certora/prover-dashboard" },
    { label: "Mutation testing", href: "/projects/certora/mutation-testing" },
  ];

  return (
    <ProjectLayout
      title="CERTORA"
      subtitle="Smart Contract Auditing using FV"
      navItems={navItems}
      backLink="/"
      nextLink="/projects/certora/problem"
      rightContent={
        <div className="flex items-center justify-center w-full h-full">
          <div className="relative w-full max-w-[600px] aspect-[944/530] rounded-2xl overflow-hidden">
            <ProjectImage
              src={certoraGoalImg}
              alt="Certora + VSCode"
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
        To develop a user-friendly VSCode plugin, started by <a href="https://evilmartians.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">Evil Martians studio</a>, 
        that activates Certora Prover run and tracks its progress. I was aimed 
        to create an intuitive interface to empower non-technical users to effectively 
        utilize the Prover.
      </p>
    </ProjectLayout>
  );
}
