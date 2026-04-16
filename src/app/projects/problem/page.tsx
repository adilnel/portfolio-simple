"use client";

import problemImg from "@/assets/problem.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function AutoCADProblem() {
  return (
    <ProjectLayout
      title="AutoCAD Mobile"
      subtitle="Mobile extension of the famous AutoCAD software, iOS native & Android native."
      backLink="/projects"
      nextLink="/projects/proposal"
      rightContent={
        <div className="relative w-full max-w-[280px] md:max-w-[400px] aspect-[375/812] shadow-2xl rounded-[40px] overflow-hidden">
          <ProjectImage
            src={problemImg}
            alt="AutoCAD Mobile Problem Interface"
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        Problem
      </h1>
      <div className="text-xl opacity-80 max-w-lg leading-relaxed space-y-4">
        <p>
          Traditional drafting / inspection workflow includes at first drafting
          on a desktop machine, than printing a plot on paper and sending it for
          inspection on the physical construction site for review and markup.
        </p>
        <p>
          When it&apos;s done the drafter needs to update the markup in the CAD
          file manually from a desktop machine.
        </p>
        <p className="font-bold">
          The whole process can take days and in some cases even weeks.
        </p>
      </div>
    </ProjectLayout>
  );
}
