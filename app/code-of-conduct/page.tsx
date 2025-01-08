"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useNav } from "../../components/Navbar/NavContext";

// components
import CodeOfConduct from "@/components/CodeOfConduct/CodeOfConduct";
import LoadingElement from "@/components/LoadingElement";

export default function codeOfConduct() {
  const { isOpen } = useNav();

  return (
    <>
      <title>Code of Conduct</title>
      <LoadingElement delay={0}>
        <main
          className={`mainGradientBackground flex flex-col overflow-x-hidden transition-opacity ease-in-out duration-700 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="h-auto flex items-center justify-center my-[65px]">
            <CodeOfConduct />
          </div>
        </main>
      </LoadingElement>
    </>
  );
}
