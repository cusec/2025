"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// components
import Header from "./Header";
import EventDetails from "./EventDetails";
import Star from "../Star";

export default function Main() {
  return (
    <div className="z-10 h-[100vh]">
      <Header />
      <Star />
      <EventDetails />
      <Star />
    </div>
  );
}
