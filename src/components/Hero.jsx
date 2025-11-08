import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
 

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center overflow-hidden ">

      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2  bg-green-400/20 rounded-full blur-[2px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div className="flex-1 flex justify-center relative z-10">
        <motion.div
        
        
          transition={{ duration: 0.8, }}
          className="relative w-[500px] h-[500px] rounded-full   overflow-hidden cursor-pointer"
        >
          <AnimatePresence mode="wait">
           
              <motion.div
                key="rabbit"
                className="absolute inset-0 flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <DotLottieReact
                  src="https://lottie.host/621877b8-483c-4a67-a546-fd91ccdb9178/uaDzo5rpJb.lottie"
                  loop
                  autoplay
                  style={{ width: "150%", height: "125%" }}
                />
              </motion.div>
       
             
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
