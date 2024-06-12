import React, { useState } from 'react';
import WaterWave from 'react-water-wave';
import { motion } from 'framer-motion';
import SusImg from '/sus-img.jpg'; // Correct the import path for the image
import "./Sustainability.css"
const Sustainability = ({ index }) => {

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
    return (

        <div className='sus-container' style={{ width: '90%', height: '80vh', borderRadius: '20px', overflow: 'hidden' }}>

            <WaterWave
                style={{ width: '100%', height: '100%', imageRendering: 'pixelated', backgroundSize: '100%'}}
                imageUrl={SusImg}
                resolution={500}
            >
                {/* Wrap the content inside a function */}
                {({ drop }) => (
                    <div className='sus-wrapper' >
                        <div className='heading-bar-sus flex'>
                            <div>
                                <motion.h1 className='inter-bold sus-heading'
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
                                    }}>
                                    Sustainability
                                </motion.h1>
                            </div>
                        </div>
                        <p className='inter-medium sus-text'>At Bajaj Electricals, our commitment to mitigating the negative impact on the
                            environment includes eco-conscious efforts leveraged by responsible practices. We
                            remain steadfast in our efforts to save natural resources and create a better and
                            greener future for all. Our Green India and Clean India initiatives testify to our
                            commitment to ensuring environmental sustainability.
                        </p>
                        <a
                            className="btn-posnawr-sus"
                            href="#"

                            onMouseEnter={handleMouseEnter}
                            onMouseOut={handleMouseOut}
                            onClick={handleAnchorClick}
                        >
                            Read More
                            <span style={{ top: spanPosition.top, left: spanPosition.left }}></span>
                        </a>
                    </div>
                )}
            </WaterWave>
        </div>
    );
};

export default Sustainability;
