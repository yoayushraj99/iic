import React from "react";
import About from "../Home/About"
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Header from "../Home/Header";
import Achivement from "../Home/Achivement";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Achivement />
      <Footer />
    </div>
  );
}

export default HomePage;