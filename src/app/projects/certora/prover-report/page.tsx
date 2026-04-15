import Image from "next/image";
import proverReportGoalImg from "@/assets/certora-prover-report-goal.png";
import ProjectLayout from "@/components/ProjectLayout";

export default function CertoraProverReportGoal() {
  const navItems = [
    { label: "VSCode Plugin", href: "/projects/certora" },
    { label: "Prover report", href: "/projects/certora/prover-report", active: true },
    { label: "Prover dashboard", href: "#" },
    { label: "Mutation testing", href: "#" },
  ];

  return (
    <ProjectLayout
      title="CERTORA"
      navItems={navItems}
      backLink="/projects/certora/part"
      nextLink="/projects"
      rightContent={
        <div className="relative w-full max-w-[600px] aspect-[944/530]">
          <Image
            src={proverReportGoalImg}
            alt="Certora Prover Report"
            fill
            className="object-contain"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">THE</span>
        GOAL
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        Building user-friendly UI for the Certora Prover report. 
        The revamped dynamic interface should replace the old table layout, 
        allowing non-technical users to effortlessly monitor the CertoraRun 
        command&apos;s progress and view results on a straightforward HTML page.
      </p>
    </ProjectLayout>
  );
}
