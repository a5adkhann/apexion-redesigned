import React, { useEffect, useState } from "react";
import AboutHeroSection from "../components/AboutHeroSection";
import MissionAndVisionSection from "../components/Mission&VisionSection";
import OurJourneySection from "../components/OurJourneySection";
import CoreValuesSection from "../components/CoreValuesSection";
import JoinTheWellnessSection from "../components/JoinTheWellnessSection";
import Loader from "../components/Loader";
import ProgressBar from "../components/ProgressBar";
import FAQSection from "../components/FAQSection";

const AboutUs = () => {
   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return <Loader />;
    }

  return (
    <div className="font-[Poppins] text-gray-100 bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] overflow-hidden">
      <ProgressBar />
      <AboutHeroSection/>

      <MissionAndVisionSection/>

      <OurJourneySection/>

      <CoreValuesSection/>

      <JoinTheWellnessSection/>

      <FAQSection/>
    </div>
  );
};

export default AboutUs;
