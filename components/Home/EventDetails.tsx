// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useTime, useTransform } from "framer-motion";
import Link from "next/link";

// components
import EmailLink from "./EmailLink";

export default function EventDetails() {
  const time = useTime();

  // defines time and rotation of tix button
  const rotate = useTransform(time, [0, 2000], [0, 360], {
    clamp: false,
  });

  // defines bg-gradient of tix button, uses rotate logic
  const rotatingBg = useTransform(rotate, (r) => {
    return `linear-gradient(${r}deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0))`;
  });

  return (
    // cloud image is implemented as a bg image (opacity is managed in svg file itself)
    <div className="w-[85%] md:w-[90%] max-w-[900px] h-auto mx-auto py-[25px] content-container flex flex-col justify-center items-center gap-2 bg-[url('/images/cloud.svg')] bg-no-repeat bg-left-top">
      {/* event details */}
      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="purpleText text-[40px] font-extrabold">MONTREAL, QC</h3>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center md:gap-2 items-center">
          <h3 className="purpleText text-[40px] font-extrabold -mt-4">
            JANUARY 9-10-11 2025
          </h3>
          <h3 className="text-[40px] font-extrabold -mb-3 purpleText hidden md:block -mt-8">
            ·
          </h3>
          <h3 className="purpleText text-[40px] font-extrabold -mt-4">
            LE CENTRE SHERATON
          </h3>
        </div>
      </div>

      {/* TICKETS button */}
      <motion.div className="relative mb-[30px]">
        <motion.a
          className="w-[225px] md:w-[315px] h-[55px] md:h-[62px] textFont text-xl buttonGradient flex justify-center items-center rounded-xl z-10 disabled:opacity-75"
          whileHover={{ backgroundColor: "#5250d4", scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          href="#tickets"
        >
          BUY TICKETS
        </motion.a>
        <motion.div
          className="absolute -inset-2 rounded-xl -z-10 blur-[3px]"
          style={{
            background: rotatingBg,
          }}
        />
      </motion.div>

      {/* email buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        <EmailLink href="mailto:sponsor@cusec.net" text="BECOME A SPONSOR" />
        <EmailLink href="mailto:talks@cusec.net" text="BECOME A SPEAKER" />
      </div>
    </div>
  );
}
