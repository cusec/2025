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
      className={`z-10 h-auto w-screen flex flex-col justify-center items-center transition-opacity ease-in-out duration-700 bg-[url('/images/wave-bg-main.svg')] bg-no-repeat bg-bottom bg-cover ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative w-full">
        <EventDetails />
      </div>
      {/* hero stats */}
      <div className="relative w-full flex flex-row gap-8 justify-center items-center py-8">
        <p className="BScreensText text-3xl text-white font-bold leading-none">
          23 Years
        </p>
        <p className="BScreensText text-3xl text-white font-bold leading-none">
          10,000+ Attendees
        </p>
        <p className="BScreensText text-3xl text-white font-bold leading-none">
          230+ Speakers
        </p>
        <p className="BScreensText text-3xl text-white font-bold leading-none">
          290+ Sponsors
        </p>
      </div>
    </motion.div>
  );
}
