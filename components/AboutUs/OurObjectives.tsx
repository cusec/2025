// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useTime, useTransform } from "framer-motion";

// components
import Objective from "./Objective";

export default function OurObjectives() {
  return (
    <div className="w-[85%] md:w-[90%] max-w-[900px] h-auto mx-auto py-[25px] bg-[--dark-blue] rounded-[20px] flex flex-col justify-center items-center gap-2">
      {/* head */}
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-2">
        <h3 className="text-white text-[40px] font-bold BScreensText">
          OUR OBJECTIVES
        </h3>
      </div>
      <div className="flex flex-col s gap-8 justify-start">
        <Objective
          number={"1."}
          title="LEARN"
          text="From world renowned experts."
        />
        <Objective
          number={"2."}
          title="CONNECT"
          text="With like-minded peers."
        />
        <Objective
          number={"3."}
          title="DISCOVER"
          text="Career opportunities with exciting companies."
        />
      </div>
    </div>
  );
}
