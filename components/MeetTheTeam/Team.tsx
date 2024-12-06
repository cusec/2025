// dependencies
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// team data
import teamMembers from "./TeamData";

// components
import LoadingElement from "@/components/LoadingElement";
import TeamCard from "@/components/MeetTheTeam/TeamCard";

export default function Team() {
  return (
    <div className="w-full h-full flex flex-wrap">
      {teamMembers.map((member, index) => (
        <TeamCard
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
