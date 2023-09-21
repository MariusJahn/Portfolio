"use client";

import { useEffect, useState } from "react";
import PersonalityCard from "./components/personalityCard";
import Skillbox from "./skillbox";
import { Avatar } from "@nextui-org/react";

export default function App() {
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="flex flex-col h-screen w-full">
        <div className="flex flex-row gap-4 w-3/4 h-[30rem] items-center justify-center">
          <header className="w-1/2 flex flex-col items-start justify-start">
            <h1 className="font-bold text-3xl">Hey! Im Marius :)</h1>
            <h2>Im a Software Developer</h2>
          </header>
          <Avatar className="w-40 h-40" src="/images/me.jpg" />
        </div>
      </div>
    </main>
  );
}
