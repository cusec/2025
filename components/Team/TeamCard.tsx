// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import SocialIcon from "../SocialIcon";

type TeamCardProps = {
  fname: string;
  lname: string;
  nickname: string;
  university: string;
  program: string;
  year: string;
  image: string;
  university_image: string;
  pronouns: string;
  roles: string[];
  sub_role?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  website?: string;
  email?: string;
  isHovered: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
};

export default function TeamCard({
  fname,
  lname,
  nickname,
  university,
  program,
  year,
  image,
  university_image,
  pronouns,
  roles,
  sub_role,
  linkedin,
  instagram,
  github,
  website,
  email,
  isHovered,
  onHover,
  onHoverEnd,
}: TeamCardProps) {
  const handleTouchStart = () => {
    if (isHovered) {
      // if already hovered toggle hover off
      onHoverEnd();
    } else {
      // else trigger hover on
      onHover();
    }
  };

  return (
    <motion.div
      className={`min-h-[500px] rounded-lg text-center py-12 relative flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        isHovered ? "bg-white shadow-md" : "bg-[--light-purple-1]"
      }`}
      onHoverStart={onHover}
      onHoverEnd={onHoverEnd}
      onTouchStart={handleTouchStart}
    >
      {/* headshot */}
      <div className="relative w-[175px] h-[175px] sm:w-[200px] sm:h-[200px] flex justify-center items-center rounded-full">
        <Image
          className={`border-[--purple] w-[125px] h-[125px] xs:w-[175px] xs:h-[175px] sm:w-[200px] sm:h-[200px] transition-opacity duration-500 ease-in-out rounded-full object-cover border-[3px] mb-2 ${
            isHovered ? "" : "border-white border-opacity-90"
          }`}
          src={image}
          alt={fname + " " + lname}
          width={200}
          height={200}
          quality={100}
        ></Image>
        {/* school logo */}
        <div className={`absolute w-[45px] h-[45px] left-2 top-0`}>
          <Image
            className="w-[45px] h-[45px]"
            src={university_image}
            alt={university}
            quality={100}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
      </div>

      <div className="relative w-full h-full p-9">
        {/* main info */}
        <div
          className={`px-4 absolute inset-0 flex flex-col items-center justify-start transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <h3 className="text-xl sm:text-3xl font-bold mb-1 text-white RobotoText flex items-center justify-center">
            {fname} {nickname ? `(${nickname})` : ""} {lname}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 RobotoText font-semibold">
            {pronouns}
          </p>
          <p className="text-base sm:text-lg mb-2 RobotoText text-white font-semibold opacity-90">
            {roles.join(", ")}
          </p>
        </div>

        {/* more info */}
        <div
          className={`px-4 absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-xl sm:text-3xl font-bold mb-1 textFont flex items-center justify-center">
            {university}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 RobotoText font-semibold">
            {year} - {program}
          </p>
          <p className="text-base sm:text-lg mb-2 RobotoText font-semibold">
            {roles.join(", ")}
          </p>

          {/* social media */}
          <div className="w-full flex flex-wrap gap-2 justify-center items-center">
            {linkedin && <SocialIcon prop="linkedin" href={linkedin} />}
            {instagram && <SocialIcon prop="instagram" href={instagram} />}
            {github && <SocialIcon prop="github" href={github} />}
            {website && <SocialIcon prop="website" href={website} />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
