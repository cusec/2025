"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import LoadingElement from "@/components/LoadingElement";
import TeamHero from "@/components/Team/TeamHero";
import Team from "@/components/Team/Team";
import HeadDelegates from "@/components/Team/HeadDelegates";

export default function TeamPage() {
  return (
    <>
      <title>The Team</title>
      <main className="w-screen h-auto flex flex-col items-center justify-center mt-[65px] py-8">
        {/* hero / header */}
        <LoadingElement delay={0}>
          <div className="w-screen flex flex-col items-center justify-center">
            <TeamHero></TeamHero>
          </div>
        </LoadingElement>

        {/* team section */}
        <LoadingElement delay={0.1}>
          <div className="w-screen grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 items-center justify-center">
            <Team></Team>
          </div>
        </LoadingElement>

        {/* head delegates section */}
        <LoadingElement delay={0.2}>
          <div className="w-screen grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 items-center justify-center">
            <HeadDelegates></HeadDelegates>
          </div>
        </LoadingElement>
      </main>
    </>
  );
}
