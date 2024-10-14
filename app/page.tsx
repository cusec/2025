"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import Splashpage from "@/components/Home/Splashpage";
import Main from "@/components/Home/Main";

export default function Home() {
  const [showSplash, setShowSplash] = useState(false);

  // checks if we need to show splashpage (only shows on intial load)
  useEffect(() => {
    const splashShown = sessionStorage.getItem("splashShown");
    if (!splashShown) {
      setShowSplash(true);
      sessionStorage.setItem("splashShown", "true");
    }
  }, []);

  return (
    <>
      <title>CUSEC 2025</title>
      <main
        className={`${"mainGradientBackground"} flex items-center justify-center flex-col h-[100vh] pt-[65px]`}
      >
        {showSplash ? (
          <Splashpage onComplete={() => setShowSplash(false)} />
        ) : (
          <Main />
        )}
      </main>
    </>
  );
}
