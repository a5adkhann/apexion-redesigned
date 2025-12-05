import React, { useEffect, useState } from "react";
import AboutHeroSection from "../components/AboutHeroSection";
import MissionAndVisionSection from "../components/Mission&VisionSection";
import OurJourneySection from "../components/OurJourneySection";
import CoreValuesSection from "../components/CoreValuesSection";
import Loader from "../components/Loader";
import ProgressBar from "../components/ProgressBar";
import FAQSection from "../components/FAQSection";

const AboutUs = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  
  return (
    <div className="font-[Poppins] text-gray-100 bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] overflow-hidden">
      <ProgressBar />
      <AboutHeroSection/>

      <MissionAndVisionSection/>

      <OurJourneySection/>

      <CoreValuesSection/>

      <FAQSection/>
    </div>
  );
};

export default AboutUs;
