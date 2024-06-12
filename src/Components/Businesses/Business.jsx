import React from 'react'
import './Business.css'
import { motion } from 'framer-motion'
const Business = ({ index }) => {
    return (
        <div className='business-parent-h'>
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
                        Our</motion.h2>
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
                    Businesses</motion.h1>
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
            <motion.div className='flex business-row'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 }
            }}
            >
                <div className='overlay-container'>
                    <img className='business-img' src="./business1.jpg" alt="" />
                    <motion.img className='consumer-icon' src="./consumer-blue.svg" alt="" 
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
                    />
                    <motion.h3 className='consumer-tag inter-bold'
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
                            delay: 0.10
                        }
                    }}
                    >
                        Bajaj</motion.h3>

                    <div className="overlay">
                    <div className="overlay-text">
                            <img className='icon-mono' src="./appliances-mono.svg" alt="" />
                            <h4 className='inter-bold'>Bajaj</h4>
                            <p className='inter-light'>Bajaj introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>

                <div className='overlay-container'>
                    <img className='business-img' src="./business3.jpg" alt="" />
                    <motion.img className='consumer-icon' src="./fan-blue.svg" alt="" 
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
                    />
                    <motion.h3 className='consumer-tag inter-bold'
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
                            delay: 0.10
                        }
                    }}
                    >
                        Nex</motion.h3>
                    
                    <div className="overlay">
                    <div className="overlay-text">
                            <img className='icon-mono' src="./fan-mono.svg" alt="" />
                            <h4 className='inter-bold'>Nex</h4>
                            <p className='inter-light'>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className='overlay-container'>
                    <img className='business-img' src="./business4.jpg" alt="" />
                    <motion.img className='consumer-icon' src="./morphy-blue.svg" alt="" 
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
                    />
                    <motion.h3 className='consumer-tag inter-bold'
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
                            delay: 0.10
                        }
                    }}
                    >
                        MorphyRichards</motion.h3>
                   
                    <div className="overlay">
                        <div className="overlay-text">
                            <img className='icon-mono' src="./morphy-mono.svg" alt="" />
                            <h4 className='inter-bold'>MorphyRichards</h4>
                            <p className='inter-light'>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
                
            </motion.div>
            <motion.div className='flex business-row'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 }
            }}
            >
                <div className='overlay-container'>
                    <img className='business-img' src="./business2.jpg" alt="" />
                    <motion.img className='consumer-icon' src="./nirlep-blue.svg" alt="" 
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
                    />
                    <motion.h3 className='consumer-tag inter-bold' 
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
                            delay: 0.10
                        }
                    }}
                    >
                        Nirlep</motion.h3>

                    <div className="overlay">
                    <div className="overlay-text">
                            <img className='icon-mono' src="./nirlep-mono.svg" alt="" />
                            <h4 className='inter-bold'>Nirlep</h4>
                            <p className='inter-light'>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>

                
                <div className='overlay-container'>
                    <img className='business-img' src="./Consumer.png" style={{borderRadius: "22px"}} alt="" />
                    <motion.img className='consumer-icon' src="./lamp-blue.svg" alt="" 
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
                    />
                    <motion.h3 className='consumer-tag inter-bold'
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
                            delay: 0.10
                        }
                    }}
                    >
                        Consumer Lighting</motion.h3>
                   
                    <div className="overlay">
                        <div className="overlay-text">
                            <img className='icon-mono' src="./lamp-mono.svg" alt="" />
                            <h4 className='inter-bold'>Consumer Lighting</h4>
                            <p className='inter-light'>Bajaj Private Limited introduced Consumer Lights to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className='overlay-container'>
                    <img className='business-img' src="./illuminated.png" alt="" style={{borderRadius: "22px"}} / >
                    <motion.img className='consumer-icon' src="./morphy-blue.svg" alt="" 
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
                    />
                    <motion.h3 className='consumer-tag inter-bold'
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
                            delay: 0.10
                        }
                    }}
                    >
                        Professional Lighting</motion.h3>
                   
                    <div className="overlay">
                        <div className="overlay-text">
                            <img className='icon-mono' src="./morphy-mono.svg" alt="" />
                            <h4 className='inter-bold'>Professional Lighting</h4>
                            <p className='inter-light'>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </motion.div>
            
        </div>
    )
}

export default Business