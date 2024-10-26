// dependencies
import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import AnimateElement from "../AnimateElement";

export default function InfoText() {
  return (
    <div className="w-[85%] md:w-[90%] max-w-[900px] h-auto mx-auto pb-[25px] flex flex-col justify-center items-center gap-2 text-center">
      <h1 className="purpleText text-[40px] font-extrabold">WHAT IS CUSEC?</h1>
      <p className="RobotoText text-[--dark-blue] text-sm tracking-normal font-bold">
        CUSEC is Canada's longest running student-led software engineering
        conference. Founded in 2002, the conference has offered unique and
        diverse tech experiences to students. CUSEC 2025 will be the 24th
        conference.
      </p>
    </div>
  );
}
