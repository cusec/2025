// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// components
import PricingPlans from "./PricingPlans";
import AnimateElement from "../AnimateElement";

const AnimatedPricingPlans = AnimateElement(PricingPlans, 0);

export default function Tickets() {
  return (
    <motion.div id="tickets" className="z-10 h-auto w-screen py-[45px]">
      <AnimatedPricingPlans />
    </motion.div>
  );
}
