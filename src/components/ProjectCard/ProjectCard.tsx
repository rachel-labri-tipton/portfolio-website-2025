import React from "react";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  title: string;
  technologies: string[];
  description: string;
  links: { label: string; url: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, technologies, description, links }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.technologies}>
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        {links && links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;