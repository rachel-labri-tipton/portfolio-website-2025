"use client"
import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Work", href: "/work" },
    { name: "Writing", href: "/writing" },
    { name: "Skills", href: "/skills" },
    { name: "Resources", href: "/resources" },
    { name: "Speaking", href: "/speaking" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>My Portfolio</div>
      <button
        className={styles.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        {sections.map((section) => (
          <Link
            key={section.name}
            href={section.href}
            className={styles.navButton}
            onClick={() => setIsMenuOpen(false)} // Close the menu after clicking
          >
            {section.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;