// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import EmailLink from "./EmailLink";

export default function EventDetails() {
  return (
    // cloud image is implemented as a bg image (opacity is managed in svg file itself)
    <div className="w-[85%] h-auto mx-auto py-[25px] container flex flex-col justify-center items-center gap-2 bg-[url('/images/cloud.svg')] bg-no-repeat bg-left-top">
      <h3 className="purpleText text-[40px] font-extrabold">MONTREAL, QC</h3>
      <h3 className="purpleText text-[40px] font-extrabold">
        January 9-10-11 2025
      </h3>
      {/* TICKETS button */}
      <div className="w-[225px] h-[55px] textFont text-xl buttonGradient flex justify-center items-center rounded-xl mb-[30px]">
        <a href="">BUY TICKETS</a>
      </div>
      {/* email buttons */}
      <EmailLink href="mailto:sponsor@cusec.net" text="BECOME A SPONSOR" />
      <EmailLink href="mailto:talks@cusec.net" text="BECOME A SPEAKER" />
    </div>
  );
}
