import React from "react";
import About from "../Home/About"
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Header from "../Home/Header";
import Container from "./Container";
import IncubationNAv from "../Nav-foot/IncubationNav";
import ButtonsOnRight from '../ButtonsOnRight/ButtonsOnRight'

function HomePage() {
  return (
    <div>
      <IncubationNAv/>
      <Navbar />
      <ButtonsOnRight/>
      <Header />
      <About />
      <Container />
      <Footer />
    </div>
  );
}

export default HomePage;