import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Discover.css';

const Discover = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 });

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // Random position generator for scattered elements
    const getRandomPosition = () => {
        return `${Math.floor(Math.random() * 0)}%`;
    };

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
    // Logic for Position aware button end
    return (
        <div className='discover-sec' >
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
                        Explore</motion.h2>
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
                    Career at Bajaj</motion.h1>
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
                    Bajaj Electricals excels in consumer appliances and lighting solutions. Their business portfolio includes a wide range of <br />innovative products loved by consumers across India.</motion.p>
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

        <div className="containerd" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            
            {/* Squares initially scattered randomly */}
            <motion.div
                className="squared top-left"
                animate={{ x: isHovered ? '-170%' : getRandomPosition(), y: isHovered ? '400%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>
            <motion.img
                src='/discover1.png'
                className="imaged top-leftaa3"
                animate={{ x: isHovered ? '1%' : getRandomPosition(0), y: isHovered ? '1%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.img>
            <motion.img
                src='/discover2.png'
                className="imaged top-leftaa"
                animate={{ x: isHovered ? '60%' : getRandomPosition(), y: isHovered ? '0' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.img>
          
            <motion.img
                src='/discover5.png'
                className="imaged top-leftaa2"
                animate={{ x: isHovered ? '60%' : getRandomPosition(), y: isHovered ? '25%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.img>
            <motion.div
                className="squared top-lefta"
                animate={{ x: isHovered ? '250%' : getRandomPosition(), y: isHovered ? '40%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>
            <motion.div
                className="squared top-right"
                animate={{ x: isHovered ? '170%' : getRandomPosition(), y: isHovered ? '300%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>
            <motion.img
                src='/discover3.png'
                className="imaged top-rightaa"
                animate={{ x: isHovered ? '-58%' : getRandomPosition(), y: isHovered ? '-25%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.img>
              <motion.img
                src='/discover4.png'
                className="imaged top-rightaa2"
                animate={{ x: isHovered ? '-25%' : getRandomPosition(), y: isHovered ? '-60%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.img>
            <motion.div
                className="imaged bottom-left"
                animate={{ x: isHovered ? '450%' : getRandomPosition(), y: isHovered ? '40%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>
            <motion.img
            src='discover6.svg'
                className="squared bottom-right"
                animate={{ x: isHovered ? '-220%' : getRandomPosition(), y: isHovered ? '-30%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.img>
            
            {/* Additional elements initially scattered randomly */}
            {/* {Array.from({ length: 10 }).map((_, index) => (
                <motion.div
                    key={index}
                    className="additional-element"
                    animate={{ x: isHovered ? '0%' : getRandomPosition(), y: isHovered ? '0%' : getRandomPosition() }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                ></motion.div>
            ))} */}
        </div>
        </div>
    );
};

export default Discover;
