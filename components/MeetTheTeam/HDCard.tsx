// dependencies
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type HDCardProps = {
  name: string;
  university: string;
  image?: string;
  university_image?: string;
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

export default function HDCard({
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
}: HDCardProps) {
  return <div className="w-full h-full"></div>;
}
