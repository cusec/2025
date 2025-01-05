// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroImgProps {
  orientation: string;
  source: string;
}

const HeroImg: React.FC<HeroImgProps> = ({ orientation, source }) => {
  return (
    <div
      className={`w-full h-full flex justify-center items-center bg-gray-200 rounded-lg`}
    >
      <Image
        className="w-full h-full opacity-0"
        src={source}
        alt=""
        width={1080}
        height={1080}
      ></Image>
    </div>
  );
};

export default HeroImg;
