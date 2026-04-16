"use client";

import mutationTestingPartImg from "@/assets/certora-mutation-testing-part.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraMutationTestingPart() {
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
      backLink="/projects/certora/mutation-testing/result"
      nextLink={{ label: "AUTOCAD", href: "/projects" }}
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530] rounded-2xl overflow-hidden">
          <ProjectImage
            src={mutationTestingPartImg}
            alt="Certora Mutation Testing Flowchart"
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">

        <span className="font-normal block">My</span>
        Part
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        I led the UX process by interviewing security researchers to understand how they evaluate spec quality. I mapped the mutation flow, designed the UI for clear result visualization, and managed the handoff to ensure the complex data remained accessible and actionable for all users.
      </p>
    </ProjectLayout>
  );
}
