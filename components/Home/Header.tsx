import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="flex flex-row justify-center items-center content-container h-[150px] w-screen md:w-[90%] max-w-[900px] mx-auto md:mt-[45px] gap-[14px] max-md:!rounded-none">
      {/* LEFT SIDE */}
      <div className="w-[44.5%] flex flex-row justify-end items-center flex-grow mx-5">
        <Image
          className="w-[75px] h-[75px] max-w-[250px] max-h-[250px]"
          src="/images/logo-main.svg"
          alt="2025 logo main"
          width={1080}
          height={1080}
        ></Image>
        <div className="flex flex-col items-center">
          <h3 className="text-[40px] purpleText font-bold leading-[80%]">
            CUSEC
          </h3>
          <h3 className="text-[40px] lightPurpleText font-bold leading-[80%]">
            2025
          </h3>
        </div>
      </div>
      {/* MIDDLE DIVIDER */}
      <div className="w-[1%] max-w-[2px] h-3/5">
        <div className="h-full w-full bg-white"></div>
      </div>
      {/* RIGHT */}
      <div className="w-[44.5%] flex flex-grow mx-5">
        <p className="textFont text-base font-extrabold max-w-[150px]">
          Canadian University Software Engineering Conference
        </p>
      </div>
    </div>
  );
}
