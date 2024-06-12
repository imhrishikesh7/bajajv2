import React, { useState, useEffect, useRef } from 'react'
import './Hero1.css'
// import { Tilt } from 'react-tilt';
// import Navbar from '../Navbar/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import { motion, useScroll, useTransform } from 'framer-motion'
import Discover2 from '../Discover/Discover2';


const Hero1 = ({ index }) => {

    const container = useRef(null);
    const { scrollY } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    const scaleIt = useTransform(scrollY, [0, 400], [1, 1.1]);
    const scaleIt2 = useTransform(scrollY, [0, 300], [1, 1]);
    // const scaleIt3 = useTransform(scrollY, [0, 200], [1, 1.4]);
    // Keep the height constant
    return (
        <div ref={container} className='hero-container'>
            <motion.div style={{ scale: scaleIt }} className='curved-hero flex'>
                <div className='elements-wrap'>
                    <Discover2/>
                </div>
                <motion.div style={{ scale: scaleIt2 }} className='hero-content animate'>
                    <motion.h1 className='inter-medium'
                        initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            x: index % 2 === 0 ? 20 : -20
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 0.50, // Animation duration
                                delay: 0.40
                            }
                        }}
                    >
                        Pursuing Excellence <br />To Redefine <br />Possibilities<span className='span1'></span>  <br /></motion.h1>
                    <p className='inter-medium'>Enabling innovation, integrity, impactful CSR initiatives <br /> and impactful CSR initiatives, fostering happiness.</p>
                    <div className='hero-strip flex'>
                        <button className='inter-bold'>Know More</button>
                        <img src="./users.svg" alt="" />
                        <p><span>1M+</span> Happy Customers</p>
                    </div>
                </motion.div>

                <Carousel fade className='appliances-slide animate' controls={false} interval={1000} style={{ zIndex: '1', overflow: 'hidden', borderRadius: '20px' }}>
                    <Carousel.Item>
                        <img src="./111.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: '-1' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="./222.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="./333.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Carousel.Item>
                </Carousel>

            </motion.div>

        </div>
    )
}

export default Hero1