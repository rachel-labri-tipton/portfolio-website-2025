import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import styles from "./work.module.scss";

const Work: React.FC = () => {
  const cards = [
    <div className={styles.card} key="1">
      <h3>Project 1</h3>
      <p>Description of Project 1</p>
    </div>,
    <div className={styles.card} key="2">
      <h3>Project 2</h3>
      <p>Description of Project 2</p>
    </div>,
    <div className={styles.card} key="3">
      <h3>Project 3</h3>
      <p>Description of Project 3</p>
    </div>,
  ];

  return (
    <div className={styles.work}>
      <h1>My Work</h1>
      <Carousel>{cards}</Carousel>
    </div>
  );
};

export default Work;