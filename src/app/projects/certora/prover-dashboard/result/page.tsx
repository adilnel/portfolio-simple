"use client";

import proverDashboardResultImg from "@/assets/certora-prover-dashboard-result.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function CertoraProverDashboardResult() {
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
      backLink="/projects/certora/prover-dashboard/problem"
      nextLink="/projects/certora/prover-dashboard/part"
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530]">
          <ProjectImage
            src={proverDashboardResultImg}
            alt="Certora Prover Dashboard Result"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
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
