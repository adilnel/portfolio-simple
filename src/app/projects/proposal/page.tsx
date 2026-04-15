import Image from "next/image";
import proposalImg from "@/assets/proposal.png";
import ProjectLayout from "@/components/ProjectLayout";

export default function AutoCADProposal() {
  return (
    <ProjectLayout
      title="AutoCAD Mobile"
      subtitle="Mobile extension of the famous AutoCAD software, iOS native & Android native."
      backLink="/projects/problem"
      nextLink={{ label: "DELEK", href: "/projects/delek" }}
      rightContent={
        <div className="relative w-full max-w-[400px] aspect-[375/812] shadow-2xl rounded-[40px] overflow-hidden">
          <Image
            src={proposalImg}
            alt="AutoCAD Mobile Proposal Interface"
            fill
            className="object-cover"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
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
