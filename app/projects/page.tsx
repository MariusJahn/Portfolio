"use client";
import { Avatar } from "@nextui-org/react";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center h-full pt-16">
      <div className="pb-4">
        <Avatar className="w-40 h-40" src="/images/me.jpg">
          TODAY
        </Avatar>
      </div>
      <div className="flex flex-col justify-start items-start w-full">
        <div className="w-1/2 border-r-1 border-b-1 border-black dark:border-white h-60 mb-2">
          Developing a Standard Development Kit for Applications build with the
          ProcessCube
        </div>
      </div>
      <div className="flex flex-col justify-end items-end w-full">
        <div className="w-1/2 pl-4 border-l-1 mr-[1px] border-black dark:border-white h-60">
          International Web-Application for recycling devices.
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full">
        <div className="w-1/2 border-r-1 border-black dark:border-white  h-60">
          Requirements Engineering Plugin for the ProcessCube
        </div>
      </div>
      <div className="flex flex-col justify-end items-end w-full">
        <div className="w-1/2 pl-4 border-l-1 mr-[1px] border-black dark:border-white h-60">
          International Web-Application for recycling devices.
        </div>
      </div>
    </div>
  );
};

export default Projects;
