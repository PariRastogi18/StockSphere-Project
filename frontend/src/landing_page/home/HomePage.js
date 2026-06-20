import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";
import Kite from "./Kite";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Kite />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
