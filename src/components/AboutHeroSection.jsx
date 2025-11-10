import React from "react";
import { motion } from "framer-motion";

const AboutHeroSection = () => {
  return (
    <>
      <section
        className="relative py-20 sm:py-24 md:py-34 px-6 sm:px-12 md:px-20 lg:px-20 text-left border-b border-[--light]"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 26, 117, 0.7), rgba(0, 0, 0, 0.9)), url('line-vector.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent 
                     bg-gradient-to-r from-[var(--blue)] to-[var(--light)] mb-4 sm:mb-5"
        >
          About Apexion Information Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          We’re shaping the digital future with responsibility and innovation —
          creating smart, sustainable, and inclusive technology solutions that
          empower communities and businesses worldwide.
        </motion.p>
      </section>
    </>
  );
};

export default AboutHeroSection;
