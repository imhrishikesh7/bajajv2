import React, { useRef, useState, useEffect } from 'react';
import './BrandsBusiness.css';
import '../../Components/Discover/Discover.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrandsBusiness = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 });
    const [bgColor, setBgColor] = useState("");

    const colors = ["#208ee9", "#1d1d1d", "#dbdbdb", "#dbdbdb", "#208ee9", "#dbdbdb"]; // Colors for each details card

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(".photo:not(:first-child)", { opacity: 0, y: 50, scale: 1 });
            const animation = gsap.to(".photo:not(:first-child)", {
                opacity: 1, y: 0, duration: 0.5, stagger: 1
            });

            ScrollTrigger.create({
                trigger: ".gallery",
                start: "top top",
                end: "bottom bottom",
                pin: ".rightblock",
                animation: animation,
                scrub: true,
            });

            const details = gsap.utils.toArray('.details');
            details.forEach((detail, i) => {
                ScrollTrigger.create({
                    trigger: detail,
                    start: "top center",
                    end: "bottom center",

                    onEnter: () => gsap.to('.gallery', { backgroundColor: colors[i], duration: 1 }),
                    onEnterBack: () => gsap.to('.gallery', { backgroundColor: colors[i], duration: 1 })

                });
            });
        });
        return () => ctx.revert();
    }, []);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const getRandomPosition = () => {
        return `${Math.floor(Math.random() * 0)}%`;
    };

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

    const container2 = useRef(null);
    const { scrollY } = useScroll({
        target: container2,
        offset: ['start start', 'end end'],
    });
    const scaleIts = useTransform(scrollY, [0, 400], [1, 1.1]);
    const scaleIts2 = useTransform(scrollY, [0, 300], [1, 1]);

    return (
        <div>
            <div className='bab-container flex'>
                <motion.div ref={container2} className='bab-hero' style={{ scale: scaleIts }}>
                    <div className='bab-content' style={{ scale: scaleIts2 }}>
                        <motion.h2 className='inter-medium'
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
                            Enabling Innovation. <br />
                            Redefining Possibilities.
                        </motion.h2>
                        <p>
                            Bajaj electricals has been the trusted brand in consumer appliances for decade. We keep innovating our products for reliability and convenience and provide electrical solutions with the best quality tailored to our customers. We want to add convenience and elegance to modern homes.
                        </p>
                    </div>
                    <div className='bab-hero-right'>
                        <div className='discover-sec'>
                            <div className="ct2" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                                {/* Squares initially scattered randomly */}
                                <motion.img src='./brands-n-business/bab-i1.png'
                                    className="squared top-left-bab"
                                    animate={{ x: isHovered ? '40%' : getRandomPosition(), y: isHovered ? '-1%' : getRandomPosition() }}
                                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                                ></motion.img>
                                <motion.img src='./brands-n-business/bab-i2.png'
                                    className="squared top-lefta-bab"
                                    animate={{ x: isHovered ? '-25%' : getRandomPosition(), y: isHovered ? '4%' : getRandomPosition() }}
                                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                                ></motion.img>
                                <motion.img src='./brands-n-business/bab-i3.png'
                                    className="squared top-right-bab"
                                    animate={{ x: isHovered ? '17%' : getRandomPosition(), y: isHovered ? '1%' : getRandomPosition() }}
                                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                                ></motion.img>
                                <motion.img src='./brands-n-business/bab-i4.png'
                                    className="imaged bottom-left-bab"
                                    animate={{ x: isHovered ? '-57%' : getRandomPosition(), y: isHovered ? '4%' : getRandomPosition() }}
                                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                                ></motion.img>
                                <motion.div
                                    className="squared bottom-left2 sq"
                                    animate={{ x: isHovered ? '500%' : getRandomPosition(), y: isHovered ? '20%' : getRandomPosition() }}
                                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                                ></motion.div>
                                <motion.img src='./brands-n-business/bab-i5.png'
                                    className="squared bottom-left2-bab"
                                    animate={{ x: isHovered ? '85%' : getRandomPosition(), y: isHovered ? '-50%' : getRandomPosition() }}
                                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                                ></motion.img>
                                <motion.img src='./brands-n-business/bab-i6.png'
                                    className="squared bottom-left3-bab"
                                    animate={{ x: isHovered ? '40%' : getRandomPosition(), y: isHovered ? '-62%' : getRandomPosition() }}
                                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                                ></motion.img>
                                <motion.img
                                    src='discover6.svg'
                                    className="squared bottom-right sq"
                                    animate={{ x: isHovered ? '-320%' : getRandomPosition(), y: isHovered ? '10%' : getRandomPosition() }}
                                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                                ></motion.img>
                                <motion.img
                                    src='discover6.svg'
                                    className="squared bottom-right2 sq"
                                    animate={{ x: isHovered ? '-220%' : getRandomPosition(), y: isHovered ? '-45%' : getRandomPosition() }}
                                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                                ></motion.img>
                                <motion.img src='./brands-n-business/bab-i7.png'
                                    className="squared bottom-right2-bab"
                                    animate={{ x: isHovered ? '-22%' : getRandomPosition(), y: isHovered ? '-30%' : getRandomPosition() }}
                                    transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                                ></motion.img>
                            </div>
                        </div>
                        <div className='cloudy-div'></div>
                    </div>
                </motion.div>
                <h1 className='bab-2-heading'>Welcome to Bajaj Electricals</h1>
            </div>
            <div className="gallery" style={{ backgroundColor: bgColor }}>
                <div className='color-bg'></div>
                <div className="left">
                    <div className="details">
                        <div className='details-card dt1'>
                            <img src="/brands-n-business/bab-bri1.png" alt="" />
                            <p>
                                BAJAJ offers a diverse range of durable and useful appliances to meet the evolving needs of consumers. Through a deep understanding of consumer preferences, meaningful innovation and adherence to strict quality standards, the brand continues to be trusted by millions of Indian consumers.
                            </p>
                            {/* <a className='linka' href="https://www.bajajelectricals.com/consumer-products/"><div class="btna"> Know More</div> </a> */}
                            <a
                                className="btn-posnawr-bab bpb1"
                                href="https://www.bajajelectricals.com/consumer-products/"
                                onMouseEnter={handleMouseEnter}
                                onMouseOut={handleMouseOut}
                            >
                                Know more
                                <span style={{ top: spanPosition.top, left: spanPosition.left }}></span>
                            </a>
                        </div>
                    </div>
                    <div className="details">
                        <div className='details-card dt2'>
                            <img src="/brands-n-business/bab-bri2.png" alt="" />
                            <p>
                                <b>Introducing our newest innovation Aeirology technology.</b> Our fans take care of your comfort as its whisper-quiet motor circulates refreshing air throughout your space. With adjustable speed settings and a sleek, modern design, the NEX Fan series is the perfect blend of style and functionality, making the next leap in consumer products.
                            </p>
                            {/* <a className='linka' href="https://nexlife.in/"><div class="btna"> Know More</div> </a> */}
                            <a
                                className="btn-posnawr-bab bpb2"
                                href="https://nexlife.in/"
                                onMouseEnter={handleMouseEnter}
                                onMouseOut={handleMouseOut}
                            >
                                Know more
                                <span style={{ top: spanPosition.top, left: spanPosition.left }}></span>
                            </a>
                        </div>
                    </div>
                    <div className="details">
                        <div className='details-card dt3'>
                            <img src="/brands-n-business/bab-bri3.png" alt="" />
                            <p>
                                Morphy Richards understands need and offers intuitive and technologically advanced solutions that seamlessly integrate with the consumer's unique preferences. With a rich British heritage, the brand excels in product design and aesthetics, igniting happiness through visually appealing offerings.
                            </p>
                            {/* <a className='linka lb' href="https://www.morphyrichardsindia.com/"><div class="btna bb"> Know More</div> </a> */}
                            <a
                                className="btn-posnawr-bab bpb3"
                                href="https://www.morphyrichardsindia.com/"
                                onMouseEnter={handleMouseEnter}
                                onMouseOut={handleMouseOut}
                            >
                                Know more
                                <span style={{ top: spanPosition.top, left: spanPosition.left }}></span>
                            </a>
                        </div>
                    </div>
                    <div className="details">
                        <div className='details-card dt4'>
                            <img src="/brands-n-business/bab-bri4.png" alt="" />
                            <p>
                                Nirlep, a renowned brand in the world of non-stick cookware, stands out for its deep understanding of diverse cooking practices across India. With over 50 years of experience, Nirlep continues to redefine culinary experiences. With a relentless focus on modern lifestyles, the brand has pioneered advanced non-stick coatings and specialised heat-resistant cookware, delivering convenience and superior quality to our customers. 
                            </p>
                            {/* <a className='linka lb' href="https://www.nirlep.com/"><div class="btna bb"> Know More</div> </a> */}
                            <a
                                className="btn-posnawr-bab bpb3"
                                href="https://www.nirlep.com/"
                                onMouseEnter={handleMouseEnter}
                                onMouseOut={handleMouseOut}
                            >
                                Know more
                                <span style={{ top: spanPosition.top, left: spanPosition.left }}></span>
                            </a>
                        </div>
                    </div>
                    <div className="details">
                        <div className='details-card dt5'>
                            {/* <img src="/brands-n-business/bab-bri3.png" alt="" /> */}
                            <h1>Consumer Lighting</h1>
                            <p>
                                We have a diverse range of consumer lighting products which offers smart lighting solutions for the evolving needs consumers and complements modern home décors. Dive in to checkout our latest range of efficient, reliable and bright lighting solutions.
                            </p>
                            {/* <a className='linka' href="https://www.bajajelectricals.com/home-essentials-appliances/lighting/"><div class="btna"> Know More</div> </a> */}
                            <a
                                className="btn-posnawr-bab bpb1"
                                href="https://www.bajajelectricals.com/home-essentials-appliances/lighting/"
                                onMouseEnter={handleMouseEnter}
                                onMouseOut={handleMouseOut}
                            >
                                Know more
                                <span style={{ top: spanPosition.top, left: spanPosition.left }}></span>
                            </a>
                        </div>
                    </div>
                    <div className="details">
                        <div className='details-card dt6'>
                            {/* <img src="/brands-n-business/bab-bri3.png" alt="" /> */}
                            <h1>Professional Lighting</h1>
                            <p>
                                Our end to end offerings are designed to provide unparalleled quality, durability, and reliability. Whether it is for commercial spaces, industrial facilities, or outdoor spaces, our advanced lighting solutions ensure optimal illumination and create a sense of security. With a focus on delivering superior performance and energy efficiency, our professional lighting solutions are trusted by businesses and industries across diverse sectors.
                            </p>
                            {/* <a className='linka lb' href="https://illumination.bajajelectricals.com/"><div class="btna bb"> Know More</div> </a> */}
                            <a
                                className="btn-posnawr-bab bpb3"
                                href="https://illumination.bajajelectricals.com/"
                                onMouseEnter={handleMouseEnter}
                                onMouseOut={handleMouseOut}
                            >
                                Know more
                                <span style={{ top: spanPosition.top, left: spanPosition.left }}></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="rightblock">
                    <div className="photo">
                        <div className='dynamic-color dc1'>
                            <img
                                src="./brands-n-business/bajaj.jpeg"
                                alt="img-1"
                            />
                        </div>
                    </div>
                    <div className="photo">
                        <div className='dynamic-color dc2'>
                            <img
                                src="./brands-n-business/nexx.jpeg"
                                alt="img-2"
                            />
                        </div>
                    </div>
                    <div className="photo">
                        <div className='dynamic-color dc3'>
                            <img
                                src="./brands-n-business/mr.jpg"
                                alt="img-3"
                            />
                        </div>
                    </div>
                    <div className="photo">
                        <div className='dynamic-color dc4'>
                            <img
                                src="./brands-n-business/nirlep.jpeg"
                                alt="img-3"
                            />
                        </div>
                    </div>
                    <div className="photo">
                        <div className='dynamic-color dc5'>
                            <img
                                src="./brands-n-business/clight.jpeg"
                                alt="img-3"
                            />
                        </div>
                    </div>
                    <div className="photo">
                        <div className='dynamic-color dc6'>
                            <img
                                src="./brands-n-business/plight.jpeg"
                                alt="img-3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandsBusiness;

