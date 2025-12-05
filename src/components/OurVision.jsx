import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaMicrochip, FaNetworkWired, FaGlobeAmericas } from "react-icons/fa";
import { Ribbon } from "lucide-react";

const OurVision = () => {
  const cards = [
    {
      icon: <FaMicrochip className="text-[#0f1a75] text-3xl sm:text-4xl mb-3" />,
      title: "AI-Driven Future",
      desc: "Creating intelligent systems that evolve, learn, and drive human-centered innovation.",
      gradient: "from-[#0f1a75] via-[#5a6df5] to-[#ffffff]",
      glow: "hover:shadow-[#0f1a75]/40",
      id: 1,
    },
    {
      icon: <FaNetworkWired className="text-[#5a6df5] text-3xl sm:text-4xl mb-3" />,
      title: "Connected Intelligence",
      desc: "Building seamless digital ecosystems where data, design, and AI coexist in perfect harmony.",
      gradient: "from-[#0f1a75] via-[#5a6df5] to-[#ffffff]",
      glow: "hover:shadow-[#5a6df5]/40",
      id: 2,
    },
    {
      icon: <FaGlobeAmericas className="text-[#ffffff] text-3xl sm:text-4xl mb-3" />,
      title: "Global Impact",
      desc: "Empowering industries and communities worldwide through sustainable digital transformation.",
      gradient: "from-[#0f1a75] via-[#5a6df5] to-[#ffffff]",
      glow: "hover:shadow-[#ffffff]/30",
      id: 3,
    },
  ];

  return (
    <section
      className="bg-black font-[Poppins] text-white py-14 sm:py-16 lg:py-24 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('line-vector.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="flex items-center text-[12px] mb-10 gap-2">
          <Ribbon className="text-blue-800"/>
          <p>Building Intelligence Beyond Boundaries</p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <video
              src="vision.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl shadow-lg"
            />
          </motion.div>


          <motion.div
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 justify-center lg:justify-start">
              <div className="w-10 sm:w-12 h-[2px] bg-[#0f1a75]" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0f1a75] to-[var(--light)]">
                Our Vision
              </h2>
            </div>

            <motion.p
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              At <span className="text-[#0f1a75] font-semibold">Apexion</span>, we envision a future where technology
              and intelligence converge to create purposeful innovation. Our mission is to engineer
              solutions that are not only smart but also sustainable — bridging AI, data, and design
              to empower businesses and inspire progress across the globe.
            </motion.p>

            <motion.div transition={{ duration: 0.2, ease: "easeOut" }}>
              <button className="md:flex hidden bg-gradient-to-l from-[#0f1a75] to-[#000000] text-white font-semibold px-10 py-3 text-md rounded-full transition-all duration-300 shadow-md hover:scale-105">
                EXPLORE NOW
              </button>
            </motion.div>
          </motion.div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.2}
                glareColor={i === 0 ? "#0f1a75" : i === 1 ? "#5a6df5" : "#ffffff"}
                scale={1.02}
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 p-5 sm:p-6"
              >
                <div
                  className={`bg-gradient-to-br ${card.gradient} opacity-20 group-hover:opacity-40 rounded-2xl -mx-5 -mt-5 mb-4 h-16 sm:h-20`}
                ></div>

                <div className="text-center px-2">
                  <motion.div className="mb-3" whileHover={{ scale: 1.05 }}>
                    {card.icon}
                  </motion.div>

                  <motion.h3
                    className="text-lg sm:text-xl font-bold mb-2 text-white"
                    whileHover={{ scale: 1.02 }}
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 text-xs sm:text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {card.desc}
                  </motion.p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
