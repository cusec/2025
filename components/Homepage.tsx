"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 50,
  duration: 0.5,
  delay: delay,
});

export default function Homepage() {
  return (
    <>
      <motion.div className="flex flex-col items-center w-4/5 z-10 mt-[-150px]">
        <motion.div
          className="flex justify-center mb-[80px]"
          transition={transitionConfig()}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            className=" w-[90%] max-w-[325px]"
            src="/images/logo-text-main.svg"
            alt="2025 logo"
            width={1080}
            height={1080}
          />
        </motion.div>

        <motion.div
          id="text"
          transition={transitionConfig(0.1)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.h2
            className="text-center text-[14px] text-font"
            transition={transitionConfig(0.2)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            CANADIAN UNIVERSITY
          </motion.h2>
          <motion.h2
            className="text-center text-[14px] text-font"
            transition={transitionConfig(0.3)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            SOFTWARE ENGINEERING CONFERENCE
          </motion.h2>
          <motion.h1
            className="text-shadow text-center text-[40px] font-bold"
            transition={transitionConfig(0.4)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            EAST CANADA - JANUARY 2025
          </motion.h1>
        </motion.div>
        <motion.div
          className="flex justify-center mt-5"
          transition={transitionConfig(0.5)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <button className="w-[225px] h-[44px] bg-[#FEFEFE] text-font main-button">
            BUY TICKETS
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}
