"use client";

import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";

export default function Navbar() {
  return (
    <nav
      className={`bg-gray-600/[.40] h-[65px] w-full fixed top-0 z-50 flex justify-between items-center`}
    >
      <Link href="/" className="ml-[15px]">
        <Image
          className="w-[42px] h-[42px] max-w-[250px] max-h-[250px]"
          src="/images/logo-main.svg"
          alt="2025 logo main"
          width={1080}
          height={1080}
        ></Image>
      </Link>
      <Hamburger />
    </nav>
  );
}
