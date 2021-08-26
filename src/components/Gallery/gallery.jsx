import React from "react";
import Navbar from "../Nav-foot/Navbar";
import GalleryBody from "./gallery-body";
import GallerySlider from "./gallery-slider";
import Divider from "../Dividers/Divider";
import Footer from "../Nav-foot/Footer";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <GallerySlider />

      <h1 className="sec-title" style={{ padding: "10px" }}>
        Gallery
      </h1>
      <Divider />

      <GalleryBody />
      <Footer />
    </>
  );
}
