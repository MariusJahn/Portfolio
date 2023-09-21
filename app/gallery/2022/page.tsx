import Photo from "@/app/components/photo";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4 h-screen">
      <h1>2022</h1>
      <Photo title="Zeche" image="/images/zeche.png" />
      <Photo title="Zeche" image="/images/zeche.png" />
      <Photo title="Zeche" image="/images/zeche.png" />
    </div>
  );
};

export default page;
