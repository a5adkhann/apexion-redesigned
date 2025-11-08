import React, { useEffect } from "react";
import "remixicon/fonts/remixicon.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import OurApps from "./pages/OurApps";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyIcon from "./components/StickyIcon";
import Pill from "./components/Pill";

const App = () => {

  useEffect(() => {
      const titles = [
        "Wellnex - Empowering Wellness",
        "1 new message",
      ];

      let index = 0;
      document.title = titles[index];

      const interval = setInterval(() => {
        index = (index + 1) % titles.length;
        document.title = titles[index];
      }, 2000);

      return () => clearInterval(interval);
    }, [])


  return (
    <div>
      <ParallaxProvider>
        <BrowserRouter>
          <Navbar />
          <StickyIcon />
          <Pill />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/apps" element={<OurApps />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
};

export default App;
