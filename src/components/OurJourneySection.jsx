import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";

const OurJourneySection = () => {
  return (
    <section
      className="relative bg-[#111827] py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 26, 117, 0.7), rgba(0, 0, 0, 0.9)), url('line-vector.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center sm:justify-start text-[11px] sm:text-sm md:text-base gap-2 text-gray-300">
        <img
          src="./movingIcon.gif"
          width={22}
          height={22}
          className="object-contain"
          alt="moving icon"
        />
        <p className="text-xs">Fuelled by innovation, shaping the future</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          className="space-y-5 sm:space-y-7 text-gray-300 px-2 sm:px-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-start gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[var(--light)]" />
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue)] to-[#FFF]">
              Our Journey
            </h2>
          </div>

    
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light)]">2023 — Apexion Ltd. Comes to Life</h3>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed mt-1">
              Apexion Ltd. was founded with a mission to blend advanced technology and visionary architecture—creating environments that are intelligent, future-focused, and sustainably designed.
            </p>
          </div>

  
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light)]">2024 — Smart Architecture & Digital Integration</h3>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed mt-1">
              We completed our first flagship project, combining architectural innovation with digital solutions to deliver efficiency, intelligent automation, and modern design excellence.
            </p>
          </div>

     
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light)]">2025 — Scaling Sustainable Solutions</h3>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed mt-1">
              Through strategic partnerships and expanding teams, we began implementing eco-driven designs and digital products that empower businesses and communities to evolve smarter and faster.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light)]">2026 — Smart Cities & Future-Ready Environments</h3>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed mt-1">
              We introduced solutions focused on urban sustainability, smart infrastructure, and inclusive design—paving the way for intelligent, greener cities of tomorrow.
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center md:justify-end w-full">
          <div className="w-[85%] sm:w-[70%] md:w-[90%] lg:w-[80%] max-w-md">
            <Hero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection;
