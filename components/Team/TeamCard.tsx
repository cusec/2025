// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TeamCardProps = {
  name: string;
  university: string;
  image: string;
  university_image: string;
  pronouns: string;
  roles: string[];
  sub_role?: string;
  program: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  website?: string;
  email?: string;
};

export default function TeamCard({
  name,
  university,
  image,
  university_image,
  pronouns,
  roles,
  sub_role,
  program,
  linkedin,
  instagram,
  github,
  website,
  email,
}: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`rounded-lg text-center p-12 relative flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        isHovered ? "bg-white shadow-md" : ""
      }`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* headshot */}
      <div className="w-[200px] h-[200px] flex justify-center items-center mb-10 rounded-full bg-gray-100">
        {" "}
        <Image
          className="w-full h-full rounded-full"
          src={image}
          alt=""
          width={200}
          height={200}
        ></Image>
      </div>

      {/* main info */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold mb-1 RobotoText flex items-center justify-center">
          {isHovered ? university : name}
        </h3>
        <p className="text-sm text-gray-600 RobotoText">
          {isHovered ? program : pronouns}
        </p>
        <p className="text-lg mb-2 RobotoText">{roles.join(", ")}</p>
      </div>
    </motion.div>
  );
}
