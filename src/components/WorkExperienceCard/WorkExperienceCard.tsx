import React from "react";
import styles from "./WorkExperienceCard.module.scss";

interface WorkExperienceCardProps {
  image: string;
  jobTitle: string;
  yearsActive: string;
  description: string;
  keyTechnologies: string[];
  workHighlights: { [key: string]: string }; // Object with highlights (e.g., highlight1, highlight2)
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  image,
  jobTitle,
  yearsActive,
  description,
  keyTechnologies,
  workHighlights,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={jobTitle} className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.jobTitle}>{jobTitle}</h2>
        <p className={styles.yearsActive}>{yearsActive}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.keyTechnologies}>
          <strong>Key Technologies:</strong> {keyTechnologies.join(", ")}
        </p>
        <ul className={styles.workHighlights}>
          {Object.values(workHighlights).map((highlight, index) => (
            <li key={index} className={styles.highlight}>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperienceCard;