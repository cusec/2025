// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import TicketLink from "./TicketLink";

interface TicketTypeProps {
  ticketType: string;
  text: string;
  StuPrice: number;
  proPrice: number;
  href: string;
}

const TicketType: React.FC<TicketTypeProps> = ({
  ticketType,
  text,
  StuPrice,
  proPrice,
  href,
}) => {
  // checks / sets ticket type; used to conditionally style different ticket types (mainly colors)
  const [tixType, setTixType] = useState("");
  useEffect(() => {
    if (ticketType === "standard") {
      setTixType("std");
    } else if (ticketType === "vip") {
      setTixType("vip");
    }
  }, [ticketType]);

  return (
    <div
      className={`w-[85%] md:w-[90%] max-w-[900px] h-auto mx-auto py-[15px] rounded-[20px] flex flex-col justify-center items-start gap-2 ${
        tixType == "std"
          ? "buttonGradient"
          : "bg-[--dark-blue] bg-[url('/images/vip-cloud.svg')] bg-no-repeat bg-right-top"
      } `}
    >
      {/* INFO */}
      <div className="w-full flex flex-row justify-center items-center px-4">
        {/* LEFT SIDE */}
        <h3
          className={`RobotoText uppercase text-3xl font-extrabold ${
            tixType == "std" ? "text-[--dark-blue]" : "textGradient"
          }`}
        >
          {ticketType}
        </h3>
        {/* MIDDLE DIVIDER */}
        <div
          className={`w-[2px] h-8 mx-2 ${
            tixType == "std" ? "bg-[--purple]" : "bg-white"
          }`}
        ></div>
        {/* RIGHT */}
        <div className="w-auto h-auto flex flex-grow justify-start items-center pr-4">
          <p
            className={`RobotoText text-sm font-bold ${
              tixType == "std" ? "text-[--purple]" : "text-white"
            }`}
          >
            {text}
          </p>
        </div>
        {/* HOT tag */}
        <div
          className={`relative w-[50px] ${tixType == "std" ? "hidden" : ""}`} // only show on VIP ticket
        >
          <div className="flex flex-row justify-center absolute -top-6 right-0">
            <p className="RobotoText text-base font-bold text-white">HOT</p>
            <Image
              className="w-[21px] h-[21px] max-w-[21px] max-h-[21px]"
              src="/images/sparkles.svg"
              alt="sparkles"
              width={1080}
              height={1080}
            ></Image>
          </div>
        </div>
      </div>

      {/* pricing / tix buttons */}
      <div className="w-full px-4 flex flex-wrap justify-between items-end gap-2">
        {/* pricing */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row items-center gap-1 w-full">
            <h4
              className={`RobotoText text-[18px] font-bold ${
                tixType == "std" ? "text-[--dark-blue]" : "textGradient"
              }`}
            >
              ${StuPrice}
            </h4>
            <p className="RobotoText text-[13px] text-white font-bold tracking-wide">
              /student
            </p>
          </div>
          <div className="flex flex-row items-center gap-1 w-full">
            <h4
              className={`RobotoText text-[18px] font-bold ${
                tixType == "std" ? "text-[--dark-blue]" : "textGradient"
              }`}
            >
              ${proPrice}
            </h4>
            <p className="RobotoText text-[13px] text-white font-bold tracking-wide">
              /professional
            </p>
          </div>
        </div>
        {/* ticket link */}
        <TicketLink ticketType={ticketType} href={href} />
      </div>
    </div>
  );
};

export default TicketType;
