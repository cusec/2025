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
    <motion.div className="z-10 h-auto w-full flex justify-center bg-[#FFFFFF] pt-[35px] md:pt-[70px] pb-[50px] md:pb-[100px]">
      <div
        className={`flex flex-col xl:gap-[70px] justify-center items-center w-full transition-opacity ease-in-out duration-700 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
        id="about"
      >
        <h1 className="purpleText text-7xl font-extrabold hidden lg:block">
          WHAT IS CUSEC?
        </h1>
        <div className="flex flex-col xl:flex-row md:gap-10 xl:gap-20 w-[90%] max-w-[900px] xl:max-w-[1232px]">
          <InfoText />
          <OurObjectives />
        </div>
      </div>
    </motion.div>
  );
}
