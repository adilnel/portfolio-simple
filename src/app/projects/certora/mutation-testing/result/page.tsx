"use client";

import mutationTestingResultImg from "@/assets/certora-mutation-testing-result.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraMutationTestingResult() {
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
      backLink="/projects/certora/mutation-testing/problem"
      nextLink="/projects/certora/mutation-testing/part"
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530] rounded-2xl overflow-hidden">
          <ProjectImage
            src={mutationTestingResultImg}
            alt="Certora Mutation Testing Result"
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">THE</span>
        RESULT
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        A streamlined mutation testing dashboard that visualizes Gambit results in real-time. The interface highlights &quot;killed&quot; vs. &quot;survived&quot; mutants, enabling developers to quickly pinpoint gaps in their specs and improve the overall security coverage of their smart contracts.
      </p>
    </ProjectLayout>
  );
}
