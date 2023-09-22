"use client";

import { useEffect, useState } from "react";
import PersonalityCard from "./components/personalityCard";
import { Avatar } from "@nextui-org/react";
import SocialsContainer from "./components/socialsContainer";
import { motion } from "framer-motion";
import Skillbox from "./components/skillbox";

export default function App() {
  return (
    <main className="h-full min-h-screen flex flex-col items-center">
      <div className="flex flex-col w-full">
        <div className="">
          <div className="flex flex-row h-[30rem] items-center justify-center z-10">
            <header className=" flex flex-col gap-1 items-start justify-start">
              <h1 className="font-bold text-4xl">Hey! Im Marius :)</h1>
              <h2 className="text-primary-500">Im a Software Developer</h2>
            </header>
            <motion.div
              className="z-20"
              initial={{ rotate: 0, scale: 0, translateX: 50, translateY: -20 }}
              animate={{ rotate: 0, scale: 3 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
            >
              👋
            </motion.div>
            <motion.div
              className="z-10"
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 10, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
            >
              <Avatar className="ml-8 w-40 h-40" src="/images/me.jpg" />
            </motion.div>
            <Skillbox />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center"></div>
      </div>
    </main>
  );
}
