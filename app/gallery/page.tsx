import React from "react";
import Photo from "../components/photo";
import GalleryDirectory from "../components/galleryDirectory";

const Gallery = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4 h-screen">
      <GalleryDirectory title="2020" path="/gallery/2020" />
      <GalleryDirectory title="2021" path="/gallery/2021" />
      <GalleryDirectory title="2022" path="/gallery/2022" />
      <GalleryDirectory title="2023" path="/gallery/2023" />
    </div>
  );
};

export default Gallery;
