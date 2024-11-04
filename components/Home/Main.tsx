// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useNav } from "../Navbar/NavContext";

// components
import Header from "./Header";
import EventDetails from "./EventDetails";
import Star from "../Star";
import Footer from "../Footer";

export default function Main() {
  const { isOpen, setIsOpen } = useNav();

  return (
    <motion.div
      className={`z-10 h-auto w-screen transition-opacity ease-in-out duration-700 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    >
      <Header />
      <Star />
      <EventDetails />
      <Star />
    </motion.div>
  );
}
