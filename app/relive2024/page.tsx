"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import Relive2024 from "@/components/ReExperienceCUSEC/SeeMore/Relive";
import LoadingElement from "@/components/LoadingElement";

export default function ReliveCUSEC2024() {
  return (
    <>
      <title>Relive CUSEC 2024</title>
      <LoadingElement delay={0}>
        <main className="flex flex-col overflow-x-hidden min-h-screen justify-center">
          <div className="h-auto flex items-center justify-center my-[65px]">
            <Relive2024 />
          </div>
        </main>
      </LoadingElement>
    </>
  );
}
