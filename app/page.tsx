"use client";

import { useEffect, useState } from "react";
import PersonalityCard from "./components/personalityCard";
import Skillbox from "./skillbox";
import { Avatar } from "@nextui-org/react";
import SocialsContainer from "./components/socialsContainer";
import { motion } from "framer-motion";

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

            <div className="z-0 absolute w-3/4 h-[30rem] px-6 ">
              <div className="flex flex-row h-[15rem] w-full">
                <div className="flex-1 flex flex-col justify-around gap-4 blur-md hover:blur-none transition-all">
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-around gap-4 blur-md hover:blur-none transition-all">
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-around gap-4 blur-md hover:blur-none transition-all">
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-around gap-4 blur-md hover:blur-none transition-all">
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2 className=" hover:animate-none animate-spin transition-all">
                      React
                    </h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-row h-[15rem] w-full">
                <div className="flex-1 flex flex-col justify-around gap-4 blur-md hover:blur-none transition-all">
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2 className="">React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-around gap-4 blur-md hover:blur-none transition-all">
                  <div className="flex flex-row justify-between">
                    <h2 className="animate-bounce hover:animate-none">React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-around gap-4 blur-md hover:blur-none transition-all">
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-around gap-4 blur-md hover:blur-none transition-all">
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                  <div className="flex flex-row justify-center">
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h2>React</h2>
                    <h2>React</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center"></div>
      </div>
    </main>
  );
}
