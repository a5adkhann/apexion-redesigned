import React from "react";
import { motion } from "framer-motion";

const ContactHeroSection = () => {
  return (
    <>
      <section
        className="px-8 md:px-20 pt-28 pb-16 text-left"
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
          Get in Touch with <br /> Wellnex Systems
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 max-w-2xl mt-6 text-lg leading-relaxed"
        >
          Let’s build something extraordinary. Whether you’re a business
          visionary, a creator, or an innovator — we’d love to connect and
          collaborate.
        </motion.p>
      </section>
    </>
  );
};

export default ContactHeroSection;
