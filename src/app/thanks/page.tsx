"use client";

import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";
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
      <div className="flex flex-col items-center text-center mx-auto max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight mb-6">
          <span className="font-normal block">Thank</span>
          you ❤️
        </h1>
        <p className="text-xl opacity-50 mt-8 mb-4">
          Please be kind and dont share this document, thanks.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 mt-12 items-center">
          <a
            href="mailto:adilnel@gmail.com"
            className="flex items-center space-x-3 text-xl md:text-2xl font-bold hover:underline whitespace-nowrap group"
          >
            <Image src={mailIcon} alt="Email" width={24} height={24} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            <span>adilnel@gmail.com</span>
          </a>
          <a
            href="tel:+972522526651"
            className="flex items-center space-x-3 text-xl md:text-2xl font-bold hover:underline whitespace-nowrap group"
          >
            <Image src={mobileIcon} alt="Phone" width={24} height={24} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            <span>+972 52 252 66 51</span>
          </a>
          <a
            href="https://www.linkedin.com/in/avi-adlin-02547a30"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-xl md:text-2xl font-bold hover:underline whitespace-nowrap group"
          >
            <Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </ProjectLayout>
  );
}
