import React from "react";
import Navbar from "../Nav-foot/Navbar";
import GalleryBody from "./gallery-body";
import GallerySlider from "./gallery-slider";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <GallerySlider />
      <GalleryBody />
    </>
  );
}
