import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const StickyIcon = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowIcons(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showIcons) return null;

  return (
    <div className="fixed left-[1.5%] top-[35%] z-50 flex flex-col items-center gap-3">
    

      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook
          className="text-3xl text-white bg-black/80 p-2 rounded-full hover:scale-110 transition"
        />
      </a>

      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram
          className="text-3xl text-white bg-black/80 p-2 rounded-full hover:scale-110 transition"
          
        />
      </a>

      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube
          className="text-3xl text-white bg-black/80 p-2 rounded-full hover:scale-110 transition"
        />
      </a>

      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin
          className="text-3xl text-white bg-black/80 p-2 rounded-full hover:scale-110 transition"
        />
      </a>
    </div>
  );
};

export default StickyIcon;
