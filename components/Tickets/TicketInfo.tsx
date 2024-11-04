// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TicketTypeProps {}

const TicketInfo = ({}) => {
  return (
    <div
      className={`w-[85%] md:w-[42.5%] max-w-[450px] md:max-w-[900px] h-auto py-[15px] rounded-[20px] flex flex-col justify-center items-start gap-2 bg-white `}
    >
      {/* table headers */}
      <div className="flex flex-row justify-end w-full px-4 gap-6">
        <h3 className="RobotoText text-5 text-[--dark-blue] font-bold">
          STANDARD
        </h3>
        <h3 className="RobotoText text-5 textGradient font-bold">VIP</h3>
      </div>
      {/* divider */}
      <div className="h-[1px] w-full"></div>
    </div>
  );
};

export default TicketInfo;
