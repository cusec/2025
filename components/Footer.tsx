"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-600/[.40] w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-6 space-y-4 md:space-y-0 relative">
      {/* Left Section: Logo */}
      <div className="flex items-center justify-center md:justify-start space-x-3 w-full md:w-auto">
        <Link href="/" className="ml-[15px]">
          <Image
            className="w-[42px] h-[42px] max-w-[250px] max-h-[250px]"
            src="/images/logo-main.svg"
            alt="2025 logo main"
            width={1080}
            height={1080}
          />
        </Link>
      </div>

      {/* Center Section: Navigation Links - Absolutely centered only on desktop */}
      <div className="flex justify-center space-x-4 font-bold w-full md:absolute md:inset-x-0 md:flex md:justify-center">
        <Link href="/code-of-conduct" className="textFont hover:underline mx-4">
          Code of Conduct
        </Link>
        <Link href="/" className="textFont hover:underline mx-4">
          Privacy Policy
        </Link>
      </div>

      {/* Right Section: Social Media Icons */}
      <div className="flex justify-center md:justify-end items-center space-x-4 w-full md:w-auto">
        <a
          href="https://www.instagram.com/cusecofficial/"
          target="_blank"
          aria-label="Instagram"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl gradient-icon hover:opacity-75" />
        </a>
        <a
          href="https://www.linkedin.com/company/cusec/posts/?feedView=all"
          target="_blank"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl gradient-icon hover:opacity-75" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          aria-label="YouTube"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-2xl gradient-icon hover:opacity-75" />
        </a>
        <a
          href="https://github.com/cusec"
          target="_blank"
          aria-label="GitHub"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl gradient-icon hover:opacity-75 z-10" />
        </a>
      </div>
    </footer>
  );
}
