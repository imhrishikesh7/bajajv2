import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Float.css";

const Float = () => {
  const containerRef = useRef(null);
  const svgElementsRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const svgElements = svgElementsRef.current.children;

    const onMouseEnterHandler = () => {
      // Animate each SVG element independently
      Array.from(svgElements).forEach((svg, index) => {
        if (index < 2) {
          // Move s1 and s2 to the right
          gsap.to(svg, {
            duration: 0.5,
            x: "+=200", // Move SVG elements towards the center
            ease: "power2.out",
            delay: index * 0.1 // Add a delay for staggered animation
          });
        } else {
          // Move s3 and s4 to the left
          gsap.to(svg, {
            duration: 0.5,
            x: "-=300", // Move SVG elements towards the center
            ease: "power2.out",
            delay: index * 0.1 // Add a delay for staggered animation
          });
        }
      });
    };

    const onMouseLeaveHandler = () => {
      // Return each SVG element to its original position
      Array.from(svgElements).forEach((svg, index) => {
        gsap.to(svg, {
          duration: 0.5,
          x: 0, // Return SVG elements to their original position
          ease: "power2.out",
          delay: index * 0.1 // Add a delay for staggered animation
        });
      });
    };

    container.addEventListener("mouseenter", onMouseEnterHandler);
    container.addEventListener("mouseleave", onMouseLeaveHandler);

    return () => {
      container.removeEventListener("mouseenter", onMouseEnterHandler);
      container.removeEventListener("mouseleave", onMouseLeaveHandler);
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {/* CONTENT HERE */}
      <div className="svg-elements" ref={svgElementsRef}>
        <svg className="s1" width="50" height="50">
          <rect width="40" height="40" rx="10" ry="10" fill="skyblue" />
        </svg>
        <svg className="s2" width="50" height="50">
          <rect width="40" height="40" rx="10" ry="10" fill="blue" />
        </svg>
        <svg className="s3" width="60" height="60">
          <rect width="60" height="60" rx="10" ry="10" fill="skyblue" />
        </svg>
        <svg className="s4" width="70" height="70">
          <rect width="70" height="70" rx="20" ry="20" fill="blue" />
        </svg>
        <svg className="s5" width="40" height="40">
          <rect width="40" height="40" rx="10" ry="10" fill="blue" />
        </svg>
         <svg className="s6" width="50" height="50">
          <rect width="50" height="50" rx="10" ry="10" fill="blue" />
        </svg>
        {/*<svg className="s7" width="80" height="80">
          <rect width="80" height="80" rx="20" ry="20" fill="blue" />
        </svg> */}
      </div>
    </div>
  );
};

export default Float;
