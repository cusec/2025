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
        className={`flex items-center justify-center flex-col h-screen`}
      >
        <div className="flex flex-row justify-center items-center h-[150px] w-full mx-auto gap-[14px]">
          {/* LEFT SIDE */}
          <div className="w-[44.5%] flex flex-row justify-end items-center flex-grow gap-1 px-5">
            <motion.div
              id="logo"
              {...fadeConfig(20, 0, 0, 0)}
              transition={transitionConfig(0)}
            >
              <motion.div
                initial={{ rotate: 0, x: 0 }}
                animate={{ rotate: 1080, x: "50%" }}
                transition={transitionConfig(1.05)}
              >
                <Image
                  className="bobbing-animation w-[75px] h-[75px] max-w-[250px] max-h-[250px]"
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
              transition={transitionConfig(0.1)}
            >
              <motion.div
                className="flex flex-col items-center"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: "50vw", opacity: 0 }}
                transition={transitionConfig(1)}
              >
                <h2 className="text-[40px] purpleText font-bold leading-[80%] bobbing-animation">
                  CUSEC
                </h2>
                <h2 className="text-[40px] darkBlueText font-bold leading-[80%] bobbing-animation">
                  2025
                </h2>
              </motion.div>
            </motion.div>
          </div>
          {/* MIDDLE DIVIDER */}
          <motion.div
            className="w-[1%] max-w-[2px] h-3/5"
            {...fadeConfig(0, -10, 0, 0)}
            transition={transitionConfig(0.2)}
          >
            <motion.div
              className="h-full w-full bg-white"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: "-50vw", opacity: 0 }}
              transition={transitionConfig(1.1)}
            ></motion.div>
          </motion.div>
          {/* RIGHT */}
          <motion.div
            className="w-[44.5%] flex flex-grow px-5"
            {...fadeConfig(0, 50, 0, 0)}
            transition={transitionConfig(0.3)}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: "50vw", opacity: 0 }}
              transition={transitionConfig(1.2)}
            >
              <p className="textFont text-base font-extrabold bobbing-animation">
                Canadian University Software Engineering Conference
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* LOADING ANIMATION */}
        <motion.div
          className={`absolute flex flex-row items-baseline justify-center h-auto gap-2`}
          {...fadeConfig(5, 10, 5, 0)}
          transition={transitionConfig(1.3)}
        >
          <p className="textFont text-4xl font-extrabold animate-bounce duration-1 ">
            Loading
          </p>
          <div className="flex justify-center items-center gap-3 font-bold mt-[10px]">
            <span className="block w-[0.5vh] h-[0.5vh] bg-[#494882] rounded-2xl bouncing-animation" />
            <span className="block w-[0.5vh] h-[0.5vh] bg-[#494882] rounded-2xl bouncing-animation delay-1" />
            <span className="block w-[0.5vh] h-[0.5vh] bg-[#494882] rounded-2xl bouncing-animation delay-2" />
          </div>
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}
