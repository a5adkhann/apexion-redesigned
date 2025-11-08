import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JoinTheWellnessSection = () => {
  return (
    <>
      <section className="py-20 sm:py-24 text-center bg-[#0b0d13] px-4 sm:px-8"
       style={{
            backgroundImage: `
        url('joinTheWellnessBG.jpg')
      `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#34C759]" />
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#FFF]">
                Join the Wellness Revolution
              </h2>
            </div>
        </motion.h2>
        <p className="text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
          Be part of a global movement towards mindful, intelligent living.
          Together, let’s shape the future of well-being.
        </p>
        <div className="flex justify-center">
          <Link to="/contact" className="md:flex hidden bg-gradient-to-l from-green-600 to-green-950 text-white font-semibold px-5 py-2 text-md rounded-full transition-all duration-300 shadow-md hover:scale-105">
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
};

export default JoinTheWellnessSection;
