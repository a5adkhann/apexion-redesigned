import React from "react";
import { motion } from "framer-motion";

const LetsConnectSection = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] text-white flex flex-col justify-center p-10 md:p-16 border-t-2 border-gray-600">
         <div className="flex flex-col md:flex-row items-center justify-start gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#34C759]" />
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#FFF]">
                Let's Connect
              </h2>
            </div>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Fill out the form and we’ll get back to you shortly.
        </p>

        <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
        <ul className="space-y-4 text-gray-300 text-sm">
          <li className="flex items-start gap-3">
            <span className="text-[#34C759] mt-1">✔</span>
            <span>Our expert will review your request and contact you.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#34C759] mt-1">✔</span>
            <span>If needed, we’ll sign an NDA to ensure your privacy.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#34C759] mt-1">✔</span>
            <span>Our Pre-Sales Manager will send you a proposal.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#34C759] mt-1">✔</span>
            <span>Then we start working on your project together.</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LetsConnectSection;
