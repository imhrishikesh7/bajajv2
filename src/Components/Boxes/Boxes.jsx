import React, { useEffect, useState } from 'react';
import './Boxes.css';

const Boxes = () => {
    const [activeBox, setActiveBox] = useState(null);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        let timer;
        if (activeBox !== null) {
            timer = setTimeout(() => {
                setShowContent(true);

            }, 5000);
        }
        
        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or the activeBox changes
    }, [activeBox]);

    const handleBoxHover = (index) => {
        setActiveBox(index);
        setShowContent(false); // Reset the showContent state when hovering over a new box
    };

    const handleBoxLeave = () => {
        setActiveBox(null);
        setShowContent(false);
    };

    const boxes = [
        { id: 1, title: 'About us', content: 'Our businesses are spread across Consumer Appliances and Lighting Solutions'},
        { id: 2, title: 'Product support', content: 'Our businesses are spread across Consumer Appliances and Lighting Solutions'},
        { id: 3, title: 'Register your appliance', content: 'Our businesses are spread across Consumer Appliances and Lighting Solutions'},
        { id: 4, title: 'Contact us', content: 'Our businesses are spread across Consumer Appliances and Lighting Solutions'},
    ];

    return (
        <div className='boxes'>
            <div className="container-boxes">
                {boxes.map((box, index) => (
                    <div
                        key={box.id}
                        className={`box ${activeBox === index ? 'active' : ''}`}
                        onMouseEnter={() => handleBoxHover(index)}
                        onMouseLeave={handleBoxLeave}
                    >
                        {activeBox === index && <img src='./cta-arrow-blue.svg' alt={`Image for ${box.title}`} />}
                        <h6 className='inter-bold'>{box.title}</h6>
                        <p className={activeBox === index && showContent ? 'show' : 'hide'}>{box.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Boxes;
