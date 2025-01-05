"use client";

//context
import { useNav } from "./NavContext";

// components
import Header from "../Home/Header";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const { isOpen, setIsOpen } = useNav();

  return (
    <div className="flex flex-col fixed top-0 z-50 w-screen">
      <Header />
      <nav
        className={`bg-gray-600/[.40] h-[65px] w-full flex justify-end items-center`}
      >
        <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </div>
  );
}
