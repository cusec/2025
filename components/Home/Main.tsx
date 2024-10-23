// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import AnimateElement from "../AnimateElement";

// components
import Header from "./Header";
import EventDetails from "./EventDetails";
import Star from "../Star";

const AnimatedHeader = AnimateElement(Header, 0);
const AnimatedEventDetails = AnimateElement(EventDetails, 0);
const AnimatedStar = AnimateElement(Star, 0);

export default function Main() {
  return (
    <motion.div className="z-10 h-auto w-screen">
      <AnimatedHeader />
      <AnimatedStar />
      <AnimatedEventDetails />
      <AnimatedStar />
    </motion.div>
  );
}
