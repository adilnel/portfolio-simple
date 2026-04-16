"use client";

import goalImg from "@/assets/goal.png";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectImage from "@/components/ProjectImage";

export default function AutoCADGoal() {
  return (
    <ProjectLayout
      title="AutoCAD Mobile"
      subtitle="Mobile extension of the famous AutoCAD software, iOS native & Android native."
      backLink="/projects/certora/mutation-testing/part"
      nextLink="/projects/problem"
      rightContent={
        <div className="relative w-full max-w-[280px] md:max-w-[400px] aspect-[375/812] shadow-2xl rounded-[40px] overflow-hidden">
          <ProjectImage
            src={goalImg}
            alt="AutoCAD Mobile Interface"
            priority
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        goal
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        Digitalizing drafting / inspecting CAD files workflow, making the whole
        thing a lot more efficient.
      </p>
    </ProjectLayout>
  );
}
