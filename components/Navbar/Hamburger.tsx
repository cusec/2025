import React, { useState } from "react";
import { motion } from "framer-motion";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger = ({ isOpen, setIsOpen }: HamburgerProps) => {
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div className="z-50 md:hidden">
      <motion.svg
        className="w-[55px]"
        viewBox="0 0 100 100"
        onClick={toggleOpen}
        animate={isOpen ? { rotate: -45 } : { rotate: 0 }}
        transition={{ duration: 0.4 }}
      >
        <defs>
          <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8C3FF" />
            <stop offset="100%" stopColor="#B8EEF4" />
          </linearGradient>
        </defs>
        <motion.path
          className="[stroke-dasharray:40,121]"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          fill="none"
          stroke="url(#buttonGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          animate={isOpen ? { strokeDashoffset: -68 } : { strokeDashoffset: 0 }}
          transition={{ duration: 0.4 }}
        />
        <motion.path
          d="m 70,50 h -32 c 0,0 -3.5,0.1 -8.5,0 "
          fill="none"
          stroke="url(#buttonGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          animate={isOpen ? { scaleX: 0 } : { scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.path
          className="[stroke-dasharray:40,121]"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          fill="none"
          stroke="url(#buttonGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          animate={isOpen ? { strokeDashoffset: -68 } : { strokeDashoffset: 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Hamburger;
