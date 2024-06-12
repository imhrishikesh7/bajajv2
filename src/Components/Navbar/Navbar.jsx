import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsTop(scrollTop === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="navbar-hero-container">
            <div className={`navbar-margin ${isTop ? 'visible' : ''}`} />
            <nav className={`navbar navbar-expand-lg p-0 ${!isTop ? 'sticky-top scrolled' : ''}`}>
                <div className="container-fluid navbar-inner">
                    <Link className="navbar-brand" to="/">
                        <img src="./inverted-logo.svg" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav inter-bold mb-2 mb-lg-0 ul1">
                            <li className="nav-item ">
                                <Link className="nav-link nav-link-ltr" aria-current="page" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link nav-link-ltr" to="/esg">Sustainability</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link nav-link-ltr" to="/brands-business">Brands</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link nav-link-ltr" to="/">Investors</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link nav-link-ltr" to="/">Media</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-ltr" to="/">Career</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav inter-bold mb-2 mb-lg-0 ul2">
                            <li className="nav-item btn2">
                                <Link className="nav-link2" to="/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
