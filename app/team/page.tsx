"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import LoadingElement from "@/components/LoadingElement";
import Team from "@/components/MeetTheTeam/Team";
import HeadDelegates from "@/components/MeetTheTeam/HeadDelegates";

export default function team() {
  return (
    <>
      <title>Meet the Team</title>
      <main className="h-auto flex items-center justify-center mt-[65px]">
        {/* hero / header */}
        <LoadingElement delay={0}>
          <div></div>
        </LoadingElement>

        {/* team section */}
        <LoadingElement delay={0.1}>
          <Team></Team>
        </LoadingElement>

        {/* head delegates section */}
        <LoadingElement delay={0.2}>
          <HeadDelegates></HeadDelegates>
        </LoadingElement>
      </main>
    </>
  );
}
