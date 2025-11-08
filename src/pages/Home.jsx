import React, { useEffect, useState } from "react";

import Heroo from "../components/Heroo";
import WhyWellnex from "../components/WhyWellnex";
import OurVision from "../components/OurVision";
import FlagshipApps from "../components/FlagshipApps";
import FutureVision from "../components/FutureVision";
import Testimonials from "../components/Testinomials";

import ProgressBar from "../components/ProgressBar";
import Loader from "../components/Loader";
import FAQSection from "../components/FAQSection";
import ScrollStackSection from "../components/ScrollStackSection";

const Home = () => {
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
    <>
      <ProgressBar />
      <Heroo />

      <div style={{ position: "relative", minHeight: "100vh" }}>
        <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
          <WhyWellnex />
        </div>

        <div style={{ position: "relative", marginTop: "-1vh", zIndex: 20 }}>
          <OurVision />
        </div>
      </div>

      <FlagshipApps />
      <FAQSection/>
      <FutureVision />
      <Testimonials />
    </>
  );
};

export default Home;
