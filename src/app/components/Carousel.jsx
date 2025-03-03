'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import '../stylesheet/carousel.css';

import Img1 from "../assets/carousel/img (1).jpg";
import Img2 from "../assets/carousel/img (2).jpg";
import Img3 from "../assets/carousel/img (3).jpg";
import Img4 from "../assets/carousel/img (4).jpg";
import Img5 from "../assets/carousel/img (5).jpg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const images = [Img1, Img2, Img3, Img4, Img5];
const titles = ["Strong foundation base", "Efficient lighting system", "Elegant interior design", "Spacious living area", "Durable roofing structure",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstCycle, setFirstCycle] = useState(true);

  const linksRef = useRef([]);
  useGSAP(() => {
    // Animate each link one by one
    gsap.to(linksRef.current, {
      scale: 1,
      opacity: 1,
      delay: 0.75,
      stagger: 0.5, // Time delay between each animation
      duration: 1, // Duration of each animation
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          setFirstCycle(false);
        }
        return (prevIndex + 1) % images.length;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className='carousel-wrapper'>
        {/* Dynamic H1 Title */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9 }}
            className="carousel-title"
          >
            {titles[currentIndex]}
          </motion.h1>
        </AnimatePresence>
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1, opacity: index === 0 ? 1 : 0 }}
            animate={{
              scale: index === currentIndex ? [1, 1.02, 1.04, 1.06, 1.08, 1.1, 1.14] : [1.14],
              opacity: index === currentIndex ? firstCycle && index !== 1 ? 1 : [0.5, 1, 1] : firstCycle && index !== 0 ? 0 : [1, 0.5],
              zIndex: index === currentIndex ? 1 : 0,
            }}
            transition={{
              scale: { duration: 6, ease: "linear" },
              opacity: { duration: 3, ease: "linear" },
            }}
            className="carousel-slide"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="carousel-image"
            />
          </motion.div>
        ))}
      </div>
      <div className='carousel-extra-area'>
        {/* New Section with Line and Text in Bottom Left */}
        <div className="carousel-subtext">
          <hr className="carousel-line"/>
          <p ref={(el) => (linksRef.current[0] = el)} className="carousel-description">Architecture  &  Interior Design</p>
        </div>
        <div className="socialSidebar">
          <span ref={(el) => (linksRef.current[1] = el)} className="socialIcon"><FaFacebookF /></span>
          <span ref={(el) => (linksRef.current[2] = el)} className="socialIcon"><FaTwitter /></span>
          <span ref={(el) => (linksRef.current[3] = el)} className="socialIcon"><FaInstagram /></span>
          <span ref={(el) => (linksRef.current[4] = el)} className="socialIcon"><FaLinkedinIn /></span>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
