"use client";

import ProjectLayout from "@/components/ProjectLayout";

export default function ThankYou() {
  return (
    <ProjectLayout
      title=""
      backLink="/brands"
      rightContent={null}
      hideRightPanel={true}
    >
      <div className="flex flex-col items-center justify-center h-full text-center mx-auto max-w-2xl">
        <h1 className="text-7xl md:text-[88px] font-bold uppercase leading-tight mb-6">
          <span className="font-normal block">Thank</span>
          you ❤️
        </h1>
        <p className="text-xl opacity-50 mt-8">
          Please be kind and dont share this document, thanks.
        </p>
      </div>
    </ProjectLayout>
  );
}
