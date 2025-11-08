import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-gray-300 py-14 px-6 md:px-16 lg:px-28 border-t border-[#1b3b2a] font-[Poppins]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <img src="white-logo.png" alt="Wellnex Logo" className="w-36 mb-4" />
          <p className="text-gray-400 leading-relaxed font-inter text-sm">
            Empowering wellness through{" "}
            <span className="text-[#34C759] font-medium">AI</span> and innovation —  
            bridging mind, body, and technology for a healthier tomorrow.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3 text-lg font-poppins border-l-4 border-[#34C759] pl-3">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm font-inter">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#34C759] mt-1 text-sm" />
              <span>Tech Park, Clifton, Karachi, Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#34C759] text-sm" />
              <a
                href="tel:+923114567890"
                className="hover:text-[#34C759] transition duration-300"
              >
                +92 311 4567890
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#34C759] text-sm" />
              <a
                href="mailto:support@wellnex.com"
                className="hover:text-[#34C759] transition duration-300"
              >
                support@wellnex.com
              </a>
            </li>
          </ul>
        </div>

        <div className="font-inter">
          <h3 className="text-white font-semibold mb-3 text-lg font-poppins border-l-4 border-[#34C759] pl-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About",
              "Our Apps",
              "Why Wellness",
              "Future Vision",
              "Contact",
            ].map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-[#34C759] transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:text-right">
          <h3 className="text-white font-semibold mb-3 text-lg font-poppins border-l-4 border-[#34C759] pl-3 md:border-none md:pl-0">
            Stay Connected
          </h3>
          <div className="flex md:justify-end gap-3 mb-5">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-9 h-9 flex justify-center items-center bg-white/10 hover:bg-gradient-to-l from-green-600 to-green-950 rounded-full text-white hover:text-black transition-all duration-300 text-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-gray-500 text-xs font-inter">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#34C759]">Wellnex Systems</span>.  
            All rights reserved.
          </p>
        </div>
      </div>

      <motion.div className="border-t border-[#1b3b2a] mt-10 pt-5 text-center text-xs text-gray-500"
      initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
      >
        Built with 💚 by the Wellnex Team | Inspired by Health & Technology
      </motion.div>
    </footer>
  );
};

export default Footer;
