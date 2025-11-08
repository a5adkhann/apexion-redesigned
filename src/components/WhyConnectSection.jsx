import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Ribbon,
  Rocket,
  ShieldCheck,
} from "lucide-react"; 

const WhyConnectSection = () => {
  const cards = [
    {
      icon: <Ribbon className="text-[#34C759] w-10 h-10 mb-4 mx-auto" />,
      title: "Strategic Guidance",
      desc: "We don’t just build — we help you define goals, analyze your audience, and create actionable roadmaps that drive real growth.",
      glow: "hover:shadow-[0_0_25px_#34C759aa]",
    },
    {
      icon: <Rocket className="text-[#00C2FF] w-10 h-10 mb-4 mx-auto" />,
      title: "End-to-End Solutions",
      desc: "From concept to launch, we handle design, development, and optimization — ensuring every detail aligns with your mission.",
      glow: "hover:shadow-[0_0_25px_#00C2FFaa]",
    },
    {
      icon: <ShieldCheck className="text-[#FF6B6B] w-10 h-10 mb-4 mx-auto" />,
      title: "Trusted Expertise",
      desc: "Our team has worked with startups, enterprises, and global brands — delivering reliability, innovation, and lasting partnerships.",
      glow: "hover:shadow-[0_0_25px_#FF6B6Baa]",
    },
  ];

  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-16 bg-black text-white relative"
      style={{
        backgroundImage: `url('whyConnect.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-12 h-[2px] bg-[#34C759]" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#FFFFFF]">
            Why Connect With Us?
          </h2>
          <div className="w-12 h-[2px] bg-[#34C759]" />
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Discover the Wellnex difference — where innovation meets integrity and every connection empowers your well-being journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.15}
              scale={1.02}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className={`group rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 p-8 transition-all duration-300 ${card.glow}`}
            >
              <div className="flex flex-col items-center text-center">
                {card.icon}
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyConnectSection;
