"use client";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillDeviceHddFill } from "react-icons/bs";

const Facts = () => {
  return (
    <div className="w-full flex flex-row flex-wrap justify-evenly items-center gap-4">
      <Card className="max-w-[400px] max-h-[200px] ">
        <CardHeader className="flex gap-3 justify-center">
          <div className="flex flex-col gap-4 items-center text-2xl">
            <p>
              <FaLocationDot />
            </p>
            <p className="text-md">Based in NRW</p>
          </div>
        </CardHeader>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
      <Card className="max-w-[400px] max-h-[200px] ">
        <CardHeader className="flex gap-3 justify-center">
          <div className="flex flex-col gap-4 items-center text-2xl">
            <p>
              <BsFillDeviceHddFill />
            </p>
            <p className="text-md">10+ Years Experience in IT</p>
          </div>
        </CardHeader>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
      <Card className="max-w-[400px] max-h-[200px] justify-center">
        <CardHeader className="flex gap-3 justify-center">
          <div className="flex flex-col gap-4 items-center text-2xl">
            <p>
              <BsFillDeviceHddFill />
            </p>
            <p className="text-md">10+ Years Experience in IT</p>
          </div>
        </CardHeader>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Facts;
