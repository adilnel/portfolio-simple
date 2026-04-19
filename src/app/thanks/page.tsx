"use client";

import ProjectLayout from "@/components/ProjectLayout";
import ContactButton from "@/components/ContactButton";
import mailIcon from "@/assets/mail.svg";
import mobileIcon from "@/assets/mobile.svg";
import linkedinIcon from "@/assets/linkedin.svg";

export default function ThankYou() {
  return (
    <ProjectLayout
      title=""
      backLink="/brands"
      rightContent={null}
      hideRightPanel={true}
    >
      <div className="flex flex-col items-center text-center mx-auto max-w-5xl w-full">
        <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight mb-6">
          <span className="font-normal block">Thank</span>
          you ❤️
        </h1>
        <p className="text-xl opacity-50 mt-8 mb-4">
          Please be kind and dont share this document, thanks.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-16 items-start md:items-center justify-center w-full">
          <ContactButton
            href="mailto:adilnel@gmail.com"
            icon={mailIcon}
            label="adilnel@gmail.com"
          />
          
          <ContactButton
            href="tel:+972522526651"
            icon={mobileIcon}
            label="+972 52 252 66 51"
          />

          <ContactButton
            href="https://www.linkedin.com/in/avi-adlin-02547a30"
            icon={linkedinIcon}
            label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </ProjectLayout>
  );
}
