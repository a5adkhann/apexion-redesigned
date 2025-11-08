import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaRobot, FaNetworkWired, FaCloud } from "react-icons/fa";

const WhyWellnex = () => {
  const features = [
    {
      icon: (
        <FaDumbbell className="text-[#34C759] text-3xl sm:text-4xl mb-3 sm:mb-4" />
      ),
      title: "Integrated Wellness",
      desc: "Physical, mental, and emotional health united in one ecosystem.",
    },
    {
      icon: (
        <FaRobot className="text-[#34C759] text-3xl sm:text-4xl mb-3 sm:mb-4" />
      ),
      title: "AI-Driven Personalization",
      desc: "Smart insights that adapt to your unique lifestyle and goals.",
    },
    {
      icon: (
        <FaNetworkWired className="text-[#34C759] text-3xl sm:text-4xl mb-3 sm:mb-4" />
      ),
      title: "Scalable for Providers",
      desc: "Seamlessly supports individuals, gyms, and healthcare networks alike.",
    },
    {
      icon: (
        <FaCloud className="text-[#34C759] text-3xl sm:text-4xl mb-3 sm:mb-4" />
      ),
      title: "Built for the Future",
      desc: "Cloud-native, mobile-first, and privacy-conscious at every layer.",
    },
  ];

  return (
    <section className="bg-gray-50 py-14 sm:py-20 px-4 sm:px-8 md:px-16 text-center">

      <motion.div
        className="mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 justify-center sm:justify-start sm:ms-6 md:ms-16">
          <div className="w-10 sm:w-12 h-[2px] bg-[var(--blue)]" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue)] to-[var(--black)]">
            Why Wellnex ?
          </h2>
        </div>
        <p className="text-black text-sm sm:text-base md:text-lg font-inter max-w-2xl text-center sm:text-start mx-auto sm:ms-10 md:ms-16">
          Because the future of wellness deserves smarter, deeper, and more
          connected solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 sm:p-8 hover:border-green-950 hover:shadow-[0_4px_25px_rgba(0,255,100,0.15)] transition-all duration-200 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyWellnex;
