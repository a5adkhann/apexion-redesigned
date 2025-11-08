import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";

const OurJourneySection = () => {
  return (
    <section
      className="relative bg-[#111827] py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 60, 0, 0.15), rgba(0, 0, 0, 0.85)), url('line-vector.svg')`,
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
        <p className="text-xs">Fuelled by dreams, driven by results</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          className="space-y-5 sm:space-y-7 text-gray-300 px-2 sm:px-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-start gap-3 mb-6">
          <div className="w-12 h-[2px] bg-[#34C759]" />
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#FFF]">
            Our Journey
          </h2>
        </div>

          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            Founded in 2023, Wellnex Systems began as a small vision — to merge
            the power of artificial intelligence with emotional intelligence.
          </p>

          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            Over time, we grew into a team of passionate creators, developers,
            and wellness advocates building products like SoulWhispers and
            GymKey to inspire smarter living.
          </p>

          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            Our path is just beginning. With every innovation, we aim to bring
            balance back to a fast-paced digital world.
          </p>
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
