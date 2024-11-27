// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import TicketsInfo from "./TicketsInfo";
import TicketType from "./TicketType";

export default function PricingPlans() {
  return (
    <div className="w-[85%] md:w-[90%] max-w-[900px] h-auto mx-auto py-[25px] content-container flex flex-col md:flex-row justify-center items-center gap-2">
      <div className="w-full flex flex-col justify-center items-center md:items-start gap-2 md:gap-4">
        {/* text */}
        <h3 className="purpleText text-5xl font-extrabold px-4">
          JOIN US AT CUSEC 2025
        </h3>
        {/* text divider */}
        <div className="h-0.5 w-20 bg-[--purple] mx-4"></div>
        <p className="textFont text-base px-4">PRICING PLANS</p>
        {/* tickets info */}
        <div className="w-full flex justify-center">
          <TicketsInfo />
        </div>
      </div>
      {/* ticket types */}
      <div className="flex flex-wrap md:flex-col justify-center items-center gap-2 md:gap-4 w-full">
        <TicketType
          ticketType="standard"
          text="Learn, Connect and discover with CUSEC."
          StuPrice={80}
          proPrice={200}
          href="https://www.tickettailor.com/events/cusec/1401652"
        />
        <TicketType
          ticketType="vip"
          text="The exclusive CUSEC experience."
          StuPrice={120}
          proPrice={240}
          href="https://www.tickettailor.com/events/cusec/1401652"
        />
      </div>
    </div>
  );
}
