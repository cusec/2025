// dependencies
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// head delegates data
import headDelegates from "./HDData";

// components
import LoadingElement from "@/components/LoadingElement";
import HDCard from "@/components/Team/HDCard";

export default function Team() {
  return (
    <div className="w-full h-full flex flex-wrap">
      {headDelegates.map((member, index) => (
        <HDCard
          name={member.name}
          university={member.university}
          image={member.image}
          university_image={member.university_image}
          pronouns={member.pronouns}
          roles={member.roles}
          sub_role={member.sub_role}
          program={member.program}
          linkedin={member.linkedin}
          instagram={member.instagram}
          github={member.github}
          website={member.website}
          email={member.email}
        />
      ))}
    </div>
  );
}
