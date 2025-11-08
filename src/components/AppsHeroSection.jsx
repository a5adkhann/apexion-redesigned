import React from "react";
import { motion } from "framer-motion";

const AppsHeroSection = () => {
  return (
    <>
      <section
        className="relative py-20 sm:py-24 md:py-34 px-6 sm:px-12 md:px-20 lg:px-20 text-left border-b border-[#1b2e1b]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 60, 0, 0.15), rgba(0, 0, 0, 0.85)), url('line-vector.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#f8faf9] mb-4 sm:mb-5"
        >
          Wellness + Tech Balance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed"
        >
          Every app we create is a reflection of our commitment to well-being
          and progress. From emotional mindfulness to physical fitness, our
          products are designed to empower people to live with balance, clarity,
          and confidence — supported by technology that understands them.
        </motion.p>
      </section>
    </>
  );
};

export default AppsHeroSection;
