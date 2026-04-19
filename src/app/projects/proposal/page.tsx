"use client";

import proposalImg from "@/assets/proposal.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function AutoCADProposal() {
  return (
    <ProjectLayout
      title="AutoCAD Mobile"
      subtitle="Mobile extension of the famous AutoCAD software, iOS native & Android native."
      backLink="/projects/problem"
      nextLink={{ label: "DELEK", href: "/projects/delek" }}
      rightContent={
        <div className="relative w-fit max-w-[280px] md:max-w-[400px] max-h-[85vh] shadow-2xl rounded-[30px] md:rounded-[40px] overflow-hidden">
          <ProjectImage
            src={proposalImg}
            alt="AutoCAD Mobile Proposal Interface"
            fill={false}
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">My</span>
        Proposal
      </h1>
      <div className="text-xl opacity-80 max-w-lg leading-relaxed space-y-4">
        <p>
          Taking photos of annotations and markup using a mobile device right on
          the construction site. Than using ML for smart recognition to identify
          markup and updating the CAD file automatically with minimum friction
          needed from the user.
        </p>
      </div>
    </ProjectLayout>
  );
}
