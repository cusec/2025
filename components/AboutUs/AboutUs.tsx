// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import AnimateElement from "../AnimateElement";

// components
import InfoText from "./InfoText";
import OurObjectives from "./OurObjectives";
import Star from "../Star";

const AnimatedInfoText = AnimateElement(InfoText, 0);
const AnimatedOurObjectives = AnimateElement(OurObjectives, 0);

export default function AboutUs() {
  return (
    <motion.div className="z-10 h-auto w-full bg-[#494882] bg-opacity-35 pb-5">
      <AnimatedInfoText />
      <AnimatedOurObjectives />
    </motion.div>
  );
}
