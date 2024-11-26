// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useNav } from "../Navbar/NavContext";

// components
import InfoText from "./InfoText";
import OurObjectives from "./OurObjectives";

export default function AboutUs() {
  const { isOpen, setIsOpen } = useNav();

  return (
    <motion.div className="z-10 h-auto w-full bg-[#FFFFFF] pt-[35px] pb-[50px]">
      <div
        className={`transition-opacity ease-in-out duration-700 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
        id="about"
      >
        <InfoText />
        <OurObjectives />
      </div>
    </motion.div>
  );
}
