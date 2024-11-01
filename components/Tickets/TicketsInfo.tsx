// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import TicketPerk from "./TicketPerk";


const TicketsInfo = ({

}) => {

  return (
    <div
      className={`w-[85%] md:w-[42.5%] max-w-[450px] md:max-w-[900px] h-auto py-[15px] rounded-[20px] flex flex-col justify-center items-start gap-2 bg-white `}
    >
        {/* table headers */}
        <div className="w-full flex flex-row justify-end gap-6 px-4">
            <h3 className="RobotoText text-5 text-[--dark-blue] font-bold">STANDARD</h3>
            <h3 className="RobotoText text-5 textGradient font-bold pr-0.5">VIP</h3>   
        </div>
        {/* divider */}
        <div className="w-full px-4 h-[1px] m-auto ">
            <div className="w-full h-full bg-[--purple]"></div>
        </div>
        {/* PERKS */}
        <div className="w-full m-auto flex flex-col gap-0.5 px-4">
        <TicketPerk text="Social Events" />
        <TicketPerk text="Workshops" />
        <TicketPerk text="Sponsor-Hosted Talks" />
        <TicketPerk text="Networking Benefits" />
        <TicketPerk text="Priority Networking" />
        <TicketPerk text="Exclusive CUSEC Merchandise" />
        </div>
        {/* divider */}
        <div className="w-full px-4 h-[1px] m-auto ">
            <div className="w-full h-full bg-[--purple]"></div>
        </div>
    </div>
  );
};

export default TicketsInfo;
