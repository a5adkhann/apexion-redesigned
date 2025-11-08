import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaBrain, FaHeart, FaGlobe } from "react-icons/fa";

const OurVision = () => {
  const cards = [
    {
      icon: <FaBrain className="text-[#1826c2] text-3xl sm:text-4xl mb-3" />,
      title: "Intelligent Wellness",
      desc: "AI-driven insights that personalize mental & physical health experiences.",
      gradient: "from-[#1e3c72] via-[#2a5298] to-[#34C759]",
      glow: "hover:shadow-[#34C759]/40",
      id: 1,
    },
    {
      icon: <FaHeart className="text-[#FF6B6B] text-3xl sm:text-4xl mb-3" />,
      title: "Empathy in Tech",
      desc: "Designing technology that heals, motivates, and connects — not overwhelms.",
      gradient: "from-[#ff9a9e] via-[#fecfef] to-[#fecfef]",
      glow: "hover:shadow-[#FF6B6B]/40",
      id: 2,
    },
    {
      icon: <FaGlobe className="text-[#4ECDC4] text-3xl sm:text-4xl mb-3" />,
      title: "Global Wellbeing",
      desc: "Bridging communities across the world with a shared mission of wellness.",
      gradient: "from-[#43e97b] via-[#38f9d7] to-[#4ECDC4]",
      glow: "hover:shadow-[#4ECDC4]/40",
      id: 3,
    },
  ];

  return (
    <section
      className="bg-[#0A0A0A] font-[Poppins] text-white py-14 sm:py-16 lg:py-24  bg-no-repeat 
  bg-cover 
  bg-center  "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 60, 0, 0.15), rgba(0, 0, 0, 0.85)), url('line-vector.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="flex items-center text-[12px] mb-10 gap-2">
          <img src="./movingIcon.gif" width={20} />
          <p>See beyond. Build beyond</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <video
              src="w1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl shadow-lg border border-white/10"
            />
          </motion.div>

          <motion.div
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 justify-center lg:justify-start">
              <div className="w-10 sm:w-12 h-[2px] bg-[#34C759]" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#f7f7f7]">
                Our Vision
              </h2>
            </div>

            <motion.p
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              To create a digital wellness ecosystem where technology empowers
              balance, community, and consciousness — blending innovation with
              human empathy. We believe in harnessing AI to deliver personalized
              wellness journeys, fostering global communities of support, and
              designing intuitive tools that prioritize mental health, emotional
              wellbeing, and sustainable habits.
            </motion.p>

            <motion.div
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <button
                className="md:flex hidden bg-gradient-to-l from-green-600 to-green-950 text-white font-semibold px-10 py-3 text-md rounded-full transition-all duration-300 shadow-md hover:scale-105"
              >
                JOIN THE TRIBE
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
                glareColor={
                  i === 0 ? "#34C759" : i === 1 ? "#FF6B6B" : "#4ECDC4"
                }
                scale={1.02}
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-5 sm:p-6"
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

                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 ${card.glow}`}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
