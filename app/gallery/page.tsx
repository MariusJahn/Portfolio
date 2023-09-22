import React from "react";
import Photo from "../components/photo";
import GalleryDirectory from "../components/galleryDirectory";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-8 h-full min-h-screen">
      <div>
        <h1>My Video Projects</h1>
        <div className="flex flex-row justify-around flex-wrap gap-4">
          <video controls style={{ width: "500px", height: "500px" }}>
            <source src="" />
          </video>
          <video controls style={{ width: "500px", height: "500px" }}>
            <source src="" />
          </video>
          <video controls style={{ width: "500px", height: "500px" }}>
            <source src="" />
          </video>
        </div>
      </div>
      <h1>My Favourite Photos</h1>
      <div className="flex flex-row flex-wrap gap-4 justify-around">
        <GalleryDirectory title="2020" path="/gallery/2020" />
        <GalleryDirectory title="2021" path="/gallery/2021" />
        <GalleryDirectory title="2022" path="/gallery/2022" />
        <GalleryDirectory title="2023" path="/gallery/2023" />
      </div>
    </div>
  );
};

export default Gallery;
