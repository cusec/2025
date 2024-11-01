// dependencies
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TicketLinkProps {
  ticketType: string;
  href: string;
}

const TicketLink: React.FC<TicketLinkProps> = ({ href, ticketType }) => {
  // checks / sets ticket type; used to conditionally style different ticket types (mainly colors)
  const [tixType, setTixType] = useState("");
  useEffect(() => {
    if (ticketType === "standard") {
      setTixType("std");
    } else if (ticketType === "vip") {
      setTixType("vip");
    }
  }, [ticketType]);

  const whileHoverProps =
    tixType === "std"
      ? { backgroundColor: "#393880", scale: 1.05 }
      : { opacity: 0.85, scale: 1.05 };

  return (
    <motion.button
      className={`w-[115px] h-[28px] mb-1.5 flex justify-center items-center rounded-md disabled:opacity-75 disabled:pointer-events-none ${
        tixType == "std" ? "bg-[--dark-blue] buttonShadow" : "buttonGradient"
      }`}
      whileHover={whileHoverProps}
      whileTap={{ scale: 0.9 }}
    >
      <a
        href={href}
        className={`RobotoText font-extrabold text-sm ${
          tixType == "std" ? "textGradient" : "text-[--dark-blue]"
        }`}
        target="_blank"
      >
        BUY NOW
      </a>
    </motion.button>
  );
};

export default TicketLink;
