import React, { useRef } from 'react'
import { easeInOut, motion, useAnimation, useInView } from 'framer-motion';

import UniversalHeader from '../../Components/Universal Header/UniversalHeader';
import AnimatedDots from '../../Components/AnimatedDots/AnimatedDots';

const AboutUsNew = () => {
    const aboutUsRef = useRef(null);
    const aboutUsInView = useInView(aboutUsRef, { triggerOnce: true, margin: '0px 0px -200px 0px' });

    const h1style = {
        "color": "white",
    }
    const pstyle = {
        "color": "white",
    }
    return (
        <div className='about-us-container-main marginal'>
            <div className='about-us-header-container'>
                <UniversalHeader ref={aboutUsRef} esgInView={aboutUsInView}
                    h1text={"Brighten Up,\nyour World"}
                    ptext={"A world where innovation illuminates every moment and sustainability shows the way forward to a better tomorrow."}
                    img1={"./about-us/about-us-head-img1.png"}
                    img2={"./about-us/about-us-head-img2.png"}
                    h1style={h1style}
                    pstyle={pstyle}
                />
            </div>
            <section className='about-sec-2'>
                <h1>About Bajaj Electricals</h1>
                <div className='sec-2-image-wrap'>
                    <img src="./about-us/about-sec2-img1.jpg" alt="" />
                    <div className='sec-2-tag'>
                        <h2>
                            Making this a <br />
                            #DecadeOfBajajElectricals
                        </h2>
                        <p>
                            Bajaj Electricals, a pioneer in the Indian Fast Moving Electrical Goods and Lighting Solutions industries, continues its transformation journey, focusing on consumer-centricity, product innovation, and brand reinvention. We have emphasised our commitment to enhancing consumer experiences through a deep understanding of their needs and preferences. This approach drives the development of innovative products tailored to meet evolving market demands.
                        </p>
                        <div className='animated-dots-wrapper'>
                            <AnimatedDots rows={14} columns={7} />
                        </div>
                    </div>
                </div>
                <div className='sec-2-scrolled-container '>
                    <div className='d-flex scrollable-text'>
                        <div className='gradient-line'></div>
                        <p>
                            During the reporting year, we undertook the strategic demerger of our Engineering, Procurement and Construction (EPC) division into the now listed, Bajel Projects Limited, demonstrating our focus on enhancing operational agility. This development has sharpened our focus on becoming a consumer-centric powerhouse in the household appliances, fans and lighting segments. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sed quaerat architecto ipsum veniam quibusdam aliquam odio dolor doloremque voluptatem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem placeat repudiandae saepe consectetur hic mollitia temporibus earum similique nisi molestias ab, ipsum, voluptatibus quaerat deserunt. Deleniti ipsam voluptatibus iusto iure repudiandae doloremque sed harum.
                        </p>
                    </div>
                    <h2 className='my-4 px-3'>
                        We’re taking strides towards making this a <br />
                        #DecadeOfBajajElectricals.
                    </h2>
                    <div className='animated-dots-wrapper2'>
                        <AnimatedDots rows={14} columns={7} />
                    </div>
                </div>
                <div className='sec2-gradient-box d-flex'>
                    <p>
                        Our efforts in product innovation are not only evident in the launch of technologically advanced appliances but also in our sustainable initiatives, aligning with the growing environmental consciousness among customers.
                    </p>
                    <div className='sec2-grad-box-img-container'>
                        <img src="./about-us/sec2-gradeient-box-img2.png" alt="" />
                    </div>
                </div>

                <h1>What Propels Us</h1>
                <div className='sec2-what-propels d-flex'>
                    <div className='animated-dots-wrapper3'>
                        <AnimatedDots rows={14} columns={7} />
                    </div>
                    <div className='propels-vision'>
                        <h2>Vision</h2>
                        <p>
                            Enhancing <br />
                            quality of life and <br />
                            bringing <br />
                            happiness with <br />
                            sustainability.
                        </p>
                    </div>
                    <img src="./about-us/sec2-propels-img3.png" alt="" />
                </div>
            </section>
            <section className='about-sec3'>
                <div className='sec3-values row'>
                    <div className='col-md-6'>
                        <h2 className='text-light'>Values</h2>
                        <div className='d-flex icons-wrap'>
                            <div className=' icon-box'>
                                <img src="./about-us/val-ico1.svg" alt="" />
                                <p>INTEGRITY</p>
                            </div>
                            <div className='icon-box'>
                                <img src="./about-us/val-ico2.svg" alt="" />
                                <p>TEAMWORK</p>
                            </div>
                            <div className='icon-box'>
                                <img src="./about-us/val-ico3.svg" alt="" />
                                <p>EMPOWERMENT</p>
                            </div>
                            <div className=' icon-box'>
                                <img src="./about-us/val-ico4.svg" alt="" />
                                <p>CUSTOMER <br />DELIGHT</p>
                            </div>
                            <div className='icon-box'>
                                <img src="./about-us/val-ico5.svg" alt="" />
                                <p>INNOVATION</p>
                            </div>
                            <div className='icon-box'>
                                <img src="./about-us/val-ico6.svg" alt="" />
                                <p>TRUST</p>
                            </div>
                        </div>
                    </div>
                    <div className='values-img'>
                        <img src="./about-us/values-img1.png" className='values-img1' alt="" />
                        <div className='values-img2'>
                            <img src="./about-us/values-img2.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className='sec2-leadership'>
                    <div className='heading-strip mb-5'>
                        <h1 className='gradient-h1'>Our Leadership</h1>
                        <p>Lighting the Way</p>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-6 col-md-3 mb-4">
                                <img src="./about-us/l1.webp" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-3 mb-4">
                                <img src="./about-us/l2.webp" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-3 mb-4">
                                <img src="./about-us/l3.webp" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-3 mb-4">
                                <img src="./about-us/l4.webp" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-3 mb-4">
                                <img src="./about-us/l5.webp" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-3 mb-4">
                                <img src="./about-us/l6.webp" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-3 mb-4">
                                <img src="./about-us/l7.webp" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-3 mb-4">
                                <img src="./about-us/l8.webp" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-3 offset-md-3 mb-4">
                                <img src="./about-us/l9.webp" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-3 mb-4">
                                <img src="./about-us/l10.webp" class="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sec3-history d-flex'>
                    <div className='history-left'>
                        <div className='heading-strip mb-5'>
                            <h1 className='gradient-h1'>Our History</h1>
                            <p>Upholding our legacy</p>
                        </div>
                        <img src="./about-us/sec3-history.png" alt="" />
                        <div className='animated-dots-wrapper4'>
                            <AnimatedDots rows={14} columns={7} />
                        </div>
                    </div>
                    <div className='history-right'>
                        <p className='p-big'>
                            Excellence, innovation and trust are the hallmarks of Bajaj. Since 1926, our legacy has been blazing a trail of innovation, creating happiness with sustainability at the core. Our Group  stands strong as part of India’s most revered business conglomerate, a consistent value creator for millions of stakeholders and the nation.
                        </p>
                        <p>
                            The Group’s relentless initiatives to adapt, innovate and deliver quality solutions have propelled us to new heights of excellence. From automobiles and insurance to consumer appliances, financial services, engineering, procurement and construction, material handling, travel and tourism, steel, and fast-moving electrical goods, the Group’s zeal for innovation continues unabated.
                        </p>
                        <p>
                            Founded in 1938 as Radio Lamp Works, we evolved into Bajaj Electricals Limited in 1960, signifying the commencement of a new journey. Our glorious journey witnessed several milestones, including setting up manufacturing units, energy generation units and acquisitions of important brands such as Morphy Richards and Nirlep, which enabled us to expand into uncharted markets and maximise value creation for our diverse customers and shareholders.
                        </p>
                    </div>
                </div>

                <div className='sec3-awards'>
                    <div className='heading-strip mb-5'>
                        <h1 className='gradient-h1'>Awards And Recognition</h1>
                        <p>Moments we cherish</p>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-6 col-md-4 mb-4">
                                <img src="./about-us/aw1.png" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-4 mb-4">
                                <img src="./about-us/aw2.png" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-4 mb-4">
                                <img src="./about-us/aw3.png" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-4 mb-4">
                                <img src="./about-us/aw4.png" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-4 mb-4">
                                <img src="./about-us/aw5.png" class="img-fluid" alt="" />
                            </div>
                            <div class="col-6 col-md-4 mb-4">
                                <img src="./about-us/aw6.png" class="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUsNew