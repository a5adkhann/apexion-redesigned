import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 right-0 w-full h-1 bg-gradient-to-l from-[var(--light)] to-[var(--blue)]  origin-left z-50 backdrop-blur-sm"
      style={{ scaleX: scrollYProgress }}
    >
      <motion.div
        className="absolute inset-0 h-full bg-gradient-to-l "
        style={{ scaleX: scrollYProgress }}
      />
    </motion.div>
  );
};

export default ProgressBar;
