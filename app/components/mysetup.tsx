"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import React from "react";
import { FaComputer, FaScrewdriverWrench } from "react-icons/fa6";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import Link from "next/link";

const MySetup = () => {
  return (
    <div>
      <Tabs aria-label="Options">
        <Tab
          key="setup"
          title={
            <div className="flex items-center space-x-2">
              <FaComputer />
              <span>my Setup</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <Table isStriped aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn>Part</TableColumn>
                  <TableColumn>Name</TableColumn>
                  <TableColumn>Link</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>Processor</TableCell>
                    <TableCell>AMD Ryzen 5 1600</TableCell>
                    <TableCell>
                      <Link
                        color="primary"
                        href={
                          "https://www.amazon.de/AMD-Ryzen-5-1600-Prozessor/dp/B06XNRQHG4"
                        }
                      >
                        https://www.amazon.de/AMD-Ryzen-5-1600-Prozessor/dp/B06XNRQHG4
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell>Graphics Card</TableCell>
                    <TableCell>GTX 1060 KFA2 </TableCell>
                    <TableCell>link</TableCell>
                  </TableRow>
                  <TableRow key="3">
                    <TableCell>Jane Fisher</TableCell>
                    <TableCell>Senior Developer</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow key="4">
                    <TableCell>William Howard</TableCell>
                    <TableCell>Community Manager</TableCell>
                    <TableCell>Vacation</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="tools"
          title={
            <div className="flex items-center space-x-2">
              <FaScrewdriverWrench />
              <span>my Tools</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              - Gitkraken - Visual Studio Code - Jetbrains Toolbox - Figma -
              Notion -
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MySetup;
