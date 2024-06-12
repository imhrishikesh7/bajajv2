import React from 'react';
import { motion } from "framer-motion";
import "./AboutUs.css";
import MyComponent from '../../Components/AboutUs-Unveiling/MyComponent';
import LeadershipSection from '../../Components/AboutUs-Leadership/LeadershipSection';
import YourComponent from '../../Components/AboutUs-OurValues/YourComponent';


const AboutUs = () => {
  return (
    <div className="container-about">
      <div className="au-banner-container">
        <div className='row au-banner'>
           {/* <video src="your_video.mp4" controls className="video-fluid animate-video">
                Your browser does not support the video tag.
           </video> */
           <img src="about_img-1.png" alt="" className="img-fluid animate-image" />
           }  
      </div>
      </div>
      <div className="row  my-4 mb-4 pb-4 main">
        <div className="col data">
          <h1 className="animated-text mx-2 ">85+</h1>
          <p className="animated-text">Years of Experience</p>
          <p className="separator">|</p>
        </div>
        <div className="col data">
          <h1 className="animated-text mx-2">$100 BN</h1>
          <p className="animated-text">Multinational Conglomerate</p>
          <p className="separator">|</p>
        </div>
        <div className="col data">
          <h1 className="animated-text mx-2">4k+</h1>
          <p className="animated-text">Happy Customers</p>
        </div>
      </div>
       
      <MyComponent/>

      <YourComponent/>

      <LeadershipSection/>
      
      <div className='history mt-4'>
            <div className='row his-headbar'>
                 <h4 style={{fontSize:'40px'}}>Our</h4>
                 <h1 style={{fontSize:'60px',fontWeight:'700'}}>History</h1>
                 <p className='history-1'>Bajaj Electricals is a part of the conglomerate of the Bajaj Group, a name that symbolises excellence, innovation and trust. Established in 1926 by the visionary philanthropist Jamnalal Bajaj, the Bajaj Group is recognised as one of India’s most esteemed business houses.</p>
            </div>
            <div className='row align-items-center'>
                 <div className='col-md-8 py-4 history-2'>
                      <p>Relentless initiatives to adapt, innovate and develop quality solutions have enabled Bajaj Group to develop a colossal empire spanning automobiles, insurance, consumer appliances, financial services, engineering, procurement and construction, material handling, travel and tourism, steel, and fast-moving electrical goods.</p>
                      <p className='py-3'>Founded in the name of Radio Lamp Works, the year 1938 marked our establishment. However, it was only in 1960 that we were named Bajaj Electricals Limited, signifying the commencement of a new journey. Our glorious journey witnessed several milestones, including setting up manufacturing units, energy generation units and acquisitions of important brands such as Morphy Richards and Nirlep, that enabled us to expand into uncharted markets and maximise value creation for our diverse shareholders.</p>
                 </div>
                 <div className='col-md-4 py-4 his-img-wrapp'>
                       <img src="about_img-21.png" alt="" className='img-fluid'/>
                 </div>
            </div> 
      </div>
       
    </div>
  );
};

export default AboutUs;