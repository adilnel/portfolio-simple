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
        <div className="relative w-full max-w-[800px] aspect-[944/530]">
          <ProjectImage
            src={mutationTestingPartImg}
            alt="Certora Mutation Testing Flowchart"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">

        <span className="font-normal block">My</span>
        Part
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        In my role, I researched and interviewed security researchers using the 
        Certora Prover tool, which helped me plan the proof of concept. I created 
        flow charts and wireframes, ultimately leading to the redesign of the 
        report. The new user-friendly UI features a dynamic interface that 
        replaces the outdated table layout, allowing also non-technical users to 
        easily track the CertoraRun command&apos;s progress and view results with up 
        to date user experience.
      </p>
    </ProjectLayout>
  );
}
