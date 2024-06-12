import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Career.css';

const Career = ({ index }) => {
    const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 });

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

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <div className='career-section'>
            <div className='heading-bar-about'>
                <div className='heading-bar-about-p2'>
                    <motion.h2 className='inter-medium about-heading2'
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? 20 : -20
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.50
                            }
                        }}
                    >
                        Explore
                    </motion.h2>
                    <motion.h1 className='inter-bold about-heading'
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? 20 : -20
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.50,
                                delay: 0.20
                            }
                        }}
                    >
                        Career at Bajaj
                    </motion.h1>
                </div>
                <motion.p
                    className='inter-medium'
                    initial={{
                        opacity: 0,
                        y: index % 2 === 0 ? -50 : 50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.50,
                        }
                    }}
                >
                    Bajaj Electricals excels in consumer appliances and lighting solutions. Their business portfolio includes a wide range of <br />innovative products loved by consumers across India.
                </motion.p>
            </div>
            <a
                className="btn-posnawr"
                href="#"
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
                onClick={handleAnchorClick}
            >
                Discover Jobs @ Bajaj
                <span style={{ top: spanPosition.top, left: spanPosition.left }}></span>
            </a>

            <motion.div
                className='career-megabox flex'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >
                <div className='dc-elem2'></div>
                <motion.div className='career-lbox cp' variants={itemVariants}>
                    <motion.img
                        src="./bel10.png"
                        alt=""
                    />
                </motion.div>
                <div className='career-rbox-wrap'>
                    <div className='career-rbox-row flex'>
                        <motion.div className='career-rbox1 cp' variants={itemVariants}>
                            <motion.img
                                src="./bel1.jpeg"
                                alt=""
                            />
                        </motion.div>
                        <motion.div className='career-rbox2 cp' variants={itemVariants}>
                            <motion.img
                                src="./bel3.jpeg"
                                alt=""
                            />
                        </motion.div>
                    </div>
                    <div className='career-rbox-row crrb flex'>
                        <motion.div className='career-rbox2 cp' variants={itemVariants}>
                            <motion.img
                                src="./bel6.jpeg"
                                alt=""
                            />
                        </motion.div>
                        <motion.div className='career-rbox1 cp' variants={itemVariants}>
                            <motion.img
                                src="./bel2.jpeg"
                                alt=""
                            />
                        </motion.div>
                    </div>
                </div>
                <img className='dc-elem1' src="discover6.svg" alt="" />
            </motion.div>
        </div>
    )
}

export default Career;
