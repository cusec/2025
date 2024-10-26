import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ObjectiveProps {
  number: string;
  title: string;
  text: string;
}

const Objective: React.FC<ObjectiveProps> = ({ number, title, text }) => {
  return (
    <div className="flex flex-col xs:flex-row items-start xs:items-center px-4 gap-2 xs:gap-0">
      {/* LEFT SIDE */}
      <div className="w-auto flex flex-row justify-center items-center mr-2">
        <div className="w-[30px] h-[30px] bg-[--light-purple] rounded-full flex items-center justify-center text-white font-bold text-xl mr-2">
          {number}
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl textGradient RobotoText font-extrabold leading-[80%]">
            {title}
          </h3>
        </div>
      </div>
      {/* MIDDLE DIVIDER */}
      <div className="w-[2px] h-8 px-[1px]  mx-2 bg-white hidden xs:block"></div>
      {/* RIGHT */}
      <div className="w-auto h-auto flex flex-grow justify-start items-center ml-2">
        <p className="RobotoText text-base text-white font-extrabold">{text}</p>
      </div>
    </div>
  );
};

export default Objective;
