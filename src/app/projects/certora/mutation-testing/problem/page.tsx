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
        The issue lies in the Certora Prover report interface. When executing 
        certoraRun from the CLI, results are displayed as a URL, making it 
        difficult for users to track all their submitted jobs in one convenient 
        location. A more user-friendly dynamic interface is needed to replace 
        the outdated table layout, enabling non-technical users to easily monitor 
        the progress and outcomes of their CertoraRun commands on a clear HTML page.
      </p>
    </ProjectLayout>
  );
}
