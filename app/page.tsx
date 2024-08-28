"use client";

import { useState, useEffect } from "react";
import Splashpage from "@/components/Splashpage";
import Homepage from "@/components/Homepage";

export default function Home() {
  const [showSplash, setShowSplash] = useState(false);

  //
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
        {/* {showSplash ? ( */}
        <Splashpage onComplete={() => setShowSplash(false)} />
        {/* ) : (
          <Homepage />
        )} */}
      </main>
    </>
  );
}
