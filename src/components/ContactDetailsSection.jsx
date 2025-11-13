import React from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactDetailsSection = () => {
  return (
    <section
      className="text-center py-20 border-t border-white/10 px-6"
      style={{
        backgroundImage: `url('getInTouch.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "start",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0f1a75] to-[var(--light)] mb-4 sm:mb-5 text-center"
      >
        Get In Touch
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10 mb-10">
        <div>
          <FaEnvelope className="text-[#0f1a75] text-2xl mx-auto mb-2" />
          <p className="text-gray-300">hello@apexion.com</p>
        </div>
        <div>
          <FaPhoneAlt className="text-[#0f1a75] text-2xl mx-auto mb-2" />
          <p className="text-gray-300">+92 300 1234567</p>
        </div>
        <div>
          <FaMapMarkerAlt className="text-[#0f1a75] text-2xl mx-auto mb-2" />
          <p className="text-gray-300">123 Innovation Street, Karachi</p>
        </div>
      </div>

      <div className="flex justify-center gap-6 text-gray-400 text-xl">
        <a href="https://www.facebook.com/apexionltd" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="hover:text-[#0f1a75] cursor-pointer transition" />
        </a>
        <a href="https://www.instagram.com/apexionagency" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-[#0f1a75] cursor-pointer transition" />
        </a>
        <a href="https://www.linkedin.com/company/apexionltd" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="hover:text-[#0f1a75] cursor-pointer transition" />
        </a>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
