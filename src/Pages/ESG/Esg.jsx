import React, { useRef, useState } from 'react';
import { easeInOut, motion, useAnimation, useInView } from 'framer-motion';
import './Esg.css';
import UniversalHeader from '../../Components/Universal Header/UniversalHeader';

const Esg = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 });

    const data = [
        {
            title: 'Preserving the Environment',
            image: './esg/esgiv-icon1.png',
            content: [
                'Combating Climate change',
                'Enhancing Circularity',
                'Sustainable Supply Chain'
            ],
            list: [
                ['Climate action plan', 'Renewable energy usage'],
                ['Reduce, Reuse, Recycle', 'Waste management'],
                ['Ethical sourcing', 'Fair trade policies']
            ]
        },
        {
            title: 'Unlocking New Possibilities',
            image: './esg/esgiv-icon2.png',
            content: [
                'Innovation in Products',
                'Technology Advancements',
                'Future Strategies'
            ],
            list: [
                ['AI integration', 'Smart appliances'],
                ['R&D investments', 'Tech collaborations'],
                ['Market expansion', 'Sustainability goals']
            ]
        },
        {
            title: 'Empowering Our Team',
            image: './esg/esgiv-icon3.png',
            content: [
                'Employee Welfare',
                'Training Programs',
                'Inclusive Culture'
            ],
            list: [
                ['Health and safety', 'Work-life balance'],
                ['Skill development', 'Career growth'],
                ['Diversity and inclusion', 'Equal opportunities']
            ]
        },
        {
            title: 'Guarding Integrity',
            image: './esg/esgiv-icon4.png',
            content: [
                'Ethical Practices',
                'Transparency',
                'Compliance'
            ],
            list: [
                ['Code of conduct', 'Anti-corruption measures'],
                ['Open communication', 'Stakeholder engagement'],
                ['Regulatory adherence', 'Internal audits']
            ]
        }
    ];

    const pins = [
        { id: 'p1', delay: 0.2 },
        { id: 'p2', delay: 0.4 },
        { id: 'p3', delay: 0.6 },
        { id: 'p4', delay: 0.8 },
        { id: 'p5', delay: 1.0 },
        { id: 'p6', delay: 1.2 },
        { id: 'p7', delay: 1.4 },
        { id: 'p8', delay: 1.6 },
    ];

    // Animation variants
    const dropIn = {
        hidden: { y: -100, opacity: 0 },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: custom.delay
            }
        })
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

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const esgRef = useRef(null);
    const esgInView = useInView(esgRef, { triggerOnce: true, margin: '0px 0px -200px 0px' });

    const esgi1Ref = useRef(null);
    const esgi1InView = useInView(esgi1Ref, { triggerOnce: true, margin: '0px 0px -200px 0px' });

    const esgi2Ref = useRef(null);
    const esgi2InView = useInView(esgi2Ref, { triggerOnce: true, margin: '0px 0px -200px 0px' });

    const esgiiRef = useRef(null);
    const esgiiInView = useInView(esgiiRef, { triggerOnce: true, margin: '0px 0px -200px 0px' });


    const esgiiiRef = useRef(null);
    const esgiiiInView = useInView(esgiiiRef, { triggerOnce: true, margin: '0px 0px -200px 0px' });

    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once when image comes into view
        threshold: 0.5, // Trigger animation when 50% of the image is visible
    });

    const parentRef = useRef(null);

    
    const sectionVariants2 = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };
    const sectionVariants3 = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger each child's animation by 0.3 seconds
                ease: "easeInOut"
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,    // Duration of the individual item animations
                ease: "easeInOut" // Apply an easing function
            }
        },
    };

    const h1style = {
        "background-image": "linear-gradient(90deg in oklab, #235803, #45892A)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent"
    }
    
    return (
        <div className='esg-container'>
            
            <UniversalHeader ref={esgRef} esgInView={esgInView} 
             h1text={"Building a Brighter,\n More Sustainable Future"}
             ptext={"Sustainability is a core value that guides our business decisions. We are minimising our environmental impact, from optimising resources in manufacturing to offering eco-friendly products to our customers. This focus on sustainability allows us to drive circularity, efficient waste management, water and energy conservation, while also empowering communities. By making sustainability a core value, we believe we can create a brighter future for all."}
             img1={"./esg/esg-img1.png"}
             img2={"./esg/esg-img2.png"}
             h1style={h1style}
             />

            <div className='esg-container-ii'>
                <h1 className='esg-h1'>ESG Strategy</h1>
                <div className='esgii-wrap flex'>
                    <div className='esgii-img'>
                        <motion.img
                            ref={esgi1Ref}
                            initial="hidden"
                            animate={esgi1InView ? 'visible' : 'hidden'}
                            variants={sectionVariants2}
                            transition={{ duration: 0.7 }}
                            src="./esg/esgii-img1.png"
                            alt="" />
                    </div>
                    <div className='esgii-content'>
                        <motion.p className='esg-p'
                            ref={esgi1Ref}
                            initial="hidden"
                            animate={esgi1InView ? 'visible' : 'hidden'}
                            variants={sectionVariants3}
                            transition={{ duration: 0.6 }}
                            alt=""
                        >
                            For Bajaj Electricals, ESG has always been an integral part of our business strategy. As an entity with a rich legacy, we prioritise responsible operations and value creation for all stakeholders. Through targeted initiatives, we reduce our environmental impact, promote social well-being, and uphold strong governance practices. Our commitment to ESG ensures sustainable growth, innovation, and positive contributions to the environment, society, and economy.
                            Together, these pillars and focus areas provide us with a robust structure and clear direction for effectively addressing and incorporating ESG factors into our day-to-day business operations.
                        </motion.p>
                    </div>
                </div>
            </div>

            <motion.div
                className='esg-container-iii'
                ref={esgiiiRef}
                initial="hidden"
                animate={esgiiiInView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                <h2>Pillars of ESG</h2>
                <div className='flex pillar-row'>
                    <motion.div className='pillar-img' variants={itemVariants}>
                        {/* <img src="./esg/pillar1.png" alt="" /> */}
                        <video autoPlay muted loop className='pillar-video'
                        >
                            <source src="./videos/1.mp4" />
                        </video>
                        {/* <video src="./videos/1.mp4"></video> */}
                        <p className='pillar-p'>Preserving the <br /> Environment</p>
                    </motion.div>
                    <motion.div className='pillar-img' variants={itemVariants}>
                        <video autoPlay muted loop className='pillar-video'
                        >
                            <source src="./videos/2.mp4" />
                        </video>
                        <p className='pillar-p'>
                            Unlocking New <br /> Possibilities
                        </p>
                    </motion.div>
                    <motion.div className='pillar-img' variants={itemVariants}>
                        <video autoPlay muted loop className='pillar-video'
                        >
                            <source src="./videos/3.mp4" />
                        </video>
                        <p className='pillar-p'>
                            Empowering <br /> Our Team
                        </p>
                    </motion.div>
                    <motion.div className='pillar-img' variants={itemVariants}>
                        <video autoPlay muted loop className='pillar-video'
                        >
                            <source src="./videos/4.mp4" />
                        </video>
                        <p className='pillar-p'>
                            Guarding <br /> Integrity
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            <div className='esg-iv'>
                <div className='esgiv-thead flex'>
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`esgiv-title ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => handleClick(index)}
                            initial={{ background: "linear-gradient(to right, #e3e1e1, #ffffff)" }}
                            animate={index === activeIndex ? { background: "linear-gradient(90deg, #235803, #45892A)" } : { background: "linear-gradient(to right, #e3e1e1, #ffffff)" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }} // Use easeInOut for smoother transition
                        >
                            <p>{item.title}</p>
                        </motion.div>
                    ))}
                </div>
                <div className='esgiv-tdata flex'>
                    <div className='esgiv-img'>
                        <img src={data[activeIndex].image} alt="" />
                    </div>
                    {data[activeIndex].content.map((content, index) => (
                        <motion.div
                            key={index}
                            className='esgiv-innercard'>
                            <p>{content}</p>
                            <ul>
                                {data[activeIndex].list[index].map((item, subIndex) => (
                                    <li key={subIndex}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className='esg-v flex'>
                <div className='esgv-content'>
                    <h2>
                        By focusing on these pillars, <br />we aim to create long-term value for <br />stakeholders and the environment.
                    </h2>
                    <p>
                        We are continuously working to improve our ESG performance and welcome feedback from stakeholders. For more details on our ESG initiatives, please see our latest Business Responsibility and Sustainability Report.
                    </p>

                    {/* <motion.a
                        className='esgv-btn'
                        href="/"
                        ref={parentRef}
                        whileHover={{ translateY: -4 }}
                    >
                        <span>BRSR</span>
                        <span className="arrow-wrapper">
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="arrow-icon"
                                whileHover={{ translateY: -4 }} // Apply animation to the arrow
                            >
                                <line x1="17" y1="7" x2="7" y2="17"></line>
                                <polyline points="17 17 17 7 7 7"></polyline>
                            </motion.svg>
                        </span>
                    </motion.a> */}

                            <a
                                className="btn-posnawr-esg"
                                href="https://illumination.bajajelectricals.com/"
                                onMouseEnter={handleMouseEnter}
                                onMouseOut={handleMouseOut}
                            >
                                BRSR
                                <span style={{ top: spanPosition.top, left: spanPosition.left }}></span>
                            </a>



                </div>
                <div className='esgv-img'>
                    <motion.img src="./esg/esgv-img1.png"
                        ref={esgiiRef}
                        initial="hidden"
                        animate={esgiiInView ? 'visible' : 'hidden'}
                        variants={sectionVariants2}
                        transition={{ duration: 0.7 }}
                        alt="" />

                </div>
            </div>

            <div className='esg-vi'>
                <div className='flex esgvi-r'>
                    <div className='esgvi-content'>
                        <h1 className='esg-h1'>Building a Brighter Tomorrow</h1>
                        <p>
                            At Bajaj Electricals, we illuminate not just homes, but also the lives of those around us. Our Corporate Social Responsibility (CSR) initiatives reflect our deep commitment to giving back to society and creating a sustainable future.
                        </p>
                    </div>
                    <div className='esgvi-img'>
                        <motion.img
                            src="./esg/esgvi-img1.png" alt=""
                            ref={esgi2Ref}
                            initial="hidden"
                            animate={esgi2InView ? 'visible' : 'hidden'}
                            variants={sectionVariants2}
                            transition={{ duration: 0.7 }}
                        />
                    </div>
                </div>
                <div className='flex esgvi-r'>
                    <div className='esgvi-img'>
                        <motion.img src="./esg/esgvi-img2.png" alt=""
                            ref={esgi2Ref}
                            initial="hidden"
                            animate={esgi2InView ? 'visible' : 'hidden'}
                            variants={sectionVariants2}
                            transition={{ duration: 0.7 }}
                        />
                    </div>
                    <div className='esgvi-content'>
                        <p>
                            We invest in community development initiatives like environmental sustainability projects, education, healthcare, and arts and culture. We consistently seek innovative ways to address societal needs, aligning our business operations with broader environmental and societal goals.
                        </p>
                        {
                        /* <motion.a
                            className='esgv-btn'
                            href="/"
                            ref={parentRef}
                            whileHover={{ translateY: -4 }}
                        >
                            <span>CSR Report</span>
                            <span className="arrow-wrapper">
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="arrow-icon"
                                    whileHover={{ translateY: -4 }} // Apply animation to the arrow
                                >
                                    <line x1="17" y1="7" x2="7" y2="17"></line>
                                    <polyline points="17 17 17 7 7 7"></polyline>
                                </motion.svg>
                            </span>
                        </motion.a> */
                        }
                        
                        <a
                                className="btn-posnawr-esg"
                                href="https://illumination.bajajelectricals.com/"
                                onMouseEnter={handleMouseEnter}
                                onMouseOut={handleMouseOut}
                            >
                                CSR Report
                                <span style={{ top: spanPosition.top, left: spanPosition.left }}></span>
                            </a>
                    </div>
                </div>
            </div>

            <div className='esg-vii'>
                <h2>Our Focus Area</h2>
                <div className='esgvii-r flex'>
                    <div className='esgvii-card'>
                        <div className='esgvii-img'>
                            <img src="./esg/esgvii-1.png" alt="" />
                        </div>
                        <div className='engvii-content'>
                            <p>
                                Strengthening <br />environmental <br />sustainability
                            </p>
                        </div>
                    </div>
                    <div className='esgvii-card'>
                        <div className='esgvii-img'>
                            <img src="./esg/esgvii-2.png" alt="" />
                        </div>
                        <div className='engvii-content'>
                            <p>
                                Promoting <br />
                                education and <br />
                                skill development
                            </p>
                        </div>
                    </div>
                    <div className='esgvii-card'>
                        <div className='esgvii-img'>
                            <img src="./esg/esgvii-3.png" alt="" />
                        </div>
                        <div className='engvii-content'>
                            <p>
                                Providing <br />
                                quality <br />
                                healthcare
                            </p>
                        </div>
                    </div>
                    <div className='esgvii-card'>
                        <div className='esgvii-img'>
                            <img src="./esg/esgvii-4.png" alt="" />
                        </div>
                        <div className='engvii-content'>
                            <p>
                                Fostering art <br />
                                and culture
                            </p>
                        </div>
                    </div>
                    <div className='esgvii-card'>
                        <div className='esgvii-img'>
                            <img src="./esg/esgvii-5.png" alt="" />
                        </div>
                        <div className='engvii-content'>
                            <p>
                                Innovation hub
                            </p>
                        </div>
                    </div>
                    <div className='esgvii-card'>
                        <div className='esgvii-img'>
                            <img src="./esg/esgvii-6.png" alt="" />
                        </div>
                        <div className='engvii-content'>
                            <p>
                                Women <br />
                                empowerment
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='esg-viii'>
                <h1 className='esg-h1'>Our Focus Area</h1>
                <div className='india-map'>
                    {pins.map(pin => (
                        <motion.img
                            key={pin.id}
                            className={`loc-pin ${pin.id}`}
                            src="./esg/location-pin.svg"
                            alt=""
                            custom={pin}
                            variants={dropIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        />
                    ))}
                    <img className='india-map-img' src="./esg/3d-india-map.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Esg;
