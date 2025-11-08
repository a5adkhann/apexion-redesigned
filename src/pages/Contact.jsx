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
import AddressMapSection from "../components/AddressMapSection";

const Contact = () => {

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

      <AddressMapSection/>
    </div>
  );
};

export default Contact;
