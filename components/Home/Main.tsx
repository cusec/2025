import { motion } from "framer-motion";
import { useNav } from "../Navbar/NavContext";

// components
import Header from "./Header";
import EventDetails from "./EventDetails";
import FloatingCircles from "./FloatingCircles";
import Star from "../Star";

export default function Main() {
  const { isOpen } = useNav();

  return (
    <motion.div
      className={`z-10 h-auto w-screen transition-opacity ease-in-out duration-700 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* <Header /> */}
      <Star />
      <div className="relative">
        <FloatingCircles />
        <EventDetails />
      </div>
      <Star />
    </motion.div>
  );
}
