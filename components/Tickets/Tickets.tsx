import { motion } from "framer-motion";
import { useNav } from "../Navbar/NavContext";

// components
import PricingPlans from "./PricingPlans";

export default function Tickets() {
  const { isOpen } = useNav();

  return (
    <motion.div
      id="tickets"
      className={`z-10 h-auto w-screen py-[45px] transition-opacity ease-in-out duration-700 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundColor: "#FFFFFF", 
      }}
    >
      <PricingPlans />
    </motion.div>
  );
}
