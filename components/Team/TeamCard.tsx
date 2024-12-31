// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";

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
  return (
    <div className="w-[350px] h-full">
      {/* headshot */}
      <div>
        {" "}
        <Image
          className="w-full h-full"
          src={image}
          alt=""
          width={1080}
          height={1080}
        ></Image>
        {/* university logo */}
        <Image
          className="w-full h-full"
          src={university_image}
          alt=""
          width={1080}
          height={1080}
        ></Image>
      </div>

      {/* main info */}
      <div>
        <h3>{name}</h3>
        <p>{pronouns}</p>
        <p>{roles.join(", ")}</p>
      </div>

      {/* more info */}
      <div>
        <h3>{university}</h3>
        <p>{program}</p>
      </div>
    </div>
  );
}
