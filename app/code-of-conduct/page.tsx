"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import CodeOfConduct from "@/components/CodeOfConduct/CodeOfConduct";

export default function codeOfConduct() {
  return (
    <>
      <title>Code of Conduct</title>
      <main className="mainGradientBackground flex flex-col overflow-x-hidden">
        <div className="h-auto flex items-center justify-center my-[65px]">
          <CodeOfConduct />
        </div>
      </main>
    </>
  );
}
