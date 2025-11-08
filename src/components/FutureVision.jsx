import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaChartLine, FaAppleAlt, FaWatchmanMonitoring } from "react-icons/fa";

const FutureVision = () => {
  const features = [
    {
      icon: <FaWatchmanMonitoring className="text-[#34C759] text-4xl sm:text-5xl mb-4" />,
      title: "Wearable Integration",
      desc: "Connect your smartwatch and track real-time wellness data like never before.",
    },
    {
      icon: <FaAppleAlt className="text-[#34C759] text-4xl sm:text-5xl mb-4" />,
      title: "Nutrition & Meal Planning",
      desc: "Personalized diets designed for your body, your goals, and your pace of life.",
    },
    {
      icon: <FaChartLine className="text-[#34C759] text-4xl sm:text-5xl mb-4" />,
      title: "Corporate Wellness",
      desc: "Empower teams to stay healthy, happy, and productive through smart wellness insights.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f9fafb] to-white py-16 md:py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col text-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <div className="w-10 md:w-12 h-[2px] bg-[#34C759]" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#010904]"
          >
            What’s Coming Next
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 md:mb-14"
        >
          The future of wellness is closer than you think. Our unified Wellnex
          Platform will merge fitness, nutrition, mental health, and diagnostics
          into one intelligent, connected experience.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12 w-full">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.15}
                glareColor="#34C759"
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                scale={1.02}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-100"
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  {feature.icon}
                </motion.div>
                <motion.h3
                  whileHover={{ scale: 1.02 }}
                  className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 mt-1"
                >
                  {feature.title}
                </motion.h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div transition={{ duration: 0.2, ease: "easeOut" }}>
            <button className="md:flex hidden bg-gradient-to-l from-green-600 to-green-950 text-white font-semibold px-5 py-2 text-md rounded-full transition-all duration-300 shadow-md hover:scale-105">
              Get Early Access
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureVision;
