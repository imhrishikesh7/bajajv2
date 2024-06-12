import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const LeadershipSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  };

  return (
    <div ref={ref} className='awards p-2'>
      {/* <div className="row text-center my-4">
        <div className="col">
          <motion.h6
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            Our
          </motion.h6>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Leadership
          </motion.h1>
        </div>
      </div> */}

      <div className="row my-4">
        <div className="col">
          <motion.h6
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '40px',fontWeight:'bold'}}
          >
            Our
          </motion.h6>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: '60px', fontWeight: 'bold', color: '#0d68c9' }}
          >
            Awards and Recognition
          </motion.h1>
        </div>
      </div>

      <div id="imageCarousel" className="carousel slide my-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row text-center">
              <motion.div
                className="col-md-4"
                initial="hidden"
                animate={controls}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
              >
                <img src="about_img-5.png" alt="" className="img-fluid" />
              </motion.div>
              <motion.div
                className="col-md-4"
                initial="hidden"
                animate={controls}
                variants={imageVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img src="about_img-6.png" alt="" className="img-fluid" />
              </motion.div>
              <motion.div
                className="col-md-4"
                initial="hidden"
                animate={controls}
                variants={imageVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img src="about_img-7.png" alt="" className="img-fluid" />
              </motion.div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row text-center">
              <motion.div
                className="col-md-4"
                initial="hidden"
                animate={controls}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
              >
                <img src="about_img-8.png" alt="" className="img-fluid" />
              </motion.div>
              <motion.div
                className="col-md-4"
                initial="hidden"
                animate={controls}
                variants={imageVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img src="about_img-9.png" alt="" className="img-fluid" />
              </motion.div>
              <motion.div
                className="col-md-4"
                initial="hidden"
                animate={controls}
                variants={imageVariants}
                transition={{ duration: 0.9, delay: 0.4 }}
              >
                <img src="about_img-10.png" alt="" className="img-fluid" />
              </motion.div>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#imageCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#imageCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default LeadershipSection;