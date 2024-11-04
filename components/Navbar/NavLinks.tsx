import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavLinksProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = ({ isOpen, setIsOpen }: NavLinksProps) => {
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        className={`bg-gray-600/[.40] md:bg-transparent border-t-white border-t-[1px] md:border-none flex flex-col md:flex-row md:justify-end md:items-center gap-5 w-screen h-screen md:h-[65px] fixed top-0 md:right-6 mt-[65px] md:m-0 pt-10 pl-8 md:p-0 transition-all ease-in-out duration-700 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"
        }`}
      >
        <Link
          href={"#tickets"}
          className="text-[28px] RobotoText font-semibold text-white"
          onClick={toggleOpen}
        >
          SIGN UP
        </Link>
        <Link
          href={"#faq"}
          className="text-[28px] RobotoText font-semibold text-white"
          onClick={toggleOpen}
        >
          FAQ
        </Link>
      </motion.div>
    </>
  );
};

export default NavLinks;
