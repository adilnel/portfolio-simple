"use client";

import mutationTestingProblemImg from "@/assets/certora-mutation-testing-problem.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraMutationTestingProblem() {
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
      backLink="/projects/certora/mutation-testing"
      nextLink="/projects/certora/mutation-testing/result"
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530] rounded-2xl overflow-hidden">
          <ProjectImage
            src={mutationTestingProblemImg}
            alt="Certora Mutation Testing Problem"
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">THE</span>
        PROBLEM
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        Mutation testing is a complex process that originally relied on fragmented CLI outputs, making it difficult for users to track which code variations were successfully caught by their rules. Without a clear visual summary, identifying weak spots in formal specifications was a manual and error-prone task.
      </p>
    </ProjectLayout>
  );
}
