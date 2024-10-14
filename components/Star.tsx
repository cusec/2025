// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Star() {
  return (
    <div className="w-full flex justify-center items-center my-[27px]">
      <Image
        className="w-[27px] h-[27px]"
        src="/images/star.svg"
        alt="star <3"
        width={1080}
        height={1080}
      ></Image>
    </div>
  );
}
