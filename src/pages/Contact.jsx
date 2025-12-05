import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactHeroSection from "../components/ContactHeroSection";
import LetsConnectSection from "../components/LetsConnectSection";
import ContactFormSection from "../components/ContactFormSection";
import Loader from "../components/Loader";
import ContactDetailsSection from "../components/ContactDetailsSection";
import WhyConnectSection from "../components/WhyConnectSection";
import ProgressBar from "../components/ProgressBar";

const Contact = () => {

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <div className="font-[Poppins] text-black bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13]">
      <ProgressBar />
      <ContactHeroSection/>

      <WhyConnectSection/>


      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]" style={{
                backgroundImage: `linear-gradient(rgba(0, 60, 0, 0.15), rgba(0, 0, 0, 0.85)), url('line-vector.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
        <LetsConnectSection/>

        <ContactFormSection/>
      </section>

      <ContactDetailsSection/>

    </div>
  );
};

export default Contact;
