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
      navItems={navItems}
      backLink="/projects/certora/mutation-testing/problem"
      nextLink="/projects/certora/mutation-testing/part"
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530]">
          <ProjectImage
            src={mutationTestingResultImg}
            alt="Certora Mutation Testing Result"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">THE</span>
        RESULT
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        The new user-friendly UI for the Certora Prover report features a 
        dynamic interface that replaces the outdated table layout. This design 
        enables non-technical users to easily track the progress of the 
        CertoraRun command and view results on a clear HTML page.
      </p>
    </ProjectLayout>
  );
}
