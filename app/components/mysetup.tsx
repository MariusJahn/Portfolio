"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import React from "react";
import { FaComputer, FaScrewdriverWrench } from "react-icons/fa6";

const MySetup = () => {
  const mySetup = (
    <span className="flex flex-row w-20 justify-between items-center">
      <FaComputer /> {" my Setup"}
    </span>
  );

  const myTools = (
    <span className="flex flex-row w-20 justify-between items-center">
      <FaScrewdriverWrench /> {" my Tools"}
    </span>
  );

  return (
    <div>
      <Tabs aria-label="Options">
        <Tab className="flex flex-row" key="setups" title={mySetup}>
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title={myTools}>
          <Card>
            <CardBody>
              - Gitkraken - Visual Studio Code - Jetbrains Toolbox - Figma -
              Notion -
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MySetup;
