"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useNav } from "../../components/Navbar/NavContext";

// components
import Speakers from "@/components/Speakers/Speakers";
import SpeakersHero from "@/components/Speakers/SpeakerHero";
import LoadingElement from "@/components/LoadingElement";

export default function SpeakersPage() {
  const { isOpen } = useNav();

  return (
    <>
      <title>Speakers</title>
      <LoadingElement delay={0}>
        <main
          className={`flex flex-col overflow-x-hidden mainBackgroundGradient justify-center -mb-20 transition-opacity ease-in-out duration-700 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="h-auto flex mt-[291px] justify-center">
            <SpeakersHero />
          </div>
          <div className="wave-container mb-[60px] md:mb-0 lg:mb-10 xl:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#6C6BD1"
                fillOpacity="1"
                d="M0,120L80,135C160,150,320,180,480,165C640,150,800,90,960,100C1120,110,1280,190,1440,215C1600,240,1760,210,1920,200C2080,190,2240,200,2400,210C2560,220,2720,230,2880,195C3040,160,3200,80,3360,70C3520,60,3680,120,3840,155C4000,190,4160,200,4320,190C4480,180,4640,150,4800,145C4960,140,5120,160,5280,170C5440,180,5600,180,5760,160C5920,140,6080,100,6240,105C6400,110,6560,160,6720,185C6880,210,7040,210,7200,205C7360,200,7520,190,7680,190C7840,190,8000,200,8160,175C8320,150,8480,90,8640,100C8800,110,8960,190,9120,220C9280,250,9440,230,9600,225C9760,220,9920,230,10080,225C10240,220,10400,200,10560,175C10720,150,10880,120,11040,115C11200,110,11360,130,11440,140L11520,150L11520,300L11440,300C11360,300,11200,300,11040,300C10880,300,10720,300,10560,300C10400,300,10240,300,10080,300C9920,300,9760,300,9600,300C9440,300,9280,300,9120,300C8960,300,8800,300,8640,300C8480,300,8320,300,8160,300C8000,300,7840,300,7680,300C7520,300,7360,300,7200,300C7040,300,6880,300,6720,300C6560,300,6400,300,6240,300C6080,300,5920,300,5760,300C5600,300,5440,300,5280,300C5120,300,4960,300,4800,300C4640,300,4480,300,4320,300C4160,300,4000,300,3840,300C3680,300,3520,300,3360,300C3200,300,3040,300,2880,300C2720,300,2560,300,2400,300C2240,300,2080,300,1920,300C1760,300,1600,300,1440,300C1280,300,1120,300,960,300C800,300,640,300,480,300C320,300,160,300,80,300L0,300Z"
              ></path>
            </svg>
          </div>
        </main>
        <main className="flex flex-col overflow-x-hidden justify-center bg-gradient-to-b from-[#6C6BD1] via-[#6C6BD1] to-[#E0E0FF]">
          <div className="h-auto flex items-center justify-center my-[65px]">
            <Speakers />
          </div>
        </main>
      </LoadingElement>
    </>
  );
}
