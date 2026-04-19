"use client";

import ProjectLayout from "@/components/ProjectLayout";
import ImageCarousel from "@/components/ImageCarousel";

// Import carousel images
import baseResult from "@/assets/certora-prover-dashboard-result.png";
import frame1 from "@/assets/prover-dashboard-carousel-1.png";
import usersImg from "@/assets/dashboard-users.png";
import userAddImg from "@/assets/dashboard-userAdd.png";
import userEditImg from "@/assets/dashboard-userEdit.png";
import userImg from "@/assets/dashboard-user.png";

export default function CertoraProverDashboardResult() {
  const navItems = [
    { label: "VSCode Plugin", href: "/projects/certora" },
    { label: "Prover report", href: "/projects/certora/prover-report" },
    { label: "Prover dashboard", href: "/projects/certora/prover-dashboard", active: true },
    { label: "Mutation testing", href: "/projects/certora/mutation-testing" },
  ];

  // The animation frames as requested in order
  const frames = [
    baseResult, 
    frame1, 
    usersImg, 
    userAddImg, 
    userEditImg, 
    userEditImg, 
    userImg
  ];

  return (
    <ProjectLayout
      title="CERTORA"
      subtitle="Smart Contract Auditing using FV"
      navItems={navItems}
      backLink="/projects/certora/prover-dashboard/problem"
      nextLink="/projects/certora/prover-dashboard/part"
      rightContent={
        <div className="relative w-fit max-w-[800px] rounded-2xl overflow-hidden">
          <ImageCarousel 
            images={frames} 
            alt="Prover dashboard result screens" 
            interval={2000}
            fill={false}
          />
        </div>
      }
    >
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
        <span className="font-normal block">The</span>
        RESULT
      </h1>
      <p className="text-xl opacity-80 max-w-lg leading-relaxed">
        A comprehensive Prover Dashboard that centralizes job tracking. The dynamic UI replaces static tables, allowing users to monitor multiple runs simultaneously and access detailed results through a stable, user-friendly interface.
      </p>
    </ProjectLayout>
  );
}