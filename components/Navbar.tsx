"use client";

import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";

export default function Navbar() {
  return (
    <nav
      className={`bg-gray-600/[.40] h-[65px] w-full fixed top-0 z-50 flex justify-end items-center`}
    >
      <Hamburger />
    </nav>
  );
}
