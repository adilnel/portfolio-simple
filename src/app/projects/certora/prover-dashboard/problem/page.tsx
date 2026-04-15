import Image from "next/image";
import proverDashboardProblemImg from "@/assets/certora-prover-dashboard-problem.png";
import ProjectLayout from "@/components/ProjectLayout";

export default function CertoraProverDashboardProblem() {
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
      backLink="/projects/certora/prover-dashboard"
      nextLink="/projects/certora/prover-dashboard/result"
      rightContent={
        <div className="relative w-full max-w-[800px] aspect-[944/530]">
          <Image
            src={proverDashboardProblemImg}
            alt="Certora Prover Dashboard Problem"
            fill
            className="object-contain"
          />
        </div>
      }
    >
      <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        Problem
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        The issue lies in the Certora Prover report interface. When executing 
        certoraRun from the CLI, results are displayed as a URL, making it 
        difficult for users to track all their submitted jobs in one convenient 
        location. A more user-friendly dynamic interface is needed to replace 
        the outdated table layout, enabling non-technical users to easily monitor 
        the progress and outcomes of their CertoraRun commands on a clear HTML page.
      </p>
    </ProjectLayout>
  );
}
