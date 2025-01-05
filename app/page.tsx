"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import LoadingSection from "@/components/LoadingElement";
import Splashpage from "@/components/Home/Splashpage";
import Main from "@/components/Home/Main";
import AboutUs from "@/components/AboutUs/AboutUs";
import Tickets from "@/components/Tickets/Tickets";
import ReExperienceCUSEC from "@/components/ReExperienceCUSEC/ReExperienceCUSEC";
import FAQ from "@/components/FAQ/FAQ";
import Sponsor from "@/components/Sponsors/Sponsors";

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
      <main className="flex flex-col overflow-x-hidden">
        {showSplash ? (
          <Splashpage onComplete={() => setShowSplash(false)} />
        ) : (
          <>
            <div className="h-auto flex items-center justify-center mt-[191px]">
              <LoadingSection delay={0}>
                <Main />
              </LoadingSection>
            </div>
            <LoadingSection delay={0.1}>
              <AboutUs />
            </LoadingSection>
            <LoadingSection delay={0.2}>
              <Sponsor />
            </LoadingSection>
            <LoadingSection delay={0.2}>
              <Tickets />
            </LoadingSection>
            <LoadingSection delay={0.3}>
              <ReExperienceCUSEC />
            </LoadingSection>
            <FAQ />
          </>
        )}
      </main>
    </>
  );
}
