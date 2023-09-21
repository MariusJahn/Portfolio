"use client";

import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";

type PhotoProps = {
  title: string;
  description?: string;
  image: string;
};

const Photo = (props: PhotoProps) => {
  return (
    <>
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none w-[200px] h-[300px]"
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src={props.image}
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">{props.title}</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default Photo;
