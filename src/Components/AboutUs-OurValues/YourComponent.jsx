import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import "./YourComponent.css";

const YourComponent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const items = [
    { src: "about_img-15.png", alt: "Integrity", text: "Integrity" },
    { src: "about_img-16.png", alt: "Teamwork", text: "Teamwork" },
    { src: "about_img-17.png", alt: "Empowerment", text: "Empowerment" },
    { src: "about_img-18.png", alt: "Customer Delight", text: "Customer Delight" },
    { src: "about_img-19.png", alt: "Innovation", text: "Innovation" },
    { src: "about_img-20.png", alt: "Trust", text: "Trust" }
  ];

  return (
    <div ref={ref} className="row my-4 data-6">
      <div className="data-7 mt-4">
        <h6 style={{ color: "white", fontSize: "40px" }}>Our</h6>
        <h1 style={{ color: "white", fontSize: "60px", fontWeight: "bold" }}>Values</h1>
      </div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="data-5"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="img-data">
            <motion.img
              src={item.src}
              alt={item.alt}
              className="img-fluid"
              initial={{ scale: 0 }}
              animate={controls}
              variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            />
          </div>
          <div className="label-wrapper">
            <motion.p
              className="data-text"
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
              {item.text}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default YourComponent;