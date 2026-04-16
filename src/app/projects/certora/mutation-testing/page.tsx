"use client";

import gambitLogo from "@/assets/certora-gambit-logo.svg";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraMutationTestingGoal() {
  const navItems = [
    { label: "VSCode Plugin", href: "/projects/certora" },
    { label: "Prover report", href: "/projects/certora/prover-report" },
    { label: "Prover dashboard", href: "/projects/certora/prover-dashboard" },
    { label: "Mutation testing", href: "/projects/certora/mutation-testing", active: true },
  ];

  return (
    <ProjectLayout
      title="CERTORA"
      subtitle="Smart Contract Auditing using FV"
      navItems={navItems}
      backLink="/projects/certora/prover-dashboard/part"
      nextLink="/projects/certora/mutation-testing/problem"
      rightContent={
        <div className="flex items-center justify-center w-full h-full">
          <div className="relative w-full max-w-[480px] aspect-[944/530]">
            <ProjectImage
              src={gambitLogo}
              alt="Certora Mutation Testing - Gambit"
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
        Integrate Gambit mutation testing into the Certora ecosystem by creating a <a href="https://www.certora.com/gambit" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">visual interface</a> &nbsp;that allows developers to measure the effectiveness of their verification specs. The goal was to provide a clear way to see if mutants are &quot;caught&quot; or &quot;survived,&quot; helping users strengthen their formal verification suites.
      </p>
    </ProjectLayout>
  );
}
