import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedDots.css';

const AnimatedDots = ({ rows = 14, columns = 7 }) => {
  const dots = Array(rows * columns).fill(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01, // Staggering the animation for each dot
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="dot-grid-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      style={{
        gridTemplateColumns: `repeat(${columns}, 5px)`,
        gridTemplateRows: `repeat(${rows}, 5px)`,
      }}
    >
      {dots.map((_, index) => (
        <motion.div key={index} className="dot" variants={dotVariants} />
      ))}
    </motion.div>
  );
};

export default AnimatedDots;
