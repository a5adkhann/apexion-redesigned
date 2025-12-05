import React from "react";
import { motion } from "framer-motion";
import { Ribbon, CheckCircle } from "lucide-react";

const timelineData = [
  {
    year: "2023 — Apexion Ltd. Comes to Life",
    text: "Apexion Ltd. was founded with a mission to blend advanced technology and visionary architecture—creating environments that are intelligent, future-focused, and sustainably designed.",
    position: "start",
  },
  {
    year: "2024 — Smart Architecture & Digital Integration",
    text: "We completed our first flagship project, combining architectural innovation with digital solutions to deliver efficiency, intelligent automation, and modern design excellence.",
    position: "end",
  },
  {
    year: "2025 — Scaling Sustainable Solutions",
    text: "Through strategic partnerships and expanding teams, we began implementing eco-driven designs and digital products that empower businesses and communities to evolve smarter and faster.",
    position: "start",
  },
  {
    year: "2026 — Smart Cities & Future-Ready Environments",
    text: "We introduced solutions focused on urban sustainability, smart infrastructure, and inclusive design—paving the way for intelligent, greener cities of tomorrow.",
    position: "end",
  },
];

const OurJourneySection = () => {
  return (
    <section
      className="relative bg-black py-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 24, 117, 0.15), rgba(0, 0, 0, 0.85)), url('line-vector.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header Ribbon */}
      <div className="flex mb-16 items-center justify-center sm:justify-start gap-3 text-gray-300">
        <Ribbon className="text-blue-600 w-5 h-5" />
        <p className="uppercase tracking-wide text-xs sm:text-sm">
          Fuelled by innovation, shaping the future
        </p>
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-[var(--light)]"></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
            Our Journey
          </h2>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-blue-900/50 ml-4">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: item.position === "start" ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-14 ml-6`}
          >
            {/* Timeline Marker */}
            <div className="absolute -left-3 top-2">
              <CheckCircle className="w-6 h-6 text-blue-500 drop-shadow-md" />
            </div>

            {/* Card */}
            <div
              className="
                bg-blue-900/20 backdrop-blur-md border border-blue-800/30 
                shadow-xl rounded-xl p-5 sm:p-6 text-gray-300 
                hover:bg-blue-900/30 transition-all duration-300
              "
            >
              <h3 className="font-semibold text-lg sm:text-xl text-blue-300">
                {item.year}
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-400">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurJourneySection;
