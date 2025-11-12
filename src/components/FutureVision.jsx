import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaDraftingCompass, FaLaptopCode, FaGlobeAmericas } from "react-icons/fa";

const FutureVision = () => {
  const features = [
    {
      icon: <FaDraftingCompass className="text-[#0f1a75] text-4xl sm:text-5xl mb-4" />,
      title: "AI-Driven Design",
      desc: "Leverage AI to generate intelligent architectural solutions, optimizing form, function, and sustainability.",
    },
    {
      icon: <FaLaptopCode className="text-[#0f1a75] text-4xl sm:text-5xl mb-4" />,
      title: "Digital Transformation",
      desc: "Integrate cutting-edge technology into your architectural workflow for smarter, future-ready projects.",
    },
    {
      icon: <FaGlobeAmericas className="text-[#0f1a75] text-4xl sm:text-5xl mb-4" />,
      title: "Global Impact",
      desc: "Empowering enterprises and communities worldwide with innovative, sustainable, and intelligent designs.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 px-6 sm:px-10 relative">
      <div className="max-w-6xl mx-auto flex flex-col text-center items-center">
       
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <div className="w-10 md:w-12 h-[2px] bg-[#0f1a75]" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0f1a75] to-[#000000]"
          >
            Shaping the Future of Architecture
          </motion.h2>
        </div>

        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 md:mb-14"
        >
          Apexion is building the next generation of intelligent architecture.
          From AI-driven design and sustainable planning to digital transformation,
          we create future-ready buildings and spaces that are innovative, efficient, and impactful.
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
                glareColor="#0f1a75"
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                scale={1.02}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300"
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  {feature.icon}
                </motion.div>
                <motion.h3
                  whileHover={{ scale: 1.02 }}
                  className="text-lg sm:text-xl font-semibold text-[#0f1a75] mb-2 mt-1"
                >
                  {feature.title}
                </motion.h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
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
            <button className="md:flex hidden bg-gradient-to-l from-[#0f1a75] to-[#000000] text-white font-semibold px-5 py-2 text-md rounded-full transition-all duration-300 shadow-md hover:scale-105">
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureVision;
