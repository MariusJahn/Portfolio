"use client";

import { useEffect, useState } from "react";
import PersonalityCard from "./components/personalityCard";
import Skillbox from "./skillbox";
import { Avatar } from "@nextui-org/react";
import SocialsContainer from "./components/socialsContainer";

export default function App() {
  return (
    <main className="h-full min-h-screen flex flex-col items-center">
      <div className="flex flex-col w-full">
        <div className="flex flex-row h-[30rem] items-center justify-center">
          <header className=" flex flex-col gap-1 items-start justify-start">
            <h1 className="font-bold text-4xl">Hey! Im Marius :)</h1>
            <h2 className="text-primary-500">Im a Software Developer</h2>
          </header>
          <Avatar className="ml-8 w-40 h-40" src="/images/me.jpg" />
        </div>
      </div>
    </main>
  );
}
