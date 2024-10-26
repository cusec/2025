// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import TicketType from "./TicketType";

export default function PricingPlans() {
  return (
    <div className="w-[85%] md:w-[90%] max-w-[900px] h-auto mx-auto py-[25px] content-container flex flex-col justify-center items-center gap-2">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h3 className="purpleText text-[40px] font-extrabold">
          JOIN US AT CUSEC 2025
        </h3>
        {/* text divider */}
        <div className="h-0.5 w-20 bg-white"></div>
        <p className="textFont text-base">PRICING PLANS</p>
      </div>

      {/* ticket types */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-8 w-full">
        <TicketType
          ticketType="standard"
          text="Learn, Connect and discover with CUSEC."
          StuPrice={80}
          proPrice={200}
          // href="https://www.tickettailor.com/events/cusec/1401652"
          href=""
        />
        <TicketType
          ticketType="vip"
          text="The exclusive CUSEC experience."
          StuPrice={120}
          proPrice={240}
          // href="https://www.tickettailor.com/events/cusec/1401652"
          href=""
        />
      </div>
    </div>
  );
}
