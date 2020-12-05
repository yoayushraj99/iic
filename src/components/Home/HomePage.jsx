import React from "react";
import About from "../Home/About"
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Header from "../Home/Header";
import Container from "./Container";

function HomePage() {
  return (
    <div>
      <Navbar />
      <br></br>
      <Header />
      <About />
      <Container />
      <Footer />
    </div>
  );
}

export default HomePage;