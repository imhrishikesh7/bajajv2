import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Discover.css';

const Discover2 = ({ index }) => {
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
            
        <div className="ct2" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            
            {/* Squares initially scattered randomly */}
            <motion.div
                className="squared top-left sq"
                
                animate={{ x: isHovered ? '170%' : getRandomPosition(), y: isHovered ? '400%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>

            <motion.div
                className="squared top-lefta sq"
                animate={{ x: isHovered ? '250%' : getRandomPosition(), y: isHovered ? '40%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>
            <motion.div
                className="squared top-right sq"
                animate={{ x: isHovered ? '-170%' : getRandomPosition(), y: isHovered ? '300%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>

            <motion.div
                className="imaged bottom-left sq"
                animate={{ x: isHovered ? '450%' : getRandomPosition(), y: isHovered ? '40%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>
            <motion.div
                className="squared bottom-left2 sq"
                animate={{ x: isHovered ? '500%' : getRandomPosition(), y: isHovered ? '20%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.div>
            <motion.img
            src='discover6.svg'
                className="squared bottom-right sq"
                animate={{ x: isHovered ? '-220%' : getRandomPosition(), y: isHovered ? '-30%' : getRandomPosition() }}
                transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            ></motion.img>
            <motion.img
            src='discover6.svg'
                className="squared bottom-right2 sq"
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

export default Discover2;
