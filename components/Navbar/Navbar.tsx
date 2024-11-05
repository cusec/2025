"use client";

//context
import { useNav } from "./NavContext";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const { isOpen, setIsOpen } = useNav();

  return (
    <nav
      className={`bg-gray-600/[.40] h-[65px] w-full fixed top-0 z-50 flex justify-between items-center`}
    >
      <Link href="/" className="ml-[15px] z-[100]">
        <Image
          className="w-[42px] h-[42px] max-w-[250px] max-h-[250px]"
          src="/images/logo-main.svg"
          alt="2025 logo main"
          width={1080}
          height={1080}
        ></Image>
      </Link>
      <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
