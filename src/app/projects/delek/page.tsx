import Image from "next/image";
import delekGoalImg from "@/assets/delek-goal.png";
import ProjectLayout from "@/components/ProjectLayout";

export default function DelekGoal() {
  return (
    <ProjectLayout
      title="DELEK APP"
      subtitle="Convenience Store Upscale<br/>iOS & Android"
      backLink="/projects/proposal"
      nextLink="/projects/delek/problem"
      rightContent={
        <div className="relative w-full max-w-[280px] md:max-w-[400px] aspect-[375/812] shadow-2xl rounded-[40px] overflow-hidden">
          <Image
            src={delekGoalImg}
            alt="Delek App Interface"
            fill
            className="object-cover"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        goal
      </h1>
      <div className="text-xl opacity-80 max-w-lg leading-relaxed space-y-4">
        <p>
          Besides encouraging an upsale store marketing as the main
          Delek&apos;s target, the goal was making a necessary digital
          transformation for one of the top leading fuel firms in Israel,
          within a short period of time.
        </p>
        <p>
          As the Competitors have already adapted and proficient in the
          digital scene, our goal was to raise Delek above water and make a
          stamp.
        </p>
      </div>
    </ProjectLayout>
  );
}
