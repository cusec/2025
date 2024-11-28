// dependencies
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function InfoText() {
  return (
    <div className="w-[85%] xl:w-[45%] max-w-[900px] h-auto mx-auto pb-[25px] flex flex-col justify-center items-center gap-2 text-center xl:text-left">
      <h1 className="purpleText text-5xl md:text-7xl font-extrabold lg:hidden">
        WHAT IS CUSEC?
      </h1>
      <p className="RobotoText text-[--dark-blue] text-sm md:text-2xl font-light tracking-normal">
        CUSEC is Canada's longest running student-led software engineering
        conference. Founded in 2002, the conference has offered unique and
        diverse tech experiences to students. CUSEC 2025 will be the 24th
        conference.
      </p>
    </div>
  );
}
