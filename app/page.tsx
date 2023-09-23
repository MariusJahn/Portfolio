"use client";

import { useEffect, useState } from "react";
import PersonalityCard from "./components/personalityCard";
import { Avatar } from "@nextui-org/react";
import SocialsContainer from "./components/socialsContainer";
import { motion } from "framer-motion";
import Skillbox from "./components/skillbox";
import { url } from "inspector";
import MySetup from "./components/mysetup";

export default function App() {
  let [cursor, setCursor] = useState<string>("|");

  const [word, setWord] = useState("");
  const [progress, setProgress] = useState(0);

  const targetWord = "Im a Software Developer"; // Das Wort, das du ausschreiben möchtest
  const delay = 100; // Die Verzögerung zwischen den einzelnen Buchstaben (in Millisekunden)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (progress < targetWord.length) {
        setWord(targetWord.slice(0, progress + 1));
        setProgress(progress + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, delay);

    return () => {
      clearInterval(typingInterval);
    };
  }, [progress, targetWord, setWord]);

  useEffect(() => {
    let interval = setInterval(() => {
      if (cursor == "|") {
        setCursor("");
      } else {
        setCursor("|");
      }
    }, 500);
    return () => clearInterval(interval);
  }, [word, cursor]);

  return (
    <main className="h-full min-h-screen flex flex-col items-center">
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-row h-[30rem] items-center justify-center z-10">
          <header className=" flex flex-col gap-1 items-start justify-start">
            <h1 className="font-bold text-4xl z-10">Hey! {`I'm Marius :)`}</h1>
            <h2 className="text-primary-500 z-10 ">
              {word}
              <span className="">{cursor}</span>
            </h2>
          </header>

          <motion.div
            className="z-10"
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 10, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 10,
            }}
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <motion.div
              className="z-20 w-10 h-10"
              initial={{
                rotate: 0,
                scale: 0,
                translateX: 40,
                translateY: 40,
              }}
              exit={{ rotate: 10, scale: 0 }}
              animate={{ rotate: -10, scale: 3 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              whileHover={{ rotate: 10 }}
            >
              👋
            </motion.div>
            <Avatar className="ml-8 w-40 h-40 z-10" src="/images/me.jpg" />
          </motion.div>
          <Skillbox />
        </div>
        <div
          className="flex flex-row items-center justify-between h-60 w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/webb.jpg')" }}
        >
          <div className="flex-1 h-full border-r-[2rem] hover:-translate-y-2 border-black">
            1
          </div>
          <div className="flex-1 h-full border-r-[2rem] border-black">2</div>
          <div className="flex-1 h-full border-r-[2rem] border-black">3</div>
          <div className="flex-1 h-full border-r-[2rem] border-black">4</div>
          <div className="flex-1 h-full border-r-[2rem] border-black">5</div>
          <div className="flex-1 h-full border-r-[2rem] border-black">4</div>
          <div className="flex-1 h-full border-r-[2rem] border-black">5</div>
          <div className="flex-1 h-full border-r-[2rem] border-black">4</div>
          <div className="flex-1 h-full border-r-[2rem] border-black">5</div>
          <div className="w-40 h-full ">5</div>
        </div>
        <MySetup />
      </div>
    </main>
  );
}
