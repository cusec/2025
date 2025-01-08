"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useNav } from "../../components/Navbar/NavContext";

// components
import LoadingElement from "@/components/LoadingElement";
import TeamHero from "@/components/Team/TeamHero";
import Team from "@/components/Team/Team";

export default function TeamPage() {
  const { isOpen } = useNav();
  return (
    <>
      <title>The Team</title>
      <main
        className={`w-screen h-auto flex flex-col items-center justify-center mt-[291px] pt-8 transition-opacity ease-in-out duration-700 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* hero / header */}
        <LoadingElement delay={0}>
          <div className="relative z-10 w-screen flex flex-col items-center justify-center">
            <TeamHero></TeamHero>
          </div>
        </LoadingElement>

        {/* team section */}
        <LoadingElement delay={0.1}>
          <div className="relative z-0 left-0 w-full -mt-[400px] bg-[url('/images/wave-bg.svg')] bg-no-repeat bg-bottom bg-cover">
            <div className="h-[605px]"></div>
          </div>
          <div className="relative z-10 w-screen py-40 flex items-center justify-center bg-gradient-to-b from-[#6C6BD1] via-[#6C6BD1] to-[#E0E0FF]">
            <Team></Team>
          </div>
        </LoadingElement>
      </main>
    </>
  );
}
