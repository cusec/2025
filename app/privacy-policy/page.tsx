"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useNav } from "../../components/Navbar/NavContext";

// components
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import LoadingElement from "@/components/LoadingElement";

export default function privacyPolicy() {
  const { isOpen } = useNav();

  return (
    <>
      <title>Privacy Policy</title>
      <LoadingElement delay={0}>
        <main
          className={`flex flex-col overflow-x-hidden min-h-screen justify-center transition-opacity ease-in-out duration-700 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="h-auto flex items-center justify-center my-[65px]">
            <PrivacyPolicy />
          </div>
        </main>
      </LoadingElement>
    </>
  );
}
