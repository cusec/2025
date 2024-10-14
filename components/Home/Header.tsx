import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="flex flex-row justify-center items-center container h-[150px] mx-auto gap-[14px] !rounded-none">
      {/* LEFT SIDE */}
      <div className="w-[44.5%] flex flex-row justify-center items-center flex-grow">
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
      <div className="w-[1%] h-3/5">
        <div className="h-full w-[2px] bg-white"></div>
      </div>
      {/* RIGHT */}
      <div className="w-[44.5%] flex flex-grow">
        <p className="textFont text-base font-extrabold">
          CANADIAN UNIVERSITY SOFTWARE ENGINEERING CONFERENCE
        </p>
      </div>
    </div>
  );
}
