import React from 'react';
import {Helmet} from 'react-helmet';

import Navbar from "../components/Nav-foot/Navbar";
import Header from "../components/Home/Header";
import About from "../components/Home/About";
import Footer from "../components/Nav-foot/Footer";
import Achivement from "../components/Home/Achivement";

function Homepage() {
  return (
    <div>
      <Helmet>
                <style>{'body { background-color: #EFF6F1; }'}</style>
      </Helmet>
      <Navbar />
      <Header />
      <About />
      <Achivement />
      <Footer />
    </div>
  );
}

export default Homepage;
