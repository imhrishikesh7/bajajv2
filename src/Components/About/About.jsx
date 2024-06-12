import React, { useState } from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 });

    // const handleHover = () => {
    //     setIsHovered(true);
    // };

    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    // };

    // const getRandomPosition = () => {
    //     return `${Math.floor(Math.random() * 0)}%`;
    // };

    // Logic for Position aware button start

    const handleMouseEnter = (e) => {
        const parentOffset = e.currentTarget.getBoundingClientRect();
        const relX = e.clientX - parentOffset.left;
        const relY = e.clientY - parentOffset.top;
        setSpanPosition({ top: relY, left: relX });
    };

    const handleMouseOut = (e) => {
        const parentOffset = e.currentTarget.getBoundingClientRect();
        const relX = e.clientX - parentOffset.left;
        const relY = e.clientY - parentOffset.top;
        setSpanPosition({ top: relY, left: relX });
    };

    const handleAnchorClick = (e) => {
        e.preventDefault();
    };
    return (

        <div className='about-parent' >
            {/* <div className='about-parent containerd-aboutxx' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}> */}
            {/* <motion.div
                    className="squared top-left-about"
                    animate={{ x: isHovered ? '0%' : getRandomPosition(), y: isHovered ? '-120%' : getRandomPosition() }}
                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                ></motion.div>

                <motion.div
                    className="squared top-lefta-about"
                    animate={{ x: isHovered ? '-75%' : getRandomPosition(), y: isHovered ? '-70%' : getRandomPosition() }}
                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                ></motion.div>

                <motion.div
                    className="squared top-lefta2-about"
                    animate={{ x: isHovered ? '-150%' : getRandomPosition(), y: isHovered ? '0%' : getRandomPosition() }}
                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                ></motion.div>

                <motion.div
                    className="squared top-right-about"
                    animate={{ x: isHovered ? '140%' : getRandomPosition(), y: isHovered ? '0%' : getRandomPosition() }}
                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                ></motion.div>
                <motion.div
                    className="squared top-right2-about"
                    animate={{ x: isHovered ? '0%' : getRandomPosition(), y: isHovered ? '130%' : getRandomPosition() }}
                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                ></motion.div>
                <motion.img
                    src='discover6.svg'
                    className="squared bottom-right-about"
                    animate={{ x: isHovered ? '70%' : getRandomPosition(), y: isHovered ? '60%' : getRandomPosition() }}
                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                ></motion.img> */}


            <div className='heading-bar-about'>
                <div className='heading-bar-about-p2'>
                    <motion.h2 className='inter-medium about-heading2'
                        initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            x: index % 2 === 0 ? 20 : -20
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 0.50 // Animation duration
                            }
                        }}
                    >
                        About</motion.h2>
                    <motion.h1 className='inter-bold about-heading'
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
                                delay: 0.20
                            }
                        }}
                    >
                        Bajaj Electricals</motion.h1>

                </div>

                <motion.p
                    className='inter-medium'
                    initial={{
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                        y: index % 2 === 0 ? -50 : 50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0, // Slide in to its original position
                        transition: {
                            duration: 0.50, // Animation duration
                        }
                    }}
                >
                    Globally renowned Bajaj Electricals, part of $100bn Bajaj Group, excels in consumer appliances and <br />lighting solutions for nearly 85 years.</motion.p>
            </div>
            <a
                className="btn-posnawr"
                href="#"
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
                onClick={handleAnchorClick}
            >
                Know more About Us
                <span style={{ top: spanPosition.top, left: spanPosition.left }}></span>
            </a>

            <div className='flex about-poster-container'>



                <div className='about1-wrapper'

                // animate={{ x: isHovered ? '5%' : getRandomPosition(), y: isHovered ? '-8%' : getRandomPosition() }}
                // transition={{ type: 'spring', stiffness: 90, damping: 15 }}

                // initial={{ opacity: 0, x: -100 }}
                // whileInView={{
                //     opacity: 1,
                //     x: 0,
                //     transition: { duration: 0.5 }
                // }}
                >
                    {/* <div className="arrow-container">
                        <img className='cta-arrow' src="./cta-arrow.svg" alt="" />
                        <img className='cta-arrow-hover' src="./about-cta-arrow-blue.svg" alt="" />
                    </div> */}
                    <img
                        className='about1'
                        src="./about1.svg"
                        alt=""
                    />
                    <p className='about1-text'>
                        We're lighting the way towards <br /> the nation's journey of progress.
                    </p>
                </div>
                <div
                    className='about2'

                // animate={{ x: isHovered ? '5%' : getRandomPosition(), y: isHovered ? '3%' : getRandomPosition() }}
                // transition={{ type: 'spring', stiffness: 90, damping: 15 }}

                // initial={{ opacity: 0, x: 100 }}
                // whileInView={{
                //     opacity: 1,
                //     x: 0,
                //     transition: { duration: 0.5 }
                // }}
                >
                    <div className="arrow-container2">
                        <img className='cta-arrow2' src="./cta-arrow.svg" alt="" />
                        <img className='cta-arrow-hover2' src="./about-cta-arrow-blue.svg" alt="" />
                    </div>
                    <img
                        src="./bajaj-group.jpeg"
                        alt=""

                    />
                </div>

            </div>
        </div>
    );
};
export default About;