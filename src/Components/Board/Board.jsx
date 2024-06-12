import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from "gsap";

import './Board.css';
import DynamicElements from '../Dynamic elements/DynamicElements';

const Board = ({ index }) => {
    const bgRef = useRef(null);
    const boardWrapperRef = useRef(null);
    const imgRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const bgElement = bgRef.current;
        const boardWrapperElement = boardWrapperRef.current;
        const imgElement = imgRef.current;
        // const cardElements = cardRefs.current;

        const slideRightAnimation = (element) => {
            gsap.to(element, {
                duration: 0.5,
                x: 40, // Slide 40 pixels to the right
                ease: "power2.out",
            });
        };

        const slideLeftAnimation = (element) => {
            gsap.to(element, {
                duration: 0.5,
                x: 20, // Slide 40 pixels to the left
                ease: "power2.out",
            });
        };

        const onMouseEnterHandler = () => {
            slideRightAnimation(boardWrapperElement);
            slideLeftAnimation(imgElement);
        };

        const onMouseLeaveHandler = () => {
            slideLeftAnimation(boardWrapperElement);
            slideRightAnimation(imgElement);
        };

        bgElement.addEventListener("mouseenter", onMouseEnterHandler);
        bgElement.addEventListener("mouseleave", onMouseLeaveHandler);

        return () => {
            bgElement.removeEventListener("mouseenter", onMouseEnterHandler);
            bgElement.removeEventListener("mouseleave", onMouseLeaveHandler);
        };
    }, []);

    const container = useRef(null);
    const { scrollY } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    const scaleIt = useTransform(scrollY, [0, 400], [1, 1.1]);

    return (
        <div ref={bgRef} className="board-container-outer">
            <DynamicElements className='dynamic-elements' />
            <motion.div ref={container} style={{ scale: scaleIt }} className='board-container flex'>
                <div ref={boardWrapperRef} className='board-wrapper'>
                    <div className='heading-bar-board flex'>
                        <div>
                            <motion.h2 className='inter-medium board-heading2'
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
                                }}>
                                Embracing sustainability
                            </motion.h2>
                            <motion.h1 className='inter-bold board-heading'
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
                                Empowering communities
                            </motion.h1>
                        </div>
                    </div>
                    <p className='inter-medium bob-text'>At Bajaj Electricals, our commitment to mitigating the negative impact on the
                        environment includes eco-conscious efforts leveraged by responsible practices. We
                        remain steadfast in our efforts to save natural resources and create a better and
                        greener future for all. Our Green India and Clean India initiatives testify to our
                        commitment to ensuring environmental sustainability.</p>
                </div>
                <motion.img ref={imgRef} className='best-of-bajaj' src="./best-of-bajaj.svg" alt=""
                    initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? -100 : 100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 1,
                        transition: {
                            duration: 0.50,
                            delay: 0.20
                        }
                    }}
                    exit={{ rotate: 0 }}
                />
            </motion.div>
        </div>
    );
}

export default Board;
