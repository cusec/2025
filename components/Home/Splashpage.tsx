"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

// this determines the transition logic for all animations
const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 50,
  duration: 0.5,
  delay: delay,
});

// this determines the fade animations of content
const fadeConfig = (
  initialX = 0,
  initialY = 0,
  animateX = 0,
  animateY = 0
) => ({
  initial: { x: `${initialX}vw`, y: `${initialY}vw`, opacity: 0 },
  animate: {
    x: `${animateX}vw`,
    y: `${animateY}vw`,
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { duration: 1.5 },
  },
});

export default function Splashpage({ onComplete }: { onComplete: () => void }) {
  //removes splashpage loading from DOM after animation sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.main
        className={`flex items-center justify-center flex-col min-h-[calc(100vh+50px)]`}
      >
        <div className="w-full flex items-center justify-center">
          <motion.div
            id="logo"
            {...fadeConfig(10, 0, 0, 0)}
            transition={transitionConfig()}
          >
            <motion.div
              initial={{ rotate: 0, x: 0 }}
              animate={{ rotate: 1080, x: "35%" }}
              transition={transitionConfig(1)}
            >
              <Image
                className="bobbing-animation w-[30vw] h-[30vw] max-w-[250px] max-h-[250px]"
                src="/images/logo-main.svg"
                alt="2025 logo main"
                width={1080}
                height={1080}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            {...fadeConfig(0, 50, 0, 0)}
            transition={transitionConfig(0)}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: "50vw", opacity: 0 }}
              transition={transitionConfig(1)}
            >
              <h2 className="purple-text font-bold text-[13vw] md:text-[100px] bobbing-animation leading-[80%]">
                CUSEC
              </h2>
              <h2 className="light-purple-text font-bold text-[13vw] md:text-[100px] bobbing-animation leading-[80%]">
                2025
              </h2>
            </motion.div>
          </motion.div>
        </div>

        {/* LOADING ANIMATION */}
        <motion.div
          className={`flex flex-row items-baseline justify-center h-auto gap-0.5`}
          {...fadeConfig(0, 10, 0, 0)}
          transition={transitionConfig(1)}
        >
          <p className="text-font text-[7vw] md:text-[50px] text-[#6C6BD1] animate-bounce duration-1">
            loading
          </p>
          <div className="flex justify-center items-center gap-1 font-bold mt-[10px]">
            <span className="block w-[0.5vh] h-[0.5vh] bg-[#6C6BD1] rounded-2xl bouncing-animation" />
            <span className="block w-[0.5vh] h-[0.5vh] bg-[#6C6BD1] rounded-2xl bouncing-animation delay-1" />
            <span className="block w-[0.5vh] h-[0.5vh] bg-[#6C6BD1] rounded-2xl bouncing-animation delay-2" />
          </div>
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}
