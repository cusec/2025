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
      {/* mobile nav */}
      <motion.div
        className={`bg-gray-600/[.40] border-t-white border-t-[1px] flex flex-col gap-5 w-screen h-screen fixed top-0 mt-[185px] pt-10 pl-8 transition-all ease-in-out duration-700 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <Link
          href={"/#tickets"}
          className="text-lg RobotoText font-semibold text-white"
          onClick={toggleOpen}
        >
          ATTEND THE CONFERENCE
        </Link>
        <Link
          href={"/schedule"}
          className="text-lg RobotoText font-semibold text-white"
          onClick={toggleOpen}
        >
          SCHEDULE
        </Link>
        <Link
          href={"/#sponsors"}
          className="text-lg RobotoText font-semibold text-white"
          onClick={toggleOpen}
        >
          SPONSORS
        </Link>
        <Link
          href={"/speakers"}
          className="text-lg RobotoText font-semibold text-white"
          onClick={toggleOpen}
        >
          SPEAKERS
        </Link>
        <Link
          href={"/team"}
          className="text-lg RobotoText font-semibold text-white"
          onClick={toggleOpen}
        >
          THE TEAM
        </Link>
        <Link
          href={"/#about"}
          className="text-lg RobotoText font-semibold text-white"
          onClick={toggleOpen}
        >
          ABOUT
        </Link>
        <Link
          href={"/#faq"}
          className="text-lg RobotoText font-semibold text-white"
          onClick={toggleOpen}
        >
          FAQ
        </Link>
      </motion.div>

      {/* desktop nav */}
      <motion.div
        className={`hidden md:flex bg-gray-600/[.40] md:bg-transparent md:flex-row md:justify-center md:items-center gap-5 lg:gap-12 w-screen md:h-14 md:right-6 mt-[191px] md:m-0 pt-10 pl-8 md:p-0 z-50`}
      >
        <Link
          href={"/#tickets"}
          className="text-lg RobotoText font-semibold text-white"
        >
          ATTEND THE CONFERENCE
        </Link>
        <Link
          href={"/schedule"}
          className="text-lg RobotoText font-semibold text-white"
        >
          SCHEDULE
        </Link>
        <Link
          href={"/#sponsors"}
          className="text-lg RobotoText font-semibold text-white"
        >
          SPONSORS
        </Link>
        <Link
          href={"/speakers"}
          className="text-lg RobotoText font-semibold text-white"
        >
          SPEAKERS
        </Link>
        <Link
          href={"/team"}
          className="text-lg RobotoText font-semibold text-white"
        >
          THE TEAM
        </Link>
        <Link
          href={"/#about"}
          className="text-lg RobotoText font-semibold text-white"
        >
          ABOUT
        </Link>
        <Link
          href={"/#faq"}
          className="text-lg RobotoText font-semibold text-white"
        >
          FAQ
        </Link>
      </motion.div>
    </>
  );
};

export default NavLinks;
