import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { MdOutlineVisibility } from "react-icons/md";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const CoreValuesSection = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-20 bg-gradient-to-r from-[var(--black)] to-[#0b0d13]">
      <div className="flex items-center justify-center sm:justify-start text-[11px] sm:text-sm md:text-base gap-2 mb-8 sm:mb-10 text-gray-300">
        <img
          src="./movingIcon.gif"
          width={22}
          height={22}
          className="object-contain"
          alt="moving icon"
        />
        <p className="text-xs">
          Our approach empowers us to create exceptional experiences that fuel growth
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-start gap-3 mb-6">
        <div className="w-12 h-[2px] bg-[var(--blue)]" />
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue)] to-[var(--light)]">
          Core Values
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <FaLightbulb className="text-[var(--light)] text-4xl sm:text-5xl mb-3" />,
            title: "Innovation",
            desc: "Using technology creatively to redefine architectural experiences.",
          },
          {
            icon: <GiTeamIdea className="text-[var(--light)] text-4xl sm:text-5xl mb-3" />,
            title: "Collaboration",
            desc: "Working closely with clients and partners for the best outcomes.",
          },
          {
            icon: <MdOutlineVisibility className="text-[var(--light)] text-4xl sm:text-5xl mb-3" />,
            title: "Vision",
            desc: "Pushing boundaries and envisioning future-ready architectural solutions.",
          },
        ].map((v, i) => (
          <Tilt
            key={i}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_4px_25px_var(--blue)] backdrop-blur-md border border-white/10 flex flex-col justify-start h-full min-h-[300px]"
            >
              {v.icon}
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                {v.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mt-auto">{v.desc}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;
