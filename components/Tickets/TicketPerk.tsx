// dependencies
import { motion } from "framer-motion";
import Image from "next/image";

interface TicketPerkProps {
  text: string;
}


const TicketPerk: React.FC<TicketPerkProps> = ({ text }) => {

    let isMiddle = false;
    if (text == "Sponsor-Hosted Talks") {
        isMiddle = true;
    }
    
    let isLast = false;
    if (text == "Exclusive CUSEC Merchandise") {
        isLast = true;
    }

    let stdPerks = ["Social Events", "Workshops","Sponsor-Hosted Talks", "Networking Benefits"];
    let isStd = false;
    if (stdPerks.includes(text)) {
        isStd = true;
    }

  return (
    <motion.div
      className={`w-full flex flex-row justify-between ${!isLast ? "border-b-[1px] border-dashed border-[--light-purple]" : ""} `}
    >
        {/* perk */}
        <div className={`${!isStd ? "w-full" : "w-1/2 " } RobotoText text-sm text-[--purple] font-bold`}>
            <p>{text}</p>
        </div>
        {/* icons section */}
        <div className={` flex flex-row  ${!isStd ? "justify-end w-[50px]" : "justify-between w-[100px]" } pr-1.5 px-2`}>
            <Image
                className={`w-[14px] h-[14px] max-w-[14px] max-h-[14px] ${!isStd ? "hidden" : "" }`}
                src="/images/checkmarkIconBlue.svg"
                alt="sparkles"
                width={1080}
                height={1080}
            ></Image>
            <Image
                className={`w-[14px] h-[14px] max-w-[14px] max-h-[14px]`}
                src="/images/checkmarkIconGradient.svg"
                alt="sparkles"
                width={1080}
                height={1080}
            ></Image>
        </div>
    </motion.div>
  );
};

export default TicketPerk;
