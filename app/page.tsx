"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Splashpage from "@/components/Splashpage";
import Homepage from "@/components/Homepage";

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
        className={`${"mainGradientBackground"} flex items-center justify-center flex-col min-h-[calc(100vh+50px)]`}
      >
        {/* only show map after splash animation */}
        {showSplash ? null : (
          <motion.div
            className="flex items-center justify-center fixed z-0 inset-0 mx-auto top-[115px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Image
              className="w-[95%] max-w-[400px]"
              src="/images/canada-map.svg"
              alt="canada map"
              width={1080}
              height={1080}
            />
          </motion.div>
        )}

        {/* only show main page after splash animation */}
        {showSplash ? (
          <Splashpage onComplete={() => setShowSplash(false)} />
        ) : (
          <Homepage />
        )}
      </main>
    </>
  );
}
