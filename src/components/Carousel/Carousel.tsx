"use client";
import React, { useState } from "react";
import styles from "./Carousel.module.scss";

interface CarouselProps {
  children: React.ReactNode[]; // Array of cards or elements to display in the carousel
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {children.map((child, index) => (
          <div key={index} className={styles.carouselItem}>
            {child}
          </div>
        ))}
      </div>
      <button className={styles.prevButton} onClick={handlePrev}>
        &#8249;
      </button>
      <button className={styles.nextButton} onClick={handleNext}>
        &#8250;
      </button>
      <div className={styles.dots}>
        {children.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;