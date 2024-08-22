import React, { forwardRef } from 'react';
import './UniversalHeader.css';
import { motion } from 'framer-motion';

const UniversalHeader = forwardRef(({ esgInView , h1text, ptext, img1, img2, h1style, pstyle}, ref) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay = 0.1) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        delay,
      },
    }),
  };

  const imageVariants2 = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay = 0.4) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        delay,
      },
    }),
  };

  return (
    <div className='universal-container'>
      <motion.div
        className="esg-hero flex"
        ref={ref}
        initial="hidden"
        animate={esgInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <div className="esg-content">
          <h1 className="esg-h1" style={h1style}>
            {h1text}
          </h1>
          <p className="esg-p" style={pstyle}>
            {ptext}
          </p>
        </div>
        <div className="esg-img">
          <motion.img
            className="esg-img1"
            // src="./esg/esg-img1.png"
            src={img1}
            alt=""
            variants={imageVariants}
          />
          <motion.img
            className="esg-img2"
            src={img2}
            // src="./esg/esg-img2.png"
            alt=""
            variants={imageVariants2}
          />
        </div>
      </motion.div>
    </div>
  );
});

export default UniversalHeader;
