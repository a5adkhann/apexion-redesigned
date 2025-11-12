import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--black)] text-[var(--light)] pt-16 pb-8 px-6 md:px-16 lg:px-28 font-[Poppins]">
      

      <div className="max-w-7xl mx-auto mb-10 flex justify-center md:justify-start">
        <img src="/logo.png" alt="Apexion Logo" className="h-12 md:h-16" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <h3
            className="font-semibold mb-3 text-lg border-l-4 pl-3"
            style={{ borderColor: "var(--blue)" }}
          >
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li><span className="font-semibold">AI & Data</span></li>
            <li>AI Consulting & Solutions</li>
            <li>Generative AI</li>
            <li>Advanced Analytics</li>
            <li>Data Intelligence</li>
            <li className="font-semibold mt-3">Digital & Design</li>
            <li>Digital Transformation</li>
            <li>UI/UX & Experience Design</li>
            <li>Smart Platforms</li>
            <li className="font-semibold mt-3">Architecture</li>
            <li>Architectural Design</li>
            <li>Urban Planning</li>
            <li>3D Visualization</li>
          </ul>
        </div>

 
        <div>
          <h3
            className="font-semibold mb-3 text-lg border-l-4 pl-3"
            style={{ borderColor: "var(--blue)" }}
          >
            Technology & Cloud
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Cloud Architecture & Migration</li>
            <li>Cloud Applications</li>
            <li>Systems Modernization</li>
            <li>Managed Services</li>
            <li className="font-semibold mt-3">Digital Infrastructure</li>
            <li className="font-semibold">Cybersecurity</li>
            <li className="font-semibold">Emerging Tech</li>
            <li className="font-semibold">Smart Building Solutions</li>
          </ul>
        </div>


        <div>
          <h3
            className="font-semibold mb-3 text-lg border-l-4 pl-3"
            style={{ borderColor: "var(--blue)" }}
          >
            Industries
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Real Estate & Construction</li>
            <li>Banking & Financial Services</li>
            <li>Public Sector & Smart Cities</li>
            <li>Healthcare & Life Sciences</li>
            <li>Retail & E-Commerce</li>
          </ul>

          <h3
            className="font-semibold mt-6 mb-3 text-lg border-l-4 pl-3"
            style={{ borderColor: "var(--blue)" }}
          >
            Insights
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Case Studies</li>
            <li>Newsroom</li>
            <li>Whitepapers / E-Books</li>
            <li>Blogs</li>
          </ul>
        </div>


        <div>
          <h3
            className="font-semibold mb-3 text-lg border-l-4 pl-3"
            style={{ borderColor: "var(--blue)" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Who We Are</li>
            <li>Careers</li>
            <li>Our Leadership</li>
            <li>Partnerships</li>
            <li>Contact Us</li>
          </ul>


          <div className="mt-8">
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/apexionltd"
                className="bg-[#111] hover:bg-[var(--blue)] text-white p-3 rounded-full transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/apexionagency"
                className="bg-[#111] hover:bg-[var(--blue)] text-white p-3 rounded-full transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/apexionltd"
                className="bg-[#111] hover:bg-[var(--blue)] text-white p-3 rounded-full transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>


      <div
        className="max-w-9xl mx-auto px-6 mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400"
        style={{ borderColor: "var(--blue)" }}
      >
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Sitemap</a>
          <a href="#">Cookie Policy</a>
        </div>

        <p>@ 2025 Apexion Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
