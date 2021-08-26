import React from "react";
import About from "../Home/About";
// import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Header from "../Home/Header";
import Container from "./Container";
import IncubationNAv from "../Nav-foot/IncubationNav";
import Navbar from "../Nav-foot/Navbar";

function HomePage() {
  return (
    <div>

      <IncubationNAv />
      <Navbar />
      {/* <NavbarNew /> */}
      <Header />
      <About />
      <Container />
      <Footer />
    </div>
  );
}

export default HomePage;
