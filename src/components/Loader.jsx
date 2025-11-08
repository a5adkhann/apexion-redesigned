import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white backdrop-blur-3xl"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
          }}
          style={{
          
          }}
        >
          <img src="white-logo.png" alt="logo" />

          <div className="flex space-x-2 mt-6">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                className="w-3 h-3 bg-[#00ffcc] rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
              />
            ))}
          </div>

          <motion.p
            className="text-sm mt-5 text-black tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Initializing Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
