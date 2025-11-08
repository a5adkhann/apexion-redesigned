import React from "react";
import { motion } from "framer-motion";
import { FaSpa, FaDumbbell } from "react-icons/fa";

const FlagshipApps = () => {
  const apps = [
    {
      icon: <FaSpa className="text-[#34C759] text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4" />,
      name: "SoulWhispers",
      tagline: "Your Pocket-Sized Wellness Companion",
      desc: "SoulWhispers helps users reconnect with calm and mindfulness through guided meditations, AI-powered journaling, and mood analytics — crafted to nurture peace in the digital age.",
      features: [
        "AI-powered mood journaling",
        "Telehealth & mental diagnostics",
        "Personalized provider connections",
        "Seamless booking & therapy sessions",
      ],
      image: "s1.png",
      btnText: "Download Now",
      link: "https://play.google.com/store/apps/details?id=com.innovadorsolutions.soulwispers&hl=en",
    },
    {
      icon: <FaDumbbell className="text-[#34C759] text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4" />,
      name: "GymKey",
      tagline: "Smart Access to Fitness, Anytime",
      desc: "GymKey unlocks gyms with a tap — track workouts, book sessions, and manage memberships with smart digital access for both users and gym owners.",
      features: [
        "One-tap gym access",
        "Workout analytics dashboard",
        "Membership management",
        "Live class scheduling",
      ],
      image: "s1.png",
      btnText: "Download Now",
      link: "https://play.google.com/store/apps/details?id=com.innovadorsolutions.gymkey&hl=en",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-24 font-[Poppins]">
      {/* Section Heading */}
      <motion.div
        className="mb-8 sm:mb-10 md:mb-14 flex justify-center items-center flex-col text-center px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
          <div className="w-8 sm:w-10 md:w-12 h-[2px] bg-[var(--blue)]" />
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue)] to-[var(--black)]">
            Our Flagship Apps
          </h2>
          <div className="hidden md:block w-12 h-[2px] bg-[var(--blue)]" />
        </div>
        <p className="text-black text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed px-2 sm:px-0">
          Innovating wellness through intelligence, empathy, and design.
        </p>
      </motion.div>

      {/* App Cards */}
      <div className="flex flex-col gap-14 sm:gap-20 md:gap-32 items-center justify-center">
        {apps.map((app, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8 sm:gap-10 md:gap-16 px-4 sm:px-6 md:px-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-[45%] flex justify-center"
            >
              <div className="max-w-[220px] sm:max-w-[260px] md:max-w-[320px]">
                <img
                  src={app.image}
                  alt={app.name}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div
              className={`w-full md:w-[45%] text-center md:text-left ${
                index % 2 === 0 ? "md:ml-8" : "md:mr-8"
              }`}
            >
              {app.icon}
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2 text-gray-900">
                {app.name}
              </h3>

              <div className="flex items-center justify-center md:justify-start mb-6 sm:mb-8 gap-2">
                <img src="./movingIcon.gif" width={20} className="min-w-[20px]" />
                <p className="text-[#34C759] text-sm sm:text-base">
                  {app.tagline}
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
                {app.desc}
              </p>

              <ul className="space-y-1 sm:space-y-2 text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
                {app.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex justify-center md:justify-start items-start"
                  >
                    <span className="text-[#34C759] font-bold mr-2">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Download Button */}
              <motion.div transition={{ duration: 0.2, ease: "easeOut" }}>
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-l from-green-600 to-green-950 text-white font-semibold px-4 sm:px-5 py-2 text-sm sm:text-md rounded-full transition-all duration-300 shadow-md hover:scale-105"
                >
                  {app.btnText}
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FlagshipApps;
